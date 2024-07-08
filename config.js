const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_13_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDYyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDcwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDI4LFxuICAgICAgICA3LFxuICAgICAgICAxODMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDExMixcbiAgICAgICAgODEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjM0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDM2LFxuICAgICAgICA0MixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTksXG4gICAgICAgIDI1MixcbiAgICAgICAgMjIzLFxuICAgICAgICA2NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwMixcbiAgICAgICAgNjMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTc3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTc1LFxuICAgICAgICA4OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjI5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDc4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDM2LFxuICAgICAgICAyMixcbiAgICAgICAgMTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgNDYsXG4gICAgICAgIDQ1LFxuICAgICAgICA1NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzksXG4gICAgICAgIDU1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDYzLFxuICAgICAgICAxOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAzNyxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDksXG4gICAgICAgIDEzMyxcbiAgICAgICAgODEsXG4gICAgICAgIDUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzksXG4gICAgICAgIDQ5LFxuICAgICAgICA5NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDk2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjcsXG4gICAgICAgIDE0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTM1LFxuICAgICAgICA4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwLFxuICAgICAgICAxODcsXG4gICAgICAgIDM0LFxuICAgICAgICA2NixcbiAgICAgICAgMTA0LFxuICAgICAgICAzMixcbiAgICAgICAgNjksXG4gICAgICAgIDU0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDUsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDM5LFxuICAgICAgICAxODAsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODgsXG4gICAgICAgIDExLFxuICAgICAgICAzMixcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTUwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTY4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxODAsXG4gICAgICAgIDkzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDc2LFxuICAgICAgICAyNDksXG4gICAgICAgIDY1LFxuICAgICAgICA3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTA4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NyxcbiAgICAgICAgODgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMCxcbiAgICAgICAgMTc3LFxuICAgICAgICAzOCxcbiAgICAgICAgMjM1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDQ2LFxuICAgICAgICA1NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTE4LFxuICAgICAgICA4NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTc3LFxuICAgICAgICA1OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTU5LFxuICAgICAgICA3MyxcbiAgICAgICAgODQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjUzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTU1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm1NcUpvVEJJOXhmRFpRd2kzWjdYM0oyNlZNLzd2ODZJcmhCd2tJakovYnc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlhrX1pXZWtQU1MyN0UzLUJURlNBeFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYWUzMDE1NTktYzRmOS00OTYxLTgyMzMtMjBhMmIwNDk2MmZlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4MCxcbiAgICAgIDQ2LFxuICAgICAgMzcsXG4gICAgICAxODcsXG4gICAgICAxMzcsXG4gICAgICAyNTAsXG4gICAgICAyMDQsXG4gICAgICA4MixcbiAgICAgIDExNyxcbiAgICAgIDMzLFxuICAgICAgMTksXG4gICAgICAyNixcbiAgICAgIDg0LFxuICAgICAgMTIsXG4gICAgICA2NSxcbiAgICAgIDk3LFxuICAgICAgODksXG4gICAgICAxMzcsXG4gICAgICAxNTEsXG4gICAgICA0N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjksXG4gICAgICAyMDgsXG4gICAgICAxMDYsXG4gICAgICAxNzksXG4gICAgICA2NixcbiAgICAgIDE2NixcbiAgICAgIDI5LFxuICAgICAgMjI2LFxuICAgICAgMTM1LFxuICAgICAgMTczLFxuICAgICAgMTc5LFxuICAgICAgMTgsXG4gICAgICA1MyxcbiAgICAgIDIxLFxuICAgICAgMTYxLFxuICAgICAgMTcxLFxuICAgICAgMTk1LFxuICAgICAgMjI1LFxuICAgICAgOTAsXG4gICAgICAxNTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiU1ZFMVFCVldcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTcxODE2OTIwNDo0MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlBywqFOY8KjXCIsXG4gICAgXCJsaWRcIjogXCIxOTc0ODI3NjQwOTE1OTk6NDJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTy9TeXM4RkVNcVFzYlFHR0FZZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJjSTNaMnpQcEtsTDVHcDZudTg3aEVTMmV3ME5wbWh0L3VrOTZTOHE0RzJZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImJaNFpqeEN4TnJKM3MxNDgyMVdrYmpPaXBmTDlBN1lZNE9ybEI0UTl5WTRqRlg4RUIvQTFSYm4zempqS2svTVkzMFdkaUZvZnlCa0pqelM4WmpYU0RRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjlxYW1PM2VJMzFQSHk3djZNYnJHQ05MVWRYNjhtMWZ4MDk4ZmQ3SjhiZlJkN3F3UEVKT1p5WEdrYkhkUDFSN2g0aHlVUHJiRkVqZExEcE5wOGxBQ2pRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTcxODE2OTIwNDo0MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA0Njk1ODEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFZi9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVmLy5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
