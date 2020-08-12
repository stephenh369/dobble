// shuffles contents of array into random order
export const shuffle = arr => {
  for (let i = arr.length - 1; i > 0; i--) {  // for each index of arr
    const j = Math.floor(Math.random() * i);  // find a random index from 0 to i
    const temp = arr[i]                       // swap values of arr[i] and [j]
    arr[i] = arr[j]                           
    arr[j] = temp                             
  }
};
