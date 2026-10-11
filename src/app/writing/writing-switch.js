"use client";

import { useState } from "react";

export default function WritingSwitch({ siteContent, mediumContent }) {
  const [source, setSource] = useState("site");

  return <div className="reference-writing-switch">
    <div className="reference-writing-options" role="group" aria-label="Writing source">
      <button type="button" aria-pressed={source === "site"} onClick={() => setSource("site")}>On this site</button>
      <button type="button" aria-pressed={source === "medium"} onClick={() => setSource("medium")}>Medium</button>
    </div>
    <div hidden={source !== "site"}>{siteContent}</div>
    <div hidden={source !== "medium"}>{mediumContent}</div>
  </div>;
}
