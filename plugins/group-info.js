const config = require('../config')
const { cmd } = require('../command')
const { fetchJson } = require('../lib/functions')

cmd({
    pattern: "ginfo",
    react: "🥏",
    alias: ["groupinfo"],
    desc: "Get group informations.",
    category: "group",
    use: '.ginfo',
    filename: __filename
},
async (conn, mek, m, {
    from, isGroup, isAdmins, isBotAdmins, participants, groupMetadata, reply, isDev, isOwner
}) => {
    try {
        // Messages par défaut
        let msr = {
            only_gp: "This command can only be used in groups.",
            you_adm: "You must be an admin to use this command.",
            give_adm: "Please make the bot admin first."
        }

        // Essaye de charger les messages personnalisés
        try {
            const res = await fetchJson('https://raw.githubusercontent.com/JawadTech3/KHAN-DATA/refs/heads/main/MSG/mreply.json')
            if (res?.replyMsg) msr = res.replyMsg
        } catch (e) {
            console.log('⚠️ Failed to load remote messages, using default ones.')
        }

        if (!isGroup) return reply(msr.only_gp)
        if (!isAdmins && !isDev && !isOwner) return reply(msr.you_adm)
        if (!isBotAdmins) return reply(msr.give_adm)

        // Récupération de la photo du groupe
        let ppUrl
        try {
            ppUrl = await conn.profilePictureUrl(from, 'image')
        } catch {
            ppUrl = 'https://i.ibb.co/KhYC4FY/1221bc0bdd2354b42b293317ff2adbcf-icon.png'
        }

        const metadata = await conn.groupMetadata(from)
        const groupAdmins = participants.filter(p => p.admin)
        const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
        const owner = metadata.owner || groupAdmins[0]?.id || 'unknown'

        const gdata = `𝗚𝗔𝗔𝗥𝗔 𝗫𝗠𝗗 𝗚𝗜𝗡𝗙𝗢 ✨
╭━━━╮ 𝗚𝗿𝗼𝗨𝗽 𝗜𝗻𝗳𝗢 ╭━━━╮

💬 𝗚𝗿𝗼𝗨𝗽 𝗡𝗮𝗺𝗲: ${metadata.subject}
🆔 𝗚𝗿𝗼𝗨𝗽 𝗝𝗜𝗗: ${metadata.id}
👥 𝗣𝗮𝗿𝘁𝗶𝗰𝗶𝗽𝗮𝗻𝘁𝘀: ${metadata.size}
👑 𝗚𝗿𝗼𝗨𝗽 𝗢𝘄𝗻𝗲𝗿: ${owner !== 'unknown' ? '@' + owner.split('@')[0] : 'unknown'}
📜 𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝘁𝗶𝗼𝗻: ${metadata.desc?.toString() || 'undefined'}

🔧 𝗔𝗱𝗺𝗶𝗻𝘀:
${listAdmin}
        `

        await conn.sendMessage(from, {
            image: { url: ppUrl },
            caption: gdata,
            mentions: groupAdmins.map(a => a.id).concat(owner !== 'unknown' ? [owner] : [])
        }, { quoted: mek })

    } catch (e) {
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        console.log(e)
        reply(`❌ *Error Accurated !!*\n\n${e}`)
    }
})
