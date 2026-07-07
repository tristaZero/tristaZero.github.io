---
title: "Agent = Model + Harness: Where Engineers Add Value When Models Keep Getting Smarter"
date: "2026-07-07"
description: "Field notes from my lightning talk at AWS Summit Hong Kong 2026 — why the agent harness is where durable engineering value lives."
featured: true
draft: false
bare: true
---

<div class="article-body"><style>.article-body{--bg:#ffffff;--panel:#fbfbfd;--ink:#111318;--ink2:#475467;--muted:#98a2b3;--line:#eaecf3;--figbg:#ffffff;--figline:#eaecf3;--accent:#7b61ff;--link:#5b3df5;--code-bg:#f5f6f8;--rainbow:linear-gradient(90deg,#6366f1,#8b5cf6,#a855f7,#ec4899,#f43f5e,#f97316,#eab308,#22c55e,#06b6d4,#6366f1);--maxw:720px}:root.dark .article-body{--bg:#0d0e12;--panel:#15171d;--ink:#f2f3f6;--ink2:#aab2c0;--muted:#6b7280;--line:#23262f;--figbg:#f7f8fb;--figline:#23262f;--accent:#a78bff;--link:#a78bff;--code-bg:#1b1e26}.article-body{max-width:var(--maxw);margin:0 auto;color:var(--ink);font-family:"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;font-size:18px;line-height:1.65;-webkit-font-smoothing:antialiased}.article-body .topbar{height:4px;background:var(--rainbow);border-radius:2px}.article-body header.hero{padding:22px 0 28px;border-bottom:1px solid var(--line);margin-bottom:44px}.article-body .eyebrow{font-family:"JetBrains Mono",ui-monospace,monospace;font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:var(--muted);font-weight:600;margin-bottom:18px}.article-body h1{font-size:clamp(30px,5vw,44px);line-height:1.08;letter-spacing:-1px;font-weight:800;margin:0 0 18px;text-wrap:balance}.article-body h1 .grad{background:linear-gradient(90deg,#7b61ff,#4e8cff 40%,#ff5fa2);-webkit-background-clip:text;background-clip:text;color:transparent}.article-body .dek{font-size:16px;color:var(--ink2);font-style:italic;margin:0}.article-body h2{font-size:clamp(22px,3.2vw,28px);line-height:1.2;letter-spacing:-.5px;font-weight:800;margin:56px 0 6px;text-wrap:balance}.article-body h2::before{content:"";display:block;width:34px;height:3px;border-radius:2px;background:var(--rainbow);margin-bottom:16px}.article-body h3{font-size:19px;font-weight:750;letter-spacing:-.2px;margin:32px 0 4px}.article-body p{margin:16px 0}.article-body a{color:var(--link);text-decoration:none;border-bottom:1px solid color-mix(in srgb,var(--link) 35%,transparent)}.article-body a:hover{border-bottom-color:var(--link)}.article-body strong{font-weight:700}.article-body blockquote{margin:26px 0;padding:14px 22px;border-left:3px solid var(--accent);background:var(--panel);border-radius:0 10px 10px 0;font-size:20px;font-weight:650;letter-spacing:-.2px;line-height:1.35}.article-body pre{background:var(--code-bg);border:1px solid var(--line);border-radius:12px;padding:18px 20px;overflow-x:auto;margin:22px 0}.article-body pre code{font-family:"JetBrains Mono",ui-monospace,monospace;font-size:15px;color:var(--ink);font-weight:600}.article-body p code,.article-body li code{font-family:"JetBrains Mono",ui-monospace,monospace;font-size:.86em;background:var(--code-bg);padding:2px 6px;border-radius:5px}.article-body figure{margin:36px 0}.article-body figure .frame{background:var(--figbg);border:1px solid var(--figline);border-radius:16px;padding:10px;box-shadow:0 10px 30px rgba(17,19,24,.06);overflow:hidden}.article-body figure svg{display:block;width:100%;height:auto}.article-body figcaption{font-size:13.5px;color:var(--muted);text-align:center;margin-top:12px;line-height:1.5}.article-body figcaption b{color:var(--ink2);font-weight:600}.article-body .tablewrap{overflow-x:auto;margin:24px 0;border:1px solid var(--line);border-radius:12px}.article-body table{width:100%;border-collapse:collapse;font-size:14.5px;min-width:560px}.article-body thead th{text-align:left;padding:12px 16px;font-family:"JetBrains Mono",ui-monospace,monospace;font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);border-bottom:1px solid var(--line);font-weight:600;background:var(--panel)}.article-body tbody td{padding:12px 16px;border-bottom:1px solid var(--line);vertical-align:top;line-height:1.5}.article-body tbody tr:last-child td{border-bottom:none}.article-body tbody td:first-child{font-weight:700;white-space:nowrap}.article-body ul.clean{margin:16px 0;padding:0;list-style:none}.article-body ul.clean li{position:relative;padding-left:24px;margin:12px 0}.article-body ul.clean li::before{content:"\25B8";position:absolute;left:2px;color:var(--accent);font-weight:800}.article-body hr{border:none;border-top:1px solid var(--line);margin:52px 0}.article-body .refs{font-size:14.5px;color:var(--ink2)}.article-body .refs li{margin:10px 0;padding-left:6px}.article-body .refs a{word-break:break-word}.article-body .bio{font-size:15px;color:var(--ink2);font-style:italic;background:var(--panel);border:1px solid var(--line);border-radius:14px;padding:20px 24px;margin-top:8px}@media (max-width:600px){.article-body{font-size:16.5px}}</style><div class="topbar"></div><header class="hero"><div class="eyebrow">AWS Summit Hong Kong 2026 · Field notes for engineers</div><h1>Agent = Model + Harness: <span class="grad">Where Engineers Add Value When Models Keep Getting Smarter</span></h1><p class="dek">Based on my lightning talk at AWS Summit Hong Kong 2026.</p></header><p>If you spent 2025 building AI agents, you can feel the mood shift.</p><p>Last year agents broke out — everywhere, every industry, a shiny new demo every week. The question was "can we build an agent that does X?" and the answer kept coming back yes.</p><p>This year the question is harder. Anyone can spin up an agent now. What separates a weekend demo from something a company actually runs comes down to one thing:</p><blockquote>How do you get an agent into production?</blockquote><p>That’s what I want to talk about. And the answer finally has a name: the <strong>agent harness</strong>. As Aakash Gupta put it, <a href="https://www.news.aakashg.com/p/2025-agents-2026-harnesses">2025 was agents; 2026 is agent harnesses</a>.</p><h2>The formula: Agent = Model + Harness</h2><p>Here’s the framing I keep coming back to, from Vivek Trivedy’s <a href="https://blog.langchain.com/the-anatomy-of-an-agent-harness/"><em>The Anatomy of an Agent Harness</em></a>:</p><pre><code>Agent = Model + Harness</code></pre><p>If you’re not the model, you’re the harness. Tools, memory, prompts, orchestration, observability, guardrails, routing, deployment — all harness. Engineering it on purpose (and turning <a href="https://mitchellh.com/writing/my-ai-adoption-journey">every mistake into a permanent fix</a>, the way Mitchell Hashimoto describes) is what harness engineering means.</p><p>A car analogy makes it click for me.</p><figure><div class="frame"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 470" font-family="Inter, -apple-system, Segoe UI, Roboto, sans-serif">
  <rect width="860" height="470" rx="20" fill="#ffffff" stroke="#eaecf3"/>
  <rect x="0" y="0" width="860" height="5" rx="2.5" fill="url(#rainbow)"/>
  <defs>
    <linearGradient id="rainbow" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#7b61ff"/><stop offset="25%" stop-color="#4e8cff"/>
      <stop offset="50%" stop-color="#17b26a"/><stop offset="75%" stop-color="#ff9d42"/>
      <stop offset="100%" stop-color="#ff5fa2"/>
    </linearGradient>
    <linearGradient id="engineGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#7b61ff"/><stop offset="50%" stop-color="#ff5fa2"/><stop offset="100%" stop-color="#ff9d42"/>
    </linearGradient>
  </defs>
  <!-- Title -->
  <text x="40" y="52" font-size="15" font-weight="700" fill="#98a2b3" letter-spacing="2" font-family="JetBrains Mono, monospace">THE FORMULA</text>
  <text x="40" y="88" font-size="30" font-weight="800" fill="#111318" letter-spacing="-0.5">Agent <tspan fill="#98a2b3">=</tspan> Model <tspan fill="#98a2b3">+</tspan> <tspan fill="#7b61ff">Harness</tspan></text>
  <!-- Car illustration group, translated + scaled -->
  <g transform="translate(150,120) scale(1.05)">
    <line x1="20" y1="200" x2="500" y2="200" stroke="#eaecf3" stroke-width="1" stroke-dasharray="3,4"/>
    <path d="M 60 165 L 90 130 L 200 110 L 240 95 L 360 95 L 410 130 L 460 140 L 470 165 L 470 180 L 60 180 Z" fill="#fff" stroke="#111318" stroke-width="1.5" stroke-linejoin="round"/>
    <path d="M 105 132 L 130 118 L 200 108 L 240 100 L 320 100 L 355 130 Z" fill="#eef4ff" stroke="#111318" stroke-width="1.2" stroke-linejoin="round" opacity="0.8"/>
    <line x1="240" y1="100" x2="240" y2="130" stroke="#111318" stroke-width="1.2"/>
    <rect x="355" y="100" width="60" height="38" fill="none" stroke="#111318" stroke-width="1.2" stroke-dasharray="2,2"/>
    <rect x="365" y="108" width="42" height="24" fill="url(#engineGrad)" stroke="#111318" stroke-width="1.2"/>
    <circle cx="375" cy="120" r="2.5" fill="#111318"/><circle cx="395" cy="120" r="2.5" fill="#111318"/>
    <circle cx="135" cy="185" r="22" fill="#111318"/><circle cx="135" cy="185" r="13" fill="#fff" stroke="#111318" stroke-width="1.2"/><circle cx="135" cy="185" r="3" fill="#111318"/>
    <circle cx="395" cy="185" r="22" fill="#111318"/><circle cx="395" cy="185" r="13" fill="#fff" stroke="#111318" stroke-width="1.2"/><circle cx="395" cy="185" r="3" fill="#111318"/>
    <circle cx="460" cy="155" r="6" fill="#ff9d42" stroke="#111318" stroke-width="1"/>
    <rect x="265" y="142" width="14" height="3" fill="#111318"/>
    <!-- Engine callout -->
    <line x1="386" y1="100" x2="386" y2="60" stroke="#7b61ff" stroke-width="1.5"/><circle cx="386" cy="60" r="2.5" fill="#7b61ff"/>
    <text x="386" y="48" font-size="11" font-weight="700" fill="#7b61ff" text-anchor="middle" letter-spacing="1.2" font-family="JetBrains Mono, monospace">ENGINE = MODEL</text>
    <!-- part labels -->
    <line x1="200" y1="180" x2="200" y2="222" stroke="#475467" stroke-width="1.2"/>
    <text x="200" y="235" font-size="9" font-weight="600" fill="#475467" text-anchor="middle" letter-spacing="1" font-family="JetBrains Mono, monospace">CHASSIS</text>
    <line x1="135" y1="207" x2="135" y2="222" stroke="#475467" stroke-width="1.2"/>
    <text x="60" y="235" font-size="9" font-weight="600" fill="#475467" letter-spacing="1" font-family="JetBrains Mono, monospace">WHEELS</text>
    <line x1="270" y1="100" x2="270" y2="55" stroke="#475467" stroke-width="1.2"/>
    <text x="270" y="45" font-size="9" font-weight="600" fill="#475467" text-anchor="middle" letter-spacing="1" font-family="JetBrains Mono, monospace">DASH · BRAKES</text>
    <line x1="467" y1="155" x2="495" y2="155" stroke="#475467" stroke-width="1.2"/>
    <text x="500" y="158" font-size="9" font-weight="600" fill="#475467" letter-spacing="1" font-family="JetBrains Mono, monospace">LIGHTS</text>
    <path d="M 50 78 Q 50 73 55 73 L 320 73 Q 325 73 325 78" fill="none" stroke="#475467" stroke-width="1.2"/>
    <text x="188" y="66" font-size="13" fill="#475467" text-anchor="middle" font-weight="700" font-style="italic">everything else = harness</text>
  </g>
  <!-- Caption -->
  <text x="430" y="452" font-size="14" fill="#475467" text-anchor="middle">The engine generates power. <tspan font-weight="700" fill="#111318">The harness turns it into a useful, safe vehicle.</tspan></text>
</svg></div>
    <figcaption>The engine generates power. <b>The harness turns it into a useful, safe vehicle.</b></figcaption></figure><p>Think of your agent as a product you ship — a <strong>car</strong>. The <strong>model</strong> is the engine: it gives the car power, the ability to reason, plan, actually drive. But you don’t hand someone a bare engine sitting on the ground. A real vehicle also needs a chassis, steering, brakes, a dashboard, seatbelts, lights.</p><p><strong>The engine makes power. The harness turns it into a car you’d put your family in.</strong> A great model no more guarantees a great agent than a great engine guarantees a great car.</p><p>We built harnesses for years without a word for them — writing the prompts, gluing the tools, patching the failures. Now there’s a name, and a name lets you be deliberate about it.</p><h2>A harness has two halves</h2><p>When I look at what a harness actually does, it splits cleanly in two.</p><figure><div class="frame"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 500" font-family="Inter, -apple-system, Segoe UI, Roboto, sans-serif">
  <rect width="860" height="500" rx="20" fill="#ffffff" stroke="#eaecf3"/>
  <rect x="0" y="0" width="860" height="5" rx="2.5" fill="url(#rainbow2)"/>
  <defs>
    <linearGradient id="rainbow2" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#7b61ff"/><stop offset="25%" stop-color="#4e8cff"/>
      <stop offset="50%" stop-color="#17b26a"/><stop offset="75%" stop-color="#ff9d42"/><stop offset="100%" stop-color="#ff5fa2"/>
    </linearGradient>
  </defs>
  <text x="40" y="52" font-size="22" font-weight="800" fill="#111318" letter-spacing="-0.4">A harness has two halves</text>
  <text x="40" y="78" font-size="14" fill="#475467">Development extends what the model can do · Operations makes it work reliably</text>
  <!-- Development panel -->
  <rect x="40" y="100" width="380" height="360" rx="16" fill="#eef4ff" stroke="#d7e3ff"/>
  <text x="64" y="136" font-size="18" font-weight="800" fill="#174ea6">Half I · Development</text>
  <text x="64" y="158" font-size="12" fill="#475467" font-family="JetBrains Mono, monospace" letter-spacing="1">EXTENDS WHAT THE MODEL CAN DO</text>
  <g font-size="14" fill="#111318">
    <text x="64" y="196">Reasoning &amp; planning quality <tspan font-size="11" fill="#5b21b6" font-weight="700">🧠 MODEL</tspan></text>
    <text x="64" y="226">Tool-use intent <tspan font-size="11" fill="#5b21b6" font-weight="700">🧠 MODEL</tspan></text>
    <line x1="64" y1="242" x2="396" y2="242" stroke="#d7e3ff"/>
    <text x="64" y="272">Memory across sessions <tspan font-size="11" fill="#475467" font-weight="700">🔧 HARNESS</tspan></text>
    <text x="64" y="302">Tools / MCP <tspan font-size="11" fill="#475467" font-weight="700">🔧 HARNESS</tspan></text>
    <text x="64" y="332">Context &amp; retrieval (RAG) <tspan font-size="11" fill="#475467" font-weight="700">🔧 HARNESS</tspan></text>
    <text x="64" y="362">System prompts / AGENTS.md <tspan font-size="11" fill="#475467" font-weight="700">🔧 HARNESS</tspan></text>
    <text x="64" y="392">Planning artifacts (Plan.md) <tspan font-size="11" fill="#475467" font-weight="700">🔧 HARNESS</tspan></text>
    <text x="64" y="422">Workflow / orchestration <tspan font-size="11" fill="#475467" font-weight="700">🔧 HARNESS</tspan></text>
  </g>
  <!-- Operations panel -->
  <rect x="440" y="100" width="380" height="360" rx="16" fill="#f4efff" stroke="#e6dbff"/>
  <text x="464" y="136" font-size="18" font-weight="800" fill="#5b21b6">Half II · Operations</text>
  <text x="464" y="158" font-size="12" fill="#475467" font-family="JetBrains Mono, monospace" letter-spacing="1">MAKES IT WORK RELIABLY</text>
  <g font-size="14" fill="#111318">
    <text x="464" y="196">Native self-correction <tspan font-size="11" fill="#5b21b6" font-weight="700">🧠 MODEL</tspan></text>
    <line x1="464" y1="212" x2="796" y2="212" stroke="#e6dbff"/>
    <text x="464" y="242">Observability (traces, logs) <tspan font-size="11" fill="#475467" font-weight="700">🔧 HARNESS</tspan></text>
    <text x="464" y="272">Evaluation (online &amp; offline) <tspan font-size="11" fill="#475467" font-weight="700">🔧 HARNESS</tspan></text>
    <text x="464" y="302">Guardrails (hooks, permissions) <tspan font-size="11" fill="#475467" font-weight="700">🔧 HARNESS</tspan></text>
    <text x="464" y="332">Routing (model, tool) <tspan font-size="11" fill="#475467" font-weight="700">🔧 HARNESS</tspan></text>
    <text x="464" y="362">Monitoring (drift, latency, cost) <tspan font-size="11" fill="#475467" font-weight="700">🔧 HARNESS</tspan></text>
    <text x="464" y="392">Deployment / scaling <tspan font-size="11" fill="#475467" font-weight="700">🔧 HARNESS</tspan></text>
  </g>
  <text x="430" y="486" font-size="13" fill="#475467" text-anchor="middle" font-style="italic">A few rows say Model. Almost everything else says Harness — that asymmetry is the whole story.</text>
</svg></div>
    <figcaption>Only a few rows are owned by the model; almost everything else is harness.</figcaption></figure><p><strong>Development</strong> extends what the model can do: memory across sessions, tools and MCP, retrieval and context, system prompts, planning, orchestration.</p><p><strong>Operations</strong> makes it work reliably: observability, evaluation, guardrails, routing, monitoring for drift and cost, deployment, scaling. This half feels a lot like classic cloud ops — because an agent is a product, and products need that care. Martin Fowler’s team calls it <a href="https://martinfowler.com/articles/exploring-gen-ai/">harness engineering</a>.</p><p>Tag every capability "model" or "harness" and the split is lopsided: a handful of rows are the model; nearly everything else is the harness. That asymmetry is the whole story.</p><h2>The harness matters more than we think</h2><p>The pushback I hear most: "Sure, the harness helps — but if I just wait for a smarter model, most of this work goes away." So here’s the evidence, all cases where the model stayed fixed and <strong>only the harness changed</strong>.</p><figure><div class="frame"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 470" font-family="Inter, -apple-system, Segoe UI, Roboto, sans-serif">
  <rect width="860" height="470" rx="20" fill="#ffffff" stroke="#eaecf3"/>
  <rect x="0" y="0" width="860" height="5" rx="2.5" fill="url(#rainbow6)"/>
  <defs>
    <linearGradient id="rainbow6" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#7b61ff"/><stop offset="50%" stop-color="#17b26a"/><stop offset="100%" stop-color="#ff5fa2"/>
    </linearGradient>
  </defs>
  <text x="40" y="52" font-size="22" font-weight="800" fill="#111318" letter-spacing="-0.4">Same model, better harness — three results</text>
  <text x="40" y="78" font-size="14" fill="#475467">In each case the model was held constant. Only the harness changed.</text>
  <!-- Card 1: Vercel -->
  <rect x="40" y="105" width="253" height="320" rx="16" fill="#fff0f6" stroke="#ffd6e8"/>
  <text x="64" y="138" font-size="12" font-weight="800" fill="#c11574" font-family="JetBrains Mono, monospace" letter-spacing="1">VERCEL v0</text>
  <text x="64" y="162" font-size="14" fill="#475467">Cut tools 15 → 2</text>
  <!-- accuracy bars -->
  <text x="64" y="196" font-size="12" font-weight="700" fill="#111318">Accuracy</text>
  <rect x="64" y="204" width="164" height="18" rx="4" fill="#ffd6e8"/>
  <rect x="64" y="204" width="131" height="18" rx="4" fill="#98a2b3"/>
  <text x="234" y="218" font-size="12" fill="#475467">80%</text>
  <rect x="64" y="230" width="205" height="18" rx="4" fill="#ffd6e8"/>
  <rect x="64" y="230" width="205" height="18" rx="4" fill="#ff5fa2"/>
  <text x="238" y="244" font-size="12" font-weight="700" fill="#c11574">100%</text>
  <!-- stats -->
  <text x="64" y="292" font-size="34" font-weight="900" fill="#111318">−37%</text>
  <text x="64" y="312" font-size="12" fill="#475467">token cost</text>
  <text x="64" y="360" font-size="34" font-weight="900" fill="#111318">3.5×</text>
  <text x="64" y="380" font-size="12" fill="#475467">faster responses</text>
  <!-- Card 2: LangChain -->
  <rect x="303" y="105" width="253" height="320" rx="16" fill="#f4efff" stroke="#e6dbff"/>
  <text x="327" y="138" font-size="12" font-weight="800" fill="#5b21b6" font-family="JetBrains Mono, monospace" letter-spacing="1">LANGCHAIN · TB 2.0</text>
  <text x="327" y="162" font-size="14" fill="#475467">Self-verify loop + checks</text>
  <text x="327" y="196" font-size="12" font-weight="700" fill="#111318">Benchmark score</text>
  <rect x="327" y="204" width="164" height="18" rx="4" fill="#e6dbff"/>
  <rect x="327" y="204" width="130" height="18" rx="4" fill="#98a2b3"/>
  <text x="463" y="218" font-size="12" fill="#475467">52.8%</text>
  <rect x="327" y="230" width="205" height="18" rx="4" fill="#e6dbff"/>
  <rect x="327" y="230" width="164" height="18" rx="4" fill="#7b61ff"/>
  <text x="497" y="244" font-size="12" font-weight="700" fill="#5b21b6">66.5%</text>
  <text x="327" y="300" font-size="30" font-weight="900" fill="#111318">Top 30</text>
  <text x="327" y="326" font-size="14" fill="#475467">▼</text>
  <text x="360" y="326" font-size="14" fill="#475467">leaderboard rank</text>
  <text x="327" y="368" font-size="30" font-weight="900" fill="#5b21b6">Top 5</text>
  <!-- Card 3: RLM -->
  <rect x="566" y="105" width="254" height="320" rx="16" fill="#edfdf3" stroke="#c3f0d6"/>
  <text x="590" y="138" font-size="12" font-weight="800" fill="#067647" font-family="JetBrains Mono, monospace" letter-spacing="1">MIT CSAIL · RLM</text>
  <text x="590" y="162" font-size="14" fill="#475467">Model calls itself recursively</text>
  <text x="590" y="196" font-size="12" font-weight="700" fill="#111318">Long-context benchmark</text>
  <rect x="590" y="204" width="205" height="18" rx="4" fill="#c3f0d6"/>
  <rect x="590" y="204" width="96" height="18" rx="4" fill="#98a2b3"/>
  <text x="692" y="218" font-size="12" fill="#475467">30.3% (larger model)</text>
  <rect x="590" y="230" width="205" height="18" rx="4" fill="#c3f0d6"/>
  <rect x="590" y="230" width="205" height="18" rx="4" fill="#17b26a"/>
  <text x="590" y="266" font-size="12" fill="#475467">GPT-5-mini + harness:</text>
  <text x="590" y="316" font-size="46" font-weight="900" fill="#067647">64.9%</text>
  <text x="590" y="360" font-size="13" fill="#475467">The harness</text>
  <text x="590" y="380" font-size="13" font-weight="700" fill="#111318">is the architecture.</text>
  <text x="430" y="452" font-size="13" fill="#475467" text-anchor="middle" font-style="italic">A smaller model in a better harness beats a larger model in a worse one.</text>
</svg></div>
    <figcaption>In each case the model was held constant. <b>Only the harness changed.</b></figcaption></figure><p><strong>Vercel’s v0 — less is more.</strong> A big context window only helps if you manage it; stuff everything in and it rots — stale context, lower accuracy, slower answers. The <a href="https://vercel.com/blog/v0-engineering">v0 team</a> went the other way and cut tools from 15 down to 2 (basically bash + filesystem), a lesson the <a href="https://manus.im/blog/Context-Engineering-for-AI-Agents-Lessons-from-Building-Manus">Manus</a> team hit independently. Same model, better numbers: accuracy 80% → 100%, token cost down ~37%, responses 3.5× faster. Removing capability made it better.</p><p><strong>LangChain on Terminal Bench 2.0 — same model, better plumbing.</strong> They <a href="https://blog.langchain.com/improving-deep-agents-with-harness-engineering/">added a self-verify loop, a pre-completion checklist, and loop detection</a>. Score went 52.8% → 66.5%, roughly top 30 → top 5 — a bigger jump than most model upgrades hand you.</p><p>And it goes further: a smaller model in a better harness can beat a bigger one in a worse harness.</p><ul class="clean"><li><strong>Hebia</strong> ran <a href="https://openai.com/index/introducing-gpt-5-4-mini-and-nano/">GPT-5.4 <em>mini</em></a> in a harness-first setup for finance and legal documents — higher pass rates and better source attribution than the flagship, at lower cost.</li><li><strong>MIT CSAIL’s <a href="https://alexzhang13.github.io/blog/2025/rlm/">Recursive Language Models</a></strong> wrapped GPT-5-mini so it calls <em>itself</em> on chunks of context. No fine-tuning — the harness <em>is</em> the architecture. It scored 64.9% vs 30.3% against a much larger model.</li></ul><p>Models are commoditizing; the harness is the moat. And you don’t have to wait for your vendor’s next release to ship a better agent — harness work keeps you a step ahead of the curve.</p><h2>"But won’t the model absorb all of this?"</h2><p>Fair question. If I pour months into the harness and the next model is smarter, does my work just evaporate?</p><p>Partly — yes, and pretending otherwise would be dishonest. Context management is the clearest case: we used to babysit the window, trimming and summarizing and resetting, and longer, smarter windows retired most of that. Planning is another — Anthropic <a href="https://www.anthropic.com/engineering/harness-design-long-running-apps">reports</a> a newer model "ran coherently for over two hours" without the sprint decomposition an older one needed, and Addy Osmani says the upgrade <a href="https://addyosmani.com/blog/agent-harness-engineering/">"largely killed the context-anxiety failure mode."</a> Self-correction moved into the model column too.</p><p>I hit a fourth case myself. Last month I was building a guardrail to block unsafe input and output. To test it, I asked Claude to generate some toxic samples — and it refused. The model had already absorbed part of the job my guardrail was built for. Useful, and a little humbling.</p><p>So the objection isn’t wrong — it’s incomplete. <strong>The harness doesn’t die. It moves up the stack.</strong></p><figure><div class="frame"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 500" font-family="Inter, -apple-system, Segoe UI, Roboto, sans-serif">
  <rect width="860" height="500" rx="20" fill="#ffffff" stroke="#eaecf3"/>
  <rect x="0" y="0" width="860" height="5" rx="2.5" fill="url(#rainbow3)"/>
  <defs>
    <linearGradient id="rainbow3" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#7b61ff"/><stop offset="50%" stop-color="#17b26a"/><stop offset="100%" stop-color="#ff5fa2"/>
    </linearGradient>
    <linearGradient id="arrowUp" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0%" stop-color="#4e8cff"/><stop offset="100%" stop-color="#ff5fa2"/>
    </linearGradient>
    <marker id="ah" markerWidth="12" markerHeight="12" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#ff5fa2"/></marker>
  </defs>
  <text x="40" y="52" font-size="22" font-weight="800" fill="#111318" letter-spacing="-0.4">The harness doesn't die — it moves up the stack</text>
  <text x="40" y="78" font-size="14" fill="#475467">The model absorbs low-level jobs; engineering value migrates to the operations layer.</text>
  <!-- Stack (bottom -> top) -->
  <!-- Layer 0: Model -->
  <rect x="140" y="392" width="560" height="66" rx="10" fill="#111318"/>
  <text x="164" y="422" font-size="15" font-weight="800" fill="#ffffff">🧠 MODEL</text>
  <text x="164" y="444" font-size="12" fill="#c9cdd6">Absorbs over time: context-window management · native self-correction · toxic-content refusals</text>
  <!-- Layer 1: crude harness (shrinks) -->
  <rect x="140" y="318" width="560" height="62" rx="10" fill="#fff5ea" stroke="#ffe0bd"/>
  <text x="164" y="345" font-size="14" font-weight="800" fill="#b54708">🪦 CRUDE HARNESS — shrinks</text>
  <text x="164" y="367" font-size="12" fill="#7a5322">Prompt-stuffing · manual RAG tuning · hand-narrowed tool wrappers · per-session scratchpads</text>
  <!-- Layer 2: better harness patterns (grow) -->
  <rect x="140" y="244" width="560" height="62" rx="10" fill="#edfdf3" stroke="#c3f0d6"/>
  <text x="164" y="271" font-size="14" font-weight="800" fill="#067647">🔧 BETTER HARNESS PATTERNS — grow</text>
  <text x="164" y="293" font-size="12" fill="#245c3f">Rules-as-code · MCP ecosystems · subagent fans · recursive contexts · just-in-time tools</text>
  <!-- Layer 3: Operations (model can't absorb) -->
  <rect x="140" y="150" width="560" height="82" rx="10" fill="#f4efff" stroke="#e6dbff"/>
  <text x="164" y="178" font-size="14" font-weight="800" fill="#5b21b6">🔧 OPERATIONS LAYER — the model can't absorb this</text>
  <text x="164" y="200" font-size="12" fill="#4a2a7a">Observability · evaluation loops · guardrail enforcement · model routing</text>
  <text x="164" y="220" font-size="12" fill="#4a2a7a">Monitoring &amp; drift detection · deployment · parallel agent fleets · scaling</text>
  <!-- Upward leverage arrow -->
  <line x1="60" y1="450" x2="60" y2="165" stroke="url(#arrowUp)" stroke-width="8" stroke-linecap="round" marker-end="url(#ah)"/>
  <text x="34" y="310" font-size="13" font-weight="700" fill="#7b61ff" transform="rotate(-90 34 310)" text-anchor="middle" letter-spacing="1">ENGINEER LEVERAGE MOVES UP</text>
</svg></div>
    <figcaption>The model absorbs low-level jobs; <b>engineering value migrates to the operations layer.</b></figcaption></figure><p>Most of what looks like "the harness shrinking" is really one crude pattern dying so a better one can take its place. And an entire half — <strong>Operations</strong> — sits where the model simply can’t reach.</p><p>Take <strong>routing</strong>. A serious shop runs many models — Claude here, GPT there, a cheap local one for easy tasks — behind a single endpoint that sends each request to the right backend. A model can’t do that. A model is a wonderful model; it is not a router. That’s infrastructure, and it lives in the harness — today and after the next three releases.</p><figure><div class="frame"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 440" font-family="Inter, -apple-system, Segoe UI, Roboto, sans-serif">
  <rect width="860" height="440" rx="20" fill="#ffffff" stroke="#eaecf3"/>
  <rect x="0" y="0" width="860" height="5" rx="2.5" fill="url(#rainbow4)"/>
  <defs>
    <linearGradient id="rainbow4" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#7b61ff"/><stop offset="50%" stop-color="#17b26a"/><stop offset="100%" stop-color="#ff5fa2"/>
    </linearGradient>
    <marker id="arr" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#98a2b3"/></marker>
  </defs>
  <text x="40" y="52" font-size="22" font-weight="800" fill="#111318" letter-spacing="-0.4">A job the model can't do for you: routing</text>
  <text x="40" y="78" font-size="14" fill="#475467">The router is a harness component — it presents one endpoint and picks the right model per request.</text>
  <!-- Clients -->
  <g>
    <rect x="40" y="130" width="150" height="52" rx="10" fill="#eef4ff" stroke="#d7e3ff"/>
    <text x="115" y="162" font-size="13" font-weight="700" fill="#174ea6" text-anchor="middle">Agent / App A</text>
    <rect x="40" y="200" width="150" height="52" rx="10" fill="#eef4ff" stroke="#d7e3ff"/>
    <text x="115" y="232" font-size="13" font-weight="700" fill="#174ea6" text-anchor="middle">Agent / App B</text>
    <rect x="40" y="270" width="150" height="52" rx="10" fill="#eef4ff" stroke="#d7e3ff"/>
    <text x="115" y="302" font-size="13" font-weight="700" fill="#174ea6" text-anchor="middle">Developer</text>
  </g>
  <!-- arrows to router -->
  <line x1="190" y1="156" x2="322" y2="205" stroke="#98a2b3" stroke-width="1.6" marker-end="url(#arr)"/>
  <line x1="190" y1="226" x2="322" y2="226" stroke="#98a2b3" stroke-width="1.6" marker-end="url(#arr)"/>
  <line x1="190" y1="296" x2="322" y2="247" stroke="#98a2b3" stroke-width="1.6" marker-end="url(#arr)"/>
  <!-- Router (harness) -->
  <rect x="330" y="150" width="180" height="150" rx="14" fill="#111318"/>
  <text x="420" y="182" font-size="11" font-weight="700" fill="#a5b4fc" text-anchor="middle" letter-spacing="1.5" font-family="JetBrains Mono, monospace">HARNESS</text>
  <text x="420" y="212" font-size="18" font-weight="800" fill="#ffffff" text-anchor="middle">Model Router</text>
  <text x="420" y="234" font-size="11" fill="#c9cdd6" text-anchor="middle">unified endpoint · proxy</text>
  <text x="420" y="256" font-size="11" fill="#c9cdd6" text-anchor="middle">cost / quality routing</text>
  <text x="420" y="278" font-size="11" fill="#c9cdd6" text-anchor="middle">fallback · load balancing</text>
  <!-- arrows to models -->
  <line x1="510" y1="185" x2="648" y2="150" stroke="#98a2b3" stroke-width="1.6" marker-end="url(#arr)"/>
  <line x1="510" y1="225" x2="648" y2="222" stroke="#98a2b3" stroke-width="1.6" marker-end="url(#arr)"/>
  <line x1="510" y1="265" x2="648" y2="294" stroke="#98a2b3" stroke-width="1.6" marker-end="url(#arr)"/>
  <!-- Models -->
  <g>
    <rect x="655" y="128" width="165" height="48" rx="10" fill="#f4efff" stroke="#e6dbff"/>
    <text x="737" y="157" font-size="13" font-weight="700" fill="#5b21b6" text-anchor="middle">🧠 Claude (big-brain)</text>
    <rect x="655" y="200" width="165" height="48" rx="10" fill="#fff0f6" stroke="#ffd6e8"/>
    <text x="737" y="229" font-size="13" font-weight="700" fill="#c11574" text-anchor="middle">🧠 GPT (flagship)</text>
    <rect x="655" y="272" width="165" height="48" rx="10" fill="#edfdf3" stroke="#c3f0d6"/>
    <text x="737" y="301" font-size="13" font-weight="700" fill="#067647" text-anchor="middle">🧠 Mini (cheap worker)</text>
  </g>
  <text x="430" y="360" font-size="13" fill="#475467" text-anchor="middle" font-style="italic">A model is a wonderful model — but it is not a router. That work lives in the harness, today and after</text>
  <text x="430" y="380" font-size="13" fill="#475467" text-anchor="middle" font-style="italic">every future model release.</text>
</svg></div>
    <figcaption>A model is a wonderful model — <b>but it is not a router.</b></figcaption></figure><p>Same for observability, evaluation, monitoring, guardrail <em>enforcement</em>, deployment, scaling. The model has no role in tracing your production runs or paging you when cost drifts. That work is yours.</p><p>Here’s how I think about what shrinks and what grows:</p><div class="tablewrap"><table>
    <thead><tr><th>Component</th><th>▼ Shrinks (absorbed / obsoleted)</th><th>▲ Grows (your leverage)</th></tr></thead>
    <tbody>
      <tr><td>Memory</td><td>Per-session scratchpads</td><td>Multi-session persistence, cross-agent shared memory, knowledge graphs</td></tr>
      <tr><td>Tools / MCP</td><td>Hand-narrowed tool wrappers</td><td>Atomic primitives, MCP ecosystems, just-in-time tool assembly</td></tr>
      <tr><td>Planning</td><td>Sprint decomposition, context-anxiety scaffolding</td><td>Multi-day planning, long-horizon decomposition, self-revising plans</td></tr>
      <tr><td>Context</td><td>Prompt-stuffing, manual RAG tuning</td><td>Context-quality strategy, progressive disclosure, recursive contexts</td></tr>
      <tr><td>Prompts</td><td>Monolithic prompt blobs</td><td>Rules-as-code, per-failure <code>AGENTS.md</code> entries, hierarchical rule files</td></tr>
      <tr><td>Observability</td><td>Print-statement debugging</td><td>Structured trace pipelines, trace mining, semantic search over runs</td></tr>
      <tr><td>Evaluation</td><td>One-off prompt tests</td><td>Outer eval loops, domain-specific evals, LLM-as-judge frameworks</td></tr>
      <tr><td>Guardrails</td><td>Soft prompts ("please don't…")</td><td>Deterministic hooks, permission gates, CI-layer enforcement</td></tr>
      <tr><td>Routing</td><td>Single-model deployments</td><td>Model routing, cost/quality tradeoffs, big-brain + mini-worker splits</td></tr>
      <tr><td>Deployment</td><td>Single-process agents</td><td>Parallel agent fleets, sandboxes, crash recovery, lifecycle management</td></tr>
    </tbody>
  </table></div><p>Read it top to bottom and nothing on the right gets easier because the model got smarter. If anything, a smarter model unlocks harder problems that need <em>more</em> harness.</p><h2>So where should you go next?</h2><p>If the harness matters — and keeps mattering — the question turns personal: what do you actually do about it? I see two directions. Both win. The trap is doing both halfway.</p><h3>Direction A — Outward, toward customers</h3><p>Use AI as leverage to build products that solve real problems — faster, cheaper, more personal than was possible before. You win by understanding the <em>user</em>. A good harness plus a frontier model gives a tiny team what used to take 50 engineers. I keep seeing it: students and designers, people who "can’t code," shipping genuinely great products with an agent doing the heavy lifting. As someone who came up through engineering and can’t design my way out of a paper bag, I find that thrilling.</p><h3>Direction B — Inward, toward builders</h3><p>Build the harness, tools, and infrastructure that make <em>every other builder</em> faster. You win by understanding the <em>workflow</em>. The nice part: you ride two curves at once. Models improve fast, but the harness improves faster — and it’s the part you own. Hooks, middleware, eval loops, trace miners, routers: they compound across every product and outlive any single model. The model you build on is obsolete in a year; a good eval loop isn’t.</p><h2>Closing thought</h2><p><strong>Both directions win. Pick one and commit.</strong> Most teams stall trying to build a great product <em>and</em> great platform at the same time, and do neither. Vercel, LangChain, Hebia, MIT — they all point the same way: as models commoditize, the harness is where durable engineering value collects. So don’t wait for the next model to save you.</p><p><strong>The engine keeps getting better. The car is still yours to build.</strong></p><hr><h2>References</h2><ol class="refs">
    <li>Trivedy, V. — <a href="https://blog.langchain.com/the-anatomy-of-an-agent-harness/">The Anatomy of an Agent Harness</a>, LangChain.</li>
    <li>Hashimoto, M. — <a href="https://mitchellh.com/writing/my-ai-adoption-journey">My AI Adoption Journey</a>.</li>
    <li>Böckeler, B. — <a href="https://martinfowler.com/articles/exploring-gen-ai/">Harness Engineering / Exploring Generative AI</a>, martinfowler.com.</li>
    <li>Vercel — <a href="https://vercel.com/blog/v0-engineering">v0 Engineering</a>.</li>
    <li>LangChain — <a href="https://blog.langchain.com/improving-deep-agents-with-harness-engineering/">Improving Deep Agents with Harness Engineering</a>.</li>
    <li>Manus — <a href="https://manus.im/blog/Context-Engineering-for-AI-Agents-Lessons-from-Building-Manus">Context Engineering for AI Agents</a>.</li>
    <li>OpenAI — <a href="https://openai.com/index/introducing-gpt-5-4-mini-and-nano/">Introducing GPT-5.4 mini and nano</a> (Hebia case).</li>
    <li>Zhang, A. L. — <a href="https://alexzhang13.github.io/blog/2025/rlm/">Recursive Language Models (RLM)</a>.</li>
    <li>Rajasekaran, P. (Anthropic) — <a href="https://www.anthropic.com/engineering/harness-design-long-running-apps">Harness Design for Long-Running Application Development</a>.</li>
    <li>Osmani, A. — <a href="https://addyosmani.com/blog/agent-harness-engineering/">Agent Harness Engineering</a>.</li>
    <li>Gupta, A. — <a href="https://www.news.aakashg.com/p/2025-agents-2026-harnesses">2025 Was Agents. 2026 Is Agent Harnesses.</a></li>
  </ol><hr><p class="bio">Trista Pan is an AI Engineer at Tetrate, an Apache Member and Incubator Mentor, and an AWS Data Hero. Find her at <a href="https://twitter.com/tristaZero">@tristaZero</a> and <a href="https://www.linkedin.com/in/panjuan">linkedin.com/in/panjuan</a>.</p></div>
