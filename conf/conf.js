// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',
useAllAngular2AppRoots: true,
//seleniumAddress: 'http://localhost:4444/wd/hub',
  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['../tests/example_spec.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000,
  }
};
