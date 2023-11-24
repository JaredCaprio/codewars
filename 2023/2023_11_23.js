/* <1>
 
*/

function arrayPlusArray(arr1, arr2) {
  const summer = (arr) => {
    return arr.reduce((cum, cur) => cum + cur, 0);
  };

  return summer(arr1) + summer(arr2);
}

console.log(arrayPlusArray([1, 2, 3, 4, 5, 6], [5, 6, 7, 8, 9]));

//</1>
