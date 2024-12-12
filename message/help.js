const version = require("@whiskeysockets/baileys/package.json").version
const moment = require("moment-timezone");
const fs = require("fs");
const chalk = require('chalk')
const timeWib = moment().tz('Africa/Lagos').format('HH:mm:ss')
const timeWit = moment().tz('Africa/Lagos').format('HH:mm:ss')
const timeWita = moment().tz('Africa/Lagos').format('HH:mm:ss')
const {
    color,
    bgcolor
} = require('../lib/color')
const {
    kyun
} = require("../lib/myfunc");
moment.tz.setDefault("Africa/Lagos").locale("en");

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
    var str = text.split('');
    var output = [];
    str.map((v) => {
        if (v.toUpperCase() !== v.toLowerCase() && v === v.toUpperCase()) {
            // If the character is uppercase, push it unchanged
            output.push(v);
        } else {
            // If the character is lowercase or not a letter, find and convert it
            const find = replacer.find((x) => x.original == v.toLowerCase());
            find ? output.push(find.convert) : output.push(v);
        }
    });
    return output.join('');
};

let d = new Date();
let locale = 'en-US'; // Change locale to English (United States)
let gmtOffset = new Date(0).getTime() - new Date('January 1, 2021').getTime(); // GMT offset calculation
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(((d * 1) + gmtOffset) / 84600000) % 5]; // Javanese calendar (if needed)
let week = d.toLocaleDateString(locale, {
    weekday: 'long'
}); // Get weekday in English
const calendar = d.toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
});
//Total fitur by Official Dittaz
const totalFitur = () => {
    var mytext = fs.readFileSync("./message/case.js").toString()
    var numUpper = (mytext.match(/case/g) || []).length;
    return numUpper
}

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)


let dt = moment(Date.now()).tz('Africa/Lagos').locale('en').format('a')
const ucapanWaktu = "Selamat " + dt.charAt(0).toUpperCase() + dt.slice(1)

let dot = new Date(new Date + 3600000)
const dateIslamic = Intl.DateTimeFormat("en" + '-TN-u-ca-islamic', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
}).format(dot)

/*
let yes = "*「 _Error_ * ❌"
let no =""

const feat = (q) => {
    let status = false
    Object.keys(db.data.listerror).forEach((i) => {
        if (db.data.listerror[i].cmd === q) {
            status = true
        }
    })
    return status
}
*/



exports.allmenu = (limitCount, isPremium, publik, sender, prefix, pushname) => {
    try {
        // Safely retrieve the user's balance
        const saldo = db?.data?.users?.[sender]?.balance?.toLocaleString() || '0';
        return Ehztext(`
       *『 \`𝘽𝙇𝙐𝙀 𝙓 𝘿𝙀𝙈𝙊𝙉\` 』*
> ■ 𝙽𝙰𝙼𝙴  :  ${pushname}
> ■ 𝚂𝚃𝙰𝚃𝚄𝚂 :  ${isPremium ? '𝙿𝚛𝚎𝚖𝚒𝚞𝚖' : '𝙵𝚛𝚎𝚎'}
> ■ 𝙼𝙾𝙳𝙴 : ${publik ? '𝙿𝚞𝚋𝚕𝚒𝚌' : '𝚂𝚎𝚕𝚏'}
> ■ 𝙿𝚁𝙴𝙵𝙸𝚇 : ${prefix}
> ■ 𝚁𝚄𝙽 𝙸𝙽 : ${runWith} 
> ■ 𝙳𝙰𝚃𝙴 :  *${calender}*
> ■ 𝚃𝙸𝙼𝙴 :  *${timeWib}*
 ${readmore}`);
    } catch (error) {
        console.error('Error in allmenu:', error);
    }
};
exports.fitur = (prefix) => {
    return Ehztext(`
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
┇*${sign} antidelete*
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
┇*${sign} sound1 to 95*
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
┇*${sign} brave*
┇*${sign} playstore*
┇*${sign} happymod*
┇*${sign} pinterest*
┇*${sign} element*
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
┇*${sign} bing*
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
┇*${sign} alwaysonline*
┇*${sign} autotyping*
┇*${sign} autoreadchat*
┇*${sign} randomcolor*
┇*${sign} getsession*
┇*${sign} checkcolor*
┇*${sign} autoviewstatus*
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

┏─『 \`𝐑𝐀𝐍𝐃𝐎𝐌 𝐂𝐌𝐃𝐒\` 』
┇*${sign} cecan-indo*
┇*${sign} cecan-china*
┇*${sign} cecan-japan*
┇*${sign} cecan-korea*
┇*${sign} cecan-thai*
┇*${sign} cecan-mal*
┇*${sign} blackpink*
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
> ${caption}
`)
}




let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.bgGreen(color("[  UPDATE ]", "black")), chalk.white(`${__filename}`))
    delete require.cache[file]
    require(file)
})