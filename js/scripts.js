$(document).ready(function() {
  var favoriteStuff = [];
  var favArray =[];

  $(".favInput").submit(function(ev) {
    ev.preventDefault();

    var favAnswer = $(".favInput input").val();

    favoriteStuff.push(favAnswer);



    $(".favInput input").val("");

    $(".favorites").append('<li>' + favAnswer + '</li>');
    // console.log(favoriteStuff.length);

    if (favoriteStuff.length >= 4) {
      console.log(favoriteStuff[1] + ", " + favoriteStuff[0] + ", " + favoriteStuff[2]);
      console.log(favoriteStuff);
      favArray.push(favoriteStuff[1],favoriteStuff[0],favoriteStuff[2]);
      console.log(favArray);
        $(".favoritesMod").append('<li>' + favArray[0] + '</li>');
        $(".favoritesMod").append('<li>' + favArray[1] + '</li>');
        $(".favoritesMod").append('<li>' + favArray[2] + '</li>');

    } else {
      console.log("add another item");
    }
  });





});
