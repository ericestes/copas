const path = require('path');

module.exports = {
  components: 'src/components/**/[A-Z]*.js',
  require: [path.join(__dirname, 'src/index.scss')],
};
