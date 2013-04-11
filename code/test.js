var fs = require('fs');

console.log('Reading hosts...');

fs.readFile('/usr/share/dict/words', function (err, data) {
  console.log('Length:', data.length);
});

console.log("Done");
