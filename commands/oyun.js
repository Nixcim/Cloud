const Command = require("../base/Command.js");
const Discord = require("discord.js")
const { MessageMenuOption,  MessageMenu, MessageActionRow } = require("discord-buttons");
class oyun extends Command {
    constructor(client) {
        super(client, {
            name: "oyun",
            aliases: ["oyun"]
        });
    }

    async run(message, args, client) {
        if(!this.client.config.botOwners.includes(message.author.id)) return


        const nix = new MessageMenuOption()
        .setLabel('Among Us')
        .setEmoji('π΄')
        .setValue('amongus')
        .setDescription('Among Us')
  
        const nix1 = new MessageMenuOption()
        .setLabel('League of Legends')
        .setEmoji('π‘')
        .setValue('lol')
        .setDescription('League of Legends')

        const nix2 = new MessageMenuOption()
        .setLabel('Counter Strike')
        .setEmoji('π’')
        .setValue('cs')
        .setDescription('Counter Strike')

        const nix3 = new MessageMenuOption()
        .setLabel('Minecraft')
        .setEmoji('π΅')
        .setValue('minecraft')
        .setDescription('Minecraft')

        const nix4 = new MessageMenuOption()
        .setLabel('Fortnite')
        .setEmoji('π ')
        .setValue('fortnite')
        .setDescription('Fortnite')

        const nix5 = new MessageMenuOption()
        .setLabel('Grand Theft Auto V')
        .setEmoji('π£')
        .setValue('gta')
        .setDescription('Grand Theft Auto V')

        const nix6 = new MessageMenuOption()
        .setLabel('Rust')
        .setEmoji('π£')
        .setValue('rust')
        .setDescription('Rust')
        
    const select = new MessageMenu()
        .setID('select1')
        .setPlaceholder('Oyun rollerinizi seΓ§in')
        .addOption(nix)
        .addOption(nix1)
        .addOption(nix2)
        .addOption(nix3)
        .addOption(nix4)
        .addOption(nix5)
        .addOption(nix6)
  
  
     const Row1 = new MessageActionRow()
     .addComponent(select)   
    
    await message.channel.send('AΕΕaΔΔ±daki menΓΌden **Oyun** rollerΔ±nΔ± seΓ§ebilirsiniz', { components: [Row1] });
}

}
module.exports = oyun;
