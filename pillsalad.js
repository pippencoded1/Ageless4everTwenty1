










 $(document).ready(function () {

        var term = $("#usertext").val().trim();

        $("#submit").click(function () {
        var xhr = $.getJSON("https://api.urbandictionary.com/v0/define?term=" + term);
        xhr.done(function (response) {
           
    //  close response function
        });
// close on click event
    });
    
    
    //close document.ready
    });