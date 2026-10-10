"use client";

import { caseStudies, featuredWorkSlugs, otherProducts } from "@/server/data";
import Link from "next/link";
import { useState } from "react";

const projects = [
  ...featuredWorkSlugs.map((slug) => {
    const study = caseStudies.find((item) => item.slug === slug);
    return study && { name: study.heading, date: study.date, summary: study.summary, href: `/work/${study.slug}` };
  }).filter(Boolean),
  ...otherProducts.filter((product) => !featuredWorkSlugs.some((slug) => caseStudies.find((item) => item.slug === slug)?.heading === product.name)).map((product) => ({
    name: product.name,
    date: product.status,
    summary: product.summary,
    href: product.href,
  })),
];

export default function WorkSide() {
  const [order, setOrder] = useState("newest");
  const visible = order === "newest" ? projects : [...projects].reverse();
  return <main id="main-content" className="reference-page reference-shell">
    <h1>Projects</h1>
    <p className="reference-page-lead">AI systems, developer tools, and things I wanted to exist.</p>
    <div className="reference-list-heading"><span>{projects.length} projects</span><label>Sort <select aria-label="Sort projects" value={order} onChange={(event) => setOrder(event.target.value)}><option value="newest">Selected first</option><option value="oldest">Reverse order</option></select></label></div>
    <ol className="reference-list">{visible.map((project) => <li className="reference-list-item" key={project.name}>
      {project.href ? <Link href={project.href}>{project.name} <span aria-hidden="true">↗</span></Link> : <span>{project.name}</span>}
      <span className="reference-date">{project.date}</span>
      <p>{project.summary}</p>
    </li>)}</ol>
    <p className="reference-note">Employer and client details are limited to what I can discuss publicly.</p>
  </main>;
}
