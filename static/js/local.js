var SpeakerGroupSelect = function() {
  var hash = window.location.hash;
  if(hash.startsWith("#speakers")){
      var speakerType = hash.split('-').pop();
      console.log('Showing speakers : ' + speakerType);
      $("ul#speaker-tab-pills > li > a.nav-link").removeClass("active");
      $("ul#speaker-tab-pills > li > a.nav-link" + "#" + speakerType + "-tab-pill").addClass("active");
  
      $("#speaker-tabs div.tab-pane").removeClass("active in show");
      $("#speaker-tabs div.tab-pane" + "#" + speakerType + "-tab").addClass("active in show");
  }
}
$('.navbar-collapse a').not('.dropdown-toggle').click(function (e) {

  $('.navbar-collapse').collapse('toggle');
});

window.onhashchange = SpeakerGroupSelect;
$(document).ready(function() {
    SpeakerGroupSelect();
});

mediumZoom('[data-zoomable]', {
      background: '#eee',
      scrollOffset: 10,
})
