#!/bin/bash

# Read current version
current_version=$(jq -r '.version' manifest.json)

# Split into major.minor.patch
IFS='.' read -r major minor patch <<< "$current_version"

# Increment patch version
patch=$((patch + 1))
new_version="$major.$minor.$patch"

# Replace in manifest.json
jq ".version = \"$new_version\"" manifest.json > manifest.tmp.json && mv manifest.tmp.json manifest.json
