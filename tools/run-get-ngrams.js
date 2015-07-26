var getNgrams = require('../get-ngrams');
var nomnom = require('nomnom');

var cmdOpts = nomnom
  .option('phrases', {
    abbr: 'p',
    full: 'phrases',
    metavar: '<phrases>',
    help: 'Comma-separated phrases for Ngram Viewer',
    required: true
  })
  .parse();

var opts = {
  phrases: cmdOpts.phrases
};

getNgrams(opts, displayResults);

function displayResults(error, ngrams) {
  if (error) {
    console.log(error);
  }
  else {
    console.log(JSON.stringify(ngrams, null, '  '));
  }
}
