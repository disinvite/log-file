// take two

const x = ['Cache Object Version 201234.13413','blabalbalbalbal','123','456','789','0123456'];

function arrayOfStringsToSliceIndices(arr) {
  let i = 0;
  return arr.map(x => { 
    i+= x.length;
    return i
  });
}

function divmodFn(n) {
  return x => [Math.floor(x/n), x % n];
}

function separate(arr, length = 14) {
  const yyy = arrayOfStringsToSliceIndices(arr);
  const zzz = yyy.map(divmodFn(length));

  const str = arr.join('');
  const chunked = str.match(new RegExp('.{1,' + length + '}', 'g'));

  console.log(chunked);
  console.log(zzz);

  const out = new Array(chunked.length).fill(0).map(a => []);
  let row = 0;
  let col = 0;

  for(let sliceNumber = 0; sliceNumber < zzz.length; sliceNumber++) {
    const [next_row, next_idx] = zzz[sliceNumber];
    while (row < next_row) {
      out[row].push({sliceNumber, data: chunked[row].slice(col) });
      row++;
      col = 0;
    }
    
    // for cases where the split happens on 0
    if (col < next_idx) {
      out[row].push({ sliceNumber, data: chunked[row].slice(col, next_idx) });
    }
    col = next_idx;
  }

  return out;
}

function separate2(arr, length = 14) {
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

console.log(separate2(x, 64));

