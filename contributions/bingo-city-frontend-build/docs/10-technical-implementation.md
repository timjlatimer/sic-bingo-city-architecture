# Technical Implementation — Front-End Architecture

**SIC HB1000 Solve Team | March 2026**

---

## Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 19.x | UI framework |
| TypeScript | 5.6 | Type safety |
| Tailwind CSS | 4.x | Styling |
| Wouter | 3.x | Client-side routing |
| shadcn/ui | Latest | UI component library |
| Lucide React | 0.453 | Icons |

**Project path:** `/home/ubuntu/bingo-city-frontend`  
**Live URL:** `https://bingocity-yybbrshn.manus.space`  
**Latest checkpoint:** `c8b43409`

---

## File Structure

```
client/src/pages/bingo-city/
├── BingoCityWelcome.tsx      ← Route: /bingo-city
├── BingoCityBrowse.tsx       ← Route: /bingo-city/browse
├── BingoCityCard.tsx         ← Route: /bingo-city/card/:id
├── BingoCityView3D.tsx       ← Route: /bingo-city/city
├── components/
│   ├── IsometricBuilding.tsx ← Full building with floors + rooftop team toggle
│   ├── BingoGrid.tsx         ← 5×5 interactive grid (25 cells)
│   ├── RooftopTeam.tsx       ← 7-avatar three-zone layout
│   ├── FloorStack.tsx        ← Mini/full 5-floor stack
│   ├── HardHatTour.tsx       ← 5-room backstage tour dialog
│   └── StatsStrip.tsx        ← Stats bar (buildings, squares, roles)
└── data/
    └── mockData.ts           ← All types, mock data, and tRPC-style hooks
```

---

## Routes (App.tsx)

```tsx
import BingoCityWelcome from "./pages/bingo-city/BingoCityWelcome";
import BingoCityBrowse  from "./pages/bingo-city/BingoCityBrowse";
import BingoCityCard    from "./pages/bingo-city/BingoCityCard";
import BingoCityView3D  from "./pages/bingo-city/BingoCityView3D";

<Route path="/bingo-city"           component={BingoCityWelcome} />
<Route path="/bingo-city/browse"    component={BingoCityBrowse} />
<Route path="/bingo-city/card/:id"  component={BingoCityCard} />
<Route path="/bingo-city/city"      component={BingoCityView3D} />
```

---

## Component Reference

### IsometricBuilding.tsx

The hero component. Renders a 5-storey building with:
- Glowing windows (status-colored) for each of the 25 squares
- Floor labels (F1–F5) with names and emojis
- Rooftop avatars (3 key avatars: Companion, Situations Manager, Voice of Concern)
- Team toggle button: "Team on Rooftop" ↔ "Send to Floors" with opacity animation

**Props:**
```typescript
interface IsometricBuildingProps {
  squares: BingoSquare[];
  avatars: RooftopAvatar[];
  floors: FloorInfo[];
  onFloorClick?: (floorNumber: number) => void;
  activeFloor?: number | null;
}
```

**Used by:** BingoCityWelcome (hero), BingoCityCard (detail)

---

### BingoGrid.tsx

The 5×5 interactive bingo grid.

**Features:**
- 25 cells, each showing position number, title, and status icon
- Status colors: gray (not started), blue (in progress), green (complete), red (blocked)
- Center square (position 13) has star marker ⭐
- Floor row highlighting when a floor is clicked in the building
- Status legend above the grid

**Props:**
```typescript
interface BingoGridProps {
  squares: BingoSquare[];
  activeFloor?: number | null;
  onSquareClick?: (square: BingoSquare) => void;
}
```

---

### RooftopTeam.tsx

The full 7-avatar rooftop society display.

**Variants:**
- `compact` — 3 key avatars (Companion, Situations Manager, Voice of Concern)
- `full` — All 7 avatars in three-zone layout (Inner Ring | Center | Outer Ring)

**Props:**
```typescript
interface RooftopTeamProps {
  avatars: RooftopAvatar[];
  variant?: "compact" | "full";
}
```

---

### FloorStack.tsx

The mini building thumbnail used in Browse cards.

**Variants:**
- `mini` — 5 narrow colored bars, no text
- `full` — Full-width bars with floor labels and progress counts

---

### HardHatTour.tsx

A shadcn Dialog with 5-room backstage tour.

**Tour rooms (current mock content):**
1. F1 Infrastructure — "The Engine Room"
2. F2 Data — "The Intelligence Center"
3. F3 Operations — "The War Room"
4. F4 Community — "The Town Square"
5. F5 Governance — "The Council Chamber"

**CDN image URLs** (from mockData.ts):
```typescript
export const IMAGES = {
  rooftopPixar:    "https://cdn.../bingo_rooftop_pixar.png",
  annotatedV2:     "https://cdn.../bingo_rooftop_annotated_v2.png",
  infographic:     "https://cdn.../bingo_city_infographic.png",
  rooftopVisual:   "https://cdn.../bingo_rooftop_visual.png",
  rooftopAnnotated:"https://cdn.../bingo_rooftop_annotated.png",
};
```

---

### BingoCityView3D.tsx

The isometric city view with all 6 buildings.

**Features:**
- CSS/SVG isometric rendering (no Three.js — pure CSS transforms)
- Drag/pan to explore the city
- Click a building → info panel with building stats
- "Enter Building" button → navigates to `/bingo-city/card/:id`
- "Join the City" first-visit overlay (localStorage persistence)
- Building selection state with orange highlight ring

**City layout:** 6 buildings in a 3×2 isometric grid. Ruby Red Maven is featured (larger, orange glow).

---

## Design Tokens

```css
/* Primary accent */
--orange: #ff8833;
--orange-deep: #ff6600;

/* Background */
--bg-dark: #0a0a14;
--bg-darker: #0c0c1a;

/* Floor colors */
--f1-blue:   #1e40af;
--f2-green:  #15803d;
--f3-orange: #d97706;
--f4-red:    #dc2626;
--f5-gold:   #ca8a04;

/* Typography */
font-family: monospace (labels, section headers)
font-family: system-ui (body text)
```

---

## Mock Data → tRPC Integration Guide

### Current Mock Hooks (in mockData.ts)

```typescript
export function useBingoCards(): { data: BingoCard[] }
export function useBingoCard(id: string): { data: BingoCard | undefined }
export function useBingoSquares(cardId: string): { data: BingoSquare[] }
export function useRooftopAvatars(): { data: RooftopAvatar[] }
```

### Replace With (tRPC)

```typescript
// In BingoCityBrowse.tsx
const { data: cards } = trpc.bingoCards.list.useQuery();

// In BingoCityCard.tsx
const { data: card }    = trpc.bingoCards.getById.useQuery({ id });
const { data: squares } = trpc.bingoSquares.getByCardId.useQuery({ cardId: id });
const { data: avatars } = trpc.rooftopAvatars.list.useQuery();
```

### Expected tRPC Endpoints

| Endpoint | Input | Returns |
|----------|-------|---------|
| `trpc.bingoCards.list` | none | `BingoCard[]` |
| `trpc.bingoCards.getById` | `{ id: string }` | `BingoCard` |
| `trpc.bingoSquares.getByCardId` | `{ cardId: string }` | `BingoSquare[]` |
| `trpc.rooftopAvatars.list` | none | `RooftopAvatar[]` |

---

## Known Issues and Technical Debt

| Issue | Severity | Notes |
|-------|----------|-------|
| Rooftop Society appears twice on Card Detail | Medium | Remove from building panel OR remove from below-grid section |
| Card Detail mobile layout | Low | Two-column layout is tight at 375px — consider stacking below 640px |
| HardHatTour room content | Low | Currently placeholder text — needs real content |
| City View building count | Low | Hard-coded to 6 buildings — should be dynamic from tRPC |
| Team toggle animation | Low | Opacity fade is functional but not Pixar-quality |

---

*Document prepared by Manus AI for the SIC HB1000 Solve Team.*
