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

$("#artist-buttons").on("click", function() {

var newButton = $(this).attr("data-name");

var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + newButton + "&api_key=" + apiKey + "&limit=10";
// https://api.giphy.com/v1/gifs/search?q="chris+brown "&api_key=0pijohJX2NcLNNAn3O8i4AJDVzlspei8&limit=10";
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
});