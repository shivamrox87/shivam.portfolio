export const heroMetrics = [
  {
    label: "Focus",
    value: "AI products",
    detail: "Developer tooling, enterprise workflows, and automation systems.",
  },
  {
    label: "Mode",
    value: "Build end-to-end",
    detail: "From product thinking and architecture to shipping working systems.",
  },
  {
    label: "Edge",
    value: "Engineer + founder",
    detail: "Technical depth combined with product instincts and business context.",
  },
];

export const builderPrinciples = [
  "AI should reduce friction, not add novelty for its own sake.",
  "The fastest way to credibility is shipping useful systems in public.",
  "Developer experience is part of the product, not an afterthought.",
  "Simple workflows win when they survive real usage and real constraints.",
];

export const currentBuilds = [
  {
    name: "ExplainGitHub",
    slug: "explaingithub",
    stage: "Flagship build",
    summary:
      "Repository understanding with AI, designed to help developers move from unfamiliar codebases to useful context faster.",
    focus: ["Repository intelligence", "LLM workflows", "Developer UX"],
    statusNote: "The core developer-tooling product in the portfolio.",
    accent: "from-[#EB5939] via-[#c64a30] to-[#0d0d0d]",
  },
  {
    name: "ReqBeam",
    slug: "reqbeam",
    stage: "In progress",
    summary:
      "An API collaboration and workflow product aimed at making requirements, requests, and iteration loops easier to manage.",
    focus: ["Product workflows", "Collaboration", "Backend systems"],
    statusNote: "Represents the product-builder side of the narrative.",
    accent: "from-[#0d0d0d] via-[#1d3557] to-[#457b9d]",
  },
  {
    name: "RepoFlicks",
    slug: "repoflicks",
    stage: "Product concept",
    summary:
      "A more visual way to discover repositories and understand what makes them interesting before diving into the code.",
    focus: ["Open source discovery", "Product design", "Developer discovery"],
    statusNote: "Useful for showing range beyond enterprise consulting.",
    accent: "from-[#16213e] via-[#533483] to-[#EB5939]",
  },
  {
    name: "Boansel",
    slug: "boansel",
    stage: "Operating product",
    summary:
      "A booking and payments platform direction that broadens the portfolio beyond AI-native internal tooling.",
    focus: ["Transactions", "Operations", "Product execution"],
    statusNote: "Shows commercial product breadth, not just AI experiments.",
    accent: "from-[#1b4332] via-[#2d6a4f] to-[#40916c]",
  },
];

export const caseStudies = [
  {
    id: "cs-01",
    slug: "explaingithub",
    heading: "ExplainGitHub",
    category: "Developer AI",
    status: "Flagship build",
    date: "Current build",
    subHeading:
      "Repository understanding using AI so engineers can move from raw code to useful product and architecture context faster.",
    summary:
      "ExplainGitHub is the strongest articulation of your builder narrative: AI applied to a concrete developer pain point with clear product value.",
    problem:
      "Developers waste time understanding unfamiliar repositories, tracing system intent, and reconstructing architecture from scattered files and conventions.",
    solution:
      "Build a repository intelligence workflow that turns source code into navigable explanations, product context, and actionable summaries.",
    outcome:
      "A product story that demonstrates AI application design, developer experience thinking, and the ability to build tools around real engineering workflows.",
    role: "Founder, product builder, and AI engineer",
    stack: ["LLM orchestration", "Repository parsing", "Backend workflows", "Product UX"],
    architecture: [
      "Ingest repository structure and relevant files.",
      "Classify and prioritize code paths for explanation.",
      "Generate summaries, architecture context, and developer-facing guidance.",
      "Present outputs in a way that reduces onboarding time and search cost.",
    ],
    learnings: [
      "Useful AI products need sharp scoping, not maximal generation.",
      "Repository context quality matters more than flashy output.",
      "Developer trust comes from precision, traceability, and speed.",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1600&q=80",
    imageLink:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1600&q=80",
    imageLinkSec:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
    textsec:
      "ExplainGitHub is where AI meets a tangible developer problem. It is the kind of product that shows product sense, systems thinking, and engineering depth in one story.",
    link: "explaingithub",
  },
  {
    id: "cs-02",
    slug: "reqbeam",
    heading: "ReqBeam",
    category: "Workflow Product",
    status: "In progress",
    date: "Active concept",
    subHeading:
      "A modern collaboration layer for requirements and API workflows, designed to reduce confusion between product and engineering teams.",
    summary:
      "ReqBeam represents the product-operations side of your work: taking messy collaboration loops and turning them into structured workflows.",
    problem:
      "Requirements, API iterations, and product feedback loops often break down across tools, threads, and handoffs.",
    solution:
      "Design a workflow-first product that captures intent, structures collaboration, and keeps iteration connected to implementation.",
    outcome:
      "A case study that proves you are not only shipping AI experiences, but also thinking about how teams work and make decisions.",
    role: "Product builder and technical lead",
    stack: ["Next.js", "Backend APIs", "Workflow design", "Product systems"],
    architecture: [
      "Capture requirements in structured product flows.",
      "Organize API and implementation context around shared artifacts.",
      "Reduce handoff ambiguity through better visibility and state tracking.",
      "Support iteration without fragmenting product knowledge.",
    ],
    learnings: [
      "Workflow tools win when they remove ambiguity, not when they add features.",
      "Clear state and ownership are product advantages.",
      "Collaboration products need strong information design as much as strong engineering.",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    imageLink:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    imageLinkSec:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1600&q=80",
    textsec:
      "ReqBeam expands the story from pure AI into product workflow infrastructure. It helps position you as someone who builds systems around how teams actually operate.",
    link: "reqbeam",
  },
  {
    id: "cs-03",
    slug: "arya",
    heading: "Arya",
    category: "Applied AI System",
    status: "Shipped",
    date: "2023",
    subHeading:
      "An AI Acharya designed to deliver Vedic guidance through multilingual conversational experiences across modern channels.",
    summary:
      "Arya is a concrete shipped AI system and one of the strongest examples of turning a niche domain into a working product experience.",
    problem:
      "Traditional spiritual and cultural guidance is often hard to access in interactive, always-available, and multilingual digital formats.",
    solution:
      "Build an AI assistant that combines domain knowledge retrieval, speech interfaces, and messaging-platform accessibility.",
    outcome:
      "A strong example of applying LLMs, retrieval, deployment, and multimodal interaction to a real product use case.",
    role: "AI and backend engineer",
    stack: ["OpenAI", "LangChain", "Python", "Azure VM", "Speech interfaces"],
    architecture: [
      "Ingest domain material from structured and document sources.",
      "Retrieve relevant context for spiritual and knowledge queries.",
      "Support multilingual text and audio interaction.",
      "Distribute through Telegram, WhatsApp, and API interfaces.",
    ],
    learnings: [
      "Domain-specific trust depends heavily on retrieval quality.",
      "Multichannel distribution changes how AI products are adopted.",
      "Speech and messaging layers can turn a narrow domain tool into a practical user experience.",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1600&q=80",
    imageLink:
      "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1600&q=80",
    imageLinkSec:
      "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=1600&q=80",
    textsec:
      "Arya is a shipped AI application that combines a specialized knowledge domain with practical multimodal distribution.",
    link: "arya",
  },
];

export const profolio = caseStudies;

export const proofPoints = [
  {
    title: "Enterprise AI",
    detail:
      "Experience building and integrating AI systems inside financial-services environments at AlphaFMC.",
  },
  {
    title: "Founder mindset",
    detail:
      "Independent product work brings founder-level ownership to technical and product decisions.",
  },
  {
    title: "Mentorship and community",
    detail:
      "Teaching, live sessions, and public-facing learning content are part of the brand, not side notes.",
  },
];

export const writingFocus = [
  "How developer AI products should handle trust, context, and precision",
  "Lessons from enterprise AI delivery and infrastructure tradeoffs",
  "MCP, agent workflows, and the difference between demos and useful systems",
];

export const timelineHighlights = [
  {
    year: "2023",
    title: "Built applied AI systems",
    detail:
      "Worked on products like Arya and expanded into automation, retrieval, and multimodal workflows.",
  },
  {
    year: "2024",
    title: "Deepened product + enterprise work",
    detail:
      "Balanced startup-style execution with enterprise-grade expectations and delivery constraints.",
  },
  {
    year: "Now",
    title: "Positioning around builder leverage",
    detail:
      "Shaping the public narrative around AI products, developer tools, and scalable systems.",
  },
];

export const companiesData = [
  {
    id: "C-01",
    companyName: "AlphaFMC (Lionpoint Group)",
    activeYears: "2024 - Present",
    position: "AI Engineer",
    description:
      "Developing and optimizing AI models for financial services applications, with collaboration across teams to integrate tools like WebUI, Traefik, and LiteLLM for reliable delivery. Working across Azure OpenAI, Azure DevOps, storage, and SSO integrations with a focus on secure and scalable enterprise architecture.",
  },
  {
    id: "C-02",
    companyName: "Protrain",
    activeYears: "2023 - 2024",
    position: "AI Engineer",
    description:
      "Built automation-heavy learning and content workflows across WordPress, AWS, SQL, Make.com, Placid, Discord, and Python. Used AI tooling to reduce manual operations and accelerate content and marketing execution.",
  },
  {
    id: "C-03",
    companyName: "Kyukey Technologies Private Limited (Mokx)",
    activeYears: "2023",
    position: "AI & Backend Engineer",
    description:
      "Built Arya, an AI Acharya product using OpenAI, LangChain, Whisper, speech services, and retrieval pipelines across large knowledge corpora, then deployed it for multilingual usage via messaging platforms and APIs.",
  },
  {
    id: "C-04",
    companyName: "Programming With Maurya",
    activeYears: "2020 - 2023",
    position: "Founder",
    description:
      "Built a training and community-led startup focused on Python, data science, and applied AI learning, with mentorship, internships, and program delivery across India and Ghana.",
  },
];

export const tools = [
  {
    image:
      "https://framerusercontent.com/images/2Tn0ounIS73yGXZWXZ39oTFp7E.png?scale-down-to=512",
    alt: "python",
    name: "Python",
  },
  {
    image: "https://framerusercontent.com/images/qceh8mULsKhIOmBE6aljcRTPgBk.png",
    alt: "docker",
    name: "Docker",
  },
  {
    image:
      "https://framerusercontent.com/images/mu2xRVahpR4NM7oR3UPvdX0.png?scale-down-to=1024",
    alt: "github",
    name: "GitHub",
  },
  {
    image:
      "https://framerusercontent.com/images/ueQknVfyYs5tZ6tksqZXNmAGZw.png?scale-down-to=512",
    alt: "gcp",
    name: "GCP",
  },
  {
    image:
      "https://framerusercontent.com/images/plImIZNpyrBwoTDJNSGLD6tnAhA.png?scale-down-to=512",
    alt: "azure",
    name: "Azure",
  },
  {
    image:
      "https://images.seeklogo.com/logo-png/44/1/openai-logo-png_seeklogo-445909.png",
    alt: "openai",
    name: "OpenAI",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/04/Anthropic_logo.svg",
    alt: "anthropic",
    name: "Anthropic",
  },
  {
    image:
      "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/langgraph-color.png",
    alt: "langgraph",
    name: "LangGraph",
  },
];

export const skills = [
  {
    name: "AI Product Development",
    image:
      "https://res.cloudinary.com/ddtfebvov/image/upload/v1710427407/ai_ml_kfzr0f.png",
    alt: "AI systems, agents, and applied workflows",
  },
  {
    name: "Developer Tooling",
    image:
      "https://res.cloudinary.com/ddtfebvov/image/upload/v1710427407/frontend_xkqghb.png",
    alt: "Developer workflows, interfaces, and product design",
  },
  {
    name: "Backend & APIs",
    image:
      "https://res.cloudinary.com/ddtfebvov/image/upload/v1710427407/backend_qsi5m5.png",
    alt: "APIs, integrations, and production systems",
  },
  {
    name: "Cloud & Deployment",
    image:
      "https://res.cloudinary.com/ddtfebvov/image/upload/v1710427407/cloud_arch_grmxdd.png",
    alt: "DevOps, hosting, and secure deployment",
  },
  {
    name: "System Design",
    image:
      "https://res.cloudinary.com/ddtfebvov/image/upload/v1710427407/system_design_ql5gjp.png",
    alt: "Architecture, scale, and reliability",
  },
  {
    name: "Automation & Integrations",
    image:
      "https://res.cloudinary.com/ddtfebvov/image/upload/v1710427407/database_mgmt_wnlbd4.png",
    alt: "Workflows, data pipelines, and operational leverage",
  },
  {
    name: "Founder Execution",
    image:
      "https://res.cloudinary.com/ddtfebvov/image/upload/v1710427407/devops_kd5k0x.png",
    alt: "Shipping, iteration, and product ownership",
  },
  {
    name: "Mentorship & Education",
    image:
      "https://res.cloudinary.com/ddtfebvov/image/upload/v1710427407/api_dev_kq5gjw.png",
    alt: "Teaching, explaining, and community building",
  },
];

export const playGround = [
  {
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    category: "Research",
    name: "AI agents and MCP workflows",
  },
  {
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
    category: "Systems",
    name: "Developer tooling experiments",
  },
  {
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    category: "Product",
    name: "Workflow and collaboration interfaces",
  },
  {
    image:
      "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=1200&q=80",
    category: "Writing",
    name: "Architecture notes and AI learnings",
  },
];

export const blogs = [
  {
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
    postedOn: "Jul 13, 2026",
    blogHeading: "What Makes Developer AI Tools Useful Instead of Impressive",
    slug: "what-makes-developer-ai-tools-useful-instead-of-impressive",
    postedBy: "Shivam Maurya",
    postedAt: "Engineering",
    content:
      "The best developer AI tools do not start with generation. They start with context, trust, and workflow fit. If a system cannot show why it produced an answer or where the answer came from, developers will treat it like a toy. The real challenge is turning messy repository state into usable product and architecture understanding.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    postedOn: "Jul 10, 2026",
    blogHeading: "Enterprise AI Has Less To Do With Models Than With Constraints",
    slug: "enterprise-ai-has-less-to-do-with-models-than-with-constraints",
    postedBy: "Shivam Maurya",
    postedAt: "AI Infrastructure",
    content:
      "Most enterprise AI challenges are not model-selection problems. They are integration, governance, security, and reliability problems. The model matters, but the adoption curve is usually determined by how well the system fits operational reality.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=1600&q=80",
    postedOn: "Jul 7, 2026",
    blogHeading: "How I Think About Shipping AI Products From Idea to Working System",
    slug: "how-i-think-about-shipping-ai-products-from-idea-to-working-system",
    postedBy: "Shivam Maurya",
    postedAt: "Product",
    content:
      "Shipping AI products requires a narrower loop than most teams expect. Start with one painful user problem, define the decision quality needed, and design for traceability early. If the product depends on trust, your architecture has to make trust visible.",
  },
];

export const books = [
  {
    id: 1,
    bookHeading: "Introduction to Python Programming",
    bookSubHeading: "Master Python Programming from Basics to Advanced",
    postedOn: "Nov 18, 2023",
    description:
      "A beginner-friendly guide to Python fundamentals, practical problem solving, and the foundations needed to move into real-world development work.",
    images: [
      "https://payhip.com/cdn-cgi/image/format=auto,width=1500/https://pe56d.s3.amazonaws.com/o_1i8l067hgrmp1g3b1luejebvilr.png",
      "https://payhip.com/cdn-cgi/image/format=auto,width=1500/https://pe56d.s3.amazonaws.com/o_1i8ih0jed186s1ur0118v1sqn90t.png",
      "https://payhip.com/cdn-cgi/image/format=auto,width=1500/https://pe56d.s3.amazonaws.com/o_1i8ih0jeda71a661tjq15qsp2gs.png",
    ],
    slug: "https://buyat.shivammaurya.com/b/introduction-to-python-programming",
  },
  {
    id: 2,
    bookHeading: "Getting Started with Data Science",
    bookSubHeading: "Your Complete Guide to Data Science",
    postedOn: "Nov 18, 2023",
    description:
      "An accessible guide to data science tools, workflows, and beginner-friendly machine-learning concepts using Python.",
    images: [
      "https://payhip.com/cdn-cgi/image/format=auto,width=1500/https://pe56d.s3.amazonaws.com/o_1i8l1t4lj1q7jjn9gj07d24mr.png",
      "https://payhip.com/cdn-cgi/image/format=auto,width=1500/https://pe56d.s3.amazonaws.com/o_1i8l0m1itb061bh31ktn1ahs18drt.png",
      "https://payhip.com/cdn-cgi/image/format=auto,width=1500/https://pe56d.s3.amazonaws.com/o_1i8l0m1itsommdi163j14o21joqs.png",
    ],
    slug: "https://buyat.shivammaurya.com/b/getting-started-with-data-science",
  },
  {
    id: 3,
    bookHeading: "Introduction to NLP",
    bookSubHeading: "Natural Language Processing Fundamentals",
    postedOn: "Nov 18, 2023",
    description:
      "A practical introduction to NLP concepts, workflows, and the applied building blocks behind language-driven AI systems.",
    images: [
      "https://payhip.com/cdn-cgi/image/format=auto,width=1500/https://pe56d.s3.amazonaws.com/o_1i9qtafthgqj107s9o9i0i1hjsr.png",
      "https://payhip.com/cdn-cgi/image/format=auto,width=1500/https://pe56d.s3.amazonaws.com/o_1i9qtafthgqj107s9o9i0i1hjsr.png",
    ],
    slug: "https://buyat.shivammaurya.com/b/introduction-to-nlp",
  },
];
