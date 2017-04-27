window.onload = function() {
    http.onreadystatechange = function(){
        if(http.readyState == 4 && http.status == 200) {
            console.log(JSON.parse(http.response));
        }
    };
    let http = new XMLHttpRequest();

    http.open("GET", 'data/simple_message.json')
    http.send();


    $.get("data/simple_message.json", function(data){
        console.log("data retrieved", data);
    });
    console.log("test");

};