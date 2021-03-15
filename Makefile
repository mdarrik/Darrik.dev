buildSite: package.json
	NODE_ENV=production npm run build
	cd functions/newsletter-signup && yarn
	cd functions/opengraph-image-generator && yarn && yarn build
	cd functions/process-cloudinary-image && yarn
install: package.json
	npm i
subsetFont:
	npm run subfont _site/index.html -i --inline-css --root _site
buildNewsletterSignupFunction: 
	cd functions/newsletter-signup && yarn && yarn build
clean: 
	rm -rf _site