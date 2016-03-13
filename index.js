var swarm = require('webrtc-swarm')
var signalhub = require('signalhub')

var wiki = 'ip-wiki'

var sw = swarm(signalhub(wiki, ['https://signalhub.mafintosh.com']))

sw.on('peer', function (peer, id) {
  console.log('got peer!')

  peer.on('data', function (msg) {
    var root = msg.toString()
    console.log('got root', msg.toString())
    window.location = 'http://v04x.ipfs.io' + root
  })
})

console.log('ready')
