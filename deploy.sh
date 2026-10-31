#!/usr/bin/env bash
# Deploy pinnacleone.co.in: pull latest, install packages, build, publish.
set -euo pipefail

cd "$(dirname "$0")"

# Load .env (DEPLOY_BRANCH, DEPLOY_DIR, ...)
if [ -f .env ]; then
  set -a
  # shellcheck disable=SC1091
  . ./.env
  set +a
else
  echo "Missing .env - copy .env.example to .env first." >&2
  exit 1
fi

BRANCH="${DEPLOY_BRANCH:-main}"

echo "==> Pulling latest ($BRANCH)"
git fetch origin "$BRANCH"
git reset --hard "origin/$BRANCH"

echo "==> Installing packages"
npm ci --no-audit --no-fund

echo "==> Building"
npm run build

if [ -n "${DEPLOY_DIR:-}" ]; then
  echo "==> Publishing dist/ to $DEPLOY_DIR"
  mkdir -p "$DEPLOY_DIR"
  rsync -a --delete dist/ "$DEPLOY_DIR/"
fi

echo "==> Done: ${VITE_SITE_URL:-site} is live"
