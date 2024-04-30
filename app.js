// What does the following code return?

new Set([1,1,2,2,3,4])
//Set {1, 2, 3, 4}

[...new Set("referee")].join("")
//ref

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
//Map {Array (3) => true, Array(3) => false}

// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

const hasDuplicate = (arr) => {
    let noDupes = [...new Set(arr)];
    if (noDupes.length < arr.length){
        return true;
    } else {
    return false;
    }
}

// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

function vowelCount (str){
    const vowels = 'aeiou';
    const vowelCountMap = new Map();
    for (let letter of str){
        let lowerCaseLetter = letter.toLowerCase();
        if (vowels.includes(lowerCaseLetter)){
            if (vowelCountMap.has(lowerCaseLetter)){
                vowelCountMap.set(lowerCaseLetter, vowelCountMap.get(lowerCaseLetter) +1);
            }
            else {
                vowelCountMap.set(lowerCaseLetter, 1);
            }
        }
    }
    return vowelCountMap;
}