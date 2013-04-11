console.log('Set interval');

var count = 0;
setInterval(function () {
  console.log('Count:', count++);
}, 1000);

console.log('Interval set for 1 second');
