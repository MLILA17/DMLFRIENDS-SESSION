const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const QRCode = require('qrcode');
const express = require('express');
const path = require('path');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
	default: Wasi_Tech,
	useMultiFileAuthState,
	jidNormalizedUser,
	Browsers,
	delay,
	makeInMemoryStore,
} = require("@whiskeysockets/baileys");

function removeFile(FilePath) {
	if (!fs.existsSync(FilePath)) return false;
	fs.rmSync(FilePath, {
		recursive: true,
		force: true
	})
};
const {
	readFile
} = require("node:fs/promises")
router.get('/', async (req, res) => {
	const id = makeid();
	async function WASI_MD_QR_CODE() {
		const {
			state,
			saveCreds
		} = await useMultiFileAuthState('./temp/' + id)
		try {
			let Qr_Code_By_Wasi_Tech = Wasi_Tech({
				auth: state,
				printQRInTerminal: false,
				logger: pino({
					level: "silent"
				}),
				browser: Browsers.macOS("Desktop"),
			});

			Qr_Code_By_Wasi_Tech.ev.on('creds.update', saveCreds)
			Qr_Code_By_Wasi_Tech.ev.on("connection.update", async (s) => {
				const {
					connection,
					lastDisconnect,
					qr
				} = s;
				if (qr) await res.end(await QRCode.toBuffer(qr));
				if (connection == "open") {
					await delay(5000);
					let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
					await delay(800);
				   let b64data = Buffer.from(data).toString('base64');
				   let session = await Qr_Code_By_Wasi_Tech.sendMessage(Qr_Code_By_Wasi_Tech.user.id, { text: '' + b64data });
	
				   let WASI_MD_TEXT = `
┏━━━━━━━━━━━━━━
┃*𝐄𝐍𝐉𝐎𝐘 𝐔𝐒𝐈𝐍𝐆 𝐃𝐌𝐋-𝐌𝐃*
┗━━━━━━━━━━━━━━━
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
|| 𝗖𝗿𝗲𝗮𝘁𝗼𝗿 = 𝐃𝐌𝐋 𝐓𝐄𝐂𝐇
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
▬▬▬▬▬▬
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
©*❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒

*𝐃𝐌𝐋-𝐌𝐃-𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓 𝐒𝐄𝐒𝐒𝐈𝐎𝐍 𝐈𝐒 𝐂𝐎𝐍𝐍𝐄𝐂𝐓𝐄𝐃*

❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒
~𝗙𝗼𝗹𝗹𝗼𝘄 𝘁𝗵𝗶𝘀 𝘄𝗮.𝗰𝗵𝗮𝗻𝗻𝗲𝗹 𝗳𝗼𝗿 𝗯𝗼𝘁 𝘂𝗽𝗱𝗮𝘁𝗲𝘀~ 👇 👇 
> https://whatsapp.com/channel/0029Vb2hoPpDZ4Lb3mSkVI3C

❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒
~𝗳𝗼𝗿 𝗺𝗼𝗿𝗲 𝗶𝗻𝗳𝗼 𝘁𝗮𝗽 𝗼𝗻 𝘁𝗵𝗲 𝗹𝗶𝗻𝗸 𝗯𝗲𝗹𝗼𝘄~ 
>  https://github.com/MLILA17/DML-MD
> 𝗱𝗼𝗻𝘁 𝗳𝗼𝗿𝗴𝗲𝘁 𝘁𝗼 𝗳𝗼𝗿𝗸 𝗮𝗻𝗱 𝘀𝘁𝗮𝗿 𝘁𝗵𝗲 𝗿𝗲𝗽𝗼
❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒
 ~𝗳𝗼𝗿 𝗮𝗻𝘆 𝗽𝗿𝗼𝗯𝗹𝗲𝗺 𝘁𝗲𝘅𝘁 𝗱𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿~
> https://wa.me/255785591288
> https://wa.me/255622220680

*𝐓𝐇𝐈𝐒 𝐁𝐎𝐓 🤖 𝐈𝐒 𝐌𝐀𝐃𝐄 𝐁𝐘 𝐃𝐀𝐔𝐃𝐘 𝐌𝐔𝐒𝐀*❒❒❒❒❒❒❒❒❒`
	 await Qr_Code_By_Wasi_Tech.sendMessage(Qr_Code_By_Wasi_Tech.user.id,{text:WASI_MD_TEXT},{quoted:session})



					await delay(100);
					await Qr_Code_By_Wasi_Tech.ws.close();
					return await removeFile("temp/" + id);
				} else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
					await delay(10000);
					WASI_MD_QR_CODE();
				}
			});
		} catch (err) {
			if (!res.headersSent) {
				await res.json({
					code: "Service is Currently Unavailable"
				});
			}
			console.log(err);
			await removeFile("temp/" + id);
		}
	}
	return await WASI_MD_QR_CODE()
});
module.exports = router
