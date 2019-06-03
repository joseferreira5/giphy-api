$(document).ready(function () {

    var topics = ['baseball', 'home run', 'bat flip', 'strikeout', 'yankees'];

    function renderButton(topic) {
        var topicBtn = $("<button>");
        topicBtn.addClass("btn m-2 btn-primary topic-button");
        topicBtn.attr("data-name", topic);
        topicBtn.text(topic);
        $("#buttons").append(topicBtn);
    }

    for (let i = 0; i < topics.length; i++) {
        renderButton(topics[i]);
    }

    $(document).on("click", ".topic-button", function () {
        var gifContainer = $("#gif-container");
        var topic = $(this).attr("data-name");
        var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=M64M1LXhq0enQ6B35ifqZRKJ9IhNBSAb&limit=10";

        gifContainer.empty();

        $.ajax({
            url: queryUrl,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            var results = response.data;

            for (var i = 0; i < results.length; i++) {
                var gifDiv = $("<div class='d-inline-block m-2'>");
                var rating = results[i].rating;
                var p = $("<p>").text("Rating: " + rating);
                var gifImage = $("<img>");

                gifImage.attr("src", results[i].images.fixed_height_small_still.url);
                gifDiv.prepend(p);
                gifDiv.prepend(gifImage);

                gifContainer.prepend(gifDiv);
            }
        });
    });

    $("#add-topic").on("click", function (event) {
        event.preventDefault();
        var topicInput = $("#topic-input").val().trim();
        renderButton(topicInput);
    });

})