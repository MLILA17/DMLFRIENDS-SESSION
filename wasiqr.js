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
