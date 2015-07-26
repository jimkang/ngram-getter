var _ = require('lodash');
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
    qs: _.defaults(_.omit(opts, 'phrases'), defaultOpts)
  };
  requestOpts.qs.content = opts.phrases;

  request(requestOpts, parseResponse);

  function parseResponse(error, response, body) {
    if (error) {
      done(error);
    }
    else {
      done(error, parseNgramHTML(body));
    }
  }
}

module.exports = getNgrams;
