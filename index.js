#!/usr/bin/env node
let argv = require('minimist')(process.argv.slice(2));
let getvw = require('./getvw');
let viewport = argv.viewport || 320;

console.log('Current Viewport size:', viewport);

argv._.forEach((px) => {
	console.log(`${px}px => ${getvw(viewport, px)}vw`);
});