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

export const featuredWork = [
  {
    name: "Enterprise AI delivery",
    context: "AlphaFMC (Lionpoint Group) · Financial services",
    status: "Professional work · 2024–present",
    description:
      "Building and integrating secure AI infrastructure across model access, identity, storage, routing, and internal application workflows.",
    scope: ["Azure OpenAI", "LiteLLM", "SSO", "Cloud delivery"],
    href: "/work/enterprise-ai",
  },
  {
    name: "ExplainGitHub",
    context: "Independent developer tool",
    status: "In development",
    description:
      "An AI repository intelligence platform for understanding unfamiliar codebases, architecture, and implementation decisions.",
    scope: ["Repository ingestion", "Codebase Q&A", "Developer UX"],
    href: "/work/explaingithub",
  },
  {
    name: "ReqBeam",
    context: "Independent developer product",
    status: "Active exploration",
    description:
      "An AI-native workspace for understanding, testing, documenting, and debugging APIs.",
    scope: ["API testing", "Response analysis", "Agent workflows"],
    href: "/work/reqbeam",
  },
];

export const currentBuilds = [
  {
    name: "ExplainGitHub",
    slug: "explaingithub",
    stage: "In development",
    summary:
      "Repository understanding with AI, designed to help developers move from unfamiliar codebases to useful context faster.",
    focus: ["Repository intelligence", "LLM workflows", "Developer UX"],
    statusNote: "Active independent product development.",
    accent: "from-[#EB5939] via-[#c64a30] to-[#0d0d0d]",
  },
  {
    name: "ReqBeam",
    slug: "reqbeam",
    stage: "Exploration",
    summary:
      "An API collaboration and workflow product aimed at making requirements, requests, and iteration loops easier to manage.",
    focus: ["Product workflows", "Collaboration", "Backend systems"],
    statusNote: "Early product and workflow exploration.",
    accent: "from-[#0d0d0d] via-[#1d3557] to-[#457b9d]",
  },
  {
    name: "OpenWebUI AI Operating System",
    slug: "openwebui-operating-system",
    stage: "Ongoing internal tooling",
    summary:
      "Custom tools and knowledge workflows for organising conversations, analysing recent work, managing Markdown knowledge, and producing recurring task summaries.",
    focus: ["OpenWebUI", "Custom tools", "Knowledge workflows"],
    statusNote: "Active platform and workflow experimentation.",
    accent: "from-[#1f2937] via-[#374151] to-[#b84a2b]",
  },
  {
    name: "RepoFlicks",
    slug: "repoflicks",
    stage: "Shipped product",
    summary:
      "A social-feed-style product for discovering open-source repositories, built and deployed with production and development environments.",
    focus: ["Open-source discovery", "Next.js", "Cloud Run"],
    statusNote: "Launched and used for early product-growth experiments.",
    accent: "from-[#16213e] via-[#533483] to-[#EB5939]",
  },
  {
    name: "Boansel",
    slug: "boansel",
    stage: "Operating product",
    summary:
      "A booking and payments platform direction that broadens the portfolio beyond AI-native internal tooling.",
    focus: ["Transactions", "Operations", "Product execution"],
    statusNote: "Booking and payments product work.",
    accent: "from-[#1b4332] via-[#2d6a4f] to-[#40916c]",
  },
];

export const caseStudies = [
  {
    id: "cs-00",
    slug: "enterprise-ai",
    heading: "Enterprise AI Delivery",
    category: "Enterprise AI",
    status: "Professional work",
    date: "2024 - Present",
    subHeading:
      "Secure AI infrastructure and internal application delivery for financial-services environments at AlphaFMC.",
    summary:
      "A public, non-confidential view of the platform patterns and engineering responsibilities involved in making AI usable inside enterprise teams.",
    problem:
      "Enterprise teams need dependable access to AI models without creating fragmented authentication, provider integrations, routing logic, and deployment practices across every internal application.",
    solution:
      "Build shared infrastructure around model access, identity, traffic routing, storage integrations, internal interfaces, and repeatable cloud delivery using established enterprise controls.",
    outcome:
      "Created and improved reusable foundations for internal AI applications, with model access and operational concerns handled as platform responsibilities rather than duplicated application code.",
    role: "Senior AI Engineer",
    stack: ["Azure OpenAI", "Claude", "Gemini", "AWS Bedrock", "LiteLLM", "OpenWebUI"],
    responsibilities: [
      "Multi-provider model integration and model-gateway architecture.",
      "Identity, authentication, access control, and enterprise data-protection considerations.",
      "Backend AI services, cloud delivery, and provider-specific production debugging.",
      "OpenWebUI customisation, integrations, and open-source platform evaluation.",
      "Technical reviews and architecture decisions with product, DevOps, IT, and engineering stakeholders.",
    ],
    architecture: [
      "Internal users and applications initiate requests through approved interfaces.",
      "Identity and access controls establish who can use the system.",
      "Shared application services apply product and workflow context.",
      "A LiteLLM-based gateway centralises routing, model abstraction, and provider access.",
      "Azure OpenAI, Claude, Gemini, and Bedrock-backed services execute model workloads.",
    ],
    constraints: [
      "Financial-services security and governance expectations shape every integration.",
      "The platform must support multiple internal workflows without coupling them to one interface.",
      "Provider abstraction must not hide operational failures or make debugging harder.",
      "Tool-calling behaviour and request formats differ across model providers.",
      "Public discussion must protect employer, client, and implementation confidentiality.",
    ],
    decisions: [
      "Treat model access as shared infrastructure rather than application-specific integration.",
      "Keep identity and permissions at the system boundary instead of relying on prompt-level controls.",
      "Separate user interfaces, application workflows, routing, and model providers into distinct responsibilities.",
      "Prefer native tool-calling patterns while handling provider-specific compatibility explicitly.",
      "Use repeatable deployment practices so environments can be operated consistently.",
    ],
    learnings: [
      "Enterprise AI adoption is usually an infrastructure and integration problem before it is a model problem.",
      "Identity, failure handling, and operational ownership determine whether internal AI earns trust.",
      "A useful abstraction reduces duplicated work while preserving enough visibility to diagnose the system.",
    ],
  },
  {
    id: "cs-01",
    slug: "explaingithub",
    heading: "ExplainGitHub",
    category: "Developer AI",
    status: "In development",
    date: "Current",
    subHeading:
      "Repository understanding using AI so engineers can move from raw code to useful product and architecture context faster.",
    summary:
      "An independent developer tool exploring how repository context can make unfamiliar codebases easier to navigate and understand.",
    problem:
      "Developers waste time understanding unfamiliar repositories, tracing system intent, and reconstructing architecture from scattered files and conventions.",
    solution:
      "Build a repository intelligence workflow that turns source code into navigable explanations, product context, and actionable summaries.",
    outcome:
      "The current work is focused on context quality, traceability, and the developer experience around generated repository explanations.",
    role: "Founder, product builder, and AI engineer",
    stack: ["GitHub OAuth", "Repository ingestion", "LLM orchestration", "Backend workflows", "Product UX"],
    responsibilities: [
      "Product ideation, feature scoping, roadmap design, and developer-experience decisions.",
      "GitHub authentication, repository ingestion, and multi-file codebase question answering.",
      "Repository context management, code explanation, and architecture understanding.",
      "Large-repository handling and source-aware answer design.",
    ],
    roadmap: [
      "Saved conversations and bring-your-own-key model support.",
      "Architecture diagrams generated from repository context.",
      "GitLab, Bitbucket, and Azure DevOps repository support.",
      "Browser-extension workflows for repository understanding in context.",
    ],
    architecture: [
      "Ingest repository structure and relevant files.",
      "Classify and prioritize code paths for explanation.",
      "Generate summaries, architecture context, and developer-facing guidance.",
      "Present outputs in a way that reduces onboarding time and search cost.",
    ],
    constraints: [
      "Repositories contain more context than can be sent to a model at once.",
      "Generated explanations need traceability back to files and code paths.",
      "Different repository structures require flexible ingestion rather than fixed assumptions.",
      "The product must reduce search effort without replacing normal engineering judgement.",
    ],
    decisions: [
      "Prioritise repository structure and important code paths before generating explanations.",
      "Build context in stages instead of relying on one large prompt.",
      "Keep outputs scoped to concrete developer questions and navigational tasks.",
      "Design for source visibility so developers can verify generated context.",
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
      "ExplainGitHub applies repository parsing and language models to a concrete developer workflow: understanding an unfamiliar codebase.",
    link: "explaingithub",
  },
  {
    id: "cs-02",
    slug: "reqbeam",
    heading: "ReqBeam",
    category: "Workflow Product",
    status: "Active exploration",
    date: "Evolving product",
    subHeading:
      "An AI-native workspace for understanding, testing, documenting, and debugging APIs.",
    summary:
      "An evolving developer product combining API understanding, request creation, test generation, response analysis, and collaboration workflows.",
    problem:
      "Requirements, API iterations, and product feedback loops often break down across tools, threads, and handoffs.",
    solution:
      "Design an AI-assisted API workspace that can understand an endpoint, help create requests, generate tests, analyse responses, and preserve debugging context.",
    outcome:
      "The exploration is testing whether clearer state, ownership, and shared context can reduce ambiguity across product and engineering handoffs.",
    role: "Product builder and technical lead",
    stack: ["Next.js", "Backend APIs", "AI test generation", "Response analysis", "Product systems"],
    responsibilities: [
      "Product ideation, competitive research, product scope, and PRD design.",
      "API understanding, request creation, test generation, and response-analysis workflows.",
      "AI-assisted API documentation and developer collaboration concepts.",
      "Technical feasibility and integration with existing developer workflows.",
    ],
    roadmap: [
      "Agent-based API testing and debugging workflows.",
      "Shared collaboration context for product and engineering teams.",
      "Deeper AI-assisted documentation and test maintenance.",
    ],
    architecture: [
      "Capture an API definition, request, or endpoint as structured context.",
      "Generate and refine requests, tests, and documentation with AI assistance.",
      "Execute requests and analyse responses, errors, and behavioural differences.",
      "Preserve findings and collaboration context around shared API artifacts.",
    ],
    constraints: [
      "Requirements and implementation context are distributed across tools and conversations.",
      "The product must support iteration without becoming another documentation burden.",
      "Ownership and state need to remain visible across product and engineering roles.",
    ],
    decisions: [
      "Make shared artifacts the centre of collaboration rather than chat threads.",
      "Represent state and ownership explicitly in the workflow.",
      "Keep the early product narrow until the core handoff problem is validated.",
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
      "ReqBeam examines a common product-engineering problem: requirements and implementation context becoming fragmented across tools.",
    link: "reqbeam",
  },
  {
    id: "cs-03",
    slug: "repoflicks",
    heading: "RepoFlicks",
    category: "Developer Product",
    status: "Shipped product",
    date: "Launched",
    subHeading:
      "A social-feed-style product for discovering open-source repositories and exploring what makes them useful.",
    summary:
      "A founder-led product taken through authentication, application development, cloud deployment, environment separation, launch, and early growth experiments.",
    problem:
      "Open-source discovery is often driven by search results and static lists, making it difficult to browse interesting repositories in a lightweight, visual way.",
    solution:
      "Build a feed-based repository discovery experience with GitHub authentication, structured repository data, media handling, onboarding, and production deployment.",
    outcome:
      "Launched a working product with separate development and production environments, then used it to learn about onboarding, acquisition, analytics, deployment operations, and infrastructure costs.",
    role: "Founder and product engineer",
    stack: ["Next.js", "GitHub OAuth", "Supabase", "Cloudinary", "Docker", "Google Cloud Run"],
    responsibilities: [
      "Product positioning, user-flow design, authentication, onboarding, and launch planning.",
      "Next.js application development with Supabase-backed product data.",
      "Cloudinary media handling and GitHub OAuth integration.",
      "Docker and Cloud Run deployment with GitHub Actions CI/CD.",
      "Production and development environments, analytics, user acquisition, and infrastructure-cost management.",
    ],
    architecture: [
      "Users authenticate through GitHub OAuth and enter the onboarding flow.",
      "Repository and user data is normalised into Supabase-backed application records.",
      "The Next.js product renders a visual discovery feed and repository detail workflows.",
      "Cloudinary supports media delivery for product and repository presentation.",
      "Docker, GitHub Actions, and Cloud Run support separate development and production delivery.",
    ],
    constraints: [
      "GitHub authentication and external repository data must remain reliable across environments.",
      "A feed product needs useful discovery and onboarding before network effects exist.",
      "Development and production services create operational and cost-management overhead.",
      "Early analytics must guide product decisions without overstating traction.",
    ],
    decisions: [
      "Use a familiar social-feed interaction model to lower the cost of repository discovery.",
      "Separate development and production deployments to protect live user workflows.",
      "Use managed application and media services to keep founder-led operations tractable.",
      "Treat acquisition, analytics, and infrastructure cost as product responsibilities.",
    ],
    learnings: [
      "Shipping the product exposed operational questions that do not appear during local development.",
      "Authentication and onboarding are central product flows, not supporting implementation details.",
      "Infrastructure cost and user acquisition need attention before a product reaches meaningful scale.",
    ],
  },
  {
    id: "cs-04",
    slug: "openwebui-operating-system",
    heading: "OpenWebUI AI Operating System",
    category: "AI Platform Tooling",
    status: "Internal tooling",
    date: "Ongoing",
    subHeading:
      "Custom tools and workflows that turn OpenWebUI into a personal and team operating layer for conversations, knowledge, and recurring work.",
    summary:
      "A collection of Docker-based deployments, API investigations, custom tools, and knowledge workflows built around an open-source AI platform.",
    problem:
      "AI conversations accumulate useful context, but normal chat interfaces make it difficult to organise, review, summarise, and turn that context into recurring operational workflows.",
    solution:
      "Extend OpenWebUI with custom tools for chat organisation, time-bounded analysis, folder summaries, Markdown knowledge management, monthly notes, and daily task workflows.",
    outcome:
      "Built an experimental operating layer for organising conversations and producing reusable knowledge, while evaluating the limits of platform APIs, plugins, local environments, and hosted deployment.",
    role: "AI platform engineer and workflow designer",
    stack: ["OpenWebUI", "Python", "Docker", "OpenWebUI APIs", "Markdown", "Automation workflows"],
    responsibilities: [
      "OpenWebUI deployment, administration, API exploration, and open-source platform evaluation.",
      "Tools for moving chats into folders and analysing the previous seven days of conversations.",
      "Folder-level summarisation and Markdown knowledge-file creation, editing, and deletion.",
      "Monthly-note updates, daily task summaries, and progress or completion checks.",
      "Experiments across local and hosted AI environments.",
    ],
    roadmap: [
      "SharePoint-backed knowledge and document workflows.",
      "Telegram-triggered automations and external event handling.",
      "Calendar-aware planning and folder-level persistent context.",
      "A more explicit personal and team operations control layer.",
    ],
    architecture: [
      "A user or scheduled workflow initiates an action through OpenWebUI.",
      "A custom tool reads approved chat, folder, or task context through platform APIs.",
      "The workflow analyses conversations and produces structured summaries or actions.",
      "Markdown files and folder organisation persist reusable knowledge.",
      "Daily and monthly outputs feed back into planning and progress-review workflows.",
    ],
    constraints: [
      "Chat and knowledge data requires clear boundaries, permissions, and privacy handling.",
      "Open-source platform APIs and plugin behaviour can change across versions.",
      "Scheduled automation must remain understandable and correct when context is incomplete.",
      "Local and hosted environments have different deployment, access, and maintenance trade-offs.",
    ],
    decisions: [
      "Build small single-purpose tools instead of one opaque autonomous agent.",
      "Use folders as an explicit context and organisation boundary.",
      "Store reusable knowledge in readable Markdown rather than hidden application state.",
      "Keep external triggers and enterprise integrations as planned extensions until core workflows are dependable.",
    ],
    learnings: [
      "A useful AI operating system depends more on context organisation than on autonomous behaviour.",
      "Readable knowledge artifacts make automated workflows easier to trust and maintain.",
      "Open-source platforms accelerate experimentation but require careful API and deployment evaluation.",
    ],
  },
  {
    id: "cs-05",
    slug: "arya",
    heading: "Arya",
    category: "Applied AI System",
    status: "Shipped",
    date: "2023",
    subHeading:
      "An AI Acharya designed to deliver Vedic guidance through multilingual conversational experiences across modern channels.",
    summary:
      "A shipped multilingual AI product built around retrieval, speech, and messaging-platform access for a specialised knowledge domain.",
    problem:
      "Traditional spiritual and cultural guidance is often hard to access in interactive, always-available, and multilingual digital formats.",
    solution:
      "Build an AI assistant that combines domain knowledge retrieval, speech interfaces, and messaging-platform accessibility.",
    outcome:
      "Delivered as a working product across text, audio, messaging channels, and APIs, with retrieval quality central to the user experience.",
    role: "AI and backend engineer",
    stack: ["OpenAI", "LangChain", "Python", "Azure VM", "Speech interfaces"],
    architecture: [
      "Ingest domain material from structured and document sources.",
      "Retrieve relevant context for spiritual and knowledge queries.",
      "Support multilingual text and audio interaction.",
      "Distribute through Telegram, WhatsApp, and API interfaces.",
    ],
    constraints: [
      "Answers depend on a specialised knowledge domain where retrieval quality affects trust.",
      "Users need both multilingual and multimodal access.",
      "The same assistant experience must work across messaging platforms and APIs.",
      "Speech and messaging channels introduce different latency and interaction expectations.",
    ],
    decisions: [
      "Ground responses in retrieved domain material rather than model memory alone.",
      "Keep the core knowledge workflow independent from channel-specific integrations.",
      "Support text and speech at the interface layer while sharing backend services.",
      "Use familiar messaging channels to reduce adoption friction.",
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

export const featuredWorkSlugs = [
  "enterprise-ai",
  "explaingithub",
  "reqbeam",
  "repoflicks",
  "openwebui-operating-system",
];

export const otherProducts = [
  {
    name: "Boansel",
    status: "Launched product",
    summary:
      "A one-link booking and payments platform for experts and creators, covering appointment scheduling, payment collection, monthly payouts, and Indian payment-gateway evaluation.",
    focus: ["Creator monetisation", "Scheduling", "Payments", "Founder-led product development"],
  },
  {
    name: "SageRai",
    status: "Product exploration",
    summary:
      "A privacy-sensitive personal-finance assistant for extracting UPI and SMS transaction data, categorising expenses, and turning financial activity into understandable insights.",
    focus: ["Indian fintech", "Transaction analysis", "Expense categorisation", "Privacy"],
  },
  {
    name: "Instant EduDoc",
    status: "Applied AI project",
    summary:
      "An AI-powered educational document generator for structured CBSE notes, combining Gemini, automated content formatting, PDF generation, and student-facing workflows.",
    focus: ["Gemini", "Document generation", "WeasyPrint", "Education"],
  },
  {
    name: "Arya",
    status: "Shipped · 2023",
    summary:
      "A multilingual conversational AI product combining retrieval, speech interfaces, messaging platforms, APIs, and production deployment for a specialised knowledge domain.",
    focus: ["Retrieval", "Multilingual AI", "Speech", "Backend architecture"],
    href: "/work/arya",
  },
];

export const capabilityAreas = [
  {
    title: "Enterprise AI infrastructure",
    detail: "Multi-provider gateways, model routing, identity, permissions, security, observability, cost, latency, and production deployment.",
  },
  {
    title: "AI agents and tool calling",
    detail: "Native tool use, provider compatibility, MCP research, orchestration, permission-aware workflows, and automation boundaries.",
  },
  {
    title: "Cloud and backend systems",
    detail: "Python, FastAPI, Next.js, APIs, OAuth, Docker, Azure, AWS, Google Cloud, CI/CD, environments, and operational debugging.",
  },
  {
    title: "Developer products",
    detail: "Repository intelligence, API testing, authentication, ingestion, product workflows, onboarding, analytics, and developer experience.",
  },
  {
    title: "Secure AI delivery",
    detail: "Data privacy, authentication, authorisation, prompt and data exposure risks, production security, and enterprise deployment constraints.",
  },
];

export const researchAreas = [
  {
    title: "Model gateways and provider behaviour",
    summary: "How abstraction layers preserve portability without obscuring provider-specific capabilities and failures.",
    topics: ["LiteLLM and AWS Bedrock", "Claude native tool calling", "OpenAI-compatible APIs", "Cost and latency trade-offs"],
  },
  {
    title: "Permission-aware AI systems",
    summary: "How agents, tools, and retrieval systems should handle identity, data boundaries, and enterprise security.",
    topics: ["Agent permissions", "Enterprise AI security", "Secure RAG", "Data-governance practices"],
  },
  {
    title: "Open-source AI platforms",
    summary: "Evaluating self-hosted interfaces and extensibility models for internal AI products and knowledge workflows.",
    topics: ["OpenWebUI APIs", "Plugin architecture", "Local-model environments", "Hosted versus self-managed systems"],
  },
  {
    title: "AI deployment and operations",
    summary: "Exploring ways to move AI applications from local development into secure, shareable, supportable environments.",
    topics: ["One-click AI deployment", "Customer cloud connections", "Agent operations control planes", "Secure AI workspaces"],
  },
  {
    title: "Developer workflow intelligence",
    summary: "Research around repository understanding, API testing, evaluation, and AI-native software-development workflows.",
    topics: ["Repository context", "API-testing agents", "Evaluation methodology", "AI-native software lifecycle"],
  },
];

export const communityHighlights = [
  {
    title: "Programming With Maurya",
    detail: "Founded and operated a programming-education initiative covering Python, data science, applied AI, internships, and learner support.",
  },
  {
    title: "Teaching and mentoring",
    detail: "Delivered workshops, live courses, technical mentoring, career guidance, educational content, books, and beginner-focused explanations.",
  },
  {
    title: "Technical leadership",
    detail: "Owned work across AI, backend, DevOps, product, documentation, technical reviews, stakeholder communication, and solution research.",
  },
];

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
    position: "Senior AI Engineer",
    description:
      "Building secure enterprise AI platforms and internal products for financial-services organisations. Work spans multi-provider model integration, LiteLLM gateways, OpenWebUI, native tool calling, identity and access, backend services, cloud delivery, provider-specific debugging, technical reviews, and architecture decisions with product, DevOps, IT, security, and engineering stakeholders.",
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
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    postedOn: "Aug 12, 2026",
    blogHeading: "An Agent Trace Should Explain a Decision, Not Record a Transcript",
    slug: "an-agent-trace-should-explain-a-decision-not-record-a-transcript",
    postedBy: "Shivam Maurya",
    postedAt: "AI Infrastructure",
    content:
      "An agent trace is not useful merely because it is long. In a real incident, the important question is usually not what text the model produced. It is what it was allowed to do, what evidence it used, what policy applied, and why the system chose that action over another.",
    sections: [
      {
        heading: "A span tree is not an explanation",
        paragraphs: [
          "A conventional trace can show that an agent called a model, then a search service, then a ticketing API. That is a good start, but it leaves the person investigating to reconstruct the decision from timing and raw payloads. Was the search scoped to the caller's project? Did the ticket creation need approval? Did a retry happen because a provider was slow or because the request was malformed? A long transcript may contain the answer without making it legible.",
          "I would treat the agent's decision as a first-class event. It should say which job it was trying to complete, the action it proposed, the stable target it selected, the policy outcome, and the reason code for a denial, escalation, retry, or fallback. That record does not need to claim access to a model's private reasoning. It needs to describe the system decision in terms an operator can verify.",
        ],
      },
      {
        heading: "Log the boundary where consequence changes",
        paragraphs: [
          "The highest-value record is usually created just before the agent crosses a boundary: reading a protected source, sending a message, changing a record, starting a deployment, or using a different identity. At that point, capture the request ID, user or service identity, capability, resource identifier, approval state, policy version, and eventual result. Those fields make the decision inspectable without turning every intermediate thought into an audit object.",
          "This fits the way production agent controls are maturing. OpenAI describes agent-aware telemetry that includes approval decisions, tool execution results, MCP usage, and network-policy allow or deny events alongside traditional logs. The useful lesson is broader than any one platform: a trace should preserve the connection between intent, control, and effect.",
        ],
        sources: [
          {
            label: "OpenAI: Running Codex safely at OpenAI",
            href: "https://openai.com/index/running-codex-safely/",
          },
        ],
      },
      {
        heading: "Content capture needs its own threat model",
        paragraphs: [
          "Prompts, retrieved documents, tool arguments, and tool results can be invaluable when debugging. They can also contain customer data, credentials, or the very instructions an attacker tried to smuggle into a workflow. Treating full-content tracing as the default makes an observability system into a second, often broader, data store.",
          "OpenTelemetry's current GenAI guidance makes the trade-off concrete: its default telemetry captures metadata such as model names, token counts, and durations, while full prompt and tool content is an explicit opt-in because it can contain sensitive data. I would use the same posture in an application: structured metadata by default, tightly scoped content capture for a defined investigation, and retention and access rules that match the sensitivity of the work.",
        ],
        sources: [
          {
            label: "OpenTelemetry: Inside the LLM Call—GenAI Observability with OpenTelemetry",
            href: "https://opentelemetry.io/blog/2026/genai-observability/",
          },
        ],
      },
      {
        heading: "Keep the evidence close to the decision",
        paragraphs: [
          "A decision record should reference the evidence it relied on rather than copy an uncontrolled blob into every span. For retrieval, that might be document IDs, index version, ACL outcome, and source timestamps. For a tool call, it might be a validated argument summary, target ID, and idempotency key. The complete underlying evidence can live behind its own access boundary when it is needed for a review.",
          "This makes a trace smaller and more useful. An operator can answer the first questions quickly—what happened, under which policy, and against which resource—then follow the references only when the incident requires it. It also gives product teams a clearer way to reason about data minimisation: record enough to explain the action, not every piece of context the model happened to see.",
        ],
      },
      {
        heading: "Test the trace like a production feature",
        paragraphs: [
          "I would add observability assertions to the same scenarios used for agent evaluation: an allowed read, a denied write, an approval request, a tool timeout, a duplicate submission, and a policy change during a long task. Each run should leave the expected decision record and should not leak protected content into a low-trust log sink. If an engineer cannot follow the action afterward, the telemetry is incomplete even if the agent reached the right answer.",
          "Good agent observability is not a dashboard full of token charts. It is a reliable explanation path from a user request to a consequential action, with the right amount of evidence available to the right person. That is what lets a team improve an agent without making its operation opaque—or its logs another source of risk.",
        ],
      },
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    postedOn: "Aug 10, 2026",
    blogHeading: "A Model Gateway Needs an Admission Policy, Not Just Fallbacks",
    slug: "a-model-gateway-needs-an-admission-policy-not-just-fallbacks",
    postedBy: "Shivam Maurya",
    postedAt: "AI Infrastructure",
    content:
      "A model gateway becomes useful when traffic is under pressure, not when every request succeeds. Routing is only part of the job. The gateway also needs to decide what may start now, what can wait, what can use a cheaper path, and what should fail clearly instead of failing late.",
    sections: [
      {
        heading: "Fallback is not a capacity plan",
        paragraphs: [
          "It is easy to describe a gateway as a layer that sends a request to one model and tries another if the first one fails. That is helpful for a narrow outage, but it is not enough when a shared quota is saturated. If every caller retries, then falls back, then retries again, the gateway has multiplied demand at exactly the moment the system has the least room for it.",
          "I prefer to make an admission decision before a model call begins. The gateway should know the workload class, its latency expectation, its maximum token budget, and whether delaying or degrading the request is acceptable. An interactive answer, an overnight evaluation run, and a bulk document job should not compete as if they are the same request merely because they use the same provider.",
        ],
      },
      {
        heading: "Reserve for the request you are about to make",
        paragraphs: [
          "Token usage is not only a bill that arrives after the response. It is often a capacity decision made at the start of a request. Azure OpenAI documents that its TPM calculation includes estimated prompt tokens and the configured maximum output; Amazon Bedrock similarly reserves input tokens plus max_tokens before later adjusting for the completed response. A generous output ceiling can therefore reduce concurrency even when most answers finish early.",
          "That makes max_tokens a product control, not a harmless default. The gateway can assign a realistic budget for each route: short for classification or extraction, larger for a deliberate analysis, and bounded again for a repair attempt. It should also record the requested budget alongside actual use. Without both numbers, a team cannot tell whether throughput pressure comes from valuable work, oversized reservations, or an unexpected change in prompt size.",
        ],
        sources: [
          {
            label: "Microsoft Learn: Manage Azure OpenAI quota and rate limits",
            href: "https://learn.microsoft.com/en-us/azure/foundry/openai/how-to/quota",
          },
          {
            label: "Amazon Bedrock: How tokens are counted",
            href: "https://docs.aws.amazon.com/bedrock/latest/userguide/quotas-token-burndown.html",
          },
        ],
      },
      {
        heading: "Queue by user promise, not by arrival time",
        paragraphs: [
          "First-in, first-out feels neutral, but it often lets a large background job make an interactive workflow look broken. A practical gateway needs a few explicit lanes: perhaps user-facing work with a short queue deadline, background work with a per-tenant rate, and batch work that is allowed to wait. The names matter less than documenting the promise attached to each lane.",
          "For each one, decide the behavior before an incident: reject with a retry time, queue and expose progress, switch to a smaller compatible route, or ask the user to narrow the task. A fallback is valid only when it still meets the route's quality, data-location, tool-use, and cost requirements. Sending an important workflow to any available model may turn a capacity problem into a correctness problem.",
        ],
      },
      {
        heading: "Make retries spend a bounded budget",
        paragraphs: [
          "A 429 or 503 is information about the system around the request, not proof that the request deserves unlimited attempts. Backoff with jitter is a sensible mechanism, but it needs an owner at the gateway. Otherwise an SDK retry, an application retry, and a fallback retry can stack invisibly and create duplicate calls or a retry storm.",
          "I would give each request a small attempt and time budget, preserve its idempotency context where side effects are involved, and stop retrying when the remaining user deadline makes success implausible. Amazon Bedrock's throughput guidance makes the operational distinction clear: occasional transient errors can be retried with backoff, while sustained errors call for lower submission rates, client-side rate limiting, queues, and shedding lower-priority work. The gateway is the natural place to apply that policy consistently.",
        ],
        sources: [
          {
            label: "Amazon Bedrock: Scaling and throughput best practices",
            href: "https://docs.aws.amazon.com/bedrock/latest/userguide/scaling-throughput-best-practices.html",
          },
        ],
      },
      {
        heading: "Operate the decision, not only the request",
        paragraphs: [
          "A useful trace should show more than provider latency and an error code. Capture the chosen route, workload lane, estimated and actual tokens, queue time, retry count, fallback reason, and the policy version that made the decision. With that record, an operator can distinguish a provider issue from a noisy tenant, an oversized prompt, or a queue policy that no longer matches the product.",
          "I would also test admission behavior directly: a burst of small requests, one oversized request, a depleted primary route, a fallback that is not semantically compatible, and a user-facing request arriving behind batch work. The best outcome is not that every request eventually reaches a model. It is that the system stays legible under pressure and spends scarce capacity on work it has explicitly chosen to protect.",
        ],
      },
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    postedOn: "Aug 2, 2026",
    blogHeading: "Retrieval Is a Production Interface, Not a Prompt Feature",
    slug: "retrieval-is-a-production-interface-not-a-prompt-feature",
    postedBy: "Shivam Maurya",
    postedAt: "AI Infrastructure",
    content:
      "Adding company context to an agent is not a matter of pointing a model at more documents. Retrieval is an interface with callers, permissions, freshness rules, and failure modes—and it needs to be designed with the same care as any other production dependency.",
    sections: [
      {
        heading: "Context begins with a read path",
        paragraphs: [
          "Teams often describe retrieval as a data-preparation problem: chunk the documents, create embeddings, and tune a prompt. That work matters, but it leaves out the more important production question: who is asking, what are they trying to do, and which source material are they allowed to see right now? A useful answer is only one that reaches the right person through a defensible path.",
          "I think of that path as a small interface between an agent and the organisation's knowledge. It should accept a verified caller identity and a bounded task, apply the relevant access and freshness rules, return a limited set of evidence, and make clear enough what it did for someone to investigate later. The model can reason over the result; it should not be asked to infer its own data boundary.",
        ],
      },
      {
        heading: "Carry identity into the query",
        paragraphs: [
          "A service account that can read every indexed document is a tempting shortcut. It also turns each generated answer into a question of whether the application remembered to filter correctly after the fact. The safer shape is to establish the user's identity before retrieval and let that identity participate in the query itself.",
          "The details depend on the platform, but the principle is increasingly concrete. Azure AI Search documents document-level checks from ingestion through query execution, matching a caller's token claims against stored permission metadata. Amazon Bedrock's ACL-aware retrieval makes the complementary boundary explicit: the application must authenticate the user and pass verified identity context; the retrieval service can then filter results. Authentication and retrieval belong in the same design conversation.",
        ],
        sources: [
          {
            label: "Microsoft Learn: Document-level access control in Azure AI Search",
            href: "https://learn.microsoft.com/en-us/azure/search/search-document-level-access-overview",
          },
          {
            label: "Amazon Bedrock: ACL-aware retrieval on managed knowledge bases",
            href: "https://docs.aws.amazon.com/bedrock/latest/userguide/kb-test-retrieve-acl.html",
          },
        ],
      },
      {
        heading: "Make freshness a visible rule",
        paragraphs: [
          "Permission metadata and content are both moving targets. A policy can change, a project can be archived, or a document can be corrected while an index still holds an older representation. That does not make retrieval unusable; it means the system needs a stated synchronization model and a sensible response when the evidence may be stale.",
          "For material decisions, I want the retrieval response to include source identifiers, source update or index times, and the rule that selected each item. If the source is outside its freshness budget, the agent should say so, retrieve again, or hand the question back rather than presenting old context as current. Freshness is not a property the model can reliably recover from fluent text.",
        ],
        sources: [
          {
            label: "Microsoft Learn: Query-time ACL and RBAC enforcement in Azure AI Search",
            href: "https://learn.microsoft.com/en-us/azure/search/search-query-access-control-rbac-enforcement",
          },
        ],
      },
      {
        heading: "Return evidence, not a document dump",
        paragraphs: [
          "A broad retrieval result may feel more capable, but it often creates a worse decision surface. It consumes context, buries the most relevant evidence, and makes it harder for a person—or an evaluator—to understand why an answer was produced. The result should be narrow enough to inspect: a source, a stable reference, the relevant excerpt, and the metadata needed to judge its authority and age.",
          "This is also where product design meets infrastructure. A developer investigating an answer does not need a promise that the agent searched everything. They need a direct route to the evidence, an honest indication of what was excluded, and a way to ask a more precise follow-up. Retrieval earns trust when it reduces verification work instead of moving it downstream.",
        ],
      },
      {
        heading: "Evaluate the read path before the answer",
        paragraphs: [
          "Retrieval evaluation should cover more than whether the right paragraph appeared somewhere in a top-k list. Test the full boundary: an authorized user gets the necessary evidence; an unauthorized user gets none; a changed ACL or source is reflected within its promised window; and a vague request produces a clarification instead of an over-broad search.",
          "I would keep a trace for each consequential retrieval with the caller type, query purpose, policy or index version, selected source identifiers, timestamps, and the final outcome. That trace gives engineering, security, and product teams the same object to inspect. It turns 'the agent knew this' into a question the system can answer: what did it read, why was it allowed, and was it current enough for this decision?",
        ],
      },
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    postedOn: "Jul 29, 2026",
    blogHeading: "Long-Running Agents Need Checkpoints, Not Longer Timeouts",
    slug: "long-running-agents-need-checkpoints-not-longer-timeouts",
    postedBy: "Shivam Maurya",
    postedAt: "AI Infrastructure",
    content:
      "As agents take on work that can pause for people, tools, and outside systems, a long timeout is not a reliability strategy. The useful unit of engineering is a checkpoint: a clear, inspectable point from which the work can safely continue—or stop.",
    sections: [
      {
        heading: "A long task is a different kind of system",
        paragraphs: [
          "A request that finishes during one response can often be treated like a single interaction. A request that lasts for hours cannot. A browser session can disconnect, a tool can stall, a user can need to approve a step, and the underlying data can change while the agent is waiting. Treating that whole run as one uninterrupted thread makes a temporary interruption look like a failure—or, worse, encourages a blind restart.",
          "The recent discussion around durable agent runtimes makes this practical rather than theoretical. Google describes long-running workflows as fragile in production and calls out resumption after outages and human-in-the-loop confirmations as a native concern. The important takeaway is not a particular runtime. It is that waiting, reconnecting, and resuming belong in the design of the job itself.",
        ],
        sources: [
          {
            label: "Google Cloud: Introducing Agent Executor, a distributed agent runtime",
            href: "https://cloud.google.com/blog/products/ai-machine-learning/agent-executor-googles-distributed-agent-runtime/",
          },
        ],
      },
      {
        heading: "Checkpoint the facts, not a vague conversation",
        paragraphs: [
          "A useful checkpoint is more than a saved chat transcript. It records what the agent was trying to achieve, the work item and stable resource identifiers it touched, the last completed step, the inputs and policy version that governed the run, and the evidence needed to choose the next action. If the system cannot reconstruct that state, it cannot reliably tell whether it should continue, ask, or begin again.",
          "This is also where I want to make external effects explicit. A draft created in a workspace, a ticket submitted to another system, and a deployment request are not interchangeable events. Record the idempotency key or resulting identifier before the agent moves on. On resume, inspect that record first; do not let a fresh model turn uncertainty into a duplicate write.",
        ],
      },
      {
        heading: "Use checkpoints as decision boundaries",
        paragraphs: [
          "The best time to request approval is often between two phases of work. An agent can gather evidence, prepare a proposed change, and present the exact target and consequence before it crosses into a write, send, or production action. That keeps planning useful without treating a plan as authority.",
          "A pause can also be a safety control. OpenAI's recent account of long-horizon model deployment describes why examining single actions is not enough when a sequence unfolds over time; its monitoring can pause a session and surface it to a user. For product teams, the general pattern is valuable: define the states that require a human decision, and make resumption conditional on a fresh, recorded decision rather than an old assumption.",
        ],
        sources: [
          {
            label: "OpenAI: Safety and alignment in an era of long-horizon models",
            href: "https://openai.com/index/safety-alignment-long-horizon-models/",
          },
        ],
      },
      {
        heading: "Resume with a reconciliation step",
        paragraphs: [
          "Resuming should not mean replaying the last few messages and hoping the world is unchanged. Before the next tool call, re-check the resource version, permission, and side-effect status that matter to the next decision. If a document changed, a request expired, or someone else completed the work, the right outcome may be a concise explanation instead of more automation.",
          "I like to make that reconciliation visible in the trace: checkpoint loaded, current state verified, next action selected. It gives an operator a straightforward answer when a user asks what happened during a gap, and it gives the evaluation suite a concrete place to test stale state, revoked access, and duplicate-request behaviour.",
        ],
      },
      {
        heading: "Design for stop, inspect, and branch",
        paragraphs: [
          "A checkpoint is useful even when the run never resumes. It lets a person inspect the work so far, hand it to another system, or end it cleanly without losing the reasoning that led to the current state. It also makes controlled experimentation possible: branch from the same known state to compare a new tool policy, a new model configuration, or a safer recovery path.",
          "That changes the question from 'can the agent keep going?' to 'can we understand and control where it is?' For production AI, that is the more durable capability. A system that can stop safely and continue deliberately will earn more trust than one that merely appears tireless.",
        ],
      },
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    postedOn: "Jul 27, 2026",
    blogHeading: "An Agent Tool Is an API Contract",
    slug: "an-agent-tool-is-an-api-contract",
    postedBy: "Shivam Maurya",
    postedAt: "AI Infrastructure",
    content:
      "The moment an agent can call a tool, its prompt has become an integration surface. The schema, result shape, failure behaviour, and rollout path deserve the same care as any other production API—not because models are fragile, but because real systems change.",
    sections: [
      {
        heading: "A tool definition is a promise to several systems",
        paragraphs: [
          "A tool description can look like a small prompt detail: a name, a sentence of guidance, and a few parameters. In practice it connects a model, an application, an API, and often a person who will have to understand a surprising result later. Every field is a promise about what the caller may ask for and what the service will accept.",
          "That is why I treat a tool definition as an API contract. The model is one client of that contract, but it is not the only concern. The service still needs a clear input boundary, predictable semantics, useful errors, and a way to evolve without making an old workflow silently mean something new.",
        ],
      },
      {
        heading: "Make the valid call smaller than the plausible call",
        paragraphs: [
          "Natural language is deliberately flexible; an action interface should not be. A good tool has a narrow verb, a small set of typed arguments, constrained values where possible, and defaults that are safe to explain. I would rather expose read_issue with a repository and issue number than a single broad execute_operation tool with a paragraph of instructions inside it.",
          "Schema discipline is useful here because it turns assumptions into checks. OpenAI's current function-calling guidance recommends strict mode, which requires every object to disallow additional properties and every declared property to be required. The exact implementation will vary by provider, but the broader lesson holds: reject ambiguity at the boundary instead of hoping downstream code interprets it safely.",
        ],
        sources: [
          {
            label: "OpenAI: Function calling guide",
            href: "https://developers.openai.com/api/docs/guides/function-calling",
          },
        ],
      },
      {
        heading: "Version the meaning, not only the code",
        paragraphs: [
          "Changing a parameter can be a product change even when the endpoint still returns 200. Renaming a status, widening a query, changing a default, or returning a different identifier may change what an agent decides to do next. Those are compatibility questions, not just implementation details.",
          "For a consequential tool, I want an owner, a documented schema version, example requests and results, and a deprecation path. Additive changes are usually easier to absorb; semantic changes deserve a new tool name or version until callers have moved. That makes it possible to test a candidate agent against the contract it will actually meet in production.",
        ],
      },
      {
        heading: "Design the result for the next decision",
        paragraphs: [
          "Tool output is not an internal log line. It becomes context for the next model step and often evidence for a human reviewer. Return the facts needed for the next decision, stable identifiers for follow-up work, and a bounded error shape that distinguishes an invalid request from a permission denial, missing record, or temporary dependency failure.",
          "This is one place where structured output pays for itself. The Model Context Protocol's current tools specification gives tools both an input schema and an optional output schema; servers must conform to an advertised output schema and clients are encouraged to validate it. A shared result shape reduces the chance that a recovery path is built on a convenient but incorrect reading of free text.",
        ],
        sources: [
          {
            label: "Model Context Protocol: Tools specification",
            href: "https://modelcontextprotocol.io/specification/2025-11-25/server/tools",
          },
        ],
      },
      {
        heading: "Keep the available surface intentional",
        paragraphs: [
          "More tools do not automatically make an agent more capable. They create more choices, more prompt context, and more ways to reach for an action that is technically available but irrelevant. The useful question before a turn is not, 'what could this agent ever do?' It is, 'what does this job need right now?'",
          "That has practical benefits beyond safety. OpenAI notes that callable function definitions consume input context and recommends keeping the initially available set small, evaluating the effect of tool count, and deferring rarely used tools when appropriate. A smaller, task-relevant surface is easier to reason about, cheaper to send, and easier to evaluate when behaviour drifts.",
        ],
        sources: [
          {
            label: "OpenAI: Function calling guidance on tool count and token use",
            href: "https://developers.openai.com/api/docs/guides/function-calling",
          },
        ],
      },
      {
        heading: "Test the contract at the boundary",
        paragraphs: [
          "Agent evaluations should include the tool boundary, not only the final answer. I would test valid calls, missing and extra fields, stale identifiers, policy denials, timeouts, duplicate requests, and changed result shapes. For every failure, define what the agent should tell the user and whether it may retry, choose another read-only path, or ask for help.",
          "The benefit is not merely fewer malformed calls. A versioned, observable tool contract gives product, platform, and security work the same object to discuss. When an agent behaves unexpectedly, the team can inspect the request, the policy decision, the service result, and the schema version together. That is a much stronger starting point than asking whether the prompt was good enough.",
        ],
      },
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    postedOn: "Jul 24, 2026",
    blogHeading: "A Model Alias Is Not a Release Strategy",
    slug: "a-model-alias-is-not-a-release-strategy",
    postedBy: "Shivam Maurya",
    postedAt: "AI Infrastructure",
    content:
      "A model name can look like a stable configuration while its behaviour, lifecycle, or supporting API changes underneath it. Production teams need a way to adopt better models without turning every provider update into an unreviewed product change.",
    sections: [
      {
        heading: "The model name hides a deployment decision",
        paragraphs: [
          "It is tempting to treat a model identifier as a harmless line of configuration. Put a familiar name behind an environment variable and the application seems neatly decoupled from any provider. But the name sits at the point where product behaviour becomes real: it affects reasoning, output shape, tool use, latency, cost, and the failure modes a user sees.",
          "That means changing a model is closer to changing a dependency than changing a label. The request may still be valid; the response may now choose a different tool; a structured output may become more or less reliable. None of those changes are necessarily bad. They simply deserve the same deliberate release path as the rest of the system.",
        ],
      },
      {
        heading: "Aliases are useful, but they are movable",
        paragraphs: [
          "Aliases solve a real operational problem. They give a team a friendly way to refer to an approved version, and they make rollback possible without editing every service. The mistake is treating an alias as proof that nothing material changed. An alias is specifically designed to move.",
          "Google's Model Registry documentation calls an alias a mutable reference and compares it to a Docker tag or Git branch. That is the right mental model: useful for promotion, but not a substitute for knowing which version production actually ran. I want the release record to resolve the alias to a concrete provider, endpoint or region, and version identifier.",
        ],
        sources: [
          {
            label: "Google Cloud: How to use model version aliases",
            href: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/machine-learning/model-registry/model-alias",
          },
        ],
      },
      {
        heading: "Define a model contract around the identifier",
        paragraphs: [
          "For each production capability, I like a small model contract next to the configuration. It records the exact model reference, the provider and deployment location, the API and SDK version, expected input and output modes, enabled tools, fallback behaviour, and the latency and cost budget. It also links to the evaluation slice that protects the user journey.",
          "This is not bureaucracy for its own sake. When a response looks different in an incident review, the team can answer a basic question quickly: what system did this request actually use? A model contract turns that answer from scattered environment variables and release notes into one inspectable object.",
        ],
      },
      {
        heading: "Give upgrades a separate lane",
        paragraphs: [
          "I prefer two explicit lanes: a pinned production configuration and a candidate configuration. New models, snapshots, prompts, or tool schemas enter the candidate lane first. Run the relevant evaluation cases, compare trace-level behaviour and budget, then expose the candidate to a small, reversible slice of traffic when the risk warrants it. Promotion should change a named release configuration, not quietly replace the meaning of a generic model name.",
          "That discipline is consistent with OpenAI's current API guidance: prompting behaviour can change between snapshots, and the documentation recommends pinned versions plus application-level evaluations for consistent behaviour. Pinning is not a reason to stop improving. It is what makes the improvement measurable and reversible.",
        ],
        sources: [
          {
            label: "OpenAI API: Backwards compatibility and model snapshots",
            href: "https://developers.openai.com/api/reference/overview#backwards-compatibility",
          },
        ],
      },
      {
        heading: "Treat lifecycle notices as engineering input",
        paragraphs: [
          "Provider lifecycle changes are a reminder that model operations need an owner. Google Cloud's current release notes include retired models, announced shutdown dates, and endpoint migrations with disruption deadlines. The exact vendors will differ, but the operating pattern does not: watch the lifecycle feed, create a candidate replacement early, and test the particular capabilities your product relies on before the deadline becomes an outage.",
          "The goal is not to freeze an AI product in time. It is to make change legible. When model selection is a release decision with a contract, an evaluation trail, and a rollback path, the team can adopt new capability with confidence instead of hoping a configuration update behaves like a no-op.",
        ],
        sources: [
          {
            label: "Google Cloud: Vertex AI release notes",
            href: "https://docs.cloud.google.com/vertex-ai/docs/release-notes",
          },
        ],
      },
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    postedOn: "Jul 22, 2026",
    blogHeading: "An Agent Eval Needs a Map, Not a Grade",
    slug: "an-agent-eval-needs-a-map-not-a-grade",
    postedBy: "Shivam Maurya",
    postedAt: "AI Infrastructure",
    content:
      "A single pass rate can make an agent look ready long before it is dependable. Production evaluation should show where the system succeeds, where it becomes brittle, and what it spent to get there. That turns an impressive demo into an engineering decision.",
    sections: [
      {
        heading: "The final answer hides the system that produced it",
        paragraphs: [
          "An agent can return the right answer for the wrong reasons. It may have retrieved an irrelevant document, retried until a lucky response appeared, used a tool it should not have touched, or consumed far more time and tokens than the product can afford. A final-answer-only score flattens all of that into a pass.",
          "That is a weak basis for a release decision. What users experience is the whole run: the context the agent saw, the choices it made, the actions it took, and the way it recovered when something failed. The evaluation should preserve enough of that path to tell us whether a success is worth trusting.",
        ],
      },
      {
        heading: "Turn a benchmark into a capability map",
        paragraphs: [
          "I prefer to slice a task set by the conditions that change the work. For a repository assistant, that might mean a well-named service versus an ambiguous one, a local change versus one that crosses a dependency boundary, or a request with complete context versus a request that requires careful retrieval.",
          "Each slice should have a reason to exist: a user job, an operational constraint, or a known failure mode. The useful question becomes, \"where does this system stop being reliable enough for this workflow?\" That answer is more actionable than one blended percentage.",
          "Google Cloud recently described this same shift in evaluation thinking: rather than a fixed pass/fail benchmark, use variations in task difficulty to understand where an agent's capability falls away. The mechanism will differ by product, but the design instinct is broadly useful.",
        ],
        sources: [
          {
            label: "Google Cloud: Who evaluates the evaluations?",
            href: "https://cloud.google.com/blog/products/data-analytics/evaluate-agent-performance",
          },
        ],
      },
      {
        heading: "Measure the trajectory, not only the outcome",
        paragraphs: [
          "For every case, I want to record an outcome and a small set of run-level signals: whether the agent selected the right source or tool, whether it stayed inside its permission boundary, how many attempts it needed, where it escalated, and whether a human had to repair the result. These are not vanity metrics. They explain why the outcome happened.",
          "This is especially important for agents that act across systems. A response can look harmless while the sequence that produced it shows unnecessary exploration, an avoidable write, or a slow drift from the user's original constraint. A trace gives the team something concrete to review and improve.",
        ],
      },
      {
        heading: "Make the budget part of the contract",
        paragraphs: [
          "Reliability without a budget is incomplete. A system that solves a task after fifteen retries may be acceptable for an internal research job and unusable in a customer-facing workflow. The same is true of latency, tool calls, and inference cost. They belong in the acceptance criteria before the model is switched or the prompt is changed.",
          "OpenAI's recent guidance on trustworthy evaluations makes this explicit: the evaluated system includes its model settings, tool access, and harness, while the reported budget includes turns, tokens, retries, time, and cost. That is a helpful reminder that the wrapper around a model is not an implementation detail; it materially changes the result.",
        ],
        sources: [
          {
            label: "OpenAI: A shared playbook for trustworthy third party evaluations",
            href: "https://openai.com/index/trustworthy-third-party-evaluations-foundations/",
          },
        ],
      },
      {
        heading: "Let production teach the next evaluation",
        paragraphs: [
          "The first evaluation set will always be incomplete. When a user reports a weak answer, a tool call times out, or a fallback produces a confusing response, the goal is not only to patch that instance. Capture the smallest reproducible version of the situation, decide the expected behaviour, and add it to the relevant slice.",
          "Over time, that creates a living release gate instead of a ceremonial benchmark. It also makes product conversations sharper: we can decide which user journeys deserve higher reliability, which failures are safe to recover from, and where the system should ask for help rather than pretend it knows.",
        ],
      },
      {
        heading: "The score is a starting point",
        paragraphs: [
          "A score still has value. It tells us whether a change moved in the right direction. But I do not want a score to be the whole story. I want a compact map of task slices, success and failure traces, budget, and the specific behaviours we are willing to ship.",
          "That is how evaluation becomes part of operating an AI product: not a demo checkpoint, but a shared way to make tradeoffs visible before users have to discover them for us.",
        ],
      },
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    postedOn: "Jul 20, 2026",
    blogHeading: "An Agent Should Ask for Permission When It Needs It",
    slug: "an-agent-should-ask-for-permission-when-it-needs-it",
    postedBy: "Shivam Maurya",
    postedAt: "AI Infrastructure",
    content:
      "The useful question is not whether an agent is allowed to act. It is whether it has the smallest permission it needs for this action, on this resource, at this moment. Treating permission as part of the interaction makes ambitious automation easier to trust and easier to operate.",
    sections: [
      {
        heading: "A role is too broad for a moving task",
        paragraphs: [
          "An agent rarely does one fixed job. In a single session it might read a repository, inspect a production incident, open a ticket, draft a change, and ask to deploy it. Giving that whole sequence one permanent level of access is convenient at the beginning and hard to defend later.",
          "I find it more useful to think in terms of a concrete request: read these logs, create this pull request, send this message, or change this setting. The permission should describe the action and the target, not just the name of the agent that happened to ask.",
        ],
      },
      {
        heading: "Keep planning separate from authority",
        paragraphs: [
          "A model can propose a useful next step without being the component that authorises it. That separation is important. The model can interpret context and form a plan; a policy layer can decide whether the requested tool, resource, and parameters are allowed; a person can be brought in when the consequence is material.",
          "This also makes failures easier to understand. If an action is denied, the system can say whether the problem was an unavailable capability, an invalid target, a missing scope, or an approval requirement. That is much better than treating every denied tool call as a mysterious model failure.",
        ],
      },
      {
        heading: "Start small and escalate deliberately",
        paragraphs: [
          "Read-only access is often enough to help someone orient themselves. A draft can usually be created in a reversible workspace. The request for a production change, an external message, or a deletion is the moment to ask for more. This is not about adding friction everywhere; it is about placing friction where recovery becomes expensive.",
          "The current Model Context Protocol authorization specification reflects this direction: it supports incremental scope consent and requires tokens to be bound to the intended MCP resource. Those details matter because a broad or reusable token turns a local approval into a much larger boundary than the user may have intended.",
        ],
        sources: [
          {
            label: "Model Context Protocol: Authorization specification (2025-11-25)",
            href: "https://modelcontextprotocol.io/specification/2025-11-25/basic/authorization",
          },
          {
            label: "Model Context Protocol: 2025-11-25 key changes",
            href: "https://modelcontextprotocol.io/specification/2025-11-25/changelog",
          },
        ],
      },
      {
        heading: "Make the approval meaningful",
        paragraphs: [
          "An approval prompt should answer the questions a careful teammate would ask: what will happen, where will it happen, which identity will be used, and what can be changed or sent? “Allow tool access” hides the decision. “Create a pull request in this repository with these files” gives someone a real choice.",
          "For recurring work, expiry matters too. A narrowly scoped permission that lasts for one task has a very different risk profile from a standing grant that survives indefinitely. Good defaults make the safe path the easy one without forcing people to re-authorise harmless reads all day.",
        ],
      },
      {
        heading: "The audit trail is part of the product",
        paragraphs: [
          "When an agent takes action, I want a compact record of the actor, requested capability, target, decision, and result. It should be useful to the person debugging an incident as well as the person asking why an action did not run. That means retaining decision metadata while being disciplined about not logging secrets or unnecessary sensitive content.",
          "The same record improves evaluation. Teams can test whether an agent asks at the right boundary, whether it reaches for tools it does not need, and whether an approval actually constrained the final action. OWASP's agent-security guidance makes a similar practical case for least privilege, explicit authorisation for sensitive operations, and testing around tool access.",
        ],
        sources: [
          {
            label: "OWASP: AI Agent Security Cheat Sheet",
            href: "https://cheatsheetseries.owasp.org/cheatsheets/AI_Agent_Security_Cheat_Sheet.html",
          },
        ],
      },
      {
        heading: "Permission design is product design",
        paragraphs: [
          "The goal is not to make agents timid. It is to let them be genuinely useful without silently accumulating power. A system that can show its intended action, request the minimum additional authority, and leave a clear record gives people a reason to use it for consequential work.",
          "That is the standard I want for production AI systems: capability that expands carefully, stays legible, and can be improved after every real interaction.",
        ],
      },
    ],
  },
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
    sections: [
      {
        heading: "A clever demo is not the finish line",
        paragraphs: [
          "Developer AI has no shortage of impressive demos. A model can explain a function, write a test, or generate a pull request description in seconds. That first interaction is useful, but it is not enough to earn a place in a developer's everyday workflow.",
          "The question I keep coming back to is simpler: does the tool reduce the amount of thinking a developer has to repeat? A useful tool helps someone orient themselves in an unfamiliar repository, trace a decision through code, or move from a failed request to a credible next step.",
        ],
      },
      {
        heading: "Context is the product",
        paragraphs: [
          "Most engineering work happens inside a web of context: files, services, conventions, issues, deployment history, and decisions that were never written down. A response that looks plausible but ignores that context creates more verification work than it removes.",
          "This is why repository-aware tools are interesting to me. They have to decide what to retrieve, how to keep that context current, and how to show their sources. The hard problem is not asking a model a question. It is turning a living codebase into context that is relevant, bounded, and inspectable.",
        ],
      },
      {
        heading: "Trust should be visible",
        paragraphs: [
          "Developers do not need an AI system to sound certain. They need it to be honest about what it knows. A good answer should point to the files, symbols, or assumptions behind it. When the evidence is weak, the product should make that obvious instead of filling the gap with confidence.",
          "That changes the interface. Citations, links into code, a clear scope for each answer, and useful fallbacks are not cosmetic details. They are what let a developer decide whether to use the answer, investigate it, or ignore it.",
        ],
      },
      {
        heading: "Fit the workflow that already exists",
        paragraphs: [
          "The best developer tools do not ask people to abandon their habits. They meet work where it already happens: while reading a pull request, debugging an API, opening an unfamiliar repository, or trying to understand why a service behaves a certain way.",
          "A product earns repeat use when it saves time at one of those moments without adding a new process to manage. That is a higher bar than producing an interesting answer, but it is the difference between a novelty and a dependable tool.",
        ],
      },
      {
        heading: "What I am building toward",
        paragraphs: [
          "When I work on developer AI products, I care less about making the model look magical and more about making complex software easier to understand. That means designing for context, traceability, permissions, and the actual moment a developer needs help.",
          "Useful developer AI should leave people with more confidence in the system they are working on, not less. That is the standard worth building toward.",
        ],
      },
    ],
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
    sections: [
      {
        heading: "The model is only one component",
        paragraphs: [
          "It is easy to frame enterprise AI as a model-selection exercise: choose the strongest model, write a prompt, and put a chat interface in front of it. In practice, that is usually the smallest part of the work.",
          "The difficult questions are operational. Who can use the system? Which data can reach a provider? How are models routed? What happens when a provider is unavailable? How do teams observe cost, latency, failures, and quality over time? Those constraints define whether an AI capability can be used responsibly.",
        ],
      },
      {
        heading: "Integration is where the work begins",
        paragraphs: [
          "A useful internal AI system has to fit the organisation around it. That means identity, permissions, backend services, existing knowledge sources, and the workflows people already trust. A model response without those connections is usually an isolated demo.",
          "This is why gateways and provider abstractions matter. They create a deliberate place to handle authentication, model access, routing, policy, usage controls, and provider-specific differences instead of rebuilding those concerns in every application.",
        ],
      },
      {
        heading: "Security is product design",
        paragraphs: [
          "Security is not something that gets added after the prompt works. It shapes what a product can do from the first architecture decision. Data classification, auditability, access boundaries, and the ability to explain where information went are all part of the user experience in an enterprise environment.",
          "The same is true for agents and tool calling. An agent that can take action needs a permission model that is as intentional as the model choice. Capability without clear boundaries is not useful in a production setting.",
        ],
      },
      {
        heading: "Reliability earns adoption",
        paragraphs: [
          "People will forgive an early interface that is slightly rough. They will not repeatedly return to a system that is slow, inconsistent, or impossible to understand when it fails. Production AI needs sensible fallbacks, good logs, evaluation habits, and clear ownership.",
          "This is also where multi-provider work becomes real. Providers differ in API behaviour, tool calling, rate limits, latency, and failure modes. The goal is not to hide every difference. It is to handle those differences deliberately so the product remains dependable.",
        ],
      },
      {
        heading: "Constraints are useful",
        paragraphs: [
          "Constraints can sound like friction, but they force better engineering. They make teams decide what data is truly needed, which actions should be allowed, how quality will be measured, and what a safe failure looks like.",
          "The organisations that get value from AI will not be the ones with the most impressive demo. They will be the ones that turn capability into a system people can trust, operate, and improve.",
        ],
      },
    ],
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
    sections: [
      {
        heading: "Start with one painful moment",
        paragraphs: [
          "AI makes it tempting to begin with a broad promise: help people code faster, automate their work, understand their data, or build a personal assistant. Those promises are hard to test because they contain too many different jobs.",
          "A better starting point is one painful moment. A developer joins an unfamiliar repository. A team needs to understand a failing API response. Someone needs to turn messy source material into a first useful draft. The narrower the problem, the easier it is to decide whether the product is genuinely helping.",
        ],
      },
      {
        heading: "Define what a good answer means",
        paragraphs: [
          "An AI product does not only need an output. It needs a definition of quality. Is the response factually grounded? Is it useful in the user's next decision? Does it preserve the right constraints? Can the user see enough evidence to trust it?",
          "Without that definition, teams optimise for whatever is easiest to notice: a fluent demo, a fast response, or a high volume of generated text. Those are poor substitutes for a product that helps someone complete real work.",
        ],
      },
      {
        heading: "Build the smallest believable loop",
        paragraphs: [
          "The first version should cover one end-to-end loop. It should let a real user bring in the minimum useful context, ask or trigger something meaningful, understand the result, and decide what to do next. That loop teaches more than a large feature list ever will.",
          "For AI products, the surrounding pieces matter immediately: authentication, context ingestion, error handling, observability, and a way to capture feedback. They may not make the launch video, but they are what turn a capability into a product.",
        ],
      },
      {
        heading: "Make trust visible early",
        paragraphs: [
          "If the user has to make a decision based on the output, the product needs to show its work. That can mean sources, explicit assumptions, confidence boundaries, or an easy path back to the original material.",
          "Traceability is especially important in technical and enterprise products. It reduces the cost of verifying an answer and gives users a way to correct the system when it is wrong. That feedback becomes part of the product's learning loop.",
        ],
      },
      {
        heading: "Keep the loop tight after launch",
        paragraphs: [
          "Launching is where the useful work starts. Watch where people stop, what they ask repeatedly, which answers they distrust, and where the product creates more work than it removes. Then improve the narrowest part of the loop that is blocking value.",
          "The AI products I want to build are not defined by a single model release. They get better because the product, infrastructure, and understanding of the user problem keep improving together.",
        ],
      },
    ],
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
