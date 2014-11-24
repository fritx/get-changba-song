var request = require('request')

exports.get = get

function get(link, callback){
  request(link, function(err, res, body){
    try {
      var song = parse(body)
    } catch(e) {
      err = e
    }
    callback(err, song)
  })
}

function parse(body){
  var audioSource = body.match(/\{mp3:"(.+)"\}/)[1].trim()
  var songName = body.match(
    /<div class="pcsong_name">(.+)<\/div>/
  )[1].trim()

  var userNickname = body.match(
    /<div class="user_navition_title">(.+) 的作品<\/div>/
  )[1].trim()
  var userPhoto = body.match(/pic:"(.+)"/)[1].trim()
  var songTitle = body.match(/title:"(.+)"/)[1].trim()

  // despite of the existing comment
  // //summary:"  ",
  // summary: " ",
  var songSummary = body.match(/\s+summary:"(.+)"/)[1]

  var song = {
    source: audioSource,
    name: songName,
    user: userNickname,

    // http://aliimg.changba.com/cache/photo/277338825_320_320.jpg
    // 100, 320, 640 all available
    // if needed, change the url yourself
    photo: userPhoto, // 320x320

    title: songTitle,
    summary: songSummary
  }
  return song
}
