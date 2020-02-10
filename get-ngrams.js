var defaults = require('lodash.defaults');
var omit = require('lodash.omit');
var parseNgramHTML = require('./parse-ngram-html');
var request = require('request');

var defaultOpts = {
  year_start: '1800',
  year_end: '2000',
  corpus: '15',
  smoothing: '3',
  share: ''
};

function getNgrams(opts, done) {
  if (!opts.phrases) {
    done(new Error('Missing phrases in opts.'));
    return;
  }

  var requestOpts = {
    url: 'https://books.google.com/ngrams/graph',
    qs: defaults(omit(opts, 'phrases'), defaultOpts),
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.134 Safari/537.36'
    },
    maxRedirects: 1
  };

  requestOpts.qs.content = opts.phrases;

  request(requestOpts, parseResponse);

  function parseResponse(error, response, body) {
    if (error || !body) {
      done(error);
    } else {
      done(error, parseNgramHTML(body));
    }
  }
}

module.exports = getNgrams;
