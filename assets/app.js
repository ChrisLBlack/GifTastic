$(document).ready(function () {
    var games = ["PUBG", "Mario Party", "OverWatch", "Mario Kart", "Smash Bros", "Call of Duty", "Halo", "GTA: 5"];

    for (j = 0; j < games.length; j++) {
        $("#buttons").append('<button type="button" data-search="' + games[j] + '"class="btn btn-info float-left">' + games[j] + '</button>')
    }


    $("button").on("click", function () {
        var submit = $("input").val().trim();
        var buttonInput = $("data-search").val();

        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + submit + "&api_key=Onu3hiVRvdlarqe3KvT3PuRCooAJ9gBo&limit=10"


        $.get(queryURL).then(function (response) {
            for (i = 0; i < response.data.length; i++) {
                $("#gifs").prepend("<img src=' " + response.data[i].images.fixed_height.url + "'>")
            };
            $("#buttons").append('<button type="button" data-search="' + submit + '"class="btn btn-info float-left">' + submit + '</button>')
    
        })
        games.push(submit);
        $("input").val("");
        // $("button").on("click",function(){
        //     console.log("this works");
        // });


    })


});