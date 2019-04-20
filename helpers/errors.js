const thrower = (bank, code) => {
    return {
        [bank]: {
            errorCode: code,
            message: `Unable to fetch from ${bank}`
        }
    };
};

module.exports = { thrower };