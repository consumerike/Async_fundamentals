window.onload = function(){
  genWrap(function*(){
    var tweets = yield $.get("data/simple_message.json");
    console.log("tweets");
    var friends = yield $.get("data/complex_message.json");
    console.log(friends);
  });

function genWrap(generator){
  var gen = generator();

  function hand(yielded){
    if(!yielded.done){
      yielded.value.then(function(data){
        return handle(gen.next(data));
      })
    }
  }

  return handle(gen.next());
}

}