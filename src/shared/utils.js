export function separate2(arr, length = 14) {
  const out = [];
  let stage = [];
  const pre_slice = arr.map((data, sliceNumber) => ({data, sliceNumber}));
  let charactersLeft = length;

  while (pre_slice.length > 0) {
    let { sliceNumber, data } = pre_slice.shift();
    while (data.length > 0) {
      const y = { sliceNumber, data: data.slice(0, charactersLeft)};
      data = data.slice(charactersLeft);
      charactersLeft -= y.data.length; // subtract how much we actually got
      stage.push(y);

      if (charactersLeft === 0) {
        // LINE BREAK HERE
        out.push(stage);
        stage = [];
        charactersLeft = length;
      }
    }
  }

  // but why
  if (stage.length > 0) {
    out.push(stage);
  }

  return out;
}
