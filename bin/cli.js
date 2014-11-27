#!/usr/bin/env node

var get = require('../').get

get(process.argv[2], function(err, song){
  if (err) throw err
  console.log(song)
})
