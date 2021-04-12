let handler = function (m) {
  // this.sendContact(m.chat, '51967937978', 'Nurutomo', m)
  this.sendContact(m.chat, '51967937978', 'Vibu OFC', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
