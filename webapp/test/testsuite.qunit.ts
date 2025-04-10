export default {
	name: "QUnit test suite for the UI5 Application: com.kh.martina",
	defaults: {
		page: "ui5://test-resources/com/kh/martina/Test.qunit.html?testsuite={suite}&test={name}",
		qunit: {
			version: 2
		},
		sinon: {
			version: 4
		},
		ui5: {
			language: "EN",
			theme: "sap_horizon"
		},
		coverage: {
			only: "com/kh/martina/",
			never: "test-resources/com/kh/martina/"
		},
		loader: {
			paths: {
				"com/kh/martina": "../"
			}
		}
	},
	tests: {
		"unit/unitTests": {
			title: "Unit tests for com.kh.martina"
		},
		"integration/opaTests": {
			title: "Integration tests for com.kh.martina"
		}
	}
};
