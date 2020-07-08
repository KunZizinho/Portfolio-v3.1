// postavi datum do kojega odbrojavas
var setDate = new Date("Sep 15, 2020 13:00:00").getTime();

// odbrojavanje se mora updatati svake sekunde
var countUpdate = setInterval(function(){
    // variablu now smo definirali trenutnim vremenom
    var now = new Date().getTime();
    // te smo variablu dist definirali razlikom izmedu trenutnog vrem,ena i zadanog datuma
    var dist = setDate - now;
    
    var days = Math.floor(dist / (1000 * 60 * 60 * 24));
    var hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((dist % (1000 * 60)) / 1000);

    //prikazi rezultat u elementu id-a countDown koristeci .innerHTML metodu
    document.getElementById("countDown").innerHTML = days + " days " + hours + " hours "
  + minutes + " minutes " + seconds + " seconds ";
    
    if(dist < 0){
        document.getElementById("countDown").innerHTML = "EXPIRED";
    }
}, 1000);