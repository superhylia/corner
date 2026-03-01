export const readingTime = content => {
  const wordsPerMinute = 220; // Average reading speed
  if (typeof content !== "string") {
    return "0 minutes to read";
  }

  const wordCount = content
    .split(/\s+/)
    .filter((word) => word.length > 0).length;
  const readingTimeMinutes = Math.ceil(wordCount / wordsPerMinute);

  return `${readingTimeMinutes} min`
  // return `${readingTimeMinutes} minute${readingTimeMinutes > 1 ? "s" : ""}`
};