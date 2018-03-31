 $(document).ready(function () {

       
    //on click event
        $("#submit").click(function () {
        //clear out the div
            $("#urbantext").html("");
            //define variables equal to user input
        var term = $(".form-control").val().trim();
        var video = $(".form-control").val().trim();
         //targeting div youtube and adding html content
        
        //ajax call
        var xhr = $.get("https://api.urbandictionary.com/v0/define?term="+term);
        xhr.done(function (response) {
            console.log(response)
        $("#urbantext").append(response.list[0].definition);
        
        //close response
        });

        var ycall = $.get("https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + video +"&type=video&key=AIzaSyDvgtx5t_Fsg7YEH75FfTtecTxroxXhfNI");
        ycall.done(function (response) {
        var videoid = response.items[0].id.videoId
        $("#iframe").attr("src","https://www.youtube.com/embed/"+ videoid)
           
       


           
    //  close response function
        });
// close on click event
    });
    
    
    //close document.ready
    });