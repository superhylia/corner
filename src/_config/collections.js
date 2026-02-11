/** All blog posts as a collection. */
export const getAllPosts = collection => {
  return collection.getFilteredByGlob('./src/posts/**/*.md').reverse();
};

/** All relevant pages as a collection for sitemap.xml */
export const showInSitemap = collection => {
  return collection.getFilteredByGlob('./src/**/*.{md,njk}');
};

/** Generates collections via "series" YAML matter tag */
export const getAllSeries = collection => {
  const posts = collection.getFilteredByGlob('./src/posts/**/*.md');
  const seriesMap = {};

  posts.forEach(item => {
    const { series } = item.data;
    if (!series) return;

    // Force series to be an array so we can handle single or multiple
    const normalizedSeries = Array.isArray(series) ? series : [series];

    normalizedSeries.forEach(name => {
      if (!seriesMap[name]) {
        seriesMap[name] = [];
      }
      seriesMap[name].push(item);
    });
  });

  // Sort posts within each series by the 'order' key (ascending)
  for (const name in seriesMap) {
    seriesMap[name].sort((a, b) => (a.data.order || 0) - (b.data.order || 0));
  }

  return seriesMap;
}

/** All tags from all posts as a collection - excluding custom collections */
export const tagList = collection => {
  const tagsSet = new Set();
  collection.getAll().forEach(item => {
    if (!item.data.tags) return;
    item.data.tags.filter(tag => !['posts', 'docs', 'all'].includes(tag)).forEach(tag => tagsSet.add(tag));
  });
  return Array.from(tagsSet).sort();
};
