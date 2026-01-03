// https://www.codewars.com/kata/53f40dff5f9d31b813000774/train/javascript

var recoverSecret = function(triplets) {
    const graph = {};
    const inDegree = {};

    for (const triplet of triplets) {
        for (const ch of triplet) {
            graph[ch] ??= new Set();
            inDegree[ch] ??= 0;
        }
    }

    for (const [a, b, c] of triplets) {
        if (!graph[a].has(b)) {
            graph[a].add(b);
            inDegree[b]++;
        }
        if (!graph[b].has(c)) {
            graph[b].add(c);
            inDegree[c]++;
        }
    }

    let result = '';

    while (Object.keys(inDegree).length) {
        const ch = Object.keys(inDegree).find(k => inDegree[k] === 0);
        result += ch;

        for (const next of graph[ch]) {
            inDegree[next]--;
        }

        delete inDegree[ch];
    }

    return result;
}