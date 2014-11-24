var get = require('../').get
var assert = require('assert')

describe('get-changba-song', function(){
  describe('#get', function(){
    it('gets song info', function(done){
      get('http://changba.com/s/5a3bo8I38I1HydevkfyvMw', function(err, song){
        assert.equal(err, null)
        assert.deepEqual(song, {
          source: 'http://upuwmp3.changba.com/userdata/userwork/208/332383208.mp3',
          name: '因为爱情',
          user: 'Heightened',
          photo: 'http://aliimg.changba.com/cache/photo/277338825_320_320.jpg',
          title: '因为爱情 - Heightened (#唱吧#录制)',
          summary: ' '
        })
        done()
        console.log(song)
      })
    })

    it('throws with invalid dom', function(done){
      get('http://changba.com/', function(err, song){
        assert.notEqual(err, null)
        done()
        console.log(err)
      })
    })

    it('throws with ridiculous url', function(done){
      get('http://b.aaaaaaaaaaaaaaa.c/', function(err, song){
        assert.notEqual(err, null)
        done()
        console.log(err)
      })
    })
  })
})
