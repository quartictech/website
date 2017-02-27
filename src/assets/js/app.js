$(function() {
  $(document).foundation();

  $(".typing").typed({
            strings: [
                "Field operations",
                "Manufacturing", 
                "Infrastructure services", 
                "Oil and gas", 
                "Highway maintenance",
                "Plant and equipment",
                "Utilities networks",
                "Aerospace",
                "Construction",
            ], 
            typeSpeed: 100,
            backDelay: 1000,
            backSpeed: 50,
            loop: true,
        });

        var url = $("#quartic-video").attr('src');
        $("#quartic-video").attr('src', '');
        $(window).on("open.zf.reveal", function() {
            $("#quartic-video").attr('src', url);
            gaEvent('Videos', 'play', 'Quartic intro video');
        });

        $(window).on("closed.zf.reveal", function() {
            $("#quartic-video").attr('src', '');
        });
});

function gaEvent(category, action, label) {
  if (typeof ga !== 'undefined'){
    ga('send', 'event', category, action, label);
  }
  else {
    console.log("sending event", category, action, label);
  }
}
