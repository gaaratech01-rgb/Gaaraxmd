const { cmd } = require('../command');
const { runtime } = require('../lib/functions');
const config = require('../config');

cmd({
    pattern: "uptime",
    alias: ["runtime", "run"],
    desc: "Afficher le temps de fonctionnement du bot avec des formats stylés",
    category: "main",
    react: "⏱️",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        const uptime = runtime(process.uptime());
        const startTime = new Date(Date.now() - process.uptime() * 1000);
        
        // Style 1: Box classique en *fancy small caps*
        const style1 = `╭───『 ɢᴀᴀʀᴀ xᴍᴅ ᴜᴘᴛɪᴍᴇ 』───⳹
│
│ ⏱️ ${uptime}
│
│ 🚀 Démarré: ${startTime.toLocaleString()}
╰────────────────⳹
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɢᴀᴀʀᴀ xᴍᴅ*`;

        // Style 2: Style social media en *fancy small caps*
        const style2 = `⏱️ *ᴜᴘᴛɪᴍᴇ ʀᴇᴘᴏʀᴛ* ⏱️

🟢 En ligne depuis: ${uptime}
📅 Depuis: ${startTime.toLocaleString()}


> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɢᴀᴀʀᴀ xᴍᴅ*`;

        const styles = [style1, style2];
        const selectedStyle = styles[Math.floor(Math.random() * styles.length)];

        await conn.sendMessage(from, { 
            text: selectedStyle,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363401605001369@newsletter',
                    newsletterName: 'ɢᴀᴀʀᴀ xᴍᴅ',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Uptime Error:", e);
        reply(`❌ Erreur: ${e.message}`);
    }
});
