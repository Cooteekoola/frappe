String.prototype.firstLetterCaps = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

let str = "урок-3-был слишком легким";
    str = str.firstLetterCaps();
console.log(str);

