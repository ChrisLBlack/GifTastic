$(document).ready(function () {


    // array that holds all of the string values of the buttons
    var topics = ["PUBG", "Mario Party", "OverWatch", "Mario Kart", "Smash Bros", "Call of Duty", "Halo", "GTA:5"];

    // this loop appends the buttons to the page on load
    for (j = 0; j < topics.length; j++) {
        $("#buttons").append(`<button type="button" data-search="${topics[j]}" class="btn btn-info float-left doIt">${topics[j]}</button>`)
    }
    //if gif button already in the array is clicked, this adds gifs to the page
    $(document).on('click', '.doIt', function(event){
        event.preventDefault();
        gameURL = `https://api.giphy.com/v1/gifs/search?q=${$(this).data('search')}&api_key=Onu3hiVRvdlarqe3KvT3PuRCooAJ9gBo&limit=10`

            //function to get the api and prepend gifs to the page
            $.get(gameURL).then(function (arr){
                console.log(arr.data)
                for (u = 0; u < arr.data.length; u++){
                $("#gifs").prepend(`<p><img src="${arr.data[u].images.fixed_height_still.url}"
                data-still="${arr.data[u].images.fixed_height_still.url}" data-animate="${arr.data[u].images.fixed_height.url}
                "data-state"still" class="giffyBoi"></br>Rating: "${arr.data[u].rating}"</p>`)
                }
            })

    });


    //this function adds gifs to the page when the user enters them in the input field
    $(document).on("click","#gif-button", function (event) {
        event.preventDefault();
        //input from the user
        var submit = $("input").val().trim();
        //building api link
        var queryURL = `https://api.giphy.com/v1/gifs/search?q=${submit}&api_key=Onu3hiVRvdlarqe3KvT3PuRCooAJ9gBo&limit=10`

        //sends api link and appends to page
        $.get(queryURL).then(function (response) {
            for (i = 0; i < response.data.length; i++) {
                $("#gifs").prepend(`<p><img src="${response.data[i].images.fixed_height_still.url}"
                data-still="${response.data[i].images.fixed_height_still.url}" data-animate="${response.data[i].images.fixed_height.url}"
                data-still="still" class="giffyBoi"></br>Rating: "${response.data[i].rating}"</p>`)
            };
            //appends gives the new button to the page
            $("#buttons").append(`<button type="button" data-search="${submit}" class="btn btn-info float-left doIt">${submit}</button>`)
    
        })
        //pushes user input to the array
        topics.push(submit);
        $('input').val("");

    });

    //event listener to make gifs move and stop
    $(document).on("click", ".giffyBoi", function() {
        
        var state = $(this).attr("data-state");
      
            if (state === "still") {
            var animateIt = $(this).attr("data-animate")
            $(this).attr("src", animateIt);
            $(this).attr("data-state", "animate");
            } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
            }
    });

});
