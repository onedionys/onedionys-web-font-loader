// Import the assert module from Mocha
const assert = require('assert');

// Import the webFontLoader module
const { loadFonts } = require('../src/webFontLoader');

// Test suite for webFontLoader module
describe('Web Font Loader', function () {
  // Test case for loading fonts successfully
  it('should load fonts successfully', function () {
    // Define fonts to load
    const fonts = {
      google: {
        families: ['Roboto:400,700', 'Open+Sans:400,700']
      }
    };

    // Load fonts and assert that the Promise resolves successfully
    return loadFonts(fonts)
      .then(() => {
        assert(true);
      })
      .catch((error) => {
        // If Promise is rejected, fail the test
        assert.fail(error);
      });
  });

  // Test case for handling font loading errors
  it('should handle font loading errors', function () {
    // Define invalid fonts to trigger an error
    const fonts = {
      invalidFont: {
        families: ['NonexistentFont']
      }
    };

    // Load fonts and assert that the Promise is rejected with an error
    return loadFonts(fonts)
      .then(() => {
        // If Promise resolves successfully, fail the test
        assert.fail('Fonts loaded successfully unexpectedly.');
      })
      .catch((error) => {
        assert(error instanceof Error);
      });
  });
});