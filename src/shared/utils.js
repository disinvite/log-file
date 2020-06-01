// replace non-printable ascii with mid-dot
// replace space with nbsp
// neither of these will break the line
function strToAsciiDisplay(str) {
  return str
    .replace(/[^\x20-\x7e]/g, '·')
    .replace(/\x20/g, '\xa0')
    .replace(/-/g, '\u2011');
}

function strToHexDisplay(str) {
  return str.split('')
    .map(x => x.charCodeAt(0)
      .toString(16)
      .padStart(2,'0')
      .toUpperCase()
    )
    .join('\xa0') + '\xa0';
}

export function separate3ascii(arr) {
  return arr.map(strToAsciiDisplay);
}

export function separate3hex(arr) {
  return arr.map(strToHexDisplay);
}

