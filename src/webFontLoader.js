// Function to load web fonts dynamically
function loadFonts(fonts) {
    return new Promise((resolve, reject) => {
      // Create a WebFontConfig object
      const config = {
        ...fonts,
        active: resolve,
        inactive: reject
      };
  
      // Load fonts using the Web Font Loader
      if (typeof window !== 'undefined' && typeof window.WebFont !== 'undefined') {
        window.WebFont.load(config);
      } else {
        // Reject the Promise if WebFont is not available
        reject(new Error('WebFont Loader is not available.'));
      }
    });
  }
  
  // Export the loadFonts function
  module.exports = { loadFonts };
  