<h1 align="center">🤖 GAARA-XMD 🤖</h1>

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Black+Ops+One&size=70&pause=1000&color=FF4C29&center=true&vCenter=true&width=1000&height=150&lines=GAARA+XMD;ADVANCED+WHATSAPP+BOT;BY+GAARATECH" alt="Typing SVG" />
</p>

---

<p align="center">
<a href="https://github.com/gaaratech01-rgb"><img src="https://img.shields.io/github/followers/gaaratech01-rgb?label=Followers&style=flat-square&color=blue" alt="followers"/></a>
<a href="https://github.com/gaaratech01-rgb/Gaaraxmd/stargazers/"><img src="https://img.shields.io/github/stars/gaaratech01-rgb/Gaaraxmd?label=Stars&style=flat-square&color=yellow" alt="Stars Badge"/></a>
<a href="https://github.com/gaaratech01-rgb/Gaaraxmd/network/members"><img src="https://img.shields.io/github/forks/gaaratech01-rgb/Gaaraxmd?label=Forks&style=flat-square&color=orange" alt="Forks Badge"/></a>
<a href="https://github.com/gaaratech01-rgb/Gaaraxmd"><img src="https://img.shields.io/github/repo-size/gaaratech01-rgb/Gaaraxmd?label=Repo%20Size&style=flat-square&color=green" alt="Repo Size"/></a>
</p>

---

## 🚀 Fonctionnalités

- ✅ WhatsApp Multi-device support  
- ✅ Anti-link & auto-moderation  
- ✅ Auto-reply / Auto-status  
- ✅ Téléchargements (YT, TikTok, FB, etc.)  
- ✅ Plugins personnalisés  
- ✅ Déploiement facile sur plusieurs plateformes  

---

## 🍴 1. Fork & Star

Faites un **fork** de ce repo et mettez une ⭐ si vous aimez le projet :

👉 [Fork GAARA-XMD](https://github.com/gaaratech01-rgb/Gaaraxmd/fork)

---

## 🔑 2. Obtenir un SESSION_ID

⚠️ Vous devez générer un `SESSION_ID` pour connecter le bot à votre WhatsApp.

**Option 1 : Pair Code**  
[![Pair Code](https://img.shields.io/badge/Get%20Pairing%20Code-orange?style=for-the-badge&logo=whatsapp)](https://gaara-xmd-session.onrender.com/)

**Option 2 : Scanner QR Code**  
[![QR Code](https://img.shields.io/badge/Get%20QR%20Code-pink?style=for-the-badge&logo=whatsapp)](https://gaara-xmd-session.onrender.com/pair)

---

## ⚡ 3. Déploiement

Vous pouvez déployer GAARA-XMD facilement sur plusieurs services cloud :

### 🔥 Heroku  
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://dashboard.heroku.com/new?template=https://github.com/gaaratech01-rgb/Gaaraxmd)

### ⚡ Koyeb  
[![Deploy on Koyeb](https://img.shields.io/badge/Koyeb-Deploy-FF009D?style=for-the-badge&logo=koyeb)](https://app.koyeb.com/services/deploy?type=git&repository=gaaratech01-rgb/Gaaraxmd)

### 🌍 Railway  
[![Deploy on Railway](https://img.shields.io/badge/Railway-Deploy-FF8700?style=for-the-badge&logo=railway)](https://railway.app/new)

### 🖤 Render  
[![Deploy on Render](https://img.shields.io/badge/Render-Deploy-black?style=for-the-badge&logo=render)](https://dashboard.render.com/web/new)

### 🤖 Replit  
[![Deploy on Replit](https://img.shields.io/badge/Replit-Deploy-1976D2?style=for-the-badge&logo=replit)](https://replit.com/~)

---

## ⚙️ Workflows (CI/CD)

`.github/workflows/deploy.yml`

```yml
name: Node.js CI

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]
  schedule:
    - cron: '0 */6 * * *'  

jobs:
  build:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [20.x]

    steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}
    - run: npm install
    - run: sudo apt-get install -y ffmpeg
    - run: timeout 21590s npm start
