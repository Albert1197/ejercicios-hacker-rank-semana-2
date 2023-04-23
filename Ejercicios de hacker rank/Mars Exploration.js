function marsExploration(s) {
    let count = 0;
    
    // Recorremos la cadena de tres en tres
    for (let i = 0; i < s.length; i += 3) {
      // Verificamos si los caracteres no coinciden con la secuencia SOS
      if (s[i] !== 'S') {
        count++;
      }
      if (s[i+1] !== 'O') {
        count++;
      }
      if (s[i+2] !== 'S') {
        count++;
      }
    }
    
    return count;
  }
  