// Gloss Translator Module

const stopWords = [
  "is", "am", "are", "was", "were",
  "the", "a", "an",
  "to", "of", "and",
  "in", "on", "at",
  "for", "with",
  "have", "has", "had",
  "will", "shall",
  "be"
];

const glossDictionary = {
  "going": "GO",
  "goes": "GO",
  "went": "GO",

  "eating": "EAT",
  "ate": "EAT",

  "playing": "PLAY",
  "played": "PLAY",

  "studying": "STUDY",
  "studied": "STUDY",

  "running": "RUN",
  "ran": "RUN",

  "hello": "HELLO"
};

export function convertToGloss(text) {

  if (!text) return "";

  const words = text.toLowerCase().split(" ");

  const glossTokens = [];

  for (let word of words) {

    if (stopWords.includes(word)) continue;

    const glossWord = glossDictionary[word] || word.toUpperCase();

    // prevent duplicate consecutive words
    if (glossTokens[glossTokens.length - 1] !== glossWord) {
      glossTokens.push(glossWord);
    }

  }

  return glossTokens.join(" ");
}