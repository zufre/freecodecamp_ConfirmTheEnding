function confirmEnding(str, target) {
  let arr = str.split("");
  let ending = (arr.splice(str.length-target.length, target.length).join(""));
  if (ending === target) {
    return true;
  }else {
    return false;
  }
  
}
confirmEnding("Bastian", "n");
