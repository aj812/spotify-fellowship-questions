const changePossibilities = (n, denominations) => {
  let combos = [];

  // for each denom, loop 1-through-amount(n)

  // if sum < amount(n), subloop again (adding each denom)
  // if sum === amount(n), save the combo, break loop
  // if sum > amount(n), break loop

  // ex: 1x(10) = n, save combo
  //ex: 1x(8) < n, so subloop... 8+1 < n, still less... 8+2 = n (go to above case)

  let sum = 0;

  denominations.forEach(denom => {

      for (let i=1; i<n+1; i++) {
          sum = denom * i;

          // if sum === amount(n), save the combo, break loop
          if (sum === n) {
              console.log(denom, i);
              let comboarr =[];
              for (let x=0; x<i; x++) {
                  comboarr.push(denom);
              }
              let combo = comboarr.toString();
              // if combo doesn't already exist in arr, add it
              if (combos.indexOf(combo) === -1) {
                combos.push(combo);
              }
          }

          // if sum < amount(n), subloop again (adding each denom)
          if (sum < n) {
            denominations.forEach(subdenom => {
              let newsum = sum + subdenom;
              if (newsum === n) {
                console.log('match: ', sum, subdenom)

              }
            })
          }

          // if sum < amount(n), subloop again (adding each denom)
          if (sum > n) {
            break;
          }


      }

    })
    console.log('Combos: ', combos);
}

changePossibilities(8, [1,2,3]);
// changePossibilities(4, [1,2,3]);