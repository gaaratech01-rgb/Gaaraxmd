DONT FORGET TO FORK 🍴 & STAR 🌟 REPO😇
---

<p align="center">
<a href="https://github.com/mrfrank-ofc/followers"><img title="Followers" src="https://img.shields.io/github/followers/GaaraTech?color=blue&style=flat-square"></a>
<a href="https://github.com/GaaraTech/GAARA-XMD/stargazers/"><img title="Stars" src="https://img.shields.io/github/stars/GaaraTech/GAARA-XMD?color=blue&style=flat-square"></a>
<a href="https://github.com/GaaraTech/GAARA-XMD/network/members"><img title="Forks" src="https://img.shields.io/github/forks/GaaraTech/GAARA-XMD?color=blue&style=flat-square"></a>
<a href="https://github.com/GaaraTech/GAARA-XMD"><img title="Size" src="https://img.shields.io/github/repo-size/GaaraTech/GAARA-XMD?style=flat-square&color=green"></a>
<a href="https://github.com/GaaraTech/graphs/commit-activity"><img height="20" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg"></a>&nbsp;&nbsp;
</p>

<p align="center">
  <a href="https://git.io/typing-svg">
    <img src="https://readme-typing-svg.demolab.com?font=Black+Ops+One&size=80&pause=1000&color=87CEEB&center=true&vCenter=true&width=1000&height=200&lines=GAARA-XMD;VERSION+2025;BY+GaaraTech" alt="Typing SVG" />
  </a>
</p>
  
---

<a><img src='https://files.catbox.moe/nzc6xk.jpg'/></a>

---

### 1. 𐃁FORK THIS REPOSITORY𐃁

`FORK 🍴 AND STAR ⭐ IF YOU LIKE THIS BOT`

<a href="https://github.com/GaaraTech/GAARA-XMD/fork"><img title="GAARA-XMD" src="https://img.shields.io/badge/FORK-GAARA%20XMD-BOTh?color=indigo&style=for-the-badge&logo=stackshare"></a>
  
### 2. 𐃁GET SESSION ID𐃁 

`IF YOU DON'T HAVE YOUR SESSION_ID SO U CAN GET IT CLICK ON SESSION_ID BUTTON AND PASTE YOUR NUMBER With COUNTRY CODE EXAMPLE:1855xxxxxx THEN YOU CAN GET YOUR SESSION_ID ✠`

> **1. PAIR CODE SESSION ID**

<a href='https://gaara-xmd-session.onrender.com/' target="_blank">
  <img alt='Pairing Code' src='https://img.shields.io/badge/Get%20Pairing%20Code-orange?style=for-the-badge&logo=opencv&logoColor=black'/>
</a>
<br> 

> **2. PAIR CODE SESSION ID**

<a href='https://GAARA-XMD-session.onrender.com/pair' target="_blank">
  <img alt='Pairing Code' src='https://img.shields.io/badge/Get%20Pairing%20Code-darkpink?style=for-the-badge&logo=opencv&logoColor=black'/>
</a>
<br> 

---

### <h2 align="">𐃁GAARA-XMD DEPLOYMENT OPTIONS𐃁</h2>

---

### <h4 align="">1. HEROKU</h4>

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://dashboard.heroku.com/new?template=https://github.com/GaaraTech/GAARA-XMD)
<a><img src='https://i.imgur.com/LyHic3i.gif'/></a>

---

### <h4 align="">2. KOYEB</h4>

<a href='https://app.koyeb.com/services/deploy?type=git&repository=GaaraTech/GAARA-XMD&ports=3000&env[PREFIX]=.&env[SESSION_ID]=&env[ALWAYS_ONLINE]=false&env[MODE]=public&env[AUTO_STATUS_MSG]=Seen%20status%20by%20GAARA-XMD&env[AUTO_STATUS_REPLY]=false&env[AUTO_STATUS_SEEN]=true&env[AUTO_TYPING]=false&env[ANTI_LINK]=true&env[AUTO_REACT]=false&env[READ_MESSAGE]=false' target="_blank"><img alt='Koyeb' src='https://img.shields.io/badge/-Koyeb ‎Deploy-FF009D?style=for-the-badge&logo=koyeb&logoColor=white'/></a>

---

### <h4 align="">3. TALKDROVE FREE</h4>

<a href='https://talkdrove.com/share-bot/' target="_blank"><img alt='TalkDrove' src='https://img.shields.io/badge/-TalkDrove ‎Deploy-6971FF?style=for-the-badge&logo=Github&logoColor=white'/></a>

---

### <h4 align="">4. RAILWAY</h4>

<a href='https://railway.app/new' target="_blank"><img alt='Railway' src='https://img.shields.io/badge/-Railway deploy-FF8700?style=for-the-badge&logo=railway&logoColor=white'/></a>

---

### <h4 align="">5. RENDER</h4>

<a href='https://dashboard.render.com/web/new' target="_blank"><img alt='Render' src='https://img.shields.io/badge/-Render deploy-black?style=for-the-badge&logo=render&logoColor=white'/></a>

---

### <h4 align="">6. HUGGING FACE</h4>

<a href='https://app.netlify.com/' target="_blank"><img alt='HuggingFace' src='https://img.shields.io/badge/-Netlify Deploy-CC00FF?style=for-the-badge&logo=huggingface&logoColor=white'/></a>

---

### <h4 align="">7. REPLIT</h4>

<a href='https://replit.com/~' target="_blank"><img alt='Replit' src='https://img.shields.io/badge/-Replit Deploy-1976D2?style=for-the-badge&logo=replit&logoColor=white'/></a>

---

## ⚙️ WORKFLOWS

```.github/workflows/deploy.yml```

```yml
name: Node.js CI

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
  schedule:
    - cron: '0 */6 * * *'  

jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [20.x]

    steps:
    - name: Checkout repository
      uses: actions/checkout@v3

    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}

    - name: Install dependencies
      run: npm install

    - name: Install FFmpeg
      run: sudo apt-get install -y ffmpeg

    - name: Start application with timeout
      run: |
        timeout 21590s npm start

    - name: Save state (Optional)
      run: |
        ./save_state.sh
