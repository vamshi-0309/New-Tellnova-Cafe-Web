#!/bin/bash

# The Spot Cafe - GitHub Deploy Script

echo "🚀 The Spot Cafe - GitHub Deployment Script"
echo "============================================"

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    exit 1
fi

# Initialize git if not already initialized
if [ ! -d ".git" ]; then
    echo "📦 Initializing Git repository..."
    git init
else
    echo "✅ Git already initialized"
fi

# Ask for repository name
echo ""
echo "Enter your GitHub repository name (e.g., new-cafe-website):"
read -r REPO_NAME

# Validate repo name (replace spaces with hyphens)
REPO_NAME=$(echo "$REPO_NAME" | tr ' ' '-' | tr '[:upper:]' '[:lower:]')

if [ -z "$REPO_NAME" ]; then
    echo "❌ Repository name cannot be empty!"
    exit 1
fi

# Add all files
echo "📝 Staging all files..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "✨ Initial commit - The Spot Cafe Website

- Neon Cyberpunk Design
- Table Reservation System
- Menu Management
- Admin Dashboard
- Contact Forms
- Gallery & Testimonials"

# Set main branch
echo "🌿 Setting main branch..."
git branch -M main

# Check if gh CLI is available
if command -v gh &> /dev/null; then
    echo "🔗 Creating GitHub repository..."
    gh repo create "$REPO_NAME" --public --source=. --push
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "🎉 SUCCESS! Repository created and code pushed!"
        echo "🔗 View your repo at: https://github.com/vamshi-0309/$REPO_NAME"
    else
        echo "❌ Failed to create repository. Please check your GitHub authentication."
    fi
else
    echo ""
    echo "⚠️ GitHub CLI (gh) not found."
    echo ""
    echo "Please run these commands manually:"
    echo ""
    echo "1. Create repository on GitHub:"
    echo "   https://github.com/new"
    echo ""
    echo "2. Then run:"
    echo "   git remote add origin https://github.com/vamshi-0309/$REPO_NAME.git"
    echo "   git push -u origin main"
    echo ""
fi

echo ""
echo "============================================"
echo "✨ Deployment script completed!"
