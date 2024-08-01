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

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Kampala";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaAkETLLY6d8qhLmZt2v";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaAkETLLY6d8qhLmZt2v" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/fd2dd4ff0da3dca59f992.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "256704376077";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "256704376077,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_46_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTAxLFxuICAgICAgICA0NCxcbiAgICAgICAgMjM4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTE2LFxuICAgICAgICA1MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxODcsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDQzLFxuICAgICAgICA0NCxcbiAgICAgICAgMTM4LFxuICAgICAgICA0MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDk5LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDcsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwMixcbiAgICAgICAgNyxcbiAgICAgICAgMTg5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjIwLFxuICAgICAgICA4NixcbiAgICAgICAgMzYsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDM2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNixcbiAgICAgICAgMTgwLFxuICAgICAgICAxOCxcbiAgICAgICAgMjQxLFxuICAgICAgICA2NixcbiAgICAgICAgODMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDY5LFxuICAgICAgICAxOCxcbiAgICAgICAgMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDgyLFxuICAgICAgICA0MixcbiAgICAgICAgMTAzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTg2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDgsXG4gICAgICAgIDExLFxuICAgICAgICAyNSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTkyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMixcbiAgICAgICAgMjM5LFxuICAgICAgICA5MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDcwLFxuICAgICAgICAxMixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjIxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI3LFxuICAgICAgICAxOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTc2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMixcbiAgICAgICAgOTUsXG4gICAgICAgIDc1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDQsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDk1LFxuICAgICAgICA3LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMyxcbiAgICAgICAgODksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTU5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTA1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjksXG4gICAgICAgIDQxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMixcbiAgICAgICAgMjQyLFxuICAgICAgICAzNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxODcsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDU3LFxuICAgICAgICA1OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTE1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDMzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEsXG4gICAgICAgIDg5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDg3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzNixcbiAgICAgICAgNjUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDc1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTM4LFxuICAgICAgICA5OCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDkwLFxuICAgICAgICA5MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTYsXG4gICAgICAgIDg1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOSxcbiAgICAgICAgMTYzLFxuICAgICAgICA2OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDExNixcbiAgICAgICAgMjUzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTYwLFxuICAgICAgICA0NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidTdMWTZSWU5HM2dnUWxvRDVCMTJPdzFjYlNPYTdielhJV1JCSlVyVzlycz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUG1YMnBhTTVTWUtuZUpjS1N0ejg3UVwiLFxuICBcInBob25lSWRcIjogXCI4N2EzMTBhNS1kMzJmLTQ1NTQtYTdmZi0wYzVkNGVmNzdjNWJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg0LFxuICAgICAgMTM2LFxuICAgICAgOTcsXG4gICAgICAxNjAsXG4gICAgICA5OCxcbiAgICAgIDIzMixcbiAgICAgIDc2LFxuICAgICAgMTg4LFxuICAgICAgOTEsXG4gICAgICAyMyxcbiAgICAgIDc0LFxuICAgICAgMjI3LFxuICAgICAgMTc3LFxuICAgICAgMjQ5LFxuICAgICAgMjA4LFxuICAgICAgNTUsXG4gICAgICAxMzIsXG4gICAgICAyOSxcbiAgICAgIDU5LFxuICAgICAgMTg5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MSxcbiAgICAgIDIwMyxcbiAgICAgIDEyOSxcbiAgICAgIDU3LFxuICAgICAgMTcwLFxuICAgICAgNDQsXG4gICAgICA0NSxcbiAgICAgIDIxOCxcbiAgICAgIDIzNCxcbiAgICAgIDcwLFxuICAgICAgMTI2LFxuICAgICAgNzIsXG4gICAgICAxNCxcbiAgICAgIDEzMCxcbiAgICAgIDQ2LFxuICAgICAgMTU1LFxuICAgICAgNTMsXG4gICAgICAyMzcsXG4gICAgICAyNDYsXG4gICAgICAzN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJaQjhRMU04TVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU2NzA0Mzc2MDc3OjM2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2Qg/CdkI7wnZCNIPCdkIfwnZCA8J2QgvCdkIrwnZCE8J2QkSDwnZqE8J2ZtlwiLFxuICAgIFwibGlkXCI6IFwiODY0MjAxMTExMTU1NTozNkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJVHB5T2tIRUpPSHJyVUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImtxSmZEQWNDOTBsa1ExandpWm50UVE5citzSHNYNW9uZW1nc21uY09ZMms9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiczBkN25TYisyM2J0eGtsYkxlQU9yT25RbUpYMmgyZlhybk16U0l3bHpSd1cxUFQ2a3k4bkQrcEE3WEhMSnJ0VXZ6eEc4ZXU0dGFjY2lVamhZbW9nQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYkJseVZ5WUJxdkpwNkhBcTZXUkpHeGlpalQvNHhFdkszOUt5RVh5bWpiT0xVVWhmb1pxekplUGtZTGFnTnhXQm90ZDkyNEJUOEsrcVpCdkdoakVFQmc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU2NzA0Mzc2MDc3OjM2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI1MTYzNzYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIRnBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhGcC5qc29uIjogIntcImtleURhdGFcIjpcIktiVW9ERzUxekpMTjFmVy9TUXNWVEdrNHNaaVI4Q0VnK0IwVjBaRHRJSWs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjEwMDQ0MjI0MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjQzOTY0NDA5N1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
