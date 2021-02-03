console.log('js loaded');

$(document).ready(onReady);

function onReady() {
  console.log('its linked');

  let ajaxOptions = {
    url: '/allTheQuotes',
    method: 'GET',
  };

  $.ajax(ajaxOptions).then(function (response) {
    console.log('got a response', response);
  });

  console.log('so much to do');
}

// grab data from server
// get allthequotes
