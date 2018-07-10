$(document).ready(function () {



    $("button").on("click", function () {
        var submit = $("input").val();
        var buttonInput = $("data-search").val();

        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + submit + "&api_key=Onu3hiVRvdlarqe3KvT3PuRCooAJ9gBo&limit=10"
        // console.log(queryURL)


        $.get(queryURL).then(function (response) {
            // console.log(response.data[0].images.fixed_height.url);
            for (i = 0; i < response.data.length; i++) {
                $("#gifs").prepend("<img src=' " + response.data[i].images.fixed_height.url + "'>")
            };
            $("#buttons").append('<button type="button" data-search="' + submit + '"class="btn btn-info float-left">' + submit + '</button>')
        })

        // $("button").on("click",function(){
        //     console.log("this works");
        // });


    })


});