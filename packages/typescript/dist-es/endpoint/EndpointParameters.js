export const resolveClientEndpointParameters = (options) => {
    return Object.assign(options, {
        defaultSigningName: "",
    });
};
export const commonParams = {
    Endpoint: { type: "builtInParams", name: "endpoint" },
};
