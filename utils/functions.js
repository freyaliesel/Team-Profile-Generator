function isValidString(value) {
    if (typeof value !== "string" || !value.trim().length) {
        return false;
    } else {
        return true;
    }
}

function isValidNumber(arg) {
    let value = arg;
    if (value === true) {
        return false;
    }
    if (typeof value !== "number") {
        value = Number(value);
    }
    if (typeof value === "number" && Number.isInteger(value) && value > 0) {
        return true;
    } else {
        return false;
    }
}

function isPossibleEmail(value) {
    if (
        isValidString(value) &&
        value.length >= 3 &&
        value.length <= 320 &&
        value.includes("@")
    ) {
        return true;
    } else {
        return false;
    }
}

module.exports = {
    isValidString,
    isValidNumber,
    isPossibleEmail,
};
