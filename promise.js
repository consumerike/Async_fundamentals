window.onload = function(){
  $.get('data/simple_message.json')
  .then(function(message){
    console.log("retrieved simple message", message);
    return $.get('data/complex_message.json');
    .then(function(hardMessage){
      console.log("complex message:", hardMessage);
    })
    .error(function(error){
      console.log("error message:", error);
    })
  });
/*
  function get(url){
    return new Promise(function(resolve, reject){
      xhttp = XMLHttpRequest();
      xhttp.open("GET", url, true);
      xhttp.onload = function(){
        if (xhttp.status == 200){
          resolve(JSON.parse(xhttp.response));
        }
        else{
          reject(xhttp.statusText)
        }
      };
      xhttp.onerror = function(){
        reject(xhttp.statusText);
      }
      xhttp.send();
  });
}

  let promise = get('data/simple_message.json');
  promise.then(function(basicMessage){
    console.log("retrived simple message",basicMessage);
    return get('data/complex_message.json');
  })
  .then(function(hardMessage){
    console.log("complex message:", hardMessage);
  }).catch(function(error){
    console.log("error message:",error );
  })
*/
}