const sandboxAspsps = require.context(
    `./sandbox/`, // Don’t make this a variable
    true, // Whether or not to check subdirectories
    /^.*\.(json)$/ // Rough regex for extensions, maybe change this for your use case?
  );

export function getSandboxAspsp(aspspId) {
    return sandboxAspsps(`./${aspspId}.json`);
}

export function getSandboxAspsps() {
    return sandboxAspsps.keys().map(sandboxAspsps).map(p => ({
        ...p,
        authorisationServerId: p.id,
    }))
}