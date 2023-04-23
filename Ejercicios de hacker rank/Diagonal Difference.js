function diagonalDifference(arr) {
    let sum1 = 0, sum2 = 0;
  
    // Sumamos los elementos de las diagonales
    for (let i = 0; i < arr.length; i++) {
      sum1 += arr[i][i];
      sum2 += arr[i][arr.length - i - 1];
    }
  
    // Devolvemos la diferencia absoluta entre las sumas
    return Math.abs(sum1 - sum2);
  }
  