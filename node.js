const path = require("path");

function getSandboxAspsp(aspspId) {
    return require(`./sandbox/${aspspId}.json`);
}

function getSandboxAspsps() {
    const list = require('fs').readdirSync(path.join(__dirname, 'sandbox')).filter(p => p.endsWith('.json')).map(p => require(path.join(__dirname, 'sandbox', p)));

    return list;
}

exports.getSandboxAspsp = getSandboxAspsp;
exports.getSandboxAspsps = getSandboxAspsps;