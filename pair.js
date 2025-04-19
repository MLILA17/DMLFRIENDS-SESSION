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
┃*𝐄𝐧𝐣𝐨𝐲 𝐔𝐬𝐢𝐧𝐠 𝐃𝐌𝐋-𝐌𝐃*
┗━━━━━━━━━━━━
©❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒

*𝗗𝗠𝗟-𝗠𝗗-𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗕𝗢𝗧 𝗦𝗘𝗦𝗦𝗜𝗢𝗡 𝗜𝗦 𝗖𝗢𝗡𝗡𝗘𝗖𝗧𝗘𝗗*

❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒
~𝗙𝗼𝗹𝗹𝗼𝘄 𝘁𝗵𝗶𝘀 𝘄𝗮.𝗰𝗵𝗮𝗻𝗻𝗲𝗹 𝗳𝗼𝗿 𝗯𝗼𝘁 𝘂𝗽𝗱𝗮𝘁𝗲𝘀~ 👇 👇 
> 
https://whatsapp.com/channel/0029Vb2hoPpDZ4Lb3mSkVI3C
❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒
~𝗙𝗼𝗿 𝗺𝗼𝗿𝗲 𝗶𝗻𝗳𝗼 𝘁𝗮𝗽 𝗼𝗻 𝘁𝗵𝗲 𝗹𝗶𝗻𝗸 𝗯𝗲𝗹𝗼𝘄~ 
> https://github.com/MLILA17/DML-MD 
> 𝗗𝗼𝗻'𝘁 𝗳𝗼𝗿𝗴𝗲𝘁 𝘁𝗼 𝗳𝗼𝗿𝗸 𝗮𝗻𝗱 𝘀𝘁𝗮𝗿 𝘁𝗵𝗲 𝗿𝗲𝗽𝗼
❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒
 𝗙𝗼𝗿 𝗮𝗻𝘆 𝗽𝗿𝗼𝗯𝗹𝗲𝗺 𝘁𝗲𝘅𝘁 𝗱𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿
> https://wa.me/255785591288
*𝐓𝐇𝐈𝐒 𝐁𝐎𝐓 🤖 𝐈𝐒 𝐌𝐀𝐃𝐄 𝐁𝐘 𝐃𝐀𝐔𝐃𝐘 𝐌𝐔𝐒𝐀*

🤗𝗗𝗼𝗻'𝘁 𝗳𝗼𝗿𝗴𝗲𝘁 𝗧𝗼 𝗚𝗶𝘃𝗲 𝗦𝘁𝗮𝗿 𝗧𝗼 𝗠𝘆 𝗥𝗲𝗽𝗼`
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
