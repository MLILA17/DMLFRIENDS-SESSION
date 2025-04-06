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
┃*Enjoy using Davincs_md*
┗━━━━━━━━━━━━━━━
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
|| Creator = DAVINCS TECH
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
▬▬▬▬▬▬
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
©*❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒

*𝔻𝔸𝕍𝕀ℕℂ𝕊-𝕄𝔻-𝕎𝔸𝔹𝕆𝕋 𝕊𝔼𝕊𝕊𝕀𝕆ℕ 𝕀𝕊 ℂ𝕆ℕℕ𝔼ℂ𝕋𝔼𝔻*

❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒
~𝑭𝒐𝒍𝒍𝒐𝒘 𝒕𝒉𝒊𝒔 𝒘𝒂𝒄𝒉𝒂𝒏𝒏𝒆𝒍 𝒇𝒐𝒓 𝒃𝒐𝒕 𝒖𝒑𝒅𝒂𝒕𝒆𝒔~ 👇 👇 
> https://whatsapp.com/channel/0029VakSTEQGZNCk6CqE9E2P

❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒
~𝑭𝒐𝒓 𝒎𝒐𝒓𝒆 𝒊𝒏𝒇𝒐 𝒕𝒂𝒑 𝒐𝒏 𝒕𝒉𝒆 𝒍𝒊𝒏𝒌 𝒃𝒆𝒍𝒐𝒘~ 
> https://github.com/9Wish882 
> 𝒅𝒐𝒏𝒕 𝒇𝒐𝒓𝒈𝒆𝒕 𝒕𝒐 𝒇𝒐𝒓𝒌 𝒂𝒏𝒅 𝒔𝒕𝒂𝒓 𝒕𝒉𝒆 𝒓𝒆𝒑𝒐
❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒
 ~𝑭𝒐𝒓 𝒂𝒏𝒚 𝒑𝒓𝒐𝒃𝒍𝒆𝒎 𝒕𝒆𝒙𝒕 𝒅𝒆𝒗𝒆𝒍𝒐𝒑𝒆𝒓~
> https://wa.me/255759637644
> https://wa.me/255656582542

*𝐓𝐇𝐈𝐒 𝐁𝐎𝐓 🤖 𝐈𝐒 𝐌𝐀𝐃𝐄 𝐁𝐘 𝐀𝐋𝐋𝐀𝐍@𝐃𝐀𝐕𝐈𝐍𝐂𝐒*❒❒❒❒❒❒❒❒❒`


_`Dont Forget To Give Star To My Repo_`*

_Don't Forget To Give Star To My Repo_`
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
