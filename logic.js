$(document).ready(function(){

var key = "0pijohJX2NcLNNAn3O8i4AJDVzlspei8";
var artists = [];

function renderButtons() {

    $("artist-buttons").empty();
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

    console.log(artists);
    // addArtistName();
    renderButtons();
});

})

