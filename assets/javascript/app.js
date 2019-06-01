$( document ).ready(function() {
    console.log( "ready!" );

var topics = ['baseball','home run','bat flip','strikeout','diving catch'];
var buttonContainer = $("#buttons");

for (let i = 0; i < topics.length; i++) {
    var topicBtn = $("<button>");
        topicBtn.addClass("btn ml-3 btn-primary");
        topicBtn.attr("data-name", topics[i]);
        topicBtn.text(topics[i]);
        buttonContainer.append(topicBtn);
}

$("#btn").on("click", function(event) {

    // Preventing the submit button from trying to submit the form
    // We're optionally using a form so the user may hit Enter to search instead of clicking the button
    event.preventDefault();

    // Here we grab the text from the input box
    var topic = $("#movie-input").val();

    // Here we construct our URL
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=YOUR_API_KEY&limit=5";

    // Write code between the dashes below to hit the queryURL with $ajax, then take the response data
    // and display it in the div with an id of movie-view

    // YOUR CODE GOES IN THESE DASHES. DO NOT MANUALLY EDIT THE HTML ABOVE

    // =================================================================
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function(response){
                var json = JSON.stringify(response);
                $("#movie-view").html(json);
                console.log(response);
            });
    });

})