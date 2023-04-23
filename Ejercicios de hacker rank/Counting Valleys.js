function countingValleys(steps, path) {
    let currentLevel = 0;
    let valleyCount = 0;
  
    for (let i = 0; i < steps; i++) {
      if (path[i] === 'U') {
        currentLevel++;
        if (currentLevel === 0) {
          valleyCount++;
        }
      } else {
        currentLevel--;
      }
    }
  
    return valleyCount;
  }
  