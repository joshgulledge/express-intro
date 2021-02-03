console.log('js loaded');

$(document).ready(onReady);

function onReady() {
  console.log('its linked');

  let ajaxOptions = {
    url: '/allTheQuotes',
    method: 'GET',
  };

  $.ajax(ajaxOptions)
    .then(function (response) {
      console.log('got a response', response);

      let quoteList = response;

      for (let quote of quoteList) {
        console.log(quote);
        $('ul').append(`
        <li> 
          ${quote.quote} ${quote.author}
        </li>
      `);
      }
    })
    .catch(function () {
      $('#err').append(`
      <h3> ooohhhh noooo </h3>
      `);
    });
}

// grab data from server
// get allthequotes
