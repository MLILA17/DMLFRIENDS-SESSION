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
┏━━━━━━━━━━━━━━
┃*Enjoy using DML_MD*
┗━━━━━━━━━━━━
©❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒

*DML-MD-WHATSAPP BOT SESSION IS CONNECTED*

❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒
~𝑭𝒐𝒍𝒍𝒐𝒘 𝒕𝒉𝒊𝒔 𝒘𝒂𝒄𝒉𝒂𝒏𝒏𝒆𝒍 𝒇𝒐𝒓 𝒃𝒐𝒕 𝒖𝒑𝒅𝒂𝒕𝒆𝒔~ 👇 👇 
> 
https://whatsapp.com/channel/0029Vb2hoPpDZ4Lb3mSkVI3C
❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒
~𝑭𝒐𝒓 𝒎𝒐𝒓𝒆 𝒊𝒏𝒇𝒐 𝒕𝒂𝒑 𝒐𝒏 𝒕𝒉𝒆 𝒍𝒊𝒏𝒌 𝒃𝒆𝒍𝒐𝒘~ 
> https://github.com/MLILA17 
> 𝒅𝒐𝒏𝒕 𝒇𝒐𝒓𝒈𝒆𝒕 𝒕𝒐 𝒇𝒐𝒓𝒌 𝒂𝒏𝒅 𝒔𝒕𝒂𝒓 𝒕𝒉𝒆 𝒓𝒆𝒑𝒐
❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒
 𝑭𝒐𝒓 𝒂𝒏𝒚 𝒑𝒓𝒐𝒃𝒍𝒆𝒎 𝒕𝒆𝒙𝒕 𝒅𝒆𝒗𝒆𝒍𝒐𝒑𝒆𝒓
> https://wa.me/255785591288
*𝐓𝐇𝐈𝐒 𝐁𝐎𝐓 🤖 𝐈𝐒 𝐌𝐀𝐃𝐄 𝐁𝐘 DAUDI MUSA*

🤗Dont Forget To Give Star To My Repo`
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
