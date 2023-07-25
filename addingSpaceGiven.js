// Implement a function center that takes a string strng, an integer width, and an optional character fill (default: ' ') and returns a new string of length width where strng is centered and on the right and left padded with fill.

// If the left and right padding cannot be of equal length make the padding on the left side one character longer.

// If strng is longer than width return strng unchanged.

function center (strng, width, fill = ' ') {
    if(width < strng.length) {
    return strng
    }
    const paddingSize = (width -strng.length)/2;
    return fill.repeat(Math.ceil(paddingSize)) + strng + fill.repeat(Math.floor(paddingSize));
}