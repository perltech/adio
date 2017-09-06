/* tour schedule api 

div that will display the following data:
Artist Name, Venue, Date, City, Link to but tickets 

https://app.swaggerhub.com/apis/Bandsintown/PublicAPI/3.0.0

--> */

/*
function tourSchedule (tourInfo) {

  $.ajax({
        dataType: "json",
        url: "https://rest.bandsintown.com/artists/webbie?app_id=search", // interjecting the artist 
        method: "GET",
        success: function (data) {
            console.log(data);
            $("#tourSchedule").html('<p>' + data + '</p>');
        }
    });
}
*/
host: "rest.bandsintown.com"
 var queryURL ="https://rest.bandsintown.com/artists/trina?app_id=search";
/*
$.ajax({
    type: "GET",
    url: queryURL,
    dataType: "json",
	success: renderList,
    });
      

	function renderList(data) {
    return(data);
    
    $("#tourSchedule").text(renderList);



       $("#tourDeat").html(JSON.stringify(data.name));
};
*/
var image ="";

$.ajax({
    type: "GET",
    url: queryURL,
    dataType: "json",
	success: function(data, textStatus)   {

		$("#tourDeat").html(JSON.stringify(data));
  

	}

 }); 
    
