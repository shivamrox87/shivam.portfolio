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
