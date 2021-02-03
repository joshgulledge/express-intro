console.log('js loaded');

$(document).ready(onReady);

function onReady() {
  console.log('its linked');

  fetchQuotes();

  $(document).on('submit', '#newQuoteForm', onSubmit);
}

function onSubmit(e) {
  e.preventDefault();
  console.log('howdy');

  let newQuote = {
    quote: $('#quoteInput').val(),
    author: $('#authorInput').val(),
  };

  // post

  $.ajax({
    url: '/quotes',
    data: {
      quote_to_add: newQuote,
    },
    method: 'POST',
  })
    .then(function (response) {
      console.log('Oh yea');
    })
    .catch(function (error) {
      console.log('blaaahhh');
    });
}

function fetchQuotes() {
  let ajaxOptions = {
    url: '/allTheQuotes',
    method: 'GET',
  };

  // get

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
