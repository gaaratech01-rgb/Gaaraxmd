const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    alias: "dev",
    react: "👨‍💻",
    desc: "get gaara desc",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `> ╭──☆ *ɢᴀᴀʀᴀ xᴍᴅ* ☆──╮
> │ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ɢᴀᴀʀᴀ ᴛᴇᴄʜ   
> │ ʀᴇᴀʟ ɴᴀᴍᴇ ➭ ɴᴏᴛ ᴅᴇғɪɴᴇᴅ 
> │ ɴɪᴄᴋɴᴀᴍᴇ ➮ ɢᴏᴅ ɢᴀᴀʀᴀ 
> │ ᴀɢᴇ ➭ ɴᴏᴛ ᴅᴇғɪɴᴇᴅ   
> │ ᴄɪᴛʏ ➭ ɴᴏᴛ ᴅᴇғɪɴᴇᴅ 
> │ ᴅᴇᴠɪᴄᴇ ➭ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ 
> ╰──────────────╯

> ╭──☆ *GAARA DEV* ☆──╮
> │ ᴄᴏᴏʟ ᴅᴇᴠᴇʟᴏᴘᴇʀ ➭ ɢᴀᴀʀᴀ ᴛᴇᴄʜ 
> │ ᴏɴʟʏ ᴏɴᴇ ᴅᴇᴠᴇʟᴏᴘᴇʀ 
> │ ʙᴏᴛ ➭ ᴏᴇᴍᴀ ᴅᴇᴠ 
> │ ᴏᴡɴᴇʀ ➭ +50944893389 
> ╰───────────────╯

> ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɢᴀᴀʀᴀ ᴛᴇᴄʜ*
> ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

`
await conn.sendMessage(from, {
    image: { url: 'https://files.catbox.moe/l8dtuv.jpg' },
    caption: about,
    contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363401605001369@newsletter', // ou ton JID actuel
            newsletterName: 'ɢᴀᴀʀᴀ-ᴍᴅ',
            serverMessageId: 143
        }
    }
}, { quoted: mek })

}catch(e){
console.log(e)
reply(`${e}`)
}
})

