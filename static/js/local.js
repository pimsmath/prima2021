$(document).click(function(event) {
  var hash = window.location.hash;
  if(hash.startsWith("#speakers")){
      console.log("Speaker group " + hash);
      var speakerType = hash.split('-').pop();
      $("#speaker-tab-buttons a.nav-link").removeClass("active");
      $("#speaker-tab-buttons a.nav-link#" + speakerType + "-tab").addClass("active");
  
      $("#speakers div.tab-pane").removeClass("active in");
      $("#speakers div.tab-pane#" + speakerType).addClass("active in");
  }
})
