# AntiGravity Prompt - AI Course Mind Map UX/UI

Use this with AntiGravity's **Import from Cursor** option.

## What to build

Build a premium, highly visual **mind-map flow section** for a Next.js + Tailwind website.  
Important: **Keep all content meaning exactly as provided**. Improve only UX/UI and information flow.

## Context

- This section appears **below an existing full-screen hero**.
- Add generous top spacing so the section does not feel cramped.
- Section title: **AI Course Mind Map**
- Add a toggle/segmented control:
  - **AI Course 0.1**
  - **AI Course 0.2**
- Switching should feel smooth and premium (flip, crossfade, or flow morph).

## Design intent (critical)

- Not raw cards or plain bullets.
- Must feel like a **connected journey**:
  - Each node emerges from previous node.
  - Use lines/curves/connectors/arrows.
- Desktop: radial or zig-zag flow mind map.
- Mobile: vertical timeline/stack with connectors.
- Keep it intuitive at a glance.
- Subtle motion only (staggered reveal, hover highlight path).
- Keep readability high.

## Tech constraints

- React + TypeScript
- Tailwind CSS
- Can use Framer Motion for transitions
- Output a reusable component:
  - `components/AICourseMindMapSection.tsx`
- Should support data-driven rendering for both courses.

---

## AI COURSE 0.1 - FULL MIND MAP CONTENT

### Core Idea
- Result-Oriented Program
- Goal: Build -> Deliver -> Earn
- Focus: First income using AI tools
- Approach: Client First -> Build Later

### Problem (Why This Exists)
Typical learning path:
- Learn -> Practice -> Search for clients
Common issues:
- Unable to find clients
- Loss of confidence
- Forgetting what was learned
- No real earning outcome

### Solution (Our Approach)
- Get Client First
- Then Build
- Then Deliver
- Immediate real-world application
- Learning + earning simultaneously

### Client Concept (Critical)
Participant must bring OWN CLIENT from:
- Friends
- Relatives
- Local businesses
- Online businesses

### Client Ownership
- Client belongs to participant (NOT program)
- Payment goes directly to participant
- Program does NOT charge client
- Program takes NO commission

### Our Role
- Guide step-by-step
- Teach tools/workflow
- Help build website
- Support until final delivery

### Participant Role
- Bring client
- Understand requirements
- Build website
- Deliver client work
- Collect payment

### Program Structure (3 Days)
Day 1:
- Intro process
- Client discussion
- Website idea and project scope

Day 2:
- Live website demo
- Tool setup and usage
- Full workflow understanding

Day 3:
- Independent build
- Deploy live website
- Ready for delivery

### If No Client
Option 1:
- Get/share clients from participants (commission-based)

Option 2:
- Build your own website portfolio

Outcome:
- Use portfolio to attract future clients

### Tools Covered
- Cursor
- Git
- MongoDB
- Vercel

### Learning Type
- Industry-standard workflow
- Real development process
- Not shortcut-based learning

### What Is Not Included
- AI image generation
- AI reels/videos
- Entertainment tools
- Surface-level tutorials

### Pricing
- Actual Value: Rs.15000
- First Batch Offer: Rs.5000

### Requirements
- Laptop + internet
- Mobile phone
- Email ID
- Basic English understanding
- Cursor subscription (~$20/month, self-paid)

### Transparency
- No hidden upsells
- No bait pricing (Rs.99/Rs.499 traps)
- No misleading marketing
- Direct access to main program

### Course Structure Clarity
- AI Course 0.1: first earning + website development
- AI Course 0.2: advanced development (mentioned, not sold here)

### Final Outcome
- Build real website
- Deliver to real client
- Earn first income
- Gain confidence

### Target Audience
- Serious learners
- People who want to earn using AI
- Action-oriented individuals

### CTA
- Limited seats
- Join / DM to enroll

---

## AI COURSE 0.2 - FULL MIND MAP CONTENT

### Core Idea
- Advanced Program (Next Level)
- Goal: Build -> Scale -> Automate -> Earn More
- Focus: From Website Builder -> Software Creator
- Approach: System Thinking + Real Development

### Problem (Why This Exists)
After Course 0.1/basic learning:
- Can build only static/simple websites
- Unable to add dynamic features
- Unable to build admin panels
- Unable to handle complex client requirements
- Limited earning potential
- No scalability
- No automation (manual work increases)

### Solution (Our Approach)
Move from:
- Website creation -> Software-level development

Introduce:
- Backend systems
- Automation workflows
- Scalable architecture

Focus on:
- Real-world client needs
- Advanced implementation

### Transformation
Before:
- Basic website builder
- Limited features
- Small clients
- Low pricing

After:
- Software/system builder
- Advanced features
- Bigger clients
- Higher income potential

### Tools Covered
- Google Console
- Firebase
- Railway
- n8n (automation platform)

### What You Will Build
- Dynamic websites
- Admin dashboards/panels
- Authentication systems (login/signup)
- Backend-connected applications
- Automation workflows
- End-to-end software solutions

### Automation Capabilities (n8n)
- Workflow automation
- Data flow between tools
- Task automation (reduce manual work)
- Client process automation

### Learning Type
- System design thinking
- Industry-standard practices
- Real development workflows
- Not tool-based shortcuts

### Scalability Focus
- Build reusable systems
- Handle multiple clients
- Deliver faster
- Increase pricing per project

### Client Value Upgrade
With 0.1:
- Basic websites

With 0.2:
- Full solutions (dashboards, automation, data-driven systems)

- Higher value -> Higher payments

### Pricing
- Actual Value: Rs.25000
- First Batch Offer: Rs.10000

### Requirements
- Completion of 0.1 (recommended) OR basic website/tool workflow understanding
- Laptop + Internet
- Email ID
- Basic English

### What This Course Is Not
- Not beginner-friendly basics
- Not AI entertainment tools
- Not shortcut-based learning
- Not theory-heavy

### Transparency
- No hidden upsells
- No fake pricing strategy
- Direct advanced program

### Relation to 0.1
- 0.1: first client + first earning
- 0.2: advanced systems + scaling income
- Both are independent programs
- 0.2 is NOT sold inside 0.1

### Final Outcome
- Build dynamic/scalable apps
- Deliver high-value solutions
- Automate workflows
- Increase earning potential

### Target Audience
- Completed 0.1 OR already building websites
- Want next level growth
- Serious long-term learners

### CTA
- Limited seats
- Join / Contact to enroll

---

## Required output format (strict)

Return your response in exactly these sections:

1. `## FILE_TREE`
   - Show only the files you are creating/updating.
   - Example:
     - `components/AICourseMindMapSection.tsx`
     - `styles/ai-course-mindmap.css` (only if needed)

2. `## COMPONENT_CODE`
   - Provide complete code for `components/AICourseMindMapSection.tsx`.
   - Must be copy-paste ready TypeScript React.
   - Include data structures for both 0.1 and 0.2 in same file (or exported constants).

3. `## OPTIONAL_STYLE_CODE`
   - Only if extra CSS is necessary beyond Tailwind.
   - If not needed, write: `None`.

4. `## INTEGRATION_STEPS`
   - Exact steps to integrate into existing `pages/index.tsx`.
   - Keep to 5-10 short bullets.

5. `## MOBILE_BEHAVIOR`
   - 4-8 bullets explaining responsive behavior and connector fallback on small screens.

6. `## ACCESSIBILITY_NOTES`
   - 4-8 bullets (keyboard, aria labels, contrast, reduced motion).

Do not return explanations outside these sections.
