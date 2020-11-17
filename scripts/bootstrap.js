const { existsSync, writeFileSync, readdirSync } = require('fs');
const { join, dirname } = require('path');
const childProcess = require('child_process');
const { yParser, mkdirp } = require('@umijs/utils');
const getPackages = require('./utils/getPackages');

const changePkgName = (name) => {
  if (name.includes('Page')) {
    return name.split('Page')[0].toLowerCase()
  }
  return name.toLowerCase()
}
(async () => {
  const args = yParser(process.argv);
  const version = require('../lerna.json').version;

  const pkgs = getPackages();
  console.log(pkgs)
  pkgs.forEach((shortName) => {
    const name = shortName === 'alita' ? shortName : `@alitajs-templates/${changePkgName(shortName)}`;

    const pkgJSONPath = join(
      __dirname,
      '..',
      shortName,
      'package.json',
    );

    const pkgJSONExists = existsSync(pkgJSONPath);
    if (pkgJSONExists) {
      return;
    }
    console.log(shortName)
    if (args.force || !pkgJSONExists) {
      const json = {
        name,
        version,
        description: name,
        tplType: '模版的分类，请修改',
        tplSubType: '模版的二级分类，请修改',
        main: "src/index.js",
        scripts: {
          dev: "alita dev"
        },
        repository: {
          type: 'git',
          url: 'https://github.com/alitajs/templates',
        },
        keywords: ['umi', 'alita'],
        authors: [
          'xiaohuoni <448627663@qq.com> (https://github.com/xiaohuoni)',
        ],
        license: 'MIT',
        bugs: 'http://github.com/alitajs/templates/issues',
        homepage: `https://github.com/alitajs/templates/tree/master/${shortName}#readme`,
        private: true,
      };
      if (pkgJSONExists) {
        const pkg = require(pkgJSONPath);
        [
          'dependencies',
          'devDependencies',
          'peerDependencies',
          'bin',
          'files',
          'authors',
          'types',
          'sideEffects',
          'main',
          'module',
        ].forEach((key) => {
          if (pkg[key]) json[key] = pkg[key];
        });
      }
      writeFileSync(pkgJSONPath, `${JSON.stringify(json, null, 2)}\n`);
    }

    const readmePath = join(
      __dirname,
      '..',
      shortName,
      'README.md',
    );
    if (args.force || !existsSync(readmePath)) {
      writeFileSync(readmePath, `# @alitajs-templates/${shortName}\n`);
    }
    const jsPath = join(
      __dirname,
      '..',
      shortName,
      'src',
      'pages',
      'index.tsx',
    );

    mkdirp.sync(dirname(jsPath));

    if (args.force || !existsSync(jsPath)) {
      writeFileSync(jsPath, `import React, { FC, useState, useEffect } from 'react';
import styles from './index.less';

interface PageProps {
}

const ${shortName}: FC<PageProps> = () => {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className={styles.center}>
      <div className={styles.demo}>
        hello world,{loading ? 'isLoading' : ''}
      </div>
    </div>
  );
};

export default ${shortName};
`);
    }

    const lessPath = join(
      __dirname,
      '..',
      shortName,
      'src',
      'pages',
      'index.less',
    );
    if (args.force || !existsSync(lessPath)) {
      writeFileSync(lessPath, `.center {
  // 开发时请移除这个 .demo
  .demo{
    padding-top: 100px;
    text-align: 'center';
  }
}
`);
    }

  });
})();
