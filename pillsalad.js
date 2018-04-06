$(document).ready(function() {
  
   // Initialize Firebase
   var config = {
    apiKey: "AIzaSyCo4DJ1MiPYKNmGVt1HdF3mCE1mqAm-BZg",
    authDomain: "slangtube-recentsearch.firebaseapp.com",
    databaseURL: "https://slangtube-recentsearch.firebaseio.com",
    projectId: "slangtube-recentsearch",
    storageBucket: "slangtube-recentsearch.appspot.com",
    messagingSenderId: "1084533016118"
  };
  firebase.initializeApp(config);
  
 var database = firebase.database();

 //grabs everything added & puts it on the page w/o refreshing
 database.ref().limitToLast(5).on("child_added", function(childSnapshot, prevChildKey){
  $("#recent").append( " "  +  childSnapshot.val()  +  " " + "|" );
  
 
 });


  //on enter
  $("#usertext").keypress("keypress", function(e) {
    if (e.keyCode == 13) {
      //clear out the div
      $("#urbantext").html("");

      // "un-hide" the second div
      $("#youtubeDiv").removeAttr("style");
          $("#definition").removeAttr("style");
      //define variables equal to user input
      var term = $(".form-control").val().trim();
      var video = $(".form-control").val().trim();
      //targeting div youtube and adding html content

    database.ref().push(term);

    

      //ajax call
      var xhr = $.get("https://api.urbandictionary.com/v0/define?term=" + term);
      xhr.done(function(response) {
        console.log(response);
        $("#urbantext").append(response.list[0].definition);

        //close response
      });

      var ycall = $.get(
        "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" +
          video +
          "&type=video&key=AIzaSyDvgtx5t_Fsg7YEH75FfTtecTxroxXhfNI"
      );
      ycall.done(function(response) {
        var videoid = response.items[0].id.videoId;
        $("#iframe").attr("src", "https://www.youtube.com/embed/" + videoid);
        //  close response function
      });
  
  }
  });

  

  
  //on click event
  $("#submit").click(function() {
    //clear out the div
    $("#urbantext").html("");

    // "un-hide" the second div
    $("#youtubeDiv").removeAttr("style");
    $("#definition").removeAttr("style");

    //define variables equal to user input
    var term = $(".form-control")
      .val()
      .trim();
    var video = $(".form-control")
      .val()
      .trim();
    //targeting div youtube and adding html content

    //ajax call
    var xhr = $.get("https://api.urbandictionary.com/v0/define?term=" + term);
    xhr.done(function(response) {
      console.log(response);
      $("#urbantext").append(response.list[0].definition);

      //close response
    });

    var ycall = $.get(
      "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" +
        video +
        "&type=video&key=AIzaSyDvgtx5t_Fsg7YEH75FfTtecTxroxXhfNI"
    );
    ycall.done(function(response) {
      var videoid = response.items[0].id.videoId;
      $("#iframe").attr("src", "https://www.youtube.com/embed/" + videoid);

      //  close response function
    });
    // close on click event
  });

  //close document.ready
});