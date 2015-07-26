ngram-getter
============

This is an ad hoc programmatic interface to the [Google Books Ngram Viewer](https://books.google.com/ngrams/).

Installation
------------

    npm install ngram-getter

Usage
-----

As a module:

    var opts = {
      phrases: '*_VERB your socks'
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

Output:

    [
      [
        {
          "word": "change",
          "pos": "verb"
        },
        {
          "word": "your"
        },
        {
          "word": "sock"
        }
      ],
      [
        {
          "word": "knock",
          "pos": "verb"
        },
        {
          "word": "your"
        },
        {
          "word": "sock"
        }
      ],
      [
        {
          "word": "darn",
          "pos": "verb"
        },
        {
          "word": "your"
        },
        {
          "word": "sock"
        }
      ],
    ...

As a command line tool (from the project root):

    node tools/run-get-ngrams.js -p "*_VERB your socks"

Tests
-----

Run tests with `make test`.

License
-------

The MIT License (MIT)

Copyright (c) 2015 Jim Kang

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
