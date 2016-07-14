module.exports = function(viewport, num){
	return (num / (viewport * 0.01)).toFixed(2);
};