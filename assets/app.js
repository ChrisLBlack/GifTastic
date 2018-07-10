$(document).ready(function () {



    $("button").on("click", function () {
        var submit = $("input").val();
        console.log(submit);

        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + submit + "&api_key=Onu3hiVRvdlarqe3KvT3PuRCooAJ9gBo&limit=10"
        console.log(queryURL)

    
        $.get(queryURL).then(function (response) {
                console.log(response.data[0].images.fixed_height.url);
                 $("#gifs").append("<img src=' " + response.data[0].images.fixed_height.url + "'>")
            })


    })


});