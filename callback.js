window.onload = function() {
  $.get('data/simple_message.json', function(data){
    console.log("data", data );
  });

  //synchronously
  function callback(val) {
    console.log(val);
  }

  let fruits = ['banana, apple, tangerine'];
  fruits.forEach(callback);
  console.log("done");
  console.log("testing async props", "test" );
};