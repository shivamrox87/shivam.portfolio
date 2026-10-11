"use client";

import { useEffect } from "react";

export default function ContactPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://server.fillout.com/embed/v1/";
    script.async = true;
    document.body.appendChild(script);
    return () => script.remove();
  }, []);

  return <main id="main-content" className="reference-page reference-shell reference-contact">
    <h1>Contact</h1>
    <p>Tell me what you're working on. <a href="mailto:connect@shivammaurya.com">Email me</a>.</p>
    <details className="reference-contact-form"><summary>Or use the contact form ↓</summary><div data-fillout-id="e6kGwZrh12us" data-fillout-embed-type="standard" data-fillout-inherit-parameters data-fillout-dynamic-resize /></details>
  </main>;
}
