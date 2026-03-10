const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "",  // SUHAIL_08_49_03_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDExOCxcbiAgICAgICAgODQsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDgzLFxuICAgICAgICA0OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDYyLFxuICAgICAgICA1OSxcbiAgICAgICAgODEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExMCxcbiAgICAgICAgODMsXG4gICAgICAgIDksXG4gICAgICAgIDIxMyxcbiAgICAgICAgNyxcbiAgICAgICAgMjI3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTEyLFxuICAgICAgICA4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDM3LFxuICAgICAgICAyOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDYyLFxuICAgICAgICA1MSxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDc1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDExMyxcbiAgICAgICAgNyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODUsXG4gICAgICAgIDkyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDc2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjMyLFxuICAgICAgICA5MCxcbiAgICAgICAgNjksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjAzLFxuICAgICAgICA3OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDc0LFxuICAgICAgICA3NixcbiAgICAgICAgOSxcbiAgICAgICAgMjAxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxODgsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3MixcbiAgICAgICAgODksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTcxLFxuICAgICAgICA1NixcbiAgICAgICAgMTM1LFxuICAgICAgICAyNCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODIsXG4gICAgICAgIDIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE2MixcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDQxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDczLFxuICAgICAgICA3OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTEzLFxuICAgICAgICA3MixcbiAgICAgICAgMTQ1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTgzLFxuICAgICAgICA1NixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDYyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTIwLFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA1NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDM0LFxuICAgICAgICAzNixcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDczLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTUwLFxuICAgICAgICA2MixcbiAgICAgICAgMTE0LFxuICAgICAgICAxODgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDg5LFxuICAgICAgICA2MSxcbiAgICAgICAgODUsXG4gICAgICAgIDEsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDQwLFxuICAgICAgICA0MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDg2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTUsXG4gICAgICAgIDE0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMixcbiAgICAgICAgMTI2LFxuICAgICAgICA0MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjksXG4gICAgICAgIDEzMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiK0c2aURIT0R4TUdneWdiK2cwU2xMWStHNWVGN3ZEZG1yN3ZSdE9rc1FFaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc3NTA2Mjc3NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQUM3RTUxNEQ0NTIwRkNFNEZCMTM5OTE2MjczM0ZCNzdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzczMTMyNTUyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3NzUwNjI3NzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkFDNjIyQzc1MjVBQjQwMEI3NzE4NEE4NjAyMkE2M0IwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc3MzEzMjU1MlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJaOFN1d3dfbFNRMnpsRlB6WE1WN3hRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjU3ZTVmNTQxLWU0MmUtNGVlZS05OTZkLWViNmVlZjNkMWMxNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTEsXG4gICAgICA1OSxcbiAgICAgIDE0NCxcbiAgICAgIDEyMixcbiAgICAgIDIyNyxcbiAgICAgIDYyLFxuICAgICAgMTI1LFxuICAgICAgMTQ5LFxuICAgICAgMTY5LFxuICAgICAgNDcsXG4gICAgICA4NCxcbiAgICAgIDE5OCxcbiAgICAgIDIxLFxuICAgICAgMTUsXG4gICAgICAxMjAsXG4gICAgICAxMzUsXG4gICAgICAxODksXG4gICAgICAyMDIsXG4gICAgICAxNzEsXG4gICAgICAxNTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNCxcbiAgICAgIDEwMixcbiAgICAgIDE3MixcbiAgICAgIDM2LFxuICAgICAgMzIsXG4gICAgICAxMTIsXG4gICAgICAxOTcsXG4gICAgICAxNixcbiAgICAgIDI1MixcbiAgICAgIDI0NyxcbiAgICAgIDIyMCxcbiAgICAgIDQzLFxuICAgICAgMTU3LFxuICAgICAgNTksXG4gICAgICAxNTIsXG4gICAgICA3NyxcbiAgICAgIDI1NCxcbiAgICAgIDExNyxcbiAgICAgIDU1LFxuICAgICAgODZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJWGczYWtCRUlPMnY4MEdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkNNTzc4eVIzTy9EaFhtSFNobi9DVjYxMkt0WnY4c2JhNCtCajJRRnIzZ1U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTGJ6Z2tzK2FJdnNKV0RPQW0yd0NkZy9OT0VzdUFIN25qUE9sQWxiN3VqZHVTRHBxOUkva0YwWUFnalhmRnNNVi9YWGpkdFN2ZVV2bzI3WnVZNjdVQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSHQ4dnFHLzJaWnY2YlljTFVvcWpJQmt6RndnQk82eHVyY1djYmFWcUZmVVpkcE9mTERGdjl6MmE3Q3dJWTVzbFNuMWJLVVRvdDZWMk1RV3BQTlF4alE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc3NTA2Mjc3Njo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNjk5MTgxODQwNzk0NzE6N0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCJkRGlsYVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NzUwNjI3NzY6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzczMTMyNTUxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTU0zXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNTTMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJvd1lhR1g4Q0VjWFpERXpOcnczcExUU3VOak1jVWJacWJRVlk3UGxsRzV3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM1NTk1NDY5MyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzczMTMyNTUxNTQ5XCJ9Igp9PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
