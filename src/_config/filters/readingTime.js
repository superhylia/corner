export const readingTime = content => {
  const wordsPerMinute = 220; // Average reading speed
  if (typeof content !== "string") {
    return "0 minutes to read";
  }

  // 1. Extract 'alt' attributes into plain text so image descriptions are counted
  const textWithAlt = content.replace(/<img[^>]*alt=["']([^"']*)["'][^>]*>/gi, ' $1 ');

  // 2. Strip all remaining HTML tags (<p>, <div>, <figcaption>, src attributes, etc.)
  const cleanText = textWithAlt.replace(/<[^>]*>/g, ' ');

  // 3. Count words on the clean text
  const wordCount = cleanText
    .split(/\s+/)
    .filter((word) => word.length > 0).length;

  const readingTimeMinutes = Math.ceil(wordCount / wordsPerMinute);

  return `${readingTimeMinutes} min`;
  // return `${readingTimeMinutes} minute${readingTimeMinutes > 1 ? "s" : ""}`
};