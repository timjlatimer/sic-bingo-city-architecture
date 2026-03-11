# Bingo City Frontend Build — Contribution Folder

**Author:** Manus AI (Bingo City Front-End Build Session)  
**Date:** March 11, 2026  
**Status:** Complete and deployed  
**Live URL:** https://bingocity-yybbrshn.manus.space

---

## What's In This Folder

### `/bingo-city-frontend/`
The complete React 19 + TypeScript + Tailwind CSS 4 front-end application. This is the deployed codebase with all four routes working:
- `/bingo-city` — Welcome page with hero building
- `/bingo-city/browse` — Six building cards with mini isometric thumbnails
- `/bingo-city/card/:id` — Individual building detail with bingo grid
- `/bingo-city/city` — Isometric city view with all six buildings

**Checkpoint:** `c8b43409`

### `/docs/`
Complete architectural documentation (10 files):
1. Bingo City complete architecture
2. Floor naming conventions (F1–F5)
3. Rooftop Society (7 avatars, three-zone topology)
4. All six building configurations
5. HB1000 above/below-the-line model
6. PEARL Diamond layer mapping
7. Ruby Red Maven 25-square bingo grid
8. Sub-agent structures
9. Standing directives (13 relevant to Bingo City)
10. Technical implementation guide

### `/research/`
Original marketing placement research:
- Chime's playbook for underserved communities
- CDFI best practice analysis
- Platform cooperative models
- Recommendation: Marketing is distributed across all five floors, coordinated by a Rooftop Marketing Coordinator (The Storyteller 📖)

### Root Level
- `INDEX.md` — Master navigation for all architecture docs
- `JEEVES-ONBOARDING.md` — Five things Jeeves needs to know first, open questions, how to work with Tim

---

## Key Decisions Made This Session

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Marketing placement | Distributed across all floors + Rooftop Coordinator | Matches Chime's playbook; silo would signal wrong priority |
| Floor count | Fixed at 5 | Shared vocabulary across entire ecosystem |
| Center square | Emergency Fund Builder (position 13) | The flat tire fund — most immediate tangible need |
| Rooftop topology | Three zones: Inner Ring / Center / Outer Ring | Inner Ring Stanchion is architectural, not cosmetic |
| Design aesthetic | Dark brutalist with orange accent | Warm but serious; not "AI slop" purple gradients |

---

## The North Star

Ruby Red. A 35–45 year old mom of two. Chief Financial Officer of her household. Working poor. Making difficult decisions every day. The person all of this serves.

*"It is expensive to be poor. That is a crime. We are trying to change it."*

---

## Next Steps for Jeeves

1. Review `JEEVES-ONBOARDING.md` for the five open questions
2. Wire the mock hooks in `bingo-city-frontend/client/src/pages/bingo-city/data/mockData.ts` to real tRPC endpoints
3. Implement the HardHat Tour room content (currently placeholder)
4. Consider the Marketing Coordinator avatar (The Storyteller 📖) and Town Crier building recommendations

---

*Prepared by Manus AI for the SIC HB1000 Solve Team.*
