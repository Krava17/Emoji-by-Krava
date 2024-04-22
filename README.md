# emoji-converter

## Description

This is a simple JavaScript package that converts text emoticons to emojis.

## Installation

You can install this package via npm:

```bash
npm install emoji-converter
```

## Usage

To use this package in your Node.js application, import it as follows:

```javascript
const { convertToEmoji } = require('emoji-converter');

const text = "Hello :) How are you?";
const convertedText = convertToEmoji(text);
console.log(convertedText); // Output: "Hello 😊 How are you?"
```

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add feature'`)
5. Push to the branch (`git push origin feature`)
6. Create a new Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
