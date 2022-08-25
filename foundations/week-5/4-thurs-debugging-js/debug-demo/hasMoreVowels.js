// Write a function called `hasMoreVowels` that takes in 
// one argument, `word`. When the function is called, 
// return `true` if that word contains more vowels than 
// non-vowels; otherwise, return `false`. The word will 
// always be a single word, without any punctuation or 
// spaces. It will contain only uppercase and/or lowercase 
// letters.

const hasMoreVowels = word => {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let vowelCount = 0
    let vowelsNeeded = word.length / 2
    let wordSplit = word.toLowerCase().split('')

    for (let i = 0; i < wordSplit.length; i++) {
        // vowels.includes(wordSplit) missing [i]
        if (vowels.includes(wordSplit[i])) {
            vowelCount++
        }

        if (vowelCount > vowelsNeeded) {
            return true
        }
    }

    return false
}

const result = hasMoreVowels('audio')

console.log(result)