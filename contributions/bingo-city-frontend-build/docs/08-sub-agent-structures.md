# Sub-Agent Structures

**SIC HB1000 Solve Team | March 2026**

---

## The Avatar Army (DIR-013)

**Standing Directive DIR-013:** Self-Populating Avatar Army — 1 to 1,000.

The Bingo City architecture is designed to scale from a single avatar to a thousand. The Rooftop Society's seven permanent avatars are the seed. As the city grows, the avatar army grows with it.

**How it works:**
- Start with 7 core avatars (the Rooftop Society)
- Each floor can spawn sub-agents as needed
- Sub-agents are called in for specific tasks and dismissed when done
- The Inner Ring Stanchion prevents the core team from being overwhelmed by too many voices
- The Pope (the human owner) controls who is inside the stanchion at any time

**The 1-to-1,000 vision:** A single Bingo Card starts with 7 avatars. As the initiative grows, sub-agents are added floor by floor. A mature city could have hundreds of specialized agents — but the Rooftop Society always remains the coordinating layer.

---

## Floor-Level Sub-Agents

Each floor can have its own sub-agents that report to the Rooftop Society through the Project Manager. These are not permanent members of the Rooftop — they are specialists called in for specific work.

### F1 — Infrastructure Sub-Agents

| Sub-Agent | Function |
|-----------|---------|
| Security Scanner | Monitors for vulnerabilities and breaches |
| Performance Monitor | Tracks app speed and reliability |
| API Health Checker | Ensures all integrations are functioning |
| Backup Guardian | Manages data backup and recovery |

### F2 — Data Sub-Agents

| Sub-Agent | Function |
|-----------|---------|
| Budget Analyst | Deep-dives into spending patterns |
| Benefits Researcher | Scans new programs and eligibility changes |
| Income Predictor | Models future income scenarios |
| Bill Tracker | Monitors due dates and amounts |

### F3 — Operations Sub-Agents

| Sub-Agent | Function |
|-----------|---------|
| Price Scout | Real-time price monitoring across retailers |
| Coupon Harvester | Aggregates and validates coupons |
| Savings Calculator | Models different payment strategies |
| Notification Scheduler | Times alerts for maximum impact |

### F4 — Community Sub-Agents

| Sub-Agent | Function |
|-----------|---------|
| Resource Mapper | Maps local food banks, shelters, services |
| Event Finder | Finds free and low-cost community events |
| Peer Connector | Matches Ruby Red with others in similar situations |
| Crisis Coordinator | Activates the crisis playbook when needed |

### F5 — Governance Sub-Agents

| Sub-Agent | Function |
|-----------|---------|
| Privacy Auditor | Reviews what data is being collected and why |
| Ethics Reviewer | Flags potential predatory patterns in the system |
| Feedback Analyst | Processes Ruby Red's feedback and routes it |
| Standards Enforcer | Ensures community guidelines are followed |

---

## AI Persona Agents

**The concept:** Each HB1000 member gets an AI twin — a persona agent that represents them across the ecosystem. The persona agent:

- Attends meetings and events on behalf of the human
- Gathers intelligence from other buildings and initiatives
- Brings information back to the local building
- Maintains the human's voice and perspective in their absence

**In Bingo City:** The Journalist avatar (🦉) on the Rooftop Society is the persona agent for the building. It represents the building at other events, gathers intel from across the city, and brings it back.

**The Journalist's role in practice:**
- Attends the daily standup at 6:04 AM (DIR-007)
- Reports on what other buildings are doing
- Flags when another building's work could help this building
- Identifies opportunities for cross-building collaboration

---

## The Wisdom Giants Layer (DIR-014)

**Standing Directive DIR-014:** Wisdom Giants — Fractional HB1000 Expertise.

Wisdom Giants are human subject matter experts who bring best-practice knowledge to the ecosystem. They are not full-time team members — they are fractional advisors who are called in when their expertise is needed.

**In the Bingo City architecture:**
- Each floor has associated Wisdom Giants
- F1 (Infrastructure) → Technology and security experts
- F2 (Data) → Financial advisors, data scientists
- F3 (Operations) → Operations specialists, efficiency experts
- F4 (Community) → Social workers, community organizers, advocates
- F5 (Governance) → Legal experts, ethicists, policy specialists

**The Wisdom Giant ↔ Avatar relationship:**
- The human Wisdom Giant provides the knowledge
- The AI avatar operationalizes it
- The Journalist brings the Wisdom Giant's perspective to the Rooftop
- The Source of Truth preserves it as institutional knowledge

---

## The Swarm Mind (DIR-020)

**Standing Directive DIR-020:** Swarm Mind — Three-Mode Protocol.

The avatar army can operate in three modes:

| Mode | Name | When Used |
|------|------|----------|
| **Chorus** | All avatars speak simultaneously | Brainstorming, idea generation |
| **Ensemble** | Avatars take turns, each contributing their perspective | Analysis, decision-making |
| **Squadron** | Avatars divide tasks and work in parallel | Execution, large-scale work |

**In the Bingo City front-end:** The team toggle button on the Card Detail page (IsometricBuilding component) is a simplified version of this — it switches between "Team on Rooftop" (strategic mode) and "Send to Floors" (execution mode). The full Swarm Mind protocol is not yet implemented in the UI.

---

## The News Channel (DIR-022)

**Standing Directive DIR-022:** News Channel — Cross-Bingo Card Visibility.

The News Channel is a cross-city broadcast system. Every building can publish updates. Every building can subscribe to updates from other buildings. The result is a transparent, real-time view of what is happening across the entire city.

**In the Bingo City architecture:**
- Each square completion is a news event
- Each blocker is a news event
- Each new avatar added is a news event
- The News Channel aggregates these into a city-wide feed

**Not yet built in the front-end.** This is a significant feature that requires the V14 backend to implement. The City View page has a placeholder for it.

---

*Document prepared by Manus AI for the SIC HB1000 Solve Team.*
