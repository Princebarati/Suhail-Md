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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_04_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE4LFxuICAgICAgICAzMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDY2LFxuICAgICAgICA2MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTc3LFxuICAgICAgICA4OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODcsXG4gICAgICAgIDUsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDksXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTA5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDUzLFxuICAgICAgICA2NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDg3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTY3LFxuICAgICAgICA1NixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjE0LFxuICAgICAgICA3NCxcbiAgICAgICAgODcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjIxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjE3LFxuICAgICAgICA1MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTY1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjksXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDksXG4gICAgICAgIDE2MixcbiAgICAgICAgODIsXG4gICAgICAgIDY3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDQzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyMixcbiAgICAgICAgOTUsXG4gICAgICAgIDczLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3LFxuICAgICAgICAxOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDUwLFxuICAgICAgICA2MyxcbiAgICAgICAgNixcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTU1LFxuICAgICAgICA2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNixcbiAgICAgICAgNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNixcbiAgICAgICAgMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxODMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjIxLFxuICAgICAgICA2MixcbiAgICAgICAgMTEzLFxuICAgICAgICAzOCxcbiAgICAgICAgNzksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3LFxuICAgICAgICA0MixcbiAgICAgICAgNjUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0LFxuICAgICAgICAxMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEwNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA0OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDYwLFxuICAgICAgICAyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTI5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTk3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDQzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDg3LFxuICAgICAgICA3OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDQ5LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJxR04ybVBqNHJOM0d4eWw5MVBaampGL3RkMVhYR0xZNWlFUHJKZXFSbzI0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ2RWMzVGpaS1FoZVc1dVJvbXBlaW1nXCIsXG4gIFwicGhvbmVJZFwiOiBcIjhhOTQwNzgwLTFmODUtNGIzNy1iM2NkLTUwZGE2MDc4NTQ5N1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjUsXG4gICAgICAxNzEsXG4gICAgICAxNjIsXG4gICAgICAyMjUsXG4gICAgICAyMzcsXG4gICAgICAxNTIsXG4gICAgICAxODAsXG4gICAgICAyMzQsXG4gICAgICAxMTUsXG4gICAgICA1OCxcbiAgICAgIDIwNSxcbiAgICAgIDU5LFxuICAgICAgMTkyLFxuICAgICAgMTc2LFxuICAgICAgMjAxLFxuICAgICAgNTEsXG4gICAgICAxMTMsXG4gICAgICAyMzksXG4gICAgICA4OCxcbiAgICAgIDY4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYxLFxuICAgICAgNTgsXG4gICAgICAxMTEsXG4gICAgICAxNDQsXG4gICAgICAyMjksXG4gICAgICA2NyxcbiAgICAgIDEzNyxcbiAgICAgIDIxMixcbiAgICAgIDU1LFxuICAgICAgODgsXG4gICAgICA4NCxcbiAgICAgIDE1NixcbiAgICAgIDY4LFxuICAgICAgMTUyLFxuICAgICAgMTg2LFxuICAgICAgMTA4LFxuICAgICAgMTU2LFxuICAgICAgMixcbiAgICAgIDE3MCxcbiAgICAgIDg5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkQ5UjRaR0FRXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU3MTgxNjkyMDQ6NDVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJQcsKhTmPCo1wiLFxuICAgIFwibGlkXCI6IFwiMTk3NDgyNzY0MDkxNTk5OjQ1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ08vU3lzOEZFSUxDczdRR0dBa2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiY0kzWjJ6UHBLbEw1R3A2bnU4N2hFUzJldzBOcG1odC91azk2UzhxNEcyWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJDWGdqbW5sTStOeEZNa2lPcmd4blpNTnl0eFRrK0g2NlNxd1RlZUZTZkxacUo0WmJybk0raDlKaWpwVkN1Vk9VWEcyem9XMzEyQ01GU0VRU0N6bUtCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ5cTBYblhLTmcxQklsekFZTDV0MU5EeXBTVUdGbEhNVTJOV2twMTRscW9aWHIrOGxJY1BVSVgrSzU2YUdHZEQySVhkY2RWVEhWOGZ4aFloSGxyalpBQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTU3MTgxNjkyMDQ6NDVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNTA4Njc5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRWdBXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFZ0EuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJHVC9kSG9oeE9jbEJ4dmtWVG83UHVqVitnV05peWF4akkrbDJFUWJzT1NJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1MDkwNzUzMTEsXCJjdXJyZW50SW5kZXhcIjo1LFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "PRINCE",
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
