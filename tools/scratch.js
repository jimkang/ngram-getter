var request = require('request');

var requestOpts = {
  url: 'https://books.google.com/ngrams/graph',
  qs: {
    content: '*_VERB the cops',
    year_start: '1800',
    year_end: '2000',
    corpus: '15',
    smoothing: '3',
    share: ''
  }
};

request(requestOpts, showResponse);

function showResponse(error, response, body) {
  debugger;
}
