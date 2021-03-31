const fetch = require('node-fetch')

async function getacat() {
 const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());
 return file;
}

module.exports.getacat = getacat;