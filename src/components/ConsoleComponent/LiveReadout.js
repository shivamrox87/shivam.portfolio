"use client";

import { useEffect, useState } from "react";

function elapsed(ms) {
  const total = Math.max(0, Math.floor(ms / 1000));
  const days = Math.floor(total / 86400);
  const hours = Math.floor((total % 86400) / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;
  const pad = (value) => String(value).padStart(2, "0");
  return `${days}d ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

/**
 * Ticking uptime counter.
 *
 * Renders a server-safe value first and only starts ticking after mount, so the
 * server HTML and the first client render agree. Without that the page would
 * hydrate with a mismatch on every load.
 */
export default function LiveReadout({ since }) {
  const start = new Date(`${since}-01-01T00:00:00Z`).getTime();
  const [now, setNow] = useState(null);

  useEffect(() => {
    setNow(Date.now());
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="tabular-nums" suppressHydrationWarning>
      {elapsed((now ?? start) - start)}
    </span>
  );
}
