# Building Configurations — All Six Buildings

**SIC HB1000 Solve Team | March 2026**

---

## Overview

The current Ruby Red Maven city has six buildings. Each building is a complete initiative with its own 25-square bingo card, its own Rooftop Society, and its own North Star. All six buildings share the same five-floor structure (F1 Infrastructure through F5 Governance) and the same seven-avatar Rooftop Society topology.

The data below represents the **mock data** built into the current front-end. Jeeves will replace this with real database records.

---

## Building 1: Ruby Red Maven 🏠

**ID:** `ruby-red-maven`  
**Owner:** Ruby Red  
**Description:** Your personal team of AI advocates, working around the clock to make life less expensive.  
**North Star:** "A team working for you around the clock"  
**Status:** 8 complete | 8 in progress | 1 blocked | 32% overall  
**Featured:** Yes — this is the flagship building, displayed prominently in the city view

**Floor breakdown:**
- F1 Infrastructure: 3/5 complete
- F2 Data: 4/5 complete  
- F3 Operations: 1/5 complete (Emergency Fund Builder in progress — center square ⭐)
- F4 Community: 0/5 complete (1 blocked)
- F5 Governance: 0/5 complete (1 in progress)

**Full 25-square grid:** See `/docs/07-ruby-red-maven-25-squares.md`

---

## Building 2: Budget Guardian 💰

**ID:** `budget-guardian`  
**Owner:** Financial Team  
**Description:** Tracks every dollar. Forecasts shortfalls before they happen. Never be surprised by your own money.  
**North Star:** "Never be surprised by your own money"  
**Status:** 12 complete | 8 in progress | 0 blocked | 48% overall  
**Color accent:** Green (money, growth)

**Floor breakdown (mock):**
- F1 Infrastructure: 4/5 complete
- F2 Data: 5/5 complete ✓ (full floor done)
- F3 Operations: 2/5 complete
- F4 Community: 1/5 complete
- F5 Governance: 0/5 complete

**Key squares (notable):**
- Budget Forecasting Engine (F2, complete)
- Payday Countdown (F2, complete)
- Overdraft Prevention (F3, in progress)
- Savings Automation (F3, in progress)

---

## Building 3: Benefits Navigator 📋

**ID:** `benefits-navigator`  
**Owner:** Policy Team  
**Description:** Monitors all programs Ruby Red qualifies for. Auto-applies. Finds money she didn't know existed.  
**North Star:** "Every dollar she's entitled to, found"  
**Status:** 6 complete | 10 in progress | 2 blocked | 24% overall  
**Color accent:** Blue (trust, government, official)

**Floor breakdown (mock):**
- F1 Infrastructure: 3/5 complete
- F2 Data: 2/5 complete
- F3 Operations: 1/5 complete
- F4 Community: 0/5 complete (2 blocked — bureaucratic friction)
- F5 Governance: 0/5 complete

**Key squares (notable):**
- Benefits Eligibility Scanner (F2, in progress)
- Auto-Application Engine (F3, in progress)
- Government Portal Integration (F1, blocked — API access issues)
- Appeal Support System (F4, blocked — legal complexity)

**Note:** This building has the most blockers because it operates in the bureaucratic world — one of the Three Gangster Worlds. Government systems are not designed for Ruby Red.

---

## Building 4: Deal Hunter 🔍

**ID:** `deal-hunter`  
**Owner:** Commerce Team  
**Description:** Scans prices, finds coupons, optimizes the grocery list. The best price, every time, automatically.  
**North Star:** "The best price, every time, automatically"  
**Status:** 15 complete | 5 in progress | 0 blocked | 60% overall  
**Color accent:** Orange (energy, savings, action)

**Floor breakdown (mock):**
- F1 Infrastructure: 5/5 complete ✓
- F2 Data: 5/5 complete ✓
- F3 Operations: 4/5 complete
- F4 Community: 1/5 complete
- F5 Governance: 0/5 complete

**Key squares (notable):**
- Price Comparison Engine (F2, complete)
- Grocery List Optimizer (F3, complete)
- Coupon Aggregator (F3, complete)
- Store Loyalty Program Manager (F3, in progress)

**Note:** Deal Hunter is the most "complete" building in the mock data — 60% done. This reflects that price comparison technology is mature and well-understood.

---

## Building 5: Bill Strategist 📅

**ID:** `bill-strategist`  
**Owner:** Finance Team  
**Description:** Optimizes payment order. Minimizes late fees. Negotiates on her behalf. Maximize dignity.  
**North Star:** "Minimize fees. Maximize dignity."  
**Status:** 9 complete | 8 in progress | 1 blocked | 36% overall  
**Color accent:** Purple (strategy, wisdom)

**Floor breakdown (mock):**
- F1 Infrastructure: 4/5 complete
- F2 Data: 3/5 complete
- F3 Operations: 2/5 complete
- F4 Community: 0/5 complete
- F5 Governance: 0/5 complete (1 blocked)

**Key squares (notable):**
- Bill Payment Sequencer (F3, in progress)
- Late Fee Predictor (F2, complete)
- Utility Negotiation Bot (F4, not started)
- Rate Comparison Engine (F2, in progress)

---

## Building 6: Advocate ⚖️

**ID:** `advocate`  
**Owner:** Rights Team  
**Description:** Flags predatory practices. Finds free legal resources. Speaks truth to power on her behalf.  
**North Star:** "Speaking truth to power on her behalf"  
**Status:** 3 complete | 5 in progress | 3 blocked | 12% overall  
**Color accent:** Red (urgency, justice, courage)

**Floor breakdown (mock):**
- F1 Infrastructure: 2/5 complete
- F2 Data: 1/5 complete
- F3 Operations: 0/5 complete (2 blocked)
- F4 Community: 0/5 complete (1 blocked)
- F5 Governance: 0/5 complete

**Key squares (notable):**
- Predatory Practice Detector (F2, in progress)
- Legal Resource Finder (F4, blocked — partnership required)
- Complaint Filing Assistant (F3, blocked — regulatory complexity)
- Know Your Rights Database (F2, in progress)

**Note:** Advocate is the least complete building — 12% done. This reflects the reality that fighting the political and legal world on behalf of Ruby Red is the hardest problem. This is the third Gangster World: the political world. It is the most resistant to change.

---

## The Three Gangster Worlds (Context)

The six buildings collectively address the Three Gangster Worlds that make life expensive for Ruby Red:

| World | Buildings That Fight It | Nature of the Fight |
|-------|------------------------|-------------------|
| **The Political World** | Advocate, Benefits Navigator | Laws, regulations, rights, bureaucracy |
| **The Bureaucratic World** | Benefits Navigator, Bill Strategist | Government systems, paperwork, processes |
| **The Greedy Capitalist World** | Deal Hunter, Budget Guardian, Bill Strategist | Predatory pricing, fees, financial traps |

No single building fights all three worlds. The city fights them together.

---

## City Layout (Isometric Grid)

In the current city view, the six buildings are arranged in a 3×2 isometric grid:

```
     [Budget Guardian]    [Benefits Navigator]
  [Ruby Red Maven ★]    [Deal Hunter]
     [Bill Strategist]   [Advocate]
```

Ruby Red Maven is the featured building — slightly larger, with an orange glow border. It is positioned at the visual center of the city.

---

*Document prepared by Manus AI for the SIC HB1000 Solve Team.*
