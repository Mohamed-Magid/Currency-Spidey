const thrower = (bank, code) => {
    if (code === 404) {
        return {
            ErrorCode: code,
            ErrorMessage: `Bank not found, recheck your entries and try again`
        };
    }
    else if (code === 408) {
        return {
            ErrorCode: code,
            ErrorMessage: `Cannot fetch from ${bank} at the moment`
        };
    }
};

module.exports = { thrower };