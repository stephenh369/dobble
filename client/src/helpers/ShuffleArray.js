// shuffles contents of array into random order
export const shuffle = arr => {
  // console.log('starting arr :>> ', arr);
  for (let i = arr.length - 1; i > 0; i--) {
    // console.log("NEW ITERATION");
    // console.log('i :>> ', i);
    // get random index from 0 to i
    const j = Math.floor(Math.random() * i);
    // console.log('j :>> ', j);
    // console.log("BEFORE SWAP");
    // console.log('arr[i] :>> ', arr[i]);
    // console.log('arr[j] :>> ', arr[j]);
    // swap elements at indexes i and j
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    // arr[i], arr[j] = arr[j], arr[i];
  //   console.log("AFTEER SWAP");
  //   console.log('arr[i] :>> ', arr[i]);
  //   console.log('arr[j] :>> ', arr[j]);
  }
  // console.log("FINAL ARR:");
  // console.log('arr :>> ', arr);
  // return arr
};
