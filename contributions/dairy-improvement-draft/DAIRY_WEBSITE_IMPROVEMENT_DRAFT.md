# DAIRY WEBSITE IMPROVEMENT DRAFT
## Eight Centuries of the Dairy Cow — V2 Build Plan

**Document Type:** Pre-Implementation Draft — For Tim HB1000 Review and Approval  
**Prepared by:** Manus AI — SIC HB1000 Solve Team  
**Date:** March 18, 2026  
**Protocol:** Iron Brief v1.4 | V13 Learning Loop | Watchman v2.1  
**Status:** DRAFT — Do Not Implement Until Approved  
**Current J-Curve Score:** 71 / 110 (TIER 2: GOOD)  
**Target J-Curve Score:** 90–95 / 110 (TIER 3: EXTRAORDINARY)

---

## PART 1 — NORTH STAR INVESTIGATION FINDINGS

### What Was Searched

The following sources were exhaustively searched for a North Star declaration Tim made for the dairy cow website project:

| Source | Result |
|:---|:---|
| `/home/ubuntu/.history/compacted-history-S5UD9zKmwEfVpt2jDE2dg9-1.jsonl` | No explicit North Star found |
| `/home/ubuntu/.history/compacted-history-K8DD4tT6F274m3wvVhEuV9-1.jsonl` | **File does not exist in this sandbox** |
| `github.com/timjlatimer/sic-bingo-city-architecture` | No dairy North Star document found |
| `github.com/timjlatimer/mavens-knowledge-vault` | No dairy North Star document found |
| `github.com/timjlatimer/dairy-cow-selective-breeding` | No BRIEF.md, no North Star file, no README |
| `github.com/timjlatimer/dairy-cow-longread` | No BRIEF.md, no North Star file, no README |
| `/home/ubuntu/upload/Pasted_content_73.txt` | Bingo City architecture brief — no dairy content |

### Critical Finding

**No explicit North Star was ever declared by Tim for the dairy cow website project.** The compacted history file Tim referenced (`K8DD4tT6F274m3wvVhEuV9`) does not exist in this sandbox environment — it may belong to a different Manus session. The V13 Learning Loop assessment (completed March 18, 2026, now saved at `/home/ubuntu/DAIRY_WEBSITE_V13_LEARNING_LOOP.md` and pushed to `github.com/timjlatimer/sic-bingo-city-architecture/contributions/dairy-v13-learning-loop/`) explicitly documented this gap:

> *"North Star declared — ✅ PASS — Declared above — **inferred from project context**"*

The assessor wrote a North Star based on inference, not a Tim declaration. This is a process gap, not a content gap.

### Proposed North Star for Tim's Confirmation

Based on the project content, the team's mission, and the Ruby Red lens, the following North Star is proposed. **Tim must confirm, revise, or replace this before implementation begins.**

> **PROPOSED NORTH STAR (v1 — Awaiting Tim Confirmation):**
>
> *"Build a single, publicly accessible, beautifully crafted interactive website that tells the 800-year story of how human selection pressure transformed the dairy cow — using it as a lens to understand how systems, institutions, and power shape outcomes for ordinary people. The site serves the SIC HB1000 Solve Team's Reference Library and demonstrates the team's commitment to rigorous, empathetic, evidence-based thinking."*

**Why this North Star (rationale):**
The dairy cow story is not just agricultural history. It is a story about what happens when a single optimization metric is applied relentlessly — yield, yield, yield — at the expense of resilience, diversity, and welfare. This is directly analogous to the systems Ruby Red navigates every day: financial systems optimized for extraction, bureaucratic systems optimized for compliance, political systems optimized for incumbency. The dairy cow is a teaching tool. The North Star should reflect that.

**What the North Star explicitly excludes:**
- Ruby Red is NOT the primary audience for this site (she is the lens through which we interpret the story, not the reader)
- This is a Reference Library piece, not a client-facing tool
- The goal is scholarly credibility + accessibility, not conversion or engagement metrics

---

## PART 2 — IRON BRIEF v1.4 — FORMAL BRIEF FOR V2 BUILD

*This is the brief that should have been written before V1 was built. It is written now to govern V2.*

---

### IRON BRIEF — DAIRY COW WEBSITE V2

**Project Name:** Eight Centuries of the Dairy Cow — Unified Interactive Website  
**Brief Version:** v1.0  
**Date:** March 18, 2026  
**Brief Owner:** Tim HB1000 (SIC HB1000 Solve Team)  
**Build Agent:** Manus AI  
**Protocol:** Iron Brief v1.4

---

**North Star** *(pending Tim confirmation)*

> Build a single, publicly accessible, beautifully crafted interactive website that tells the 800-year story of how human selection pressure transformed the dairy cow — using it as a lens to understand how systems shape outcomes for ordinary people. The site serves the SIC HB1000 Solve Team's Reference Library.

**Audience**

The primary audience is the SIC HB1000 Solve Team — subject matter experts, wisdom giants, and best-practice junkies who use this as a reference piece. The secondary audience is any intellectually curious person who encounters the site. Ruby Red is the interpretive lens (the story is told with her world in mind) but she is not the primary reader.

**Scope**

One unified website. The separate `dairy-cow-longread` repository is to be abandoned. All content — interactive timeline, visual assets, research paper narrative, and full citations — lives in a single deployable site.

**Success Criteria**

| Criterion | Measurable Standard |
|:---|:---|
| Factual accuracy | All headline statistics verified; hero counter mathematically correct |
| Deployment | Site is publicly accessible via a live URL |
| Citations | All 36 sources present and accessible; inline citations in research paper tab |
| Visual quality | At least 3 original images (not stock placeholders) |
| Research paper | Full longread narrative accessible as a dedicated tab |
| Ruby Red connection | At least one section explicitly connects the story to household economics |
| Brief compliance | This BRIEF.md committed to the repo before any code is written |
| J-Curve target | Score of 90–95 on next V13 assessment |

**Deployment Target**

Manus webdev platform (single static site). GitHub repos remain as source of truth but the live site is deployed via Manus.

**Out of Scope**

- Backend, database, user accounts
- Mobile app
- Any new research beyond what is already in the two repos
- Ruby Red-facing tools or financial calculators

**Autonomy Constraints**

The following decisions require Tim's explicit approval before proceeding:
- Any change to the North Star statement
- Any change to the headline statistics (97 litres/day, 69× multiplier)
- Any structural change to the tab architecture
- Deployment to a new platform

---

## PART 3 — CURRENT STATE ASSESSMENT SUMMARY

*Source: V13 Learning Loop Phase Ledger, March 18, 2026*

### J-Curve Score Breakdown (Current)

| Dimension | Weight | Raw Score | Weighted Score | Key Gap |
|:---|:---|:---|:---|:---|
| Content Accuracy & Research | 20% | 84 | 16.8 | Hero counter discrepancy (80 vs 69) |
| Narrative Coherence | 10% | 78 | 7.8 | Missing timeline entries; no Ruby Red connection |
| Design & Communication | 15% | 82 | 12.3 | No images; no data visualizations |
| Code Quality & Functionality | 15% | 76 | 11.4 | Counter bug; chart containers empty |
| Deployment & Accessibility | 20% | 58 | 11.6 | Site not deployed; not publicly accessible |
| Process Compliance (Iron Brief) | 10% | 52 | 5.2 | No brief, no North Star declaration |
| Drift Detection (Watchman) | 10% | 55 | 5.5 | Hero counter factual error; dual sites undocumented |
| **TOTAL** | **100%** | — | **70.6** | **Rounded: 71 / 110** |

### Watchman Critical Findings (Must Fix)

1. **CRITICAL — Hero counter factual inconsistency:** `data-target="80"` but 97 ÷ 1.4 = 69.3×. The most prominent visual element on the site displays a mathematically unsupported number.
2. **CRITICAL — Site not deployed:** Neither repo has GitHub Pages enabled. The work is not publicly accessible.
3. **HIGH — No formal brief:** No BRIEF.md, no North Star declaration in either repo.
4. **HIGH — Dual deliverable without explanation:** Two repos for one brief, relationship undocumented.
5. **HIGH — Peak yield presented as typical:** 97 litres/day is peak elite performance; national average is ~31 litres/day.
6. **MEDIUM — No images:** A story about visual transformation told entirely in text.
7. **MEDIUM — No Ruby Red connection:** The story's relevance to working families is never made explicit.

---

## PART 4 — ALL PROPOSED IMPROVEMENTS

### TIER 1 — CRITICAL FIXES (Score impact: +8 to +12 points)

---

#### FIX 1: Hero Counter Correction (69×)

**Current state:** `data-target="80"` — renders approximately 72× in browser  
**Correct value:** 69× (97 ÷ 1.4 = 69.3)  
**Proposed change:**
- Change `data-target="80"` to `data-target="69"`
- Update subtitle to read: *"From a medieval animal producing 1.4 litres a day to a modern Holstein yielding up to 97 litres — approximately 69× more milk in 800 years."*
- Add a footnote below the hero stat: *"Peak daily yield for top-producing Holstein cows. The US national average is approximately 31 litres/day, representing a ~22× increase since 1950 when systematic records began."*

**Score impact:** +4 points (Content Accuracy dimension)  
**Effort:** 5 minutes

---

#### FIX 2: Deployment — Single Live URL

**Current state:** Site exists only in GitHub repos; not publicly accessible  
**Proposed change:** Deploy the unified V2 site via Manus webdev platform  
**Live URL target:** Single Manus-hosted URL containing all tabs  
**Score impact:** +8 points (Deployment & Accessibility dimension)  
**Effort:** Included in the unified build

---

#### FIX 3: Write and Commit BRIEF.md

**Current state:** No brief document in either repo  
**Proposed change:** Commit the Iron Brief above (Part 2) as `BRIEF.md` to the `dairy-cow-selective-breeding` repo before any V2 code is written  
**Score impact:** +5 points (Process Compliance dimension)  
**Effort:** 15 minutes

---

### TIER 2 — HIGH PRIORITY IMPROVEMENTS (Score impact: +10 to +15 points)

---

#### IMPROVEMENT 1: Add Hero Banner Image

**Current state:** Dark green hero with text only — no photograph or illustration  
**Proposed image:** Generated and ready for use

![Proposed Hero Banner](https://d2xsxph8kpxj0f.cloudfront.net/310519663303496813/4di4BvEAWWvH4TgGH4UNFi/dairy-hero-banner-AeTgQKJVkWvc62ZjpnT3xH.png)

*Dramatic editorial close-up of a Holstein cow's head against deep forest green, with warm golden rim lighting. National Geographic quality. Generated March 18, 2026.*

**Placement:** Full-width hero background, with text overlaid on the left half  
**Score impact:** +3 points (Design & Communication dimension)  
**Effort:** Image already generated; 30 minutes to integrate

---

#### IMPROVEMENT 2: Medieval vs. Modern Size Comparison Illustration

**Current state:** The physical transformation section describes the size difference in text only  
**Proposed image:** Generated and ready for use

![Medieval vs Modern Holstein](https://d2xsxph8kpxj0f.cloudfront.net/310519663303496813/4di4BvEAWWvH4TgGH4UNFi/dairy-medieval-vs-modern-DvJy3aniP9RFNq55eLcLUK.png)

*Scientific watercolor illustration showing a medieval cow (110cm, 250kg, 1.4L/day) beside a modern Holstein (147cm, 700kg, 97L/day) at accurate relative scale. The 2.5× size difference is immediately visible.*

**Placement:** Physical Transformation section, between the intro paragraph and the body conformation subsection  
**Score impact:** +3 points (Design & Communication dimension)  
**Effort:** Image already generated; 20 minutes to integrate

---

#### IMPROVEMENT 3: Milk Yield J-Curve Data Visualization

**Current state:** The "By the Numbers" section has stat callouts but no chart  
**Proposed image:** Generated and ready for use

![Milk Yield J-Curve Chart](https://d2xsxph8kpxj0f.cloudfront.net/310519663303496813/4di4BvEAWWvH4TgGH4UNFi/dairy-yield-chart-hKgi8pxJSi4NpDqbCJdCDp.png)

*J-curve chart showing milk yield per cow from 1226 to 2026. Dark forest green background, warm gold line. Key milestones labeled: 1226 (1.4L), 1760 (Bakewell), 1890 (Babcock test), 1950 (AI era begins), 2009 (Genomic selection), 2026 (97L). The exponential curve is immediately legible.*

**Placement:** "By the Numbers" / "The Milk Yield Explosion" section, replacing or supplementing the current stat callouts  
**Score impact:** +4 points (Narrative Coherence + Design dimensions)  
**Effort:** Image already generated; 20 minutes to integrate

---

#### IMPROVEMENT 4: Genetic Bottleneck Infographic

**Current state:** The genetic bottleneck section has an SVG funnel but it is small and text-heavy  
**Proposed image:** Generated and ready for use

![Genetic Bottleneck Infographic](https://d2xsxph8kpxj0f.cloudfront.net/310519663303496813/4di4BvEAWWvH4TgGH4UNFi/dairy-bottleneck-visual-Upj7RfHdxTCPSc8E5kz73h.png)

*Dramatic infographic showing 1,800 bull silhouettes at top narrowing through a funnel to just 2 named bulls at bottom. "99% of US Holsteins trace back to just 2 bulls." Warning label: "Effective Population Size: < 50." Dark charcoal background, gold accents.*

**Placement:** Genetic Bottleneck section, replacing the current SVG funnel  
**Score impact:** +2 points (Design & Communication dimension)  
**Effort:** Image already generated; 20 minutes to integrate

---

#### IMPROVEMENT 5: Ruby Red Connection Section

**Current state:** No section connecting the dairy cow story to working families  
**Proposed image:** Generated and ready for use

![Ruby Red Connection](https://d2xsxph8kpxj0f.cloudfront.net/310519663303496813/4di4BvEAWWvH4TgGH4UNFi/dairy-ruby-red-connection-j9WRPRAdbcEQBos78Hhg7L.png)

*Warm editorial illustration: dairy farm on left, Ruby Red at grocery store dairy aisle on right, connected by a golden thread. Caption: "What 800 years of selective breeding means for the price of milk at the grocery store."*

**Proposed section content (draft copy):**

> **What This Story Means at the Grocery Store**
>
> Eight hundred years of selective breeding has made milk cheaper, in real terms, than at almost any point in recorded history. In 1950, a litre of milk cost the average American worker approximately 20 minutes of labour. Today, it costs less than 4 minutes. That is a direct consequence of the productivity revolution described on this page.
>
> But the story is more complicated than that. The same industrial system that made milk affordable also concentrated production into fewer and larger operations, reduced the number of family dairy farms by more than 90% since 1970, and created supply chains that are vulnerable to exactly the kind of genetic fragility documented in the bottleneck section above.
>
> For Ruby Red — the household CFO stretching a budget to the next payday — milk is often the last thing she puts back on the shelf. It is a staple, not a luxury. The 800-year story of the dairy cow is, in part, the story of how a system optimised for a single metric (volume) created abundance and fragility at the same time. Understanding that trade-off is part of understanding the world she navigates.
>
> *"It's expensive to be poor."* The dairy cow's story is one of the reasons why — and one of the reasons why it doesn't have to stay that way.

**Placement:** New section after "The Future of Dairy Genetics," before the footer  
**Score impact:** +4 points (Narrative Coherence dimension — Ruby Red lens applied)  
**Effort:** 45 minutes to write and integrate

---

### TIER 3 — MEDIUM PRIORITY IMPROVEMENTS (Score impact: +5 to +8 points)

---

#### IMPROVEMENT 6: Research Paper Tab — Unified Site Architecture

**Current state:** Two separate repos; longread content not accessible from main site  
**Proposed architecture:** Single unified site with three tabs:

| Tab | Content | Source |
|:---|:---|:---|
| **Interactive Timeline** | Current main site content: timeline, stats, biological trade-offs, genetic bottleneck, future | `dairy-cow-selective-breeding` repo |
| **Research Paper** | Full longread narrative: all sections from `dairy-cow-longread` | `dairy-cow-longread` repo |
| **Sources & Citations** | All 36 numbered citations, formatted as a reference list | Currently in footer accordion of main site |

**Research Paper tab content outline:**

The Research Paper tab will contain the full narrative from the longread, organized as follows:

1. **Abstract** — The 800-year transformation in summary (3 paragraphs)
2. **The Medieval Baseline** — Walter of Henley, manorial records, 1.4 litres/day
3. **Robert Bakewell and the Empirical Revolution** — 1760–1800, the founding of systematic breeding
4. **The Data-Driven Cooperative Movement** — DHIA, butterfat testing, proved sires (1890–1950)
5. **The Cryogenic Revolution** — Artificial insemination, frozen semen, global genetics (1950–1980)
6. **The Genomic Era** — SNP chips, GEBV, the acceleration of selection (2009–present)
7. **The Great Divergence: Holstein vs. Jersey** — Volume vs. composition, the two paradigms
8. **Physical Transformation** — Size comparison, the engineered udder, body conformation
9. **The Biological Trade-Offs** — Negative energy balance, fertility decline, lameness, metabolic disorders
10. **The Genetic Bottleneck** — 1,800 bulls to 2, effective population size < 50, Ivanhoe Star case study
11. **The Future** — Crossbreeding for resilience, feed efficiency, genomic selection for methane
12. **Conclusion** — The most productive animal in the history of life on Earth — and one of the most constrained
13. **Full Reference List** — All 36 citations with complete bibliographic information

**Score impact:** +5 points (Narrative Coherence + Deployment dimensions)  
**Effort:** 3–4 hours to build the tab architecture and integrate all content

---

#### IMPROVEMENT 7: Expand the Timeline (5 Missing Entries)

**Current state:** 7 timeline entries for 800 years  
**Missing entries identified by V13 assessment:**

| Year | Entry | Significance |
|:---|:---|:---|
| c. 1800 | Shorthorn breed development (Colling brothers) | First systematic breed improvement after Bakewell |
| 1852 | Holstein-Friesian importation to North America | Winthrop Chenery imports first Holsteins to Massachusetts |
| 1885 | Holstein-Friesian Association of America founded | Formal breed registry established |
| 1940s | Commercial artificial insemination begins | First AI cooperatives in the US and UK |
| 1980s | MOET era (Multiple Ovulation Embryo Transfer) | Accelerated genetic gain before genomics |

**Score impact:** +2 points (Narrative Coherence dimension)  
**Effort:** 1 hour to research and write; 30 minutes to integrate

---

#### IMPROVEMENT 8: Clarify the 97 Litres Footnote Throughout

**Current state:** 97 litres/day presented as the representative figure without qualification  
**Proposed change:** Add a consistent footnote/callout wherever 97 litres appears:

> *"Peak daily yield for top-producing Holstein cows in elite herds. The US national average is approximately 31 litres/day (USDA NASS, 2023). Both figures represent extraordinary transformations from the medieval baseline of 1.4 litres/day."*

**Score impact:** +2 points (Content Accuracy dimension)  
**Effort:** 30 minutes

---

### TIER 4 — LOW PRIORITY / FUTURE CYCLE (Score impact: +2 to +3 points)

---

#### IMPROVEMENT 9: Accessibility Audit

**Issues identified:**
- Text size toggle button has no `aria-label`
- Timeline entries have no `role` attributes
- Color contrast in hero section not formally tested

**Proposed fix:** Add `aria-label="Adjust text size"` to toggle button; add `role="article"` to timeline cards; run automated contrast check.  
**Score impact:** +1 point  
**Effort:** 1 hour

---

#### IMPROVEMENT 10: BRIEF.md in Both Repos

**Proposed change:** Add the Iron Brief (Part 2 above) as `BRIEF.md` to both GitHub repos, with a note that the live site is now hosted on Manus.  
**Score impact:** +1 point  
**Effort:** 15 minutes

---

## PART 5 — REVISED J-CURVE SCORE PROJECTION

### How Each Improvement Contributes

| Improvement | Dimension Affected | Current Score | Score After Fix | Points Gained |
|:---|:---|:---|:---|:---|
| Fix 1: Hero counter → 69× | Content Accuracy (20% weight) | 84 → 90 | +1.2 weighted | +1.2 |
| Fix 2: Deployment (live URL) | Deployment & Accessibility (20% weight) | 58 → 85 | +5.4 weighted | +5.4 |
| Fix 3: BRIEF.md committed | Process Compliance (10% weight) | 52 → 80 | +2.8 weighted | +2.8 |
| Improvement 1: Hero banner image | Design & Communication (15% weight) | 82 → 88 | +0.9 weighted | +0.9 |
| Improvement 2: Size comparison illustration | Design & Communication (15% weight) | 88 → 92 | +0.6 weighted | +0.6 |
| Improvement 3: J-Curve chart | Narrative Coherence (10%) + Design (15%) | 78 → 85 / 92 → 95 | +1.2 weighted | +1.2 |
| Improvement 4: Bottleneck infographic | Design & Communication (15% weight) | 95 → 97 | +0.3 weighted | +0.3 |
| Improvement 5: Ruby Red section | Narrative Coherence (10% weight) | 85 → 93 | +0.8 weighted | +0.8 |
| Improvement 6: Research Paper tab | Narrative Coherence (10%) + Deployment (20%) | Multiple | +2.0 weighted | +2.0 |
| Improvement 7: Expand timeline | Narrative Coherence (10% weight) | 93 → 96 | +0.3 weighted | +0.3 |
| Improvement 8: 97L footnote | Content Accuracy (20% weight) | 90 → 93 | +0.6 weighted | +0.6 |
| Improvement 9: Accessibility | Code Quality (15% weight) | 76 → 80 | +0.6 weighted | +0.6 |
| Improvement 10: BRIEF.md in repos | Process Compliance (10% weight) | 80 → 85 | +0.5 weighted | +0.5 |
| **TOTAL PROJECTED GAIN** | | | | **+17.2 points** |

### Projected Final Score

| Scenario | Score | Tier |
|:---|:---|:---|
| Current (V1) | 71 / 110 | TIER 2: GOOD |
| Tier 1 fixes only (Fixes 1–3) | 79 / 110 | TIER 2: GOOD (upper range) |
| Tier 1 + Tier 2 (all images + Ruby Red) | 87 / 110 | TIER 3: EXTRAORDINARY (lower range) |
| All improvements (Tiers 1–4) | **88–90 / 110** | **TIER 3: EXTRAORDINARY** |

> **Note on the 90–95 target:** Reaching 95 would require the Watchman to find near-zero drift violations and the Iron Brief to pass all 10 checks. With a committed brief, correct hero counter, live deployment, images, and the Ruby Red section, a score of 88–92 is the realistic ceiling for this content set. Reaching 95 would require additional original research or a Ruby Red-facing interactive tool — which is out of scope for this brief.

---

## PART 6 — PROPOSED VISUAL ASSETS SUMMARY

All five images have been generated and are hosted on the Manus CDN. They are ready for immediate integration upon Tim's approval.

### Image 1 — Hero Banner
**Purpose:** Replace the text-only dark green hero with a photographic editorial image  
**Placement:** Full-width hero background  
**CDN URL:** `https://d2xsxph8kpxj0f.cloudfront.net/310519663303496813/4di4BvEAWWvH4TgGH4UNFi/dairy-hero-banner-AeTgQKJVkWvc62ZjpnT3xH.png`

![Hero Banner Preview](https://d2xsxph8kpxj0f.cloudfront.net/310519663303496813/4di4BvEAWWvH4TgGH4UNFi/dairy-hero-banner-AeTgQKJVkWvc62ZjpnT3xH.png)

---

### Image 2 — Medieval vs. Modern Holstein Comparison
**Purpose:** Show the physical transformation visually — the 2.5× size difference is immediately legible  
**Placement:** Physical Transformation section  
**CDN URL:** `https://d2xsxph8kpxj0f.cloudfront.net/310519663303496813/4di4BvEAWWvH4TgGH4UNFi/dairy-medieval-vs-modern-DvJy3aniP9RFNq55eLcLUK.png`

![Medieval vs Modern Preview](https://d2xsxph8kpxj0f.cloudfront.net/310519663303496813/4di4BvEAWWvH4TgGH4UNFi/dairy-medieval-vs-modern-DvJy3aniP9RFNq55eLcLUK.png)

---

### Image 3 — Milk Yield J-Curve Chart
**Purpose:** Show the exponential production increase visually — the J-curve shape is the central argument of the site  
**Placement:** "By the Numbers" / "The Milk Yield Explosion" section  
**CDN URL:** `https://d2xsxph8kpxj0f.cloudfront.net/310519663303496813/4di4BvEAWWvH4TgGH4UNFi/dairy-yield-chart-hKgi8pxJSi4NpDqbCJdCDp.png`

![J-Curve Chart Preview](https://d2xsxph8kpxj0f.cloudfront.net/310519663303496813/4di4BvEAWWvH4TgGH4UNFi/dairy-yield-chart-hKgi8pxJSi4NpDqbCJdCDp.png)

---

### Image 4 — Genetic Bottleneck Infographic
**Purpose:** Make the 1,800 → 2 bulls statistic viscerally legible  
**Placement:** Genetic Bottleneck section  
**CDN URL:** `https://d2xsxph8kpxj0f.cloudfront.net/310519663303496813/4di4BvEAWWvH4TgGH4UNFi/dairy-bottleneck-visual-Upj7RfHdxTCPSc8E5kz73h.png`

![Bottleneck Infographic Preview](https://d2xsxph8kpxj0f.cloudfront.net/310519663303496813/4di4BvEAWWvH4TgGH4UNFi/dairy-bottleneck-visual-Upj7RfHdxTCPSc8E5kz73h.png)

---

### Image 5 — Ruby Red Connection Illustration
**Purpose:** Bridge the dairy cow story to Ruby Red's world — farm to grocery store  
**Placement:** New "What This Story Means at the Grocery Store" section  
**CDN URL:** `https://d2xsxph8kpxj0f.cloudfront.net/310519663303496813/4di4BvEAWWvH4TgGH4UNFi/dairy-ruby-red-connection-j9WRPRAdbcEQBos78Hhg7L.png`

![Ruby Red Connection Preview](https://d2xsxph8kpxj0f.cloudfront.net/310519663303496813/4di4BvEAWWvH4TgGH4UNFi/dairy-ruby-red-connection-j9WRPRAdbcEQBos78Hhg7L.png)

---

## PART 7 — MISSING CITATIONS AND SOURCE OF TRUTH GAPS

### Citations Present in V1 (36 total — strong)

The V13 assessment found the citation quality to be genuinely strong. All 36 sources are present in the main site's collapsible footer accordion. The research paper tab (longread) currently says "See full reference list in the source document" — this must be resolved by embedding the full 36-citation list in the Research Paper tab.

### Source of Truth Gaps Identified

| Gap | Severity | Resolution |
|:---|:---|:---|
| 97 litres/day — no source cited inline | HIGH | Add inline citation to the hero stat and wherever the figure appears |
| 69× multiplier — no source cited | HIGH | Add footnote: "97 ÷ 1.4 = 69.3; rounded to 69×" |
| US national average 31 litres/day — no source | MEDIUM | Cite USDA NASS 2023 annual report |
| Effective population size < 50 — source in citations but not inline | MEDIUM | Add inline citation number |
| Inbreeding coefficient 8% — source in citations but not inline | MEDIUM | Add inline citation number |
| Ivanhoe Star case study — no primary source | LOW | Add citation to the Undark/O'Hagan article |

### Proposed New Citations to Add

| # | Source | Use |
|:---|:---|:---|
| 37 | USDA NASS Milk Production Annual Report, 2023 | National average yield (31 litres/day) |
| 38 | Guinan et al. (2023), *Journal of Dairy Science* | Inbreeding coefficient 8% — already in list, needs inline reference |
| 39 | O'Hagan, Undark, 2019 — "The Cow That Could Feed the World" | Ivanhoe Star case study |

---

## PART 8 — IMPLEMENTATION SEQUENCE (For Tim's Approval)

Once Tim approves this draft, the recommended build sequence is:

| Step | Action | Time Estimate |
|:---|:---|:---|
| 1 | Tim confirms or revises the North Star | Tim's call |
| 2 | Commit BRIEF.md to dairy-cow-selective-breeding repo | 15 min |
| 3 | Fix hero counter to 69× with footnote | 5 min |
| 4 | Build unified site with three-tab architecture | 3–4 hours |
| 5 | Integrate all 5 generated images | 1 hour |
| 6 | Write and integrate Ruby Red connection section | 45 min |
| 7 | Integrate full Research Paper tab content | 2 hours |
| 8 | Expand timeline with 5 missing entries | 1 hour |
| 9 | Add 97L footnote throughout | 30 min |
| 10 | Accessibility fixes | 1 hour |
| 11 | Deploy to Manus and confirm live URL | 30 min |
| 12 | Run V13 Learning Loop V2 assessment | 1 hour |
| **TOTAL** | | **~12 hours** |

---

## PART 9 — SPIRIT CHECK (Watchman Final Review of This Draft)

*Before delivering this draft, the Watchman runs a final alignment check.*

**North Star alignment:** This draft is aligned with the proposed North Star. Every improvement serves either factual accuracy, public accessibility, visual quality, or the Ruby Red interpretive lens. No improvement has been added for its own sake.

**Drift check:** No scope creep detected. The draft proposes improvements to the existing content, not new research projects. The Ruby Red section is a connection piece, not a new initiative.

**Iron Brief compliance:** This draft itself is Iron Brief compliant — it has a declared North Star (pending Tim confirmation), defined audience, scope, success criteria, and deployment target.

**Autonomy check:** This draft makes no autonomous decisions. All proposed changes are presented for Tim's review. The North Star is explicitly flagged as "pending Tim confirmation." No code has been written.

**Watchman verdict:** This draft is ready for Tim's review. The single most important action Tim can take is to confirm or revise the North Star statement in Part 1. Everything else flows from that.

---

## APPENDIX — SOURCE DOCUMENTS

| Document | Location |
|:---|:---|
| V13 Learning Loop Assessment | `/home/ubuntu/DAIRY_WEBSITE_V13_LEARNING_LOOP.md` |
| V13 Assessment (GitHub) | `github.com/timjlatimer/sic-bingo-city-architecture/contributions/dairy-v13-learning-loop/` |
| Main site source | `github.com/timjlatimer/dairy-cow-selective-breeding` |
| Longread source | `github.com/timjlatimer/dairy-cow-longread` |
| Maven Knowledge Vault | `github.com/timjlatimer/mavens-knowledge-vault` |
| Iron Brief skill | `/tmp/maven-vault/skills/iron-brief.md` |
| Watchman skill | `/tmp/maven-vault/skills/the-watchman.md` |

---

*Draft prepared by: Manus AI — SIC HB1000 Solve Team*  
*Protocol: Iron Brief v1.4 | V13 Learning Loop | Watchman v2.1*  
*Date: March 18, 2026*  
*Status: DRAFT — Awaiting Tim HB1000 Approval Before Implementation*
