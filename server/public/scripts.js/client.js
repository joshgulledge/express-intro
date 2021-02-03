console.log('js loaded');

$(document).ready(onReady);

function onReady() {
  console.log('its linked');

  let ajaxOptions = {
    url: '/allTheQuotes',
    method: 'GET',
  };

  $.ajax(ajaxOptions);
}

// grab data from server
// get allthequotes
