"use client";

import { useEffect, useState } from "react";
import { Music, Code2 } from "lucide-react";
import { GithubIcon } from "./icons";

// Lanyard: free Discord presence API — https://github.com/Phineas/lanyard
// To activate: join the Lanyard Discord server (https://discord.gg/lanyard),
// then set your Discord user ID below.
const DISCORD_USER_ID: string = "758156396519751730";

const STATUS_COLORS: Record<string, string> = {
  online: "#3ba55d",
  idle: "#faa81a",
  dnd: "#ed4245",
  offline: "#8b96a8",
};

const STATUS_LABELS: Record<string, string> = {
  online: "Online",
  idle: "Idle",
  dnd: "Do Not Disturb",
  offline: "Offline",
};

function timeAgo(ts: number): string {
  const mins = Math.floor((Date.now() - ts) / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  return `${days}d ago`;
}

interface LanyardData {
  discord_status: string;
  active_on_discord_desktop: boolean;
  activities: {
    name: string;
    type: number;
    state?: string;
    details?: string;
  }[];
  spotify?: { song: string; artist: string } | null;
}

function StatusDot({ color }: { color: string }) {
  return (
    <span className="relative flex h-2 w-2">
      <span
        className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60"
        style={{ background: color }}
      />
      <span
        className="relative inline-flex h-2 w-2 rounded-full"
        style={{ background: color, boxShadow: `0 0 8px ${color}` }}
      />
    </span>
  );
}

export default function Presence() {
  const [data, setData] = useState<LanyardData | null>(null);
  const [lastSeen, setLastSeen] = useState<number | null>(null);
  const [failed, setFailed] = useState(false);
  const configured = DISCORD_USER_ID !== "YOUR_DISCORD_ID";

  // Load persisted last-seen from our API on mount
  useEffect(() => {
    fetch("/api/presence")
      .then((r) => r.json())
      .then((d) => {
        if (d.lastSeen) setLastSeen(d.lastSeen);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (!configured) return;

    let ws: WebSocket | null = null;
    let rest: ReturnType<typeof setInterval>;

    const handleData = (incoming: LanyardData) => {
      setData((prev) => {
        const wasOnline = prev && prev.discord_status !== "offline";
        const isOffline = incoming.discord_status === "offline";

        if (wasOnline && isOffline) {
          const ts = Date.now();
          setLastSeen(ts);
          fetch("/api/presence", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ts }),
          }).catch(() => {});
        } else if (!prev && isOffline) {
          // already offline on first load — keep stored lastSeen
        }
        return incoming;
      });
    };

    const fetchRest = async () => {
      try {
        const res = await fetch(
          `https://api.lanyard.rest/v1/users/${DISCORD_USER_ID}`
        );
        const json = await res.json();
        if (json.success) handleData(json.data);
      } catch {
        setFailed(true);
      }
    };

    fetchRest();
    rest = setInterval(fetchRest, 30000);

    try {
      ws = new WebSocket("wss://api.lanyard.rest/socket");
      ws.onmessage = (e) => {
        const msg = JSON.parse(e.data);
        if (msg.op === 1) {
          ws?.send(
            JSON.stringify({ op: 2, d: { subscribe_to_id: DISCORD_USER_ID } })
          );
        } else if (msg.t === "INIT_STATE" || msg.t === "PRESENCE_UPDATE") {
          handleData(msg.d);
        }
      };
    } catch {
      // WebSocket unavailable — REST polling still works
    }

    return () => {
      clearInterval(rest);
      ws?.close();
    };
  }, [configured]);

  const status = data?.discord_status ?? "offline";
  const color = STATUS_COLORS[status] ?? STATUS_COLORS.offline;

  const spotify = data?.spotify;
  const vsCode = data?.activities.find((a) =>
    a.name.toLowerCase().includes("visual studio code")
  );

  let label: string;
  if (!configured || failed) {
    label = "See what I'm up to";
  } else if (!data) {
    label = "Connecting…";
  } else if (status !== "offline") {
    label = STATUS_LABELS[status] ?? "Online";
  } else if (lastSeen) {
    label = `Last seen ${timeAgo(lastSeen)}`;
  } else {
    label = "Offline";
  }

  return (
    <div className="fixed left-4 top-20 z-40 sm:left-6 sm:top-24">
      <div className="flex flex-col gap-2 rounded-xl border border-[#1c2230] bg-[#0c0f16]/80 px-4 py-3 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.45)]">
        <div className="flex items-center gap-2.5">
          <StatusDot color={configured && !failed ? color : "#5ea4ff"} />
          <span className="font-mono text-xs text-[#e7ecf3]">{label}</span>
        </div>

        {vsCode && status !== "offline" && (
          <div className="flex items-center gap-2 font-mono text-[11px] text-[#8b96a8]">
            <Code2 size={12} className="text-[#5ea4ff]" />
            <span>Coding in VS Code</span>
          </div>
        )}

        {spotify && (
          <div className="flex items-center gap-2 font-mono text-[11px] text-[#8b96a8]">
            <Music size={12} className="text-[#5ea4ff]" />
            <span className="max-w-44 truncate">
              {spotify.song} — {spotify.artist}
            </span>
          </div>
        )}

        {(!configured || failed) && (
          <a
            href="https://github.com/Hazzem11"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-[11px] text-[#8b96a8] transition-colors hover:text-[#8fc2ff]"
          >
            <GithubIcon width={12} height={12} className="text-[#5ea4ff]" />
            <span>github.com/Hazzem11</span>
          </a>
        )}
      </div>
    </div>
  );
}
