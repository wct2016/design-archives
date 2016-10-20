'use strict';

//---------------------------------------------------------------------------
// File destination
//---------------------------------------------------------------------------
export const paths = {
  'root'           : 'docs/',
// html
  'htmlDest'       : 'docs/',
// images
  'imageDest'      : 'docs/images/',
  'imagePath'      : 'src/images/',
// jade
  'jadePath'       : 'src/jade/',
// JavaScript
  'jsPath'         : 'src/js/',
  'jsDest'         : 'docs/js/',
// tags
  'tagPath'        : 'docs/tags/',
// scss
  'scssPath'       : 'src/scss/',
// css
  'cssDest'        : 'docs/css/'
};

export const options = {
  'proxy'            : 'localhost',
  // Autoprefixer options
  // @param string
  'autoprefix'       : ['last 2 versions'],
  // Browsersync options
  // @param boolean: Clicks, Scrolls & Form inputs on any device will be mirrored to all others.
  ghostMode: {
    clicks: false,
    forms: false,
    scroll: false
  }
};

export const sassConf = {
  // sass options
  includePaths     : [
    './node_modules/foundation-sites/scss/',
    './node_modules/font-awesome/scss/',
  ],
  outputStyle  : 'compressed'
};
