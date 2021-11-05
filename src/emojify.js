import emojis from "./emojis";

const emojify = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    let found = false;
    for (const emoji of emojis) {
      if (emoji.letter === char) {
        result += emoji.symbol;
        found = true;
      }
    }

    if (found === false) {
      result += char;
    }
  }

  return result;
};

export default emojify;
