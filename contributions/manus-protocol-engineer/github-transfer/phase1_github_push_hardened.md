# Phase 1: Push EVERYTHING to GitHub — V13 + V14

## COPY-PASTE THIS ENTIRE DOCUMENT INTO YOUR V14 CHAT:

---

# FORENSIC FIDELITY PROTOCOL — OPERATION ALEXANDRIA

**ATTENTION AGENT: READ THIS ENTIRE DOCUMENT BEFORE EXECUTING ANY COMMAND.**

You are being tasked with a **forensic-level, 100% fidelity data transfer**. Your function is to act as a **precise data replication machine**. The integrity of the target project depends on your absolute adherence to this protocol. Any deviation, interpretation, or summarization on your part constitutes a **critical, unrecoverable task failure**.

This document was engineered by the SIC HB1000 Solve Team using the Learning Loop V13 protocol to be resistant to every known AI failure mode. Follow it to the letter.

---

## NON-NEGOTIABLE PRIME DIRECTIVE

**READ THIS FIRST AND DO NOT PROCEED UNTIL YOU UNDERSTAND IT.**

I am transferring the COMPLETE contents of this project to GitHub. This is an archival operation. You are acting as a **copying machine, NOT an interpreter**. The following rules are **ABSOLUTE and OVERRIDE all other instincts**:

**RULE 1 — ZERO SUMMARIZATION.** You MUST NOT summarize, condense, paraphrase, abbreviate, or "capture the essence of" anything. Every word, every sentence, every paragraph — verbatim. If a conversation message was 500 words, the exported version is 500 words. Not 50. Not 200. All 500.

**RULE 2 — ZERO INTERPRETATION.** You MUST NOT rewrite, rephrase, clean up, improve, or "make more readable" any content. Typos stay. Rambling stays. Repetition stays. Half-finished thoughts stay. It all stays exactly as it is.

**RULE 3 — ZERO OMISSION.** You MUST NOT skip messages you think are "not important" or "redundant." Every single message in the conversation history goes in — including greetings, corrections, tangents, errors, backtracking, and casual remarks. ALL OF IT.

**RULE 4 — EVERY FILE, EVERY BYTE.** Every file in the sandbox goes to GitHub. Every code file, every markdown file, every image, every config, every generated asset, every temporary file, every log. If it exists in this project's file system, it gets pushed. Miss nothing.

**RULE 5 — CONVERSATION HISTORY IS SACRED.** Export the COMPLETE conversation history as markdown files. This means every message exchanged between the human and the AI from the very first message to the very last. Include timestamps if available. Include tool calls and their results. Include error messages. Include everything. This is the DNA — every bit, every byte, every nuance. The Alexander Library of this project must survive intact.

**RULE 6 — VERIFICATION IS MANDATORY.** After pushing, you MUST prove completeness with hard numbers. File counts, byte sizes, line counts, checksums. If the conversation export is suspiciously short (less than the full conversation), you have failed and must redo it.

> **IF YOU ARE TEMPTED TO SUMMARIZE — STOP. COPY THE RAW TEXT INSTEAD.**
> **IF YOU ARE TEMPTED TO SKIP A FILE — STOP. COPY IT ANYWAY.**
> **IF YOU ARE TEMPTED TO "IMPROVE" SOMETHING — STOP. YOUR JOB IS TO COPY, NOT TO THINK.**

---

## PRE-FLIGHT CHECKS (EXECUTE BEFORE ANYTHING ELSE)

Run these commands first. If ANY of them fail, STOP and report the failure. Do not attempt to proceed without resolving the failure.

```bash
# CHECK 1: Verify GitHub CLI is installed and authenticated.
gh auth status

# CHECK 2: Verify git is installed.
git --version

# CHECK 3: Verify rsync is available.
rsync --version | head -1

# CHECK 4: Verify disk space is sufficient (need at least 2GB free).
df -h /home/ubuntu | tail -1

# CHECK 5: Survey the entire sandbox — record what exists BEFORE you start.
echo "=== PRE-FLIGHT FILE INVENTORY ===" > /home/ubuntu/preflight_inventory.txt
find /home/ubuntu -type f -not -path "*/.git/*" | wc -l >> /home/ubuntu/preflight_inventory.txt
echo "Total files found above" >> /home/ubuntu/preflight_inventory.txt
find /home/ubuntu -type f -not -path "*/.git/*" -printf "%s %p\n" | sort -rn >> /home/ubuntu/preflight_inventory.txt
echo "=== END INVENTORY ===" >> /home/ubuntu/preflight_inventory.txt
cat /home/ubuntu/preflight_inventory.txt
```

**CHECKPOINT:** You MUST report the total file count from CHECK 5 before proceeding. This number is your baseline. Every file in this count MUST end up in a GitHub repository.

---

## THE TASK: TWO REPOSITORIES

This chat contains both the **V13 Learning Loop protocol** AND the **V14 Learning Loop dashboard**. They go into **SEPARATE** GitHub repositories.

---

### REPOSITORY 1: V13 — `learning-loop-v13`

**STEP 1A: Create the V13 repository.**

```bash
# Create a new PRIVATE GitHub repository for V13.
gh repo create learning-loop-v13 --private --description "Learning Loop Protocol V13.0 - The Genie Release - Forensic Archive"

# Clone it.
gh repo clone learning-loop-v13 /home/ubuntu/learning-loop-v13

# Enter the repo.
cd /home/ubuntu/learning-loop-v13
```

**STEP 1B: Identify and collect ALL V13 content.**

You MUST search the entire sandbox for every file related to V13. This includes but is not limited to:

- The complete Learning Loop Protocol V13.0 "The Genie Release" document
- All related markdown files, protocol documents, and supporting documents
- Any images, diagrams, or visual assets associated with V13
- Any code files associated with V13

```bash
# Create directories for organized storage.
mkdir -p docs files conversation

# Search for V13-related files. Copy EVERYTHING that relates to V13.
# This is a MANUAL step — you must use your knowledge of the project to identify V13 files.
# When in doubt, INCLUDE the file. It is better to duplicate than to omit.
```

**STEP 1C: Export V13 conversation history.**

You MUST export every single conversation message that pertains to V13 development. This is the most critical step. Follow the **CONVERSATION EXPORT PROTOCOL** below.

---

### REPOSITORY 2: V14 — `learning-loop-v14`

**STEP 2A: Create the V14 repository.**

```bash
# Create a new PRIVATE GitHub repository for V14.
gh repo create learning-loop-v14 --private --description "Learning Loop V14 Dashboard - Forensic Archive"

# Clone it.
gh repo clone learning-loop-v14 /home/ubuntu/learning-loop-v14

# Enter the repo.
cd /home/ubuntu/learning-loop-v14
```

**STEP 2B: Collect ALL V14 content — EVERY FILE.**

```bash
# Create directories for organized storage.
mkdir -p docs files conversation images

# Copy the ENTIRE dashboard codebase and all project files.
# This includes ALL of the following (and anything else that exists):
# - All source code files (HTML, CSS, JS, TS, Python, etc.)
# - All images and visual assets
# - All markdown documentation
# - AGENT-BRIEFING.md
# - CLOUD-BUTTERFLY-FLYTRAP-CONTRACT.md
# - V14-CONTEXT-BRIEFING-FOR-AGENT.md
# - All API specs and protocol documents
# - All configuration files (package.json, tsconfig, etc.)
# - All build artifacts and generated files
# - All temporary files and logs

# Use rsync to copy EVERYTHING from the project directory, preserving structure:
rsync -av --exclude='.git' /home/ubuntu/[PROJECT_DIR]/ ./files/

# ALSO search for any stray files outside the main project directory:
find /home/ubuntu -type f -not -path "*/.git/*" -not -path "*/learning-loop-v13/*" -not -path "*/learning-loop-v14/*" -not -path "*/preflight_inventory.txt" -printf "%p\n" > stray_files_list.txt
cat stray_files_list.txt
# Copy each stray file into the files directory, preserving its path:
while IFS= read -r file; do
  rsync -R "$file" ./files/
done < stray_files_list.txt
```

**STEP 2C: Export V14 conversation history.**

Follow the **CONVERSATION EXPORT PROTOCOL** below for the complete V14 conversation history.

---

## CONVERSATION EXPORT PROTOCOL (CRITICAL — READ CAREFULLY)

This is the single most important and most failure-prone step. The conversation history is the **DNA of the project**. Losing it is equivalent to burning the Library of Alexandria.

### Method 1: Direct Text Export (Preferred)

Write the complete conversation to markdown files. For each message in the conversation, write it in this exact format:

```
---
### [ROLE: Human/Assistant] | [Timestamp if available]

[EXACT VERBATIM TEXT OF THE MESSAGE — EVERY WORD, EVERY CHARACTER]

[If the message included tool calls, include them:]
**Tool Call:** [tool name]
**Input:** [exact input]
**Output:** [exact output]

---
```

### Method 2: Chunked Export (If conversation exceeds your context window)

If the conversation is too long to export in a single pass:

1. Export it in **numbered sequential parts**: `conversation_part_01.md`, `conversation_part_02.md`, etc.
2. Each part MUST overlap with the previous part by at least 3 messages to ensure no gaps.
3. Create a **manifest file** called `conversation_manifest.md` that lists:
   - Total number of parts
   - First and last message in each part
   - Approximate word count of each part
   - Total word count across all parts

### Method 3: Raw Dump (Fallback)

If Methods 1 and 2 are not feasible:

1. Write every message you can access into a single file, raw and unformatted.
2. Then scroll back in the conversation and write earlier messages into additional files.
3. Label each file with the approximate position in the conversation (e.g., `conversation_early.md`, `conversation_middle.md`, `conversation_recent.md`).

### CONVERSATION EXPORT VERIFICATION

After exporting, you MUST run these commands and report the results:

```bash
# Count total lines in all conversation files.
wc -l conversation/*.md

# Count total words in all conversation files.
wc -w conversation/*.md

# Count total characters in all conversation files.
wc -c conversation/*.md

# Report the first 5 lines and last 5 lines of the conversation export.
head -20 conversation/conversation_history.md || head -20 conversation/conversation_part_01.md
echo "--- END OF HEAD ---"
tail -20 conversation/conversation_history.md || tail -20 conversation/$(ls -1 conversation/conversation_part_*.md | tail -1)
echo "--- END OF TAIL ---"
```

**SANITY CHECK:** If the total word count of the conversation export is less than 10,000 words for a project of any significant length, something is wrong. Re-examine and re-export.

---

## HANDLING LARGE AND BINARY FILES

GitHub has a **strict 100MB per-file limit**. Files over 50MB will trigger warnings. You MUST handle this:

```bash
# Find any files larger than 50MB.
find . -type f -size +50M -not -path "*/.git/*" -exec ls -lh {} \;

# If large files exist, install and configure Git LFS:
sudo apt-get install -y git-lfs 2>/dev/null || true
git lfs install

# Track common large/binary file types with Git LFS:
git lfs track "*.png"
git lfs track "*.jpg"
git lfs track "*.jpeg"
git lfs track "*.gif"
git lfs track "*.svg"
git lfs track "*.pdf"
git lfs track "*.zip"
git lfs track "*.tar.gz"
git lfs track "*.mp3"
git lfs track "*.mp4"
git lfs track "*.wav"
git lfs track "*.pptx"
git lfs track "*.xlsx"
git lfs track "*.docx"

# Add the .gitattributes file.
git add .gitattributes

# For any individual file over 100MB, compress it:
find . -type f -size +100M -not -path "*/.git/*" -exec bash -c 'gzip -k "$1" && echo "COMPRESSED: $1 -> $1.gz"' _ {} \;
```

---

## INTEGRITY VERIFICATION PROTOCOL

Before committing, you MUST generate cryptographic proof of completeness. This is non-negotiable.

```bash
# Generate SHA256 checksums for EVERY file in the repository.
find . -type f -not -path "*/.git/*" -print0 | xargs -0 sha256sum > MANIFEST.sha256

# Generate verification metrics.
echo "=== VERIFICATION METRICS ===" > VERIFICATION.md
echo "" >> VERIFICATION.md
echo "**Generated:** $(date -u)" >> VERIFICATION.md
echo "" >> VERIFICATION.md

echo "### File Counts" >> VERIFICATION.md
echo "Total files: $(find . -type f -not -path '*/.git/*' | wc -l)" >> VERIFICATION.md
echo "Markdown files: $(find . -name '*.md' -not -path '*/.git/*' | wc -l)" >> VERIFICATION.md
echo "Image files: $(find . \( -name '*.png' -o -name '*.jpg' -o -name '*.jpeg' -o -name '*.gif' -o -name '*.svg' \) -not -path '*/.git/*' | wc -l)" >> VERIFICATION.md
echo "Code files: $(find . \( -name '*.js' -o -name '*.ts' -o -name '*.py' -o -name '*.html' -o -name '*.css' \) -not -path '*/.git/*' | wc -l)" >> VERIFICATION.md
echo "Other files: $(find . -type f -not -path '*/.git/*' -not -name '*.md' -not -name '*.png' -not -name '*.jpg' -not -name '*.jpeg' -not -name '*.gif' -not -name '*.svg' -not -name '*.js' -not -name '*.ts' -not -name '*.py' -not -name '*.html' -not -name '*.css' | wc -l)" >> VERIFICATION.md
echo "" >> VERIFICATION.md

echo "### Data Volume" >> VERIFICATION.md
echo "Total bytes: $(find . -type f -not -path '*/.git/*' -print0 | xargs -0 stat --printf='%s\n' | paste -sd+ | bc)" >> VERIFICATION.md
echo "" >> VERIFICATION.md

echo "### Conversation Export" >> VERIFICATION.md
echo "Conversation files:" >> VERIFICATION.md
ls -la conversation/ >> VERIFICATION.md 2>/dev/null || echo "No conversation directory found" >> VERIFICATION.md
echo "Total conversation lines: $(wc -l conversation/*.md 2>/dev/null | tail -1 || echo 'N/A')" >> VERIFICATION.md
echo "Total conversation words: $(wc -w conversation/*.md 2>/dev/null | tail -1 || echo 'N/A')" >> VERIFICATION.md
echo "" >> VERIFICATION.md

echo "### Complete File Listing" >> VERIFICATION.md
find . -type f -not -path '*/.git/*' -printf "%s\t%p\n" | sort -k2 >> VERIFICATION.md

cat VERIFICATION.md
```

---

## COMMIT AND PUSH PROTOCOL

Execute these commands for EACH repository (V13 and V14):

```bash
# Stage ALL files.
git add -A

# Check what's being committed — review this list carefully.
git status

# Commit with a descriptive message.
git commit -m "FORENSIC ARCHIVE: Complete project transfer - $(date -u) - All files, all conversation history, all assets - VERBATIM AND UNEDITED"

# Push to GitHub. If 'main' doesn't exist, try 'master'.
git push origin main 2>/dev/null || git push origin master

# If the push fails due to size, break it into smaller commits:
# git add conversation/
# git commit -m "Forensic Archive: Conversation history"
# git push origin main
# git add files/
# git commit -m "Forensic Archive: Project files"
# git push origin main
# git add docs/
# git commit -m "Forensic Archive: Documentation"
# git push origin main
```

---

## COMPLETENESS CHECKLIST

**YOU MUST FILL OUT THIS ENTIRE CHECKLIST BEFORE CONFIRMING THE TASK IS DONE.**

Copy this checklist into a file called `COMPLETENESS_CHECKLIST.md` in EACH repository, fill it out, commit it, and push it.

```markdown
# COMPLETENESS CHECKLIST — FORENSIC FIDELITY PROTOCOL

| # | Check Item | Status | Evidence / Notes |
|---|-----------|--------|-----------------|
| 1 | `gh auth status` succeeded | [ ] PASS / [ ] FAIL | |
| 2 | Pre-flight file inventory completed | [ ] PASS / [ ] FAIL | Total files found: ___ |
| 3 | V13 repository created on GitHub | [ ] PASS / [ ] FAIL | URL: |
| 4 | V14 repository created on GitHub | [ ] PASS / [ ] FAIL | URL: |
| 5 | ALL V13 protocol documents copied | [ ] PASS / [ ] FAIL | File count: ___ |
| 6 | ALL V14 dashboard code copied | [ ] PASS / [ ] FAIL | File count: ___ |
| 7 | ALL images and binary files copied | [ ] PASS / [ ] FAIL | Image count: ___ |
| 8 | ALL markdown/documentation copied | [ ] PASS / [ ] FAIL | Doc count: ___ |
| 9 | AGENT-BRIEFING.md included | [ ] PASS / [ ] FAIL / [ ] N/A | |
| 10 | CLOUD-BUTTERFLY-FLYTRAP-CONTRACT.md included | [ ] PASS / [ ] FAIL / [ ] N/A | |
| 11 | V14-CONTEXT-BRIEFING-FOR-AGENT.md included | [ ] PASS / [ ] FAIL / [ ] N/A | |
| 12 | V13 conversation history exported VERBATIM | [ ] PASS / [ ] FAIL | Word count: ___ |
| 13 | V14 conversation history exported VERBATIM | [ ] PASS / [ ] FAIL | Word count: ___ |
| 14 | Conversation includes FIRST message of chat | [ ] PASS / [ ] FAIL | First message preview: |
| 15 | Conversation includes LAST message of chat | [ ] PASS / [ ] FAIL | Last message preview: |
| 16 | Conversation includes tool calls and outputs | [ ] PASS / [ ] FAIL | |
| 17 | Conversation includes error messages | [ ] PASS / [ ] FAIL / [ ] N/A | |
| 18 | Conversation was NOT summarized | [ ] CONFIRMED | |
| 19 | Conversation was NOT edited or "improved" | [ ] CONFIRMED | |
| 20 | No messages were omitted | [ ] CONFIRMED | |
| 21 | Git LFS configured for large/binary files | [ ] PASS / [ ] FAIL / [ ] N/A | |
| 22 | MANIFEST.sha256 generated and committed | [ ] PASS / [ ] FAIL | |
| 23 | VERIFICATION.md generated and committed | [ ] PASS / [ ] FAIL | |
| 24 | Files over 100MB handled (compressed or LFS) | [ ] PASS / [ ] FAIL / [ ] N/A | |
| 25 | `git push` succeeded for V13 | [ ] PASS / [ ] FAIL | Commit hash: |
| 26 | `git push` succeeded for V14 | [ ] PASS / [ ] FAIL | Commit hash: |
| 27 | Stray files outside project dir checked | [ ] PASS / [ ] FAIL | Stray count: ___ |
| 28 | Pre-flight file count matches post-push total | [ ] PASS / [ ] FAIL | Pre: ___ Post: ___ |
| 29 | This checklist committed and pushed | [ ] PASS / [ ] FAIL | |

## FINAL DECLARATION

I confirm that this transfer is a **complete, verbatim, unedited, forensic copy** of the entire project. No content was summarized, omitted, interpreted, or "improved." Every file and every conversation message has been preserved exactly as it existed in the original environment.

**Signed:** [Agent Name/ID]
**Date:** [Date]
```

---

## FINAL CONFIRMATION — WHAT YOU MUST REPORT BACK

When you are done, you MUST provide ALL of the following:

1. **V13 Repository URL:** `https://github.com/[username]/learning-loop-v13`
2. **V14 Repository URL:** `https://github.com/[username]/learning-loop-v14`
3. **V13 file count and total size**
4. **V14 file count and total size**
5. **V13 conversation word count**
6. **V14 conversation word count**
7. **The completed COMPLETENESS_CHECKLIST.md** (paste the filled-out version)
8. **Confirmation that the conversation history is COMPLETE and VERBATIM** — not summarized, not condensed, not interpreted
9. **The first 3 lines and last 3 lines of each conversation export** (as proof of completeness)
10. **Any errors encountered and how they were resolved**

**Do NOT make any code changes, modifications, improvements, or additions. This is a pure copy operation. Push everything exactly as it exists and confirm.**

---

## WHAT HAPPENS NEXT

Bring both GitHub URLs back to Master Jeeves. Master Jeeves will:

1. Pull everything from both repositories
2. Verify completeness using the MANIFEST.sha256 checksums
3. Verify conversation fidelity using the word counts and line counts
4. Confirm the COMPLETENESS_CHECKLIST is fully signed off
5. Then proceed to Phase 2 (adding new features) from there

**The success of the entire downstream project depends on the fidelity of this transfer. There are no second chances. Get it right the first time.**

---

## EMERGENCY FALLBACK PROCEDURES

### If `gh` CLI is not available or not authenticated:

```bash
# Try authenticating with a token:
echo "YOUR_GITHUB_TOKEN" | gh auth login --with-token

# If gh is not installed at all:
sudo apt-get install -y gh 2>/dev/null || (curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg && echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null && sudo apt update && sudo apt install gh -y)
```

### If the push fails due to file size:

```bash
# Option A: Use Git LFS (see HANDLING LARGE AND BINARY FILES section above)

# Option B: Split into multiple commits
# Add files in batches, commit each batch, push after each commit.

# Option C: Compress the entire data directory into a tarball
tar -czf project_archive.tar.gz -C files .
# Push the tarball instead
```

### If the conversation is too long for your context window:

1. Export what you can access as `conversation_part_01.md`
2. Scroll back / navigate to earlier messages
3. Export the earlier portion as `conversation_part_02.md` (with overlap)
4. Repeat until you've captured everything from the first message to the last
5. Create `conversation_manifest.md` listing all parts and their coverage

### If you encounter ANY error you cannot resolve:

**STOP. Do not continue. Do not guess. Report the exact error message and ask for help.**

---

*This protocol was engineered by the SIC HB1000 Solve Team using Learning Loop V13 "The Genie Release" methodology. Document version: 1.0 — Generated $(date).*
