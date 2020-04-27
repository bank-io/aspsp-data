const stagingAspsps = require.context(
    `./staging/`, // Don’t make this a variable
    true, // Whether or not to check subdirectories
    /^.*\.(json)$/ // Rough regex for extensions, maybe change this for your use case?
  );

export function getStagingAspsp(aspspId) {
    return stagingAspsps(`./${aspspId}.json`);
}

export function getStagingAspsps() {
    return stagingAspsps.keys().map(stagingAspsps).map(p => ({
        ...p,
        authorisationServerId: p.id,
    }))
}