const fs = require('fs').promises;
const path = require('path');

async function readDir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(path.resolve(rootDir));
    walk(files, rootDir);
}

async function walk(files, rootDir) {
    for (let file of files) {
        const fileFullPath = path.resolve(rootDir, file);
        const stats = await fs.stat(fileFullPath); //fs.stats mostra algumas coisas da pasta, como por exemplo se ela é um diretorio ou arquivo

        if (/\.git/g.test(fileFullPath)) continue;
        if (/node_modules/g.test(fileFullPath)) continue;

        if (stats.isDirectory()) {
            readDir(fileFullPath);
            continue;
        }

        if (!/\.css$/g.test(fileFullPath) && !/\.html$/g.test(fileFullPath))
            continue;
        console.log(fileFullPath);
    }
}

readDir('D:/CURSO JAVASCRIPT/');
