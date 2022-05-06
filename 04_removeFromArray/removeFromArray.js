const removeFromArray = function(arr, ...remove) {
    return arr.filter(item => !remove.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
