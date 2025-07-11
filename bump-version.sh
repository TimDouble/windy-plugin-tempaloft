#!/bin/bash

set -e

current_version=$(jq -r '.version' manifest.json)
IFS='.' read -r major minor patch <<< "$current_version"
patch=$((patch + 1))
new_version="${major}.${minor}.${patch}"

jq ".version = \"$new_version\"" manifest.json > tmp && mv tmp manifest.json

echo "🔼 Bumped version: $current_version → $new_version"
