var test = require('tape');
var parseNgramHTML = require('../parse-ngram-html');
var fs = require('fs');

var ngramHTML = fs.readFileSync(__dirname + '/data/ngram.html');

test('Parse test', function parseTest(t) {
  t.plan(1);

  var ngrams = parseNgramHTML(ngramHTML);

  t.deepEqual(
    ngrams,
    [
      [
        {
          word: 'call',
          pos: 'verb'
        },
        {
          word: 'the'
        },
        {
          word: 'cops'
        }
      ],
      [
        {
          word: 'called',
          pos: 'verb'
        },
        {
          word: 'the'
        },
        {
          word: 'cops'
        }
      ],
      [
        {
          word: 'tell',
          pos: 'verb'
        },
        {
          word: 'the'
        },
        {
          word: 'cops'
        }
      ],
      [
        {
          word: 'told',
          pos: 'verb'
        },
        {
          word: 'the'
        },
        {
          word: 'cops'
        }
      ],
      [
        {
          word: 'calling',
          pos: 'verb'
        },
        {
          word: 'the'
        },
        {
          word: 'cops'
        }
      ],
      [
        {
          word: 'get',
          pos: 'verb'
        },
        {
          word: 'the'
        },
        {
          word: 'cops'
        }
      ],
      [
        {
          word: 'Call',
          pos: 'verb'
        },
        {
          word: 'the'
        },
        {
          word: 'cops'
        }
      ],
      [
        {
          word: 'have',
          pos: 'verb'
        },
        {
          word: 'the'
        },
        {
          word: 'cops'
        }
      ],
      [
        {
          word: 'let',
          pos: 'verb'
        },
        {
          word: 'the'
        },
        {
          word: 'cops'
        }
      ],
      [
        {
          word: 'are',
          pos: 'verb'
        },
        {
          word: 'the'
        },
        {
          word: 'cops'
        }
      ]
    ],
    'The correct ngrams are returned.'
  );
});
