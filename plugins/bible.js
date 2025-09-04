const axios = require("axios");
const { cmd } = require("../command");

// Command: bible
cmd({
    pattern: "bible",
    desc: "Fetch Bible verses by reference.",
    category: "bible",
    react: "📖",
    filename: __filename
}, async (conn, mek, m, { args, reply }) => {
    try {
        // Vérifiez si une référence est fournie
        if (args.length === 0) {
            return reply(`⚠️ *Please provide a Bible reference.*\n\n📝 *Example:*\n.bible John 1:11`);
        }

        // Joindre les arguments pour former la référence
        const reference = args.join(" ");

        // Appeler l'API avec la référence
        const apiUrl = `https://bible-api.com/${encodeURIComponent(reference)}`;
        const response = await axios.get(apiUrl);

        // Vérifiez si la réponse contient des données
        if (response.status === 200 && response.data.text) {
            const { reference: ref, text, translation_name } = response.data;

            // Envoyez la réponse formatée avec des emojis
            reply(
                `📜 *Verset Biblique Trouvé!*

---

*Référence :* ${ref}  
*Texte :* ${text}  

---

*Traduction :* ${translation_name}

---

> © GAARA-XMD BIBLE 🙏
`
            );
        } else {
            reply("❌ *Verse not found.* Please check the reference and try again.");
        }
    } catch (error) {
        console.error(error);
        reply("⚠️ *An error occurred while fetching the Bible verse.* Please try again.");
    }
});
