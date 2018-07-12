$(document).ready(function () {


    // array that holds all of the string values of the buttons
    var games = ["PUBG", "Mario Party", "OverWatch", "Mario Kart", "Smash Bros", "Call of Duty", "Halo", "GTA: 5"];

    // this loop appends the buttons to the page on load
    for (j = 0; j < games.length; j++) {
        $("#buttons").append(`<button type="button" data-search="${games[j]}" class="btn btn-info float-left">${games[j]}"</button>`)
    }

    // $.get(buttonURL).then(function(arr){
        // var buttonURL =`http://api.giphy.com/v1/gifs/search?q=${games[0]}&api_key=Onu3hiVRvdlarqe3KvT3PuRCooAJ9gBo&limit=10`
    //     for (g = 0; g < arr.data.length; g++) {
    //         $("#gifs").prepend(`<p><img src="${arr.data[g].images.fixed_height.url}"></br>Rating: "${arr.data[g].rating}"</p>`)
    //     };
    //     // if ()
    //     $("#buttons").append(`<button type="button" data-search="${games[0]}" class="btn btn-info float-left">${games[0]}</button>`)


    // })

    //this function adds gifs to the page when the user enters them in the input field
    $("#gif-button").on("click", function () {
        //input from the user
        var submit = $("input").val().trim();
        //building api link
        var queryURL = `http://api.giphy.com/v1/gifs/search?q=${submit}&api_key=Onu3hiVRvdlarqe3KvT3PuRCooAJ9gBo&limit=10`

        //sends api link and appends to page
        $.get(queryURL).then(function (response) {
            for (i = 0; i < response.data.length; i++) {
                $("#gifs").prepend(`<p><img src="${response.data[i].images.fixed_height.url}"></br>Rating: "${response.data[i].rating}"</p>`)
            };

            $("#buttons").append(`<button type="button" data-search="${submit}" class="btn btn-info float-left">${submit}</button>`)
    
        })

        games.push(submit);
        $("input").val("");

    })


});