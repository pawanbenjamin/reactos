function permutations(str) {
    var results = [];
    var letters = str.split('');
    results.push([letters.shift()]); //add first letter (as an array) to results
    while (letters.length) {
        var curLetter = letters.shift();
        var tmpResults = [];
        results.forEach(function(curResult) {
            for (var i = 0; i<= curResult.length; i++) {
                var tmp = curResult.slice(); //make copy so we can modify it
                 //insert the letter at the current position
                tmp.splice(i,0,curLetter);
                tmpResults.push(tmp);
            }
        });
        results = tmpResults; //overwrite the previous results
    }
    results = results.map(function(letterArr) {
        return letterArr.join(''); //make string from letter array
    });
    return results.filter(function(el,index) {
        return results.indexOf(el) === index; //filter out non-unique words
    })
}

//recursive solution
function recursivePermutations(str, path="") {
    var results = new Set();
    if (!str.length) {
        results.add(path);
        return results;
    }
    else {
        let index = 0;
        for (const letter of str) {
            results = union(results, recursivePermutations(removeIndex(str, index), path + letter)); // No union in JS sets :/
            index++;
        }
    }
    return results;
}

removeIndex = (str, index) => str.slice(0, index) + str.slice(index + 1, str.length);
union = (set1, set2) => new Set([...set1, ...set2]);