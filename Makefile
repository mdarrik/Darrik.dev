build: .
	yarn workspace www build
	pushd www/functions/newsletter-signup && yarn
