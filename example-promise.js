// function getTempCallBack (location, callback){
//   callback(undefined, 78);
//   callback('City not Found');
// }
//
// getTempCallBack('baltimore', function(err, temp){
//   if(err){
//     console.log('error',err);
//   } else {
//     console.log('success', temp)
//   }
// });
//
// function getTempPromise (location){
//   return new Promise(function (resolve, reject){
//     setTimeout(function(){
//       resolve(79);
//       reject('City not Found');
//     }, 1000);
//   });
// }
//
// getTempPromise('baltimore').then(function(temp){
//   console.log('promise success', temp);
// },function(err){
//   console.log('promise error', err);
// });

function addPromise (a, b){
  return new Promise(function (resolve, reject){
    setTimeout(function(){

      if (typeof a === 'number' && typeof b === 'number'){
      var solution = a + b;
      resolve(solution);
    }

      reject('both have to be numbers');
    }, 1000);
  });
}

addPromise('b', 8).then(function(solution){
  console.log('success', solution);
}, function (err){
  console.log('error:', err);
});

addPromise(2, 8).then(function(solution){
  console.log('success', solution);
}, function (err){
  console.log('error:', err);
});

addPromise(2, 'a').then(function(solution){
  console.log('success', solution);
}, function (err){
  console.log('error:', err);
});
