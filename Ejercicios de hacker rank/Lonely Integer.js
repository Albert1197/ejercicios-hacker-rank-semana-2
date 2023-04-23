function lonelyinteger(a) {
    let result = 0;
    
    // Usamos el operador XOR para obtener el número solitario
    for (let i = 0; i < a.length; i++) {
      result ^= a[i];
    }
    
    return result;
  }
  