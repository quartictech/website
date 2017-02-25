$(document).foundation();

function gaEvent(category, action, label) {
  if (typeof ga !== 'undefined'){
    ga('send', 'event', category, action, label);
  }
  else {
    console.log("sending event", category, action, label);
  }
}
