window.onload = function() {

$ajax({
  type: "GET",
  url: 'data/simple_message.json'
  success: (data) => {
    console.log("retrieved data", data);
    
    $ajax({
      type: "GET",
      url: 'data/complex_message.json'
      success: function(data){
        console.log("retrived complex data",data );
      },
      error: function(jqrXHE, textStatus, error){
        console.log("the fail report", error);
      }
    })  
  }
}
    
})
}