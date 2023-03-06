export const emojiToString = (unicodeValue: string) => {
    return String.fromCodePoint(parseInt(unicodeValue.substring(2), 16));
};
