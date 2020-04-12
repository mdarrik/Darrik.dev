buildSite: package.json
	yarn workspace www build
	cd www/functions/newsletter-signup && yarn
	cd ../../..
install: package.json
	yarn
subsetFont:
	yarn subfont www/_site/index.html -i --inline-css --root www/_site
clean: 
	rm -rf www/_site