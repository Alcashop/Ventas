import fg from 'api-dylux' 
import fetch from 'node-fetch'
import { savefrom, facebookdl } from '@bochilteam/scraper'
import fbDownloader from 'fb-downloader-scrapper'
import { facebook } from "@xct007/frieren-scraper"
import axios from 'axios'
let handler = async (m, { conn, args, command, usedPrefix }) => {
if (!args[0]) throw `
┎━━━━━━━ ∙ʚ🤴🏻ɞ∙ ━━━━━━━┒
┃✔️ Creador : @𝘼𝙡𝙘𝙖𝙨𝙝𝙤𝙥.𝙛𝙛
┃📞 Wa.me/528241264763
┖━━━━━━━ ∙ʚ⚜️ɞ∙ ━━━━━━━┚
 
╭━〔 👇🏻 𝐆𝐑𝐔𝐏𝐎𝐒 👇🏻〕
 *┃➤  ${usedPrefix}menuff*
 *┃➤  ${usedPrefix}todos (mencionar)*
 *┃➤  ${usedPrefix}kick*
 *┃➤  ${usedPrefix}grupo*
 *┃➤  ${usedPrefix}promote*
 *┃➤  ${usedPrefix}demote*
 *┃➤  ${usedPrefix}link*
 *┃➤  ${usedPrefix}notificar*
  ╰━━━━━━━━━━━━
 *╔══ ≪ 👉🏻𝗦𝗧𝗜𝗖𝗞𝗘𝗥𝗦 𝗫 𝗙𝗜𝗟𝗧𝗥𝗢𝗦👈🏻 ≫ ══╗*
 *║* 🎐 _${usedPrefix}sticker | s *imagen o video*_
 *║* 🎐 _${usedPrefix}emojimix *😺+😆*_
 *║* 🎐 _${usedPrefix}qc*_
 *║* 🎐 _${usedPrefix}scircle | círculo *imagen*_
 *║* 🎐 _${usedPrefix}semoji | emoji *tipo emoji*_
 *║* 🎐 _${usedPrefix}dado_
 *║* 🎐 _${usedPrefix}stickermarker *efecto : responder a imagen*_
 *║* 🎐 _${usedPrefix}stickerfilter *efecto : responder a imagen*_
 *╚══ ≪ •❈• ≫ ══╝*

 ╭━〔 🎮 𝐉𝐔𝐄𝐆𝐎𝐒 🎮 〕
*┃➤ 🕹️ ${usedPrefix}prostituto <@tag>*
*┃➤ 🕹️ ${usedPrefix}prostituta <@tag>*
*┃➤ 🕹️ ${usedPrefix}gay2 <@tag>*
*┃➤ 🕹️ ${usedPrefix}lesbiana <@tag>*
*┃➤ 🕹️ ${usedPrefix}pajero <@tag>*
*┃➤ 🕹️ ${usedPrefix}pajera <@tag>*
*┃➤ 🕹️ ${usedPrefix}puto <@tag>*
*┃➤ 🕹️ ${usedPrefix}puta <@tag>*
*┃➤ 🕹️ ${usedPrefix}manco <@tag>*
*┃➤ 🕹️ ${usedPrefix}manca <@tag>*
*┃➤ 🕹️ ${usedPrefix}rata <@tag>*
*┃➤ 🕹️ ${usedPrefix}negro <@tag>*
*┃➤ 🕹️ ${usedPrefix}negra <@tag>*
*┃➤ 🕹️ ${usedPrefix}fea <@tag>*
*┃➤ 🕹️ ${usedPrefix}feo <@tag>*
*┃➤ 🕹️ ${usedPrefix}love*
*┃➤ 🕹️ ${usedPrefix}pregunta*
*┃➤ 🕹️ ${usedPrefix}abrazo*
*┃➤ 🕹️ ${usedPrefix}ship2*
*┃➤ 🕹️ ${usedPrefix}formarpareja*
*┃➤ 🕹️ ${usedPrefix}verdad*
*┃➤ 🕹️ ${usedPrefix}reto*
*┃➤ 🕹️ ${usedPrefix}cancion*
*┃➤ 🕹️ ${usedPrefix}pista*
*┃➤ 🕹️ ${usedPrefix}ruleta*
 ╰━━━━━━━━━━━━
 
 ╭━〔 🈴 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒 🈴 〕
*┃➤ 📥 ${usedPrefix}play*
 ╰━━━━━━━━━━━━

*╭━〔 💌 𝐅𝐑𝐀𝐒𝐄𝐒 𝐘 𝐓𝐄𝐗𝐓𝐎𝐒 💌〕*
*┃➤ 🌷 ${usedPrefix}piropo*
*┃➤ 🌷 ${usedPrefix}consejo*
*┃➤ 🌷 ${usedPrefix}fraseromantica*
 ╰━━━━━━━━━━━━
 `
 if (!args[0].match(/www.facebook.com|fb.watch/g)) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝚄𝙽 𝙴𝙽𝙻𝙰𝙲𝙴 𝙳𝙴 𝙵𝙰𝙲𝙴𝙱𝙾𝙾𝙺, 𝙴𝙹𝙴𝙼𝙿𝙻𝙾: ${usedPrefix + command}* https://fb.watch/fOTpgn6UFQ/`
try {
await m.reply(`*[❗] ᴅᴇsᴄᴀʀɢᴀɴᴅᴏ sᴜ ᴠɪᴅᴇᴏ, ᴀɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴛᴇ ᴘʀᴏᴄᴇsᴏ ᴘᴜᴇᴅᴇ ᴅᴜʀᴀʀ ᴇɴᴛʀᴇ 2 ʏ 10 ᴍɪɴᴜᴛᴏs ᴅᴇᴘᴇɴᴅɪᴇɴᴅᴏ ᴅᴇ ʟᴀ ᴅᴜʀᴀᴄɪᴏɴ ᴅᴇʟ ᴠɪᴅᴇᴏ...*`)      
const d2ata = await facebook.v1(args[0]);
let r2es = '';
if (d2ata.urls && d2ata.urls.length > 0) {
r2es = `${d2ata.urls[0]?.hd || d2ata.urls[1]?.sd || ''}`}
conn.sendFile(m.chat, r2es, 'error.mp4', `*𝙰𝚀𝚄𝙸 𝙴𝚂𝚃𝙰 𝚂𝚄 𝚅𝙸𝙳𝙴𝙾*`, m);
} catch (err1) {
console.log('1 ' + err1)   
try {  
const req = await igeh(args[0])
conn.sendMessage(m.chat, { video : { url : req.url_list }}, m)   
} catch (err1_2) {
console.log('1_2 ' + err1_2)   
try {
let Rres = await fetch(`https://api.lolhuman.xyz/api/facebook?apikey=${lolkeysapi}&url=${args[0]}`)
let Jjson = await Rres.json()
let VIDEO = Jjson.result[0]
if (VIDEO == '' || !VIDEO || VIDEO == null) VIDEO = Jjson.result[1]
conn.sendFile(m.chat, VIDEO, 'error.mp4', `*𝙰𝚀𝚄𝙸 𝙴𝚂𝚃𝙰 𝚂𝚄 𝚅𝙸𝙳𝙴𝙾*`, m)    
} catch (err2) {
console.log('2 ' + err2)    
try {
let ress = await fg.fbdl(args[0])
let urll = await ress.data[0].url    
await conn.sendFile(m.chat, urll, 'error.mp4', '*𝙰𝚀𝚄𝙸 𝙴𝚂𝚃𝙰 𝚂𝚄 𝚅𝙸𝙳𝙴𝙾*', m)     
} catch (err3) {
console.log('3 ' + err3)    
try {
let res = await fbDownloader(args[0])
for (let result of res.download) {
let ur = result.url    
await conn.sendFile(m.chat, ur, 'error.mp4', '*𝙰𝚀𝚄𝙸 𝙴𝚂𝚃𝙰 𝚂𝚄 𝚅𝙸𝙳𝙴𝙾*', m)}
} catch (err4) {
console.log('4 ' + err4)    
try { 
let vio = await fetch(`https://api.violetics.pw/api/downloader/facebook?apikey=beta&url=${args[0]}`)  
let vioo = await vio.json()
let videovio = `${vioo.result.hd.url || vioo.result.sd.url}`
await conn.sendFile(m.chat, videovio, `error.mp4`, '*𝙰𝚀𝚄𝙸 𝙴𝚂𝚃𝙰 𝚂𝚄 𝚅𝙸𝙳𝙴𝙾*', m)
} catch (err5) {
console.log('5 ' + err5)    
try {
let res3 = await fetch(`https://latam-api.vercel.app/api/facebookdl?apikey=brunosobrino&q=${args[0]}`)  
let json = await res3.json()
let url3 = await json.video
await conn.sendFile(m.chat, url3, 'error.mp4', '*𝙰𝚀𝚄𝙸 𝙴𝚂𝚃𝙰 𝚂𝚄 𝚅𝙸𝙳𝙴𝙾*', m)    
} catch (err6) {
console.log('6 ' + err6)    
try {
const { result } = await facebookdl(args[0]).catch(async _ => await savefrom(args[0]))
for (const { url, isVideo } of result.reverse()) await conn.sendFile(m.chat, url, `facebook.${!isVideo ? 'bin' : 'mp4'}`, '*𝙰𝚀𝚄𝙸 𝙴𝚂𝚃𝙰 𝚂𝚄 𝚅𝙸𝙳𝙴𝙾*', m)    
} catch (err7) {
console.log('7 ' + err7)    
throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*`
}}}}}}}}}
handler.command = /^(alca|alcamenu)$/i
handler.register = false
handler.group = true
handler.admin = true
export default handler
async function igeh(url_media) {
return new Promise(async (resolve,reject)=>{
const BASE_URL = "https://instasupersave.com/"
try {
const resp = await axios(BASE_URL);
const cookie = resp.headers["set-cookie"]; // get cookie from request
const session = cookie[0].split(";")[0].replace("XSRF-TOKEN=","").replace("%3D", "")
var config = { method: 'post', url: `${BASE_URL}api/convert`, headers: { 'origin': 'https://instasupersave.com', 'referer': 'https://instasupersave.com/pt/', 'sec-fetch-dest': 'empty', 'sec-fetch-mode': 'cors', 'sec-fetch-site': 'same-origin', 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 Edg/107.0.1418.52', 'x-xsrf-token': session, 'Content-Type': 'application/json', 'Cookie': `XSRF-TOKEN=${session}; instasupersave_session=${session}` }, data: { url: url_media }};
axios(config).then(function (response) {
let ig = []
if(Array.isArray(response.data)){
response.data.forEach(post => { ig.push(post.sd === undefined ? post.thumb : post.sd.url)})
} else {
ig.push(response.data.url[0].url)}
resolve({ results_number : ig.length, url_list: ig })}).catch(function (error) {
reject(error.message)})
} catch (e) {
} catch (e) {
reject(e.message)
}})}
