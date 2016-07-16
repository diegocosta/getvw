module.exports = (size, viewport, inverse = false) => {
	let context = viewport * 0.01;
	return inverse ? (size * context) : (size / context);
};