function findPairsOptimized(arr, targetSum) {
  const pairs = [];
  const seen = new Map();

  for (const number of arr) {
    const complement = targetSum - number;
    const complementCount = seen.get(complement) || 0;

    for (let i = 0; i < complementCount; i++) {
      pairs.push([complement, number]);
    }

    seen.set(number, (seen.get(number) || 0) + 1);
  }

  return pairs;
}

module.exports = findPairsOptimized;
