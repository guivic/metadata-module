import path from 'path';

export default function metadataModule(moduleOptions) {
	this.addPlugin({
		src: path.resolve(__dirname, 'metadata.js'),
		options: {},
	});
};

module.exports.meta = require('./package.json');