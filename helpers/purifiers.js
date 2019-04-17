const getCurrID = (check) => {
    const patterns = {
        USD: /U.?S.?D|U.?S.?A?|United ?States/gmi,
        EUR: /E.?U.?R.?O?/gmi,
        GBP: /G?B.?P?|Sterling/gmi,
        CHF: /C.?H.?F|Swiss|Franc/gmi,
        AED: /U.?A.?E|Emirates|A.?E.?D|Dubai/gmi,
        SAR: /S.?A.?R|Saudia?/gmi,
        KWD: /K.?W.?D|Kuwaiti?/gmi,
        AUD: /A.?U.?D|Australian?/gmi
    };

    for (let i = 0; i < Object.keys(patterns).length; i++){
        if (patterns[Object.keys(patterns)[i]].test(check))
            return Object.keys(patterns)[i];
    }

    return 'N/A';
};

const toFloat = (value) => {
    return parseFloat(value);
};

module.exports = {
    getCurrID,
    toFloat
};

