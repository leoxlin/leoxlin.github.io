function hideContent(){
  $(".content").each(function(){
    $(this).hide();
  });
}

$(document).ready(function() {
  hideContent();
  $("#default").show();

  $("#about-l").click(function(){
    hideContent();
    $("#about").show();
  });
  $("#project-l").click(function(){
    hideContent();
    $("#project").show();
  });
  $("#resume-l").click(function(){
    hideContent();
    $("#resume").show();
  });
  $("#dot-l").click(function(){
    hideContent();
    $("#dot").show();
  })
  $(".default-l").click(function(){
    hideContent();
    $("#default").show();
  });
});
