$(document).ready(function() {

/*Initialize LastFM Authorization*/
var token = window.location.search.split('?token=')[1];
// LastFM API Key: 7ec54293b71ff780b78575e0bda44e26
if(token) {
 //display search
 document.getElementById('initsearch').style.display = "block";
 document.getElementById('login').style.display = "none";
} else {
  // display login
  document.getElementById('login').style.display = "block";
}
/*End LastFM Authorization*/

/*Initialize TourSchedule for Bands in Town*/
function getTourSchedule(artist) {
  var bandsInTownURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=adio";

  $.get(bandsInTownURL)
      .done(function(response){
        for (var i = 0; i < response.length; i++) { //On the API, grab the first content of the array to the length of the array
         var row = $('<tr>');// On the html table go to the row
             row.append('<td>'+ response[i].venue.name);// On the row, the first item is the venue name eg Pepsi Center is a venue
             var d = response[i].datetime.slice(0,10).split('-');
             var convDate = d[1]+'/'+d[2]+'/'+d[0];
             row.append('<td>'+convDate);
             // row.append('<td>' + response[i].datetime);//the second item is the date the gig will play
             row.append('<td>'+ response[i].venue.city);//the city in which the venue is. Eg pepsi center is in Denver
             row.append('<td> <a href="'+ response[i].offers[0].url + '"> Buy Tickets');// Make the content here clickable

         $("#artist-table tbody").append(row);//On the html display all the information
     } 

        //$("#tour").text(artistData);
      });
}
/*End TourSchedule via Bands in Town*/

/* Initialize Artist Search through LastFM*/
function lastFMSearch(artist) {
  var lastFMSearch = "http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=" + artist + "&api_key=7ec54293b71ff780b78575e0bda44e26&format=json"
  // Can be used to strip for artist picture
  $.get(lastFMSearch)
    .done(function(response){
      var bandName = results.artistmatches.artist[0].name;
      var bandPic = results.artistmatches.artist[0].image[2]['#text'];
      var img = $('img');
      img.append(bandPic);
      img.attr("alt", bandName);
      $('#audiowidg').html(bandPic);

    });

}
/* End Artist Search through LastFM */


$(".searchBar").on("submit", function(event) {
  var artist = $(".searchBar > input").val().trim();

  event.preventDefault();

  $("#artist-table tbody").empty();

  document.getElementById('header').style.display = "block";
  document.getElementById('results').style.display = "block";
  document.getElementById('initsearch').style.display = "none";

  getTourSchedule(artist);
  lastFMSearch(artist);  

});



}); // onReady end
