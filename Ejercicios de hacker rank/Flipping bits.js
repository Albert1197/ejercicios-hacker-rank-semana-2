function flippingBits(n) {
    // Convertimos el número a una representación binaria de 32 bits
    let binary = n.toString(2).padStart(32, '0');
  
    // Invertimos cada bit
    let flipped = binary.split('').map(bit => bit === '0' ? '1' : '0').join('');
  
    // Convertimos el resultado de vuelta a entero
    return parseInt(flipped, 2);
  }
  