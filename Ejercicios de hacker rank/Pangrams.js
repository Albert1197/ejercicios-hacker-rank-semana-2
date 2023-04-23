function pangrams(s) {
    // Convertimos la cadena a minúsculas y eliminamos los espacios
    s = s.toLowerCase().replace(/ /g, '');
    
    // Creamos un arreglo con todas las letras del alfabeto
    let alphabet = Array(26).fill(false);
    
    // Marcamos como true las letras que aparecen en la cadena
    for (let i = 0; i < s.length; i++) {
      let charCode = s.charCodeAt(i) - 97; // Convertimos la letra a su código ASCII y restamos 97 para obtener su índice en el arreglo
      alphabet[charCode] = true;
    }
    
    // Verificamos que todas las letras del alfabeto estén presentes
    for (let i = 0; i < 26; i++) {
      if (!alphabet[i]) {
        return 'not pangram';
      }
    }
    
    return 'pangram';
  }
  