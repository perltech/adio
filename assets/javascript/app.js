$( document ).ready(function() {

/*Initialize LastFM Authorization*/

/*End LastFM Authorization*/


/*Initialize TourSchedule via Bands in Town*/
$(".searchBar").on("submit", function(event) {
$("#artist-table tbody").empty();
var artist = $(".searchBar > input").val().trim();

var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=adio";

        event.preventDefault();




        $.get(queryURL)
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

