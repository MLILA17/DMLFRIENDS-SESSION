const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Gifted_Tech,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function GIFTED_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Gifted_Tech = Gifted_Tech({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_Gifted_Tech.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Gifted_Tech.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Gifted_Tech.ev.on('creds.update', saveCreds)
            Pair_Code_By_Gifted_Tech.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Gifted_Tech.sendMessage(Pair_Code_By_Gifted_Tech.user.id, { text: '' + b64data });

               let GIFTED_MD_TEXT = `
╔════════════════════════════╗
  🌟 𝐃𝐌𝐋-𝐌𝐃 𝐕𝐄𝐑 3 𝐀𝐂𝐓𝐈𝐕𝐄! 🌟
╚════════════════════════════╝
🔮 Session Connected @ ${time}

███████████████████████████
🚀 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 𝗘𝗫𝗣𝗘𝗥𝗜𝗘𝗡𝗖𝗘 𝗔𝗖𝗧𝗜𝗩𝗔𝗧𝗘𝗗
███████████████████████████

📢 𝗢𝗙𝗙𝗜𝗖𝗜𝗔𝗟 𝗨𝗣𝗗𝗔𝗧𝗘𝗦
├─ ✨ New Features: v3.0++
├─ 🔓 Beta Access: /betacode 
├─ 💎 Secret Menu: /dmlmenu
└─ 🔗 https://whatsapp.com/channel/0029Vb2hoPpDZ4Lb3mSkVI3C

███████████████████████████
💻 𝗗𝗘𝗩𝗘𝗟𝗢𝗣𝗘𝗥 𝗛𝗨𝗕
├─ 🌐 GitHub: github.com/MLILA17/DML-MD
├─ ⭐ Star | 🍴 Fork | 💻 Contribute
└─ 📜 Docs: 255785591288

🛠 𝗦𝗨𝗣𝗣𝗢𝗥𝗧
├─ 📧 Email: daudymussa1705@gmail.com
├─ 📞 WhatsApp: wa.me/255785591288
└─ 🐛 Bug Report: /reportbug

███████████████████████████
🛠️ 𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬
┌─ 🤖 DML-MD Engine v3.0
├─ ⚡ AI-Powered Responses
├─ 🔥 Instant Execution
└─ 🌍 Open-Source Community

❤️ 𝗦𝗢𝗪 𝗧𝗢 𝗦𝗨𝗣𝗣𝗢𝗥𝗧
✓ 🌟 GitHub Star
✓ 📲 Share with Friends
✓ 💡 Suggest Features: /suggest

╔════════════════════════════╗
  💎 𝗗𝗠𝗟-𝗠𝗗 𝗧𝗘𝗣𝗘 /𝗛𝗘𝗟𝗣 𝗙𝗢𝗥 𝗠𝗘𝗡𝗨
╚════════════════════════════╝`
 await Pair_Code_By_Gifted_Tech.sendMessage(Pair_Code_By_Gifted_Tech.user.id,{text:GIFTED_MD_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_Gifted_Tech.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    GIFTED_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await GIFTED_MD_PAIR_CODE()
});
module.exports = router
