buildSite: package.json
	NODE_ENV=production yarn workspace www build
	cd functions/newsletter-signup && yarn
	cd functions/opengraph-image-generator && yarn && yarn build
	cd functions/process-cloudinary-image && yarn
install: package.json
	yarn
subsetFont:
	yarn subfont www/_site/index.html -i --inline-css --root www/_site
buildNewsletterSignupFunction: 
	cd functions/newsletter-signup && yarn && yarn build
clean: 
	rm -rf www/_site