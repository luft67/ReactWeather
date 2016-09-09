// // old way to do things.....

// function getTemp (location, callback) {
//   callback(undefined,78);
//   callback('city not found');
// }

// getTemp('Philidelphia', function(err, temp) {
//   if(err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp)
//   }
// });

// // now using promises....

// function getTempPromise (location) {
//   // in order to return something you return a new promise
//   return new Promise(function (resolve, reject) {
//     // fake delay with setTimeout
//     setTimeout(function() {
//       resolve(79);
//       reject('City not found');
//     }, 1000);
//   });
// }

// getTempPromise('Philidelphia').then(function (temp) {
//   // first arguement is the 'success case'
//   console.log('promise success', temp);
// }, function(err) {
//   // second is the error case
//   console.log('promise error', err);
// });



// Challenge...
// if(typeof somenum === 'number')
function addPromise (a, b) {
  // success
  return new Promise(function (resolve, reject) {
    if(typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('One or more values are not a number');
    }
  });
}

addPromise(2,"7").then(function(sum) {
  console.log(sum);
}, function(err) {
  console.log(err);
});



































