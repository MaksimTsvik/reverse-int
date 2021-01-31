module.exports = function reverse(n) {
    /* 
    The idea is to convert input number into string -> split it into array -> reverse array -> join back into string
    And finally parse it into integer (to jetisson '-' sign).
    */
    return parseInt(n.toString().split('').reverse().join(''));
}
