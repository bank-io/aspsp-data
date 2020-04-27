const path = require("path");

function getStagingAspsp(aspspId) {
    return require(`./staging/${aspspId}.json`);
}

function getStagingAspsps() {
    const list = require('fs').readdirSync(path.join(__dirname, 'staging')).filter(p => p.endsWith('.json')).map(p => require(path.join(__dirname, 'staging', p)));

    return list;
}

exports.getStagingAspsp = getStagingAspsp;
exports.getStagingAspsps = getStagingAspsps;