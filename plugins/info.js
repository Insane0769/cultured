let handler = async (m, { conn }) => {
  const chats = conn.chats.all()
  const groups = chats.filter(v => v.jid.endsWith('g.us'))
  const groupsIn = groups.filter(v => !v.read_only)
  const users = Object.keys(global.db.data.users).length
  const uptime = clockString(process.uptime() * 1000)
  const github = "bit.ly/34BXTxB"

  m.reply(`
  🔰 *Info :*
  ↠ Users: *${users}*
  ↠ Uptime: *${uptime}*
  ↠ Github: *${github}*
 
  💬 *Status :*
  ↠ Group Chats: *${groups.length}* 
  ↠ Groups Joined: *${groupsIn.length}* 
  ↠ Groups Left: *${groups.length - groupsIn.length}* 
  ↠ Personal Chats: *${chats.length - groups.length}* 
  ↠ Total Chats: *${chats.length}* 
  `.trim())
}

  handler.help = ['info']
  handler.tags = ['info']

  handler.command = /^(info)$/i
  module.exports = handler


  function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

