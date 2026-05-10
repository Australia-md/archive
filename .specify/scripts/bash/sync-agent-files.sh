#!/usr/bin/env bash
# sync-agent-files.sh
# Validates that AGENTS.md, CLAUDE.md, and GEMINI.md reference the constitution
# and do not contain duplicated standards content.
#
# Usage: bash .specify/scripts/bash/sync-agent-files.sh
# Run after editing .specify/memory/constitution.md to verify agent file consistency.

set -euo pipefail

CONSTITUTION=".specify/memory/constitution.md"
AGENT_FILES=("AGENTS.md" "CLAUDE.md" "GEMINI.md")

RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m'

errors=0

# Check constitution exists
if [ ! -f "$CONSTITUTION" ]; then
  echo -e "${RED}✗ Constitution not found at ${CONSTITUTION}${NC}"
  exit 1
fi

echo "Checking agent file consistency..."
echo ""

for file in "${AGENT_FILES[@]}"; do
  if [ ! -f "$file" ]; then
    echo -e "${RED}✗ ${file} not found${NC}"
    errors=$((errors + 1))
    continue
  fi

  # Check for constitution reference
  if grep -q "constitution.md" "$file"; then
    echo -e "${GREEN}✓ ${file} references constitution${NC}"
  else
    echo -e "${RED}✗ ${file} does not reference constitution${NC}"
    errors=$((errors + 1))
  fi

  # Check for duplicated content (indicators of drift)
  line_count=$(wc -l < "$file" | tr -d ' ')
  if [ "$line_count" -gt 80 ]; then
    echo -e "${RED}  ⚠ ${file} has ${line_count} lines — may contain duplicated standards (target: <80 lines)${NC}"
    errors=$((errors + 1))
  else
    echo -e "${GREEN}  ✓ ${file} is ${line_count} lines (within thin-wrapper target)${NC}"
  fi
done

echo ""
if [ "$errors" -gt 0 ]; then
  echo -e "${RED}Found ${errors} issue(s). Agent files may need updating.${NC}"
  exit 1
else
  echo -e "${GREEN}All agent files are consistent with the constitution.${NC}"
  exit 0
fi
