const fs = require("fs")

global.owner = ["628xxxxxx"]

//watermark 
global.packname = 'Created by'
global.author = 'Yumeniruu-Md'
global.idcennel = '<id_saluran>@newsletter'
global.thumb = 'Linknya' // Your Thumbnail

global.mess = {
    success: 'Done',
    admin: 'Sorry, only group admins can use this command.',
    botAdmin: 'This command can only be used when the bot is a group admin.',
    owner: 'Sorry, only the bot owner can use this command.',
    group: 'This command can only be used in group chat.',
    private: 'This command can only be used in private chat.',
    wait: 'Waitt....',
}

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(`Update ${__filename}`);
    delete require.cache[file];
    require(file);
});
