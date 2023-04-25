function isPangram(string){
var array=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
string=string.toLowerCase();
var stringArray=string.split("");
var unique = stringArray.filter((value, index, array) => array.indexOf(value) === index);
unique.sort();
if(string.length<26)
{
    return false;    
}
else
{
for(var i=0;i<26;i++)
  {
      if(unique[i]!=array[i])
      {
          return false;
      }
  }
  return true;
}
}
//CHECKING EXAMPLES

//NOT A PANGRAM
console.log(isPangram("HijklmnopqrstuvwasdasSD@#asdxyz"));

//PANGRAM
console.log(isPangram("Thequickbrownfoxjumpsoverthelazydog"));
