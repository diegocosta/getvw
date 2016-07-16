#!/usr/bin/env node
let argv = require('minimist');
let getvw = require('./getvw');

argv = argv(process.argv.slice(2), {
	alias : {
		reverse : 'r',
		viewport : 'vp',
		fixed : 'f'
	},
	default : {
		reverse : false,
		viewport : 320,
		fixed: 2
	}
});

let isReverse = argv.reverse;
let viewport = argv.viewport;
let fixed = argv.fixed;

let convert = value => isReverse ? getvw(value, viewport, true) : getvw(value, viewport);

console.log(`[!] Current Viewport size: ${viewport}`);

argv._.map(value => {
	let result = convert(value).toFixed(fixed);
	console.log(isReverse ? `${value}vw => ${result}px` : `${value}px => ${result}vw`);
});