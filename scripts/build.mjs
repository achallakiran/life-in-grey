import {build} from 'esbuild';
import {readFile,mkdir,writeFile} from 'node:fs/promises';
const result=await build({entryPoints:['src/main.js'],bundle:true,minify:true,format:'iife',write:false});
const shell=await readFile('src/shell.html','utf8');
await mkdir('dist',{recursive:true});
const html=shell.replace('/*BUNDLE*/',result.outputFiles[0].text);
await writeFile('dist/index.html',html);
await writeFile('index.html',html);
