$(document).ready(function () {


    // array that holds all of the string values of the buttons
    var games = ["PUBG", "MarioParty", "OverWatch", "MarioKart", "SmashBros", "CallofDuty", "Halo", "GTA:5"];

    // this loop appends the buttons to the page on load
    for (j = 0; j < games.length; j++) {
        $("#buttons").append(`<button type="button" data-search="${games[j]}" class="btn btn-info float-left doIt">${games[j]}</button>`)
    }

    $(document).on('click', '.doIt', function(event){
        event.preventDefault();
        gameURL = `http://api.giphy.com/v1/gifs/search?q=${$(this).data('search')}&api_key=Onu3hiVRvdlarqe3KvT3PuRCooAJ9gBo&limit=10`
        console.log(gameURL);

            $.get(gameURL).then(function (arr){
                for (u = 0; u < arr.data.length; u++){
                $("#gifs").prepend(`<p><img src="${arr.data[u].images.fixed_height.url}"></br>Rating: "${arr.data[u].rating}"</p>`)
                }
            })

    });


    //this function adds gifs to the page when the user enters them in the input field
    $(document).on("click","#gif-button", function (event) {
        event.preventDefault();
        //input from the user
        var submit = $("input").val().trim();
        //building api link
        var queryURL = `http://api.giphy.com/v1/gifs/search?q=${submit}&api_key=Onu3hiVRvdlarqe3KvT3PuRCooAJ9gBo&limit=10`

        //sends api link and appends to page
        $.get(queryURL).then(function (response) {
            for (i = 0; i < response.data.length; i++) {
                $("#gifs").prepend(`<p><img src="${response.data[i].images.fixed_height.url}"></br>Rating: "${response.data[i].rating}"</p>`)
            };

            $("#buttons").append(`<button type="button" data-search="${submit}" class="btn btn-info float-left doIt">${submit}</button>`)
    
        })

        games.push(submit);
        $('input').val("");

    });


});