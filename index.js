// $(document).ready( function(){
// function clock(){
//     var currentTime = new Date();
//     var currentHours = currentTime.getHours();
//     var currentMinutes= currentTime.getMinutes();
//     var currentSeconds= currentTime.getSeconds();

//     currentMinutes = (currentMinutes <10 ? "0": "") + currentMinutes;
//     currentSeconds = (currentSeconds<10? "0":"")+currentSeconds;

//     var timeOfDay = (currentHours <12)? "AM":"PM";
    
//     var currentTimeSetting = currentHours + ":"+currentMinutes +":" + currentSeconds +" " +timeOfDay;
//     $("#clock").html(currentTimeSetting);
//     var color = "#"+currentHours+currentMinutes+currentSeconds;
//     $("#clock").css("background-color", color);
//     console.log(color)
// }

    
// setInterval(() => {
//     clock();
    
// }, 1000);
// })
////////////////////////------------------------//////////
// $(document).ready(function(){
// var date = new Date();


// time = {

// }

// function hours(){
//     date.getHours();

// }

// function minutes(){
//     date.getMinutes();
// }

// function seconds(){
//     date.getSeconds();
// }

// function publish() {
//     time[hours] = [hours];
//     time[minutes] = [minutes];
//     time[seconds] = [seconds];
//     $("#clock").html(`${hours}:${minutes}:${seconds}`)
// }

// var clock = setInterval(() => {
//     publish()
// }, interval);

// })

///////////////-----------------////////////////

$(document).ready(function (){
   

    function clock(){
        var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
        seconds = (seconds <10 ? "0":"") + seconds;
        minutes = (minutes <10 ? "0":"") + minutes;
        hours = (hours <10 ? "0":"")+hours;
    var color = `#${hours}${minutes}${seconds}`
        $("#clock").html(`${hours}:${minutes}:${seconds}`)
        $("body").css("background-color",color)
        console.log(color)
    }
    setInterval(() => {
        clock();
    }, 1000);

})