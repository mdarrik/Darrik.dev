build: package.json
	yarn workspace www build
	$(MAKE build-newsletter-function)

build-newsletter-function: ./www/functions/newsletter-signup/package.json
	yarn
