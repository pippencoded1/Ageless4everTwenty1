 $(document).ready(function () {

       

        $("#submit").click(function () {
        $("#urbantext").html("");
        var term = $(".form-control").val().trim();
        var xhr = $.get("https://api.urbandictionary.com/v0/define?term="+term);
        xhr.done(function (response) {
            console.log(response)
        $("#urbantext").append(response.list[0].definition);
           
    //  close response function
        });
// close on click event
    });
    
    
    //close document.ready
    });