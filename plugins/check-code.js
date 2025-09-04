const axios = require("axios");
const { cmd } = require("../command");

function getFlagEmoji(countryCode) {
  if (!countryCode) return "";
  return countryCode
    .toUpperCase()
    .split("")
    .map(c => String.fromCodePoint(c.charCodeAt(0) + 127397))
    .join("");
}

cmd({
  pattern: "check",
  desc: "Check country from calling code",
  category: "utility",
  filename: __filename
}, async (conn, mek, m, { args, reply }) => {
  try {
    let code = args[0];
    if (!code) return reply("*Please provide a country code. Example: `.check 509`*");

    code = code.replace(/\D/g, '');

    const { data } = await axios.get(`https://restcountries.com/v2/callingcode/${code}`);
    
    if (!data || data.status === 404) {
      return reply(`❌ No country found for the code +${code}.`);
    }

    // Récupérer le pays, le drapeau et la date d'indépendance (si disponible)
    const countryList = data.map(c => {
      const countryName = c.name;
      const flagImageURL = c.flags[0];  // L'URL du drapeau
      const independenceDate = c.independence ? c.independence : "Date d'indépendance non disponible";  // Date d'indépendance

      return `🌍 ${countryName}\n🇫🇷 *Flag*: ${flagImageURL}\n📅 *Independence Date*: ${independenceDate}\n`;
    }).join("\n");

    // Object containing the forwarded newsletter message info
    const forwardedNewsletterMessageInfo = {
      newsletterJid: '120363418161689316@newsletter', // Your actual JID
      newsletterName: 'ɢᴀᴀʀᴀ xᴍᴅ', // Your newsletter name
    };

    // Réponse avec image du drapeau, caption, et newsletter info
    reply(`📮 *Country Code*: +${code}\n${countryList}`, forwardedNewsletterMessageInfo);
    
  } catch (e) {
    console.error("❌ API error:", e.message);
    reply(`❌ Error: ${e.message}`);
  }
});
