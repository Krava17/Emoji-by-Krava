// emojiConverter.js

const emojiMap = {
    ":)": "😊",
    ":(": "😞",
    ":D": "😃",
    ":P": "😜",
    ":O": "😲",
    ":|": "😐",
    ":*": "😘",
    "<3": "❤️",
    ":thumbsup:": "👍",
    ":thumbsdown:": "👎",
    ":fire:": "🔥",
    ":poop:": "💩",
    ":hearteyes:": "😍",
    ":ok_hand:": "👌",
    ":sunglasses:": "😎",
    ":smirk:": "😏",
    ":pray:": "🙏",
  };
  
  function convertToEmoji(text) {
    let convertedText = text;
    for (let emojiKey in emojiMap) {
      const regex = new RegExp(escapeRegExp(emojiKey), "g");
      convertedText = convertedText.replace(regex, emojiMap[emojiKey]);
    }
    return convertedText;
  }
  
  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  
  module.exports = {
    convertToEmoji,
  };
  