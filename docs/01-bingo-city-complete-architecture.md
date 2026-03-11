# Bingo City — Complete Architecture

**SIC HB1000 Solve Team | March 2026**

> *"It's expensive to be poor." — We're changing that.*

---

## What Bingo City Is

Bingo City is the visual operating system for the HB1000 initiative ecosystem. It is not a dashboard. It is not a project management tool. It is a **city** — a living, breathing metaphor that makes invisible AI work visible to Ruby Red in 5 seconds.

The core insight is this: a 5×5 bingo card is the perfect cognitive container for a complex initiative. Twenty-five squares. Five floors. One building. And when you have six initiatives running simultaneously, you have six buildings — a city.

The Bingo Card is described in the Standing Directives as a **Trojan Horse entry point** (DIR-012). It looks simple. It is simple. But behind each square is a complete sub-system of AI agents, data pipelines, and human wisdom.

---

## The Building Metaphor — Why It Works

The building metaphor was chosen deliberately for three reasons:

**First, it is universally understood.** Every person on earth knows what a building is. They know that work happens on floors. They know that people gather on rooftops. There is no learning curve.

**Second, it communicates hierarchy without jargon.** Floor 1 is the foundation. Floor 5 is governance. The higher you go, the more strategic the work. Ruby Red does not need to know the word "governance" — she just knows that the top floor is where the rules are made.

**Third, it scales.** One building is one initiative. Six buildings is a city. A hundred buildings is a metropolis. The metaphor holds at every scale.

---

## The Six Buildings

The current Bingo City has six buildings, each representing one initiative in the Ruby Red Maven ecosystem:

| Building | Initiative | North Star | Primary Beneficiary |
|----------|-----------|-----------|-------------------|
| **Ruby Red Maven** | The flagship — her personal AI advocate city | "A team working for you around the clock" | Ruby Red directly |
| **Budget Guardian** | Financial tracking and forecasting | "Never be surprised by your own money" | Ruby Red |
| **Benefits Navigator** | Government and social program navigation | "Every dollar she's entitled to, found" | Ruby Red |
| **Deal Hunter** | Price optimization and coupon intelligence | "The best price, every time, automatically" | Ruby Red |
| **Bill Strategist** | Bill payment optimization and negotiation | "Minimize fees. Maximize dignity." | Ruby Red |
| **Advocate** | Rights protection and bureaucracy navigation | "Speaking truth to power on her behalf" | Ruby Red |

**Important context:** These six buildings are the Ruby Red Maven city — the consumer-facing layer. The SIC HB1000 Solve Team also has its own city (with buildings for Effn Duck, Digger Cafe, Seba Hub, CashCo/Pawn Princess, etc.), but that is the **team's** city, not Ruby Red's city. The front-end built in this session is Ruby Red's city.

---

## The Five Floors

Every building in Bingo City has exactly five floors. This is not arbitrary — it maps to the five functional domains that every initiative requires to operate:

| Floor | Name | Color | Emoji | What Happens Here |
|-------|------|-------|-------|-------------------|
| **F1** | Infrastructure | Blue `#1e40af` | 🏗️ | The foundation: auth, encryption, mobile UI, APIs, offline capability |
| **F2** | Data | Green `#15803d` | 📊 | Intelligence: budget tracking, benefits monitoring, spending patterns, income |
| **F3** | Operations | Orange `#d97706` | ⚙️ | Day-to-day: deal hunting, bill strategy, emergency fund, notifications |
| **F4** | Community | Red `#dc2626` | 🤝 | Connection: advocacy, peer network, kids activities, crisis playbooks |
| **F5** | Governance | Gold `#ca8a04` | 👑 | Rules and trust: privacy controls, feedback loops, transparency, ethics |

**The floor ordering is intentional.** F1 must be built before F2 can function. F2 must be stable before F3 can operate. The building is built from the ground up, and progress is visible floor by floor.

**Each floor has exactly 5 squares.** 5 floors × 5 squares = 25 squares = one bingo card.

---

## The Rooftop

The rooftop is not a floor. It is the meeting place — the space above the work where the team gathers to coordinate, strategize, and look out for Ruby Red.

**Key design decision:** The team is positioned in the **lower-left corner** of the rooftop, with their backs toward the viewer, looking in on the meeting. This is deliberate. It represents speaking *with* Ruby Red, not lecturing *from* above. The perspective is ground-level, looking up slightly — not bird's-eye looking down. This is servant leadership made visual.

**The Inner Ring Stanchion:** A physical guard rail on the left side of the rooftop creates an inner circle. Inside the stanchion = core team (permanent, baseline setters). Outside = broader population (dynamic, called as needed). The committee can invite outsiders in as guests temporarily, but there is always a limit on how many are inside the fence.

---

## The Windows = The Bingo Squares

This is the key architectural insight that makes the building metaphor sing: **the windows on each floor ARE the bingo squares.**

Each floor has 5 windows. Each window is one square. The glow of the window indicates status:

| Status | Window Appearance | Meaning |
|--------|------------------|---------|
| `complete` | Green glow | This work is done |
| `in_progress` | Blue glow | Being worked on right now |
| `not_started` | Dark, no glow | Not yet begun |
| `blocked` | Red glow | Something is in the way |

When Ruby Red looks at the building, she is not looking at a chart. She is looking at a building where some rooms are lit and some are dark. The lit rooms are where her team is working. The dark rooms are where work hasn't started yet. This is immediately, viscerally understandable.

---

## The City View

When all six buildings are rendered together, the result is an isometric city. The buildings are arranged in a grid with isometric perspective — the same visual language as SimCity or Minecraft. Ruby Red can pan and drag to explore her city.

**The Ruby Red Maven building is featured** — larger, with an orange glow, positioned at the center of the city grid. It is her building. The others are supporting cast.

**The "Enter Building" interaction** is the primary navigation: tap a building in the city view → see the info panel → tap "Enter Building" → go to the card detail page for that initiative.

---

## Move 37 — The Deepest Insight

The architecture has a recursive quality that Tim calls "Move 37" (a reference to AlphaGo's famous unexpected move that changed the game).

The same architecture that empowers the Solve Team can be collapsed and given directly to Ruby Red. The team's city and Ruby Red's city are structurally identical. The difference is scale and ownership.

> *"It's expensive to be poor"* becomes *"It's free to have a city working for you."*

This is the moonshot. Not a better app. A city.

---

## What Is NOT in This Architecture (Yet)

The following elements are in the vision but not yet built in the front-end:

- **The News Channel** — A cross-city news feed showing what is happening across all buildings. Transparent. Anyone can visit any strategy and see what is happening.
- **AI Persona Agents** — Each HB1000 member gets an AI twin that attends events, gathers intelligence, and brings it back to the local initiative.
- **The Pope System** — Each Bingo Card has a "Pope" — the local authority who customizes their building (avatar genders, personalities, animation style on the Pixar continuum).
- **Gender/Personality Customization** — The Pope chooses male/female for each avatar, personality traits (quirky, sassy, intellectual-argumentative), and role-appropriate defaults.
- **The Animation Continuum** — A sliding scale from photorealistic human to full Pixar. The Pope picks where their city sits on this scale.

---

*Document prepared by Manus AI for the SIC HB1000 Solve Team.*  
*Source: This session's build work + Master Jeeves Complete Report (March 5, 2026)*
