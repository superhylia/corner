
export const nearestPosts (arr, url) => {
	if (!arr) return [];
	const index = arr.findIndex((post) => post.url === url);
	if (index === 0) return arr.slice(1, 3);
	if (index === arr.length - 1) return arr.slice(index - 2, index);
	return [arr[index - 1], arr[index + 1]];
};