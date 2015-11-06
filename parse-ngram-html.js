var cheerio = require('cheerio');
var bracketsRegex = /\[(.*?)\]/g;

function parseNgramHTML(html) {
  var $ = cheerio.load(html);

  var content = $('meta[itemprop=description]').attr('content');

  var bracketedString = content.match(bracketsRegex)
  if (bracketedString) {
    return bracketedString.map(chopOffEnds).map(ngramsFromNgramsString);
  }
}

function chopOffEnds(s) {
  if (s.length > 1) {
    return s.slice(1, s.length - 1);
  }
  else {
    return s;
  }
}

function ngramsFromNgramsString(ngramsString) {
  return ngramsString.split(' ').map(ngramFromString);
}

function ngramFromString(piece) {
  if (piece.indexOf('_') === -1) {
    return {
      word: piece
    };
  }
  else {
    var wordPOSPair = piece.split('_');
    return {
      word: wordPOSPair[0],
      pos: wordPOSPair[1].toLowerCase()
    };
  }
}

module.exports = parseNgramHTML;
