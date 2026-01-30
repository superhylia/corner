export const unescape = value => {
  // A simple filter to unescape HTML entities
    if (!value) return "";
    // This replaces common entities. 
    // If you want a robust version, use the 'he' library.
    return value.replace(/&#39;/g, "'")
                .replace(/&quot;/g, '"')
                .replace(/&amp;/g, '&');
  };