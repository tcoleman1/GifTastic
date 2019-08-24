$(document).ready(function(){

var apiKey = "0pijohJX2NcLNNAn3O8i4AJDVzlspei8";
var artists = [];

function renderButtons() {

    $("#artist-buttons").empty();
    for (var i=0; i<artists.length; i++){

        var a = $("<button>");
        a.addClass("artist");
        a.attr("data-name", artists[i]);
        a.text(artists[i]);
        $("#artist-buttons").append(a);
    }
}

$("#button").on("click", function(event){
    event.preventDefault();

    var artist = $("#artistname").val();
    artists.push(artist);

    renderButtons();
});

$("#artist-buttons").on("click", ".artist", function() {

var newButton = $(this).attr("data-name");

var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + newButton + "&api_key=" + apiKey + "&limit=10";

//var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + newButton + "&api_key=0pijohJX2NcLNNAn3O8i4AJDVzlspei8&limit=10"

$.ajax({

    url: queryURL,
    method: "GET"
})

.then(function(response){
    var results = response.data;

    for(var i=0; i<results.length; i++){

        var artistDiv = $("<artistDiv>");
        var p = $("<p>").text("Rating: " + results[i].rating);
        var artistImages = $("<img>")
        artistImages.attr("src", results[i].images.original_still.url);
        artistDiv.append(p);
        artistDiv.append(artistImages);
        $("#gifs").prepend(artistDiv);

    }

})

})

$("#gifs").on("click", function(){ 

    // this is not the artist button I want to click. I want to click on gif
    // so this is not $("#artist-buttons") !!!

    // var state = $(this).attr("data-state");
    // var static = $(this).attr("data-static");
    // var animate = $(this).attr("data-animate");
    // if (state === "static") {
    //     $(this).attr("data-state", "animate");
    //     $(this).attr("src", animate);
    // } else {
    //     $(this).attr("data-state", "static");
    //     $(this).attr("src", static);
    // }
    var state = $(this).attr("data-state");
    if(state === "still"){
        $(this).attr("src", $(this).data('animate'));
        $(this).attr("data-state", "animate");
    }

    else {

        $(this).attr("src", $(this).data('still'));
        $(this).attr("data-state", "still");
    }
})
});