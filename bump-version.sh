#!/bin/bash

# Read current version
current_version=$(jq -r '.version' manifest.json)

# Split version into parts
IFS='.' read -r major minor patch <<< "$current_version"

# Increment patch version
patch=$((patch + 1))
new_version="${major}.${minor}.${patch}"

# Update manifest.json
jq ".version = \"${new_version}\"" manifest.json > tmp && mv tmp manifest.json

echo "✅ Bumped version to $new_version"
