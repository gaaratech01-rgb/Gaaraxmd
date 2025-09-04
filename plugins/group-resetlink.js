const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')

cmd({
    pattern: "revoke",
    react: "🖇️",
    alias: ["revokegrouplink", "resetglink", "revokelink", "f_revoke"],
    desc: "To Reset the group link",
    category: "group",
    use: '.revoke',
    filename: __filename
},
async (conn, mek, m, { from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator, isDev, isAdmins, reply }) => {
    try {
        const msr = (await fetchJson('https://raw.githubusercontent.com/JawadYT36/KHAN-DATA/refs/heads/main/MSG/mreply.json')).replyMsg

        if (!isGroup) return reply(msr.only_gp)
        if (!isAdmins) { if (!isDev) return reply(msr.you_adm), { quoted: mek } }
        if (!isBotAdmins) return reply(msr.give_adm)

        // Révoquer l'ancien lien d'invitation
        await conn.groupRevokeInvite(from)

        // Générer le nouveau lien d'invitation
        const newLink = await conn.groupInviteCode(from)

        // Envoyer le nouveau lien
        await conn.sendMessage(from, { text: `*Group link Reseted* ⛔\n\nHere is the new group link: https://chat.whatsapp.com/${newLink}` }, { quoted: mek })

    } catch (e) {
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        console.log(e)
        reply(`❌ *Error Occurred !!*\n\n${e}`)
    }
})
