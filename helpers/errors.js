const thrower = (bank, code) => {
    if (code === 404) {
        return {
            ErrorCode: code,
            ErrorMessage: `Bank ${bank} not found, recheck your entries and try again`
        };
    }
    else if (code === 408) {
        return {
            ErrorCode: code,
            ErrorMessage: `Cannot fetch from ${bank} at the moment`
        };
    }
    else if (code === 503) {
        return {
            ErrorCode: code,
            ErrorMessage: 'Unable to fetch at the moment'
        }
    }
    else {
        return {
            ErrorCode: 0,
            ErrorMessage: 'Unknown error occured'
        }
    }
};

module.exports = { thrower };