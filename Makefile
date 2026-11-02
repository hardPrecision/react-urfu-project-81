.PHONY: install lint test test-coverage

install:
	npm ci

lint:
	npm run lint

test:
	npm test

test-coverage:
	npm run test-coverage
