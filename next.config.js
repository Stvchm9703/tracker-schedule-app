const path = require('path');
module.exports = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: false,//true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}