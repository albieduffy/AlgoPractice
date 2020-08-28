function linear(chosen, min, max) {
  for (let i = min; i <= max; i++) {
    if ( i == chosen) {
      return console.log(`${i} <---- found it!!`)
    } else {
      console.log(`${i} Not it :(`)
    }
  }
};

linear(20, 5, 55);
