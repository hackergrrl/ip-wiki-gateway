var swarm = require('webrtc-swarm')
var signalhub = require('signalhub')

var page = {
  log: function (txt) {
    var p = document.createElement('p')
    p.textContent = txt
    document.body.appendChild(p)
  }
}

var wiki = 'ip-wiki'

var sw = swarm(signalhub(wiki, ['https://signalhub.mafintosh.com']))

sw.on('pre-peer', function () {
  page.log('Connecting to peer..')
})

sw.on('peer', function (peer, id) {
  page.log('Connected!')

  peer.on('data', function (msg) {
    var root = msg.toString()
    page.log('IP Wiki current root: ' + root)
    page.log('Redirecting...')
    setTimeout(function () {
      window.location = 'http://v04x.ipfs.io' + root
    }, 1000)
  })
})

page.log('Looking for peers..')
