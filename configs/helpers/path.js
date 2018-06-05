const path = require('path');
const ROOT = path.resolve(__dirname, '../..');

module.exports = {
  srcRoot(args) {
    return path.join(ROOT, 'src', args);
  },
  rootNode(args) {
    return path.join(ROOT, args);
  }
}