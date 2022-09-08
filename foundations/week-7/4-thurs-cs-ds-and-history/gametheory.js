/*

There’s a game, “takeaway”, that is played by two players, using a number of stones.

The first player goes first. She can take 2, 3, or 5 stones from the pool. The second player goes next; she can also remove 2, 3, or 5 stones. The first player then goes, and so on.

If a player is unable to move (there are fewer than 2 stones), they lose.

Your Challenge
Imagine that both players have “perfect play” — that is, they always make the best possible move. Then, you can absolutely determine who would win a game with n stones.


*/

// function canWin - takes in an arg of stones
    //1 p1 loses if stones is less than 2
    //2 p1 takes 2 and player two cannot move - win
    //3 p1 takes 2 or 3 and player two cannot move - win
    //4 p1 wins if takes 3 stones,- win
    //* wins if stones p1 takes 2 or 3, 
    //5 p1 wins if takes 5 stones, - win
    //6 p1 wins if takes 5 stones,  - win
    //* wins if p1 2, 3 of 5 stones
    //7 p1 will not when at all
    //8 p1 will not when at all
    //9 p1 wins if takes 2 stones, leaving 7 (a win for player #1)
    //10 p1 wins if takes 2 or 3 stones

    //? What does it take for p1 to lose
        // #stones is less than 2
        // # of stones is 7 or 8
    //? What does it take for p1 to win
        // # of stones is 2, 3, or 5

// Your code here
const canWin = (stones) => {
    if (stones < 2) {
        return false;
    }
    if (stones === 2 || stones === 3 || stones === 5) {
        return true;
    }
    if (stones === 7 || stones === 8) {
        return false;
    }
    
    return true;
};

console.log(canWin(1)); // false
console.log(canWin(2)); // true
console.log(canWin(3)); // true
console.log(canWin(4)); // true
console.log(canWin(5)); // true
console.log(canWin(6)); // true
console.log(canWin(7)); // false
console.log(canWin(8)); // false
console.log(canWin(9)); // true
console.log(canWin(10)); // true