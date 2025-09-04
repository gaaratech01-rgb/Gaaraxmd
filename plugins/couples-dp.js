const { cmd, commands } = require('../command');
const axios = require('axios');

cmd({
  'pattern': "couplepp",
  'alias': ["couple", "cpp"],
  'react': '💑',
  'desc': "Obtenez des images de couple masculin et féminin.",
  'category': "image",
  'use': ".couplepp",
  'filename': __filename
}, async (conn, m, store, {
  from,
  args,
  reply
}) => {
  try {
    reply("*wait for GAARA-XMD...*");

    const coupleImages = [
      {
        male: 'https://files.catbox.moe/vxgtki.jpg', // Remplace par ton URL d'image pour le mâle
        female: 'https://files.catbox.moe/w4utns.jpg' // Remplace par ton URL d'image pour la femelle
      },
      {
        male: 'https://files.catbox.moe/nw8bfv.jpg',
        female: 'https://files.catbox.moe/7xd9wc.jpg'
      },
      {
        male: 'https://files.catbox.moe/h7n1mc.jpg',
        female: 'https://files.catbox.moe/qqz0d7.jpg'
      },
      {
        male: 'https://files.catbox.moe/d6vqfi.jpg',
        female: 'https://files.catbox.moe/bjsa9o.jpg'
      },
      {
        male: 'https://files.catbox.moe/97tod3.jpg',
        female: 'https://files.catbox.moe/ade6p8.jpg'
      },
         {
        male: 'https://files.catbox.moe/qq3kos.jpg',
        female: 'https://files.catbox.moe/iwmybd.jpg'
      },
       {
        male: 'https://files.catbox.moe/iwbjxz.jpg',
        female: 'https://files.catbox.moe/kpy55j.jpg'
      },
        {
        male: 'https://files.catbox.moe/xuip34.jpg',
        female: 'https://files.catbox.moe/rqkx40.jpg'
      }
    ];

    // Choisir une image aléatoire parmi celles définies
    const randomIndex = Math.floor(Math.random() * coupleImages.length);
    const { male, female } = coupleImages[randomIndex];

    if (male) {
      await conn.sendMessage(from, {
        'image': { 'url': male },
        'caption': "👨 ᴍᴀɴ ᴩʀᴏꜰɪʟ ɪᴍɢ\n\n> *ᴩᴏᴡᴇʀᴇᴅ ʙY ɢᴀᴀʀᴀ xᴍᴅ*"
      }, { 'quoted': m });
    }

    if (female) {
      await conn.sendMessage(from, {
        'image': { 'url': female },
        'caption': "👩 ᴡᴏᴍᴀɴ ᴩʀᴏꜰɪʟ ɪᴍɢ\n\n> *ᴩᴏᴡᴇʀᴇᴅ ʙY ɢᴀᴀʀᴀ xᴍᴅ*"
      }, { 'quoted': m });
    }

  } catch (error) {
    console.error(error);
    reply("❌ Une erreur s'est produite lors de la récupération des images de couple.");
  }
});
