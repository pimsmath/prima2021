console.log("Selecting Speaker group");

var SpeakerGroupSelect = function() {
  console.log("Speaker group " + hash);
  var hash = window.location.hash;
  if(hash.startsWith("#speakers")){
      var speakerType = hash.split('-').pop();
      $("ul#speaker-tab-pills > li > a.nav-link").removeClass("active");
      $("ul#speaker-tab-pills > li > a.nav-link" + "#" + speakerType + "-tab-pill").addClass("active");
  
      $("#speaker-tabs div.tab-pane").removeClass("active in");
      $("#speaker-tabs div.tab-pane" + "#" + speakerType + "-tab").addClass("active in");
  }
}

window.onhashchange = SpeakerGroupSelect;
$(document).ready(function() {
    SpeakerGroupSelect();
});
