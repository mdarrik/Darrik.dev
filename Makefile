buildSite: package.json
	yarn workspace www build
	cd www/functions/newsletter-signup && yarn
	cd ../opengraph-image-generator && yarn && yarn build
install: package.json
	yarn
subsetFont:
	yarn subfont www/_site/index.html -i --inline-css --root www/_site
buildNewsletterSignupFunction: 
	cd www/functions/newsletter-signup && yarn && yarn build
clean: 
	rm -rf www/_site