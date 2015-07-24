test:
	node tests/parse-tests.js

pushall:
	git push origin master && npm publish
