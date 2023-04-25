function isPangram(string) {
    var array = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    string = string.toLowerCase();
    //Removes all spaces from the string
    var string = string.replace(/\s/g, "");
    //Removes all special characters from a string
    string = string.replace(/[^a-zA-Z0-9 ]/g, '');
    //Removes all numbers characters from a string
    string = string.replace(/[0-9]/g, '');
    var stringArray = string.split("");
    var unique = stringArray.filter((value, index, array) => array.indexOf(value) === index);
    unique.sort();
    if (string.length < 26) {
        return false;
    }
    else {
        for (var i = 0; i < 26; i++) {
            if (unique[i] != array[i]) {
                return false;
            }
        }
        return true;
    }
}

//CHECKING EXAMPLES

//NOT A PANGRAM
console.log(isPangram("Hijklmnopqrstuv wasdasSD@#asdxyz"));

console.log(isPangram("adczd"));

//PANGRAM
console.log(isPangram("Thequickbrownfoxjumpsoverthelazydog"));

//PANGRAM
console.log(isPangram("Thequic!!!kbro  wn foxj@  wedw2efdfdfq#@2@r32424 23*--@umpsoverthelazydog"));
