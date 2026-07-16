"use client";

import Header from "@/components/Header";
import { useEffect } from "react";

export default function ContactPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://server.fillout.com/embed/v1/";
    script.async = true;
    document.body.appendChild(script);
    return () => script.remove();
  }, []);

  return (
    <main>
      <Header />
      <section className="site-shell page-section">
        <div className="grid gap-12 md:grid-cols-[0.42fr_1fr] md:gap-16">
          <div>
            <p className="eyebrow">Contact</p>
            <h1 className="display-title mt-4">Let&apos;s talk.</h1>
            <p className="mt-8 body-copy">
              For conversations about enterprise AI, developer tools, technical architecture,
              speaking, or collaboration, send a short note below.
            </p>
            <div className="mt-8 border-t border-[#d8d5cc] pt-5 text-sm leading-7 text-[#68675f]">
              <p>Based in Varanasi, India</p>
              <a href="https://www.linkedin.com/in/shivam--maurya" target="_blank" rel="noreferrer" className="text-link mt-3">LinkedIn</a>
            </div>
          </div>
          <div className="min-h-[760px] border-t border-[#171714] pt-6">
            <div
              style={{ width: "100%", height: "740px" }}
              data-fillout-id="e6kGwZrh12us"
              data-fillout-embed-type="standard"
              data-fillout-inherit-parameters
              data-fillout-dynamic-resize
            />
          </div>
        </div>
      </section>
    </main>
  );
}
