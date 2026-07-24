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
