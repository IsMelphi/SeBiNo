module.exports = {
    name: 'meme',
    description: 'Memes Random de la Grasa pa nueba york',
    usage: 'meme',
    aliases: [],
    categoria: 'diversion',
    execute(message, client, args) {

    message.channel.send({ files: [ require('melphiworker').meme() ] })

    }
}