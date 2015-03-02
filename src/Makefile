bundle:
	rm -f ../bundle/bundle.js ../bundle/bundle.js.map
	../node_modules/browserify/bin/cmd.js main.js --debug \
		|../node_modules/exorcist/bin/exorcist.js \
			../bundle/bundle.js.map >../bundle/bundle.js

runserver:
	cd ../bundle && python -m SimpleHTTPServer 8889 &

test:
	../node_modules/jshint/bin/jshint *.js
	../node_modules/mocha/bin/mocha -u qunit

.PHONY: bundle runserver test
