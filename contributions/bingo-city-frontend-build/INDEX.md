# SIC Bingo City Architecture — Master Index

**Repository:** `sic-bingo-city-architecture`  
**Prepared by:** Manus AI (Bingo City Front-End Build Session)  
**Date:** March 11, 2026  
**For:** Master Jeeves (learning-loop-dashboard session) to pull, review, and iterate  
**North Star:** *"It's expensive to be poor." — We're changing that.*

---

## Purpose of This Repository

This repository is a full-fidelity brain dump of everything the Manus AI Bingo City front-end build session knows about the SIC HB1000 Bingo City architecture. It is designed to be consumed by the Jeeves learning-loop-dashboard agent as a knowledge transfer package — not a clean summary, but the real thing: decisions, nuance, code architecture, data models, and the messy context of how we arrived at each choice.

It also contains original research on the marketing placement question: **where should Marketing live across the entire HB1000 architecture?**

---

## What's In Here

### `/docs/` — Core Architecture Documents

| File | What It Contains |
|------|-----------------|
| `01-bingo-city-complete-architecture.md` | Full building architecture: 6 buildings, 5 floors each, all naming conventions, the complete system |
| `02-floor-naming-conventions.md` | Floor identity system — F1–F5 names, colors, emojis, and the reasoning behind each |
| `03-rooftop-society-complete.md` | All 7 rooftop avatars, their zones (Inner Ring / Center / Outer), roles, and the stanchion topology |
| `04-building-configs-all-six.md` | Per-building configurations: Ruby Red Maven, Budget Guardian, Benefits Navigator, Deal Hunter, Bill Strategist, Advocate |
| `05-hb1000-model-above-below-line.md` | The HB1000 brain model — above the line (strategic) vs below the line (tactical), and how Bingo City sits in it |
| `06-pearl-diamond-layer-mapping.md` | PEARL Diamond framework and how Bingo City maps to each layer |
| `07-ruby-red-maven-25-squares.md` | Complete 25-square bingo grid for the Ruby Red Maven card, with statuses, owners, and descriptions |
| `08-sub-agent-structures.md` | Sub-agent architecture within floors — the avatar army, AI persona agents, and journalist network |
| `09-standing-directives-relevant.md` | The 23 standing directives most relevant to Bingo City architecture |
| `10-technical-implementation.md` | Front-end code architecture: React 19 + TypeScript, component map, tRPC hooks, design tokens |

### `/research/` — Marketing Placement Research

| File | What It Contains |
|------|-----------------|
| `marketing-placement-research.md` | Full original research: where Marketing lives at each level of the HB1000 architecture, with best-practice references from social enterprise and platform cooperative literature |

### `/data-model/` — TypeScript Data Architecture

| File | What It Contains |
|------|-----------------|
| `types-and-interfaces.md` | All TypeScript interfaces: `BingoSquare`, `BingoCard`, `RooftopAvatar`, `FloorInfo` |
| `mock-data-complete.md` | Full mock data dump: all 25 Ruby Red Maven squares, 6 mock cards, rooftop avatars, floor definitions |
| `trpc-integration-guide.md` | How Jeeves wires the mock hooks to real tRPC endpoints |

### `/directives-reference/` — Standing Directives Summary

| File | What It Contains |
|------|-----------------|
| `architecture-directives.md` | All 12 architecture-specific directives (DIR-012 through DIR-023) with full detail |

### `/screenshots/` — Visual Reference

| File | What It Contains |
|------|-----------------|
| `README.md` | Note on visual assets — CDN URLs for the 5 PNG reference images |

---

## Critical Context for Jeeves

### What This Session Built

This Manus session built the **consumer-facing Bingo City front-end** — a React 19 + TypeScript + Tailwind CSS 4 application with:

- **Welcome page** (`/bingo-city`) — Hero building visual with rooftop team, "Just Show Me" and "Pick a Card" CTAs, stats strip
- **Browse page** (`/bingo-city/browse`) — Grid of 6 initiative cards with mini isometric building thumbnails
- **Card Detail page** (`/bingo-city/card/:id`) — Full IsometricBuilding component, team toggle, 5×5 bingo grid, rooftop society roster
- **City View** (`/bingo-city/city`) — CSS/SVG isometric city with 6 buildings, drag/pan, "Enter Building" navigation, "Join the City" first-visit overlay

**Live URL:** `https://bingocity-yybbrshn.manus.space`  
**GitHub repo:** `timjlatimer/master-jeeves-transfer` (under `bingo-city-frontend/`)  
**Latest checkpoint:** `c8b43409`

### What This Session Did NOT Build

- The V14 Learning Loop Mission Control dashboard (that is Jeeves' domain)
- Real tRPC endpoints (all data is mock — Jeeves wires these)
- The database schema for bingo cards and squares
- Authentication / user management
- The Telegram integration

### The Integration Handoff

Jeeves needs to:
1. Copy `client/src/pages/bingo-city/` into the V14 dashboard project
2. Add 4 routes to `App.tsx` (see `/data-model/trpc-integration-guide.md`)
3. Replace 3 mock hooks in `mockData.ts` with real tRPC calls
4. Ensure shadcn/ui components are installed (`Button`, `Card`, `Badge`, `Dialog`)

---

## The North Star (Never Forget This)

When Ruby Red lands on this page, she understands in 5 seconds:

> *"This is a team of AI helpers organized into a bingo card. Each square is something they're building for me. I can see the progress."*

She is a 35–45 year old mom of two. She is the Chief Financial Officer of her household. She is making difficult decisions every day — does she put something back in the grocery line? Does she let the kids go to the $30 extracurricular? How does she pay for the flat tire? She is the working poor, left out and left behind, unbanked and underbanked. She is Ruby Red.

**If she can't understand the system in 5 seconds, the design has failed.**

---

*"It's expensive to be poor." — We're changing that.*  
*SIC HB1000 Solve Team — March 2026*
