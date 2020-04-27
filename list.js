const path = require("path");

const list = require('fs').readdirSync(path.join(__dirname, 'staging')).map(p => require(path.join(__dirname, 'staging', p)));

let result = list.reduce((acc, cur) => {
    return {
        obDirectoryConfig: {
            ...acc.obDirectoryConfig,
            ...cur.obDirectoryConfig,
        },
        openIdConfig: {
            ...acc.openIdConfig,
            ...cur.openIdConfig,
        },
        psd2Config: {
            ...acc.psd2Config,
            ...cur.psd2Config,
        }
    }
}, {})

console.log({
    obDirectoryConfig: Object.keys(result.obDirectoryConfig).sort(),
    openIdConfig: Object.keys(result.openIdConfig).sort(),
    psd2Config: Object.keys(result.psd2Config).sort(),
});