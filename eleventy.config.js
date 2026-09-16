/**
 * Most adjustments must be made in `./src/_config/*`
 *
 * Hint VS Code for eleventyConfig autocompletion.
 * © Henry Desroches - https://gist.github.com/xdesro/69583b25d281d055cd12b144381123bf
 * @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig -
 */

// register dotenv for process.env.* variables to pickup
import dotenv from 'dotenv';
dotenv.config();

// add yaml and fs  support
import {load as yamlLoad} from 'js-yaml';
import fs from 'node:fs';
import path from 'node:path';

//  config import
import {getAllPosts, showInSitemap, tagList, getAllSeries} from './src/_config/collections.js';
import events from './src/_config/events.js';
import filters from './src/_config/filters.js';
import plugins from './src/_config/plugins.js';
import shortcodes from './src/_config/shortcodes.js';
import { execSync } from 'child_process';

// defines production
const isProduction = process.env.ELEVENTY_ENV === 'production';

export default async function (eleventyConfig) {
  // --------------------- Events: before build
  eleventyConfig.on('eleventy.before', async () => {
    await events.buildAllCss();
    await events.buildAllJs();
  });

  // --------------------- custom wtach targets
  eleventyConfig.addWatchTarget('./src/assets/**/*.{css,js,svg,png,jpeg,xsl}');
  eleventyConfig.addWatchTarget('./src/_includes/**/*.{webc}');

  // Pagefind search
  eleventyConfig.on('eleventy.after', () => {
    execSync(`npx pagefind --site dist --glob "**/*.html"`, { encoding: 'utf-8' });
  });
  
  // --------------------- layout aliases
  eleventyConfig.addLayoutAlias('base', 'base.njk');
  eleventyConfig.addLayoutAlias('page', 'page.njk');
  eleventyConfig.addLayoutAlias('post', 'post.njk');
  eleventyConfig.addLayoutAlias('tags', 'tags.njk');
  eleventyConfig.addLayoutAlias('roll', 'roll.njk');

  //	---------------------  Collections
  eleventyConfig.addCollection('allPosts', getAllPosts);
  eleventyConfig.addCollection('showInSitemap', showInSitemap);
  eleventyConfig.addCollection('tagList', tagList);
  eleventyConfig.addCollection('series', getAllSeries);
  eleventyConfig.addCollection("ALOM", function(collectionApi) {
    return collectionApi.getFilteredByTag("all-eyes-on-me").reverse();
  });
  
  // ---------------------  Plugins
  eleventyConfig.addPlugin(plugins.htmlConfig);
  eleventyConfig.addPlugin(plugins.drafts);

  eleventyConfig.addPlugin(plugins.EleventyRenderPlugin);
  eleventyConfig.addPlugin(plugins.rss);
  eleventyConfig.addPlugin(plugins.syntaxHighlight);

  eleventyConfig.addPlugin(plugins.postStats, {
    debugMode: true,
    tags: ['allPosts']
  });

  eleventyConfig.addPlugin(plugins.EleventyPluginOgImage, {
    outputDir: 'assets/og-images',
    urlPath: '/assets/og-images',
    satoriOptions: {
      fonts: [
        {
          name: 'Instrument Sans',
          data: fs.readFileSync('./src/assets/fonts/instrument_sans/InstrumentSans-Bold.ttf'),
          weight: 900,
          style: 'normal',
        },
        {
          name: 'Atkinson Hyperlegible Next',
          data: fs.readFileSync('./src/assets/fonts/atkinson-hyperlegible-next/AtkinsonHyperlegibleNext-Regular.ttf'),
          weight: 400,
          style: 'normal',
        },
      ],
    },
  })

  eleventyConfig.addPlugin(plugins.embedEverything, {
    use: ['bluesky', 'instagram', 'twitter', 'spotify', 'twitch', 'mastodon', 'youtube'],
    twitch: {
      options: {
        parent: isProduction ? "superhylia.dev" : "localhost"
      }
    },
    youtube: {
      options: {
        titleOptions: {
            download: true
          },
        lite: {
          css: {
            inline: true
          },
          js: {
            inline: true
          },
          responsive: true
        }
      }
    },
    mastodon: {
      options: {
        server: 'mastodon.social'
      }
    },
    instagram: {
      options: {
        width: '100%',
        align: 'center'
      }
    },
    twitter: {
      options: {
        cacheText: true,
        theme: 'dark',
        doNotTrack: 'true',
        cacheText: true,
        align: "center"
      }
    }
  });

  eleventyConfig.addPlugin(plugins.webc, {
    components: ['./src/_includes/webc/**/*.webc'],
    useTransform: true
  });

  eleventyConfig.addPlugin(plugins.eleventyImageTransformPlugin, {
    formats: ['webp', 'jpeg'],
    widths: ['auto'],
    sharpOptions: {
      animated: true
    },
    cacheOptions: {
      duration: "1d",
      directory: ".cache", // This folder will store the "memory" of processed images
      removeDotDot: false,
    },
    // sharpOptions: {
		//   animated: true,
    // },
    htmlOptions: {
      imgAttributes: {
        loading: 'lazy',
        decoding: 'async'
      },
      pictureAttributes: {}
    }
  });

  // ---------------------  bundle
  eleventyConfig.addBundle('css', {hoist: true});

  // 	--------------------- Library and Data
  eleventyConfig.setLibrary('md', plugins.markdownLib);
  eleventyConfig.addDataExtension('yaml', contents => yamlLoad(contents));

  // --------------------- Filters
  eleventyConfig.addFilter('toIsoString', filters.toISOString);
  eleventyConfig.addFilter('formatDate', filters.formatDate);
  eleventyConfig.addFilter('escapeHtml', filters.escapeHtml);
  eleventyConfig.addFilter('markdownFormat', filters.markdownFormat);
  eleventyConfig.addFilter('splitlines', filters.splitlines);
  eleventyConfig.addFilter('striptags', filters.striptags);
  eleventyConfig.addFilter('shuffle', filters.shuffleArray);
  eleventyConfig.addFilter('alphabetic', filters.sortAlphabetically);
  eleventyConfig.addFilter('slugify', filters.slugifyString);
  eleventyConfig.addFilter('unescape', filters.unescape);
  eleventyConfig.addFilter('readingTime', filters.readingTime); 

  // --------------------- Shortcodes
  eleventyConfig.addShortcode('svg', shortcodes.svgPositionalShortcode);
  eleventyConfig.addShortcode('svgKeys', shortcodes.svgKeysShortcode);
  eleventyConfig.addShortcode('image', shortcodes.imagePositionalShortcode);
  eleventyConfig.addShortcode('imageKeys', shortcodes.imageKeysShortcode);
  eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`);

  // --------------------- Events: after build
  // if (process.env.ELEVENTY_RUN_MODE === 'serve') {
  //   eleventyConfig.on('eleventy.after', events.svgToJpeg);
  // }

  // --------------------- Passthrough File Copy

  // -- same path
  ['src/assets/fonts/', 'src/assets/images/template', 'src/assets/og-images', 'src/assets/css/', 'src/assets/images/pages/'].forEach(path =>
    eleventyConfig.addPassthroughCopy(path)
  );

  eleventyConfig.addPassthroughCopy({
    // -- to root
    'src/assets/images/favicon/*': '/',

    // --pretty-feed.xsl
    'src/assets/pretty-feed-v3.xsl': '/assets/pretty-feed-v3.xsl',

    // -- node_modules
    'node_modules/lite-youtube-embed/src/lite-yt-embed.{css,js}': `assets/components/`
  });

  // ----------------------  ignore test files
  if (process.env.ELEVENTY_ENV != 'test') {
    eleventyConfig.ignores.add('src/common/pa11y.njk');
  }

  // ----------------------  ignore test files
  eleventyConfig.on("eleventy.after", async () => {
    const IMAGE_CACHE_DIR = "./.cache/images/";
    const destDir = "./dist/assets/images/";
    
    if (fs.existsSync(IMAGE_CACHE_DIR)) {
      console.log("[11ty] Copying optimized images from .cache to dist...");
      // Create the destination directory if it doesn't exist
      fs.mkdirSync(destDir, { recursive: true });
      // Copy everything from the cache to the production folder
      fs.cpSync(IMAGE_CACHE_DIR, destDir, { recursive: true });
      console.log("[11ty] Image copy complete!");
    } else {
      console.log("[11ty] No image cache found to copy.");
    }
  });
}

// https://www.11ty.dev/docs/config-shapes/#callback-function
export const config =  {
  markdownTemplateEngine: 'njk',

  dir: {
    output: 'dist',
    input: 'src',
    includes: '_includes',
    layouts: '_layouts'
  }
};
