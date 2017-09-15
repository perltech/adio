// The program starts with a page where you can login, this redirects you to last FM
// If you have an account you allow access or you create an account on last.fm
// After the access have been allowed or an account have been created, you are redirected back to the search page
// On the search page, you enter the name of the artist
// Th result page is displayed with a Artist Piucture, their Biography, their tour schedule 
// and othger suggested artist similar to them
// Users have access to buying tickets and they can enter a new artist in the search bar.


$(document).ready(function() {
/*Initialize LastFM Authorization*/
 // goes to token JSON object

  var token = window.location.search.split('?token=')[1];

  // LastFM API Key: 7ec54293b71ff780b78575e0bda44e26

  // body...
  if(token) {
   //display search
   document.getElementById('initsearch').style.display = "block";
   document.getElementById('login').style.display = "none";
  } else {
    // display login
    document.getElementById('login').style.display = "block";
  }

// get token from JSON object (using stringify?) and save that off into memory and use that to check against the onload function
/*End LastFM Authorization*/

/*Initialize TourSchedule for Bands in Town*/
$(".searchBar").on("submit", function(event) {
$("#artist-table tbody").empty();
document.getElementById('header').style.display = "block";
document.getElementById('results').style.display = "block";
document.getElementById('initsearch').style.display = "none";
var artist = $(".searchBar > input").val().trim();

var bandsInTownURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=adio";


var lastFMURL = "/2.0/?method=artist.search&artist=" + artist + "&api_key=7ec54293b71ff780b78575e0bda44e26&format=json"


        event.preventDefault();


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
});
/*End TourSchedule via Bands in Town*/


}); // onReady end
