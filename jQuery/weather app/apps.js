$(document).ready(function(){
    $('form').submit(function() {
        // your code here (build up your url)
        var city = $('input[name="location"]').val()
        var url = "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + city + 
        "&cnt=1&units=imperial&APPID=761cb0ff891a94fc84325cbb569f23ce"
        $.get(url, function(res) {
        // your code here
            $('#info').html("<h1>" + res.city.name + "</h1><p>Temperature: " + 
            res.list[0].temp.day + " F</p>")
        }, 'json');
    // don't forget to return false so the page doesn't refresh
    return false;
    });
})