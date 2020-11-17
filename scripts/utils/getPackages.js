const { readdirSync, statSync } = require('fs');
const { join } = require('path');

module.exports = function getPackages() {
  return readdirSync(join(__dirname, '../../')).filter(
    (pkg) => {
      const state = statSync(pkg);
      const exp = ['node_modules', 'scripts', 'tests'];
      return pkg.charAt(0) !== '.' && state.isDirectory() && !exp.includes(pkg)
    },
  );
};
