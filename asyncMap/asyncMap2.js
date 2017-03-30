'use strict';
// asyncMap([
//   function(cb){
//     setTimeout(function(){
//       cb('one');
//     }, 200);
//   },
//   function(cb){
//     setTimeout(function(){
//       cb('two');
//     }, 100);
//   }
//  ],
//   function(results){
//     // the results array will equal ['one','two'] even though
//     // the second function had a shorter timeout.
//     console.log(results); // ['one', 'two']
//  });

var asyncMap = (tasks, callback) =>{
  var task;
  var answer = [];
  console.log(tasks);
  // while (tasks.length > 0) {
  //   task = tasks.shift();
  //   task((val)=>{
  //     console.log(val);
  //     answer.push(val);
  //   });
  // }
  asyncMapRecur = () => {
    if (tasks.length === 0) {
      return callback(answer);
    } 
    task = tasks.shift();
    task((val)=>{
      answer.push(val);
      asyncMapRecur();
    });
  }
  asyncMapRecur()
};

// Test
asyncMap([
  function(cb){
    setTimeout(function(){
      cb('one');
    }, 200);
  },
  function(cb){
    setTimeout(function(){
      cb('two');
    }, 100);
  }
  ],
  function(results){
    // the results array will equal ['one','two'] even though
    // the second function had a shorter timeout.
    console.log(results); // ['one', 'two']
  });