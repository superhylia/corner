// Eleventy
import {EleventyRenderPlugin} from '@11ty/eleventy';
import rss from '@11ty/eleventy-plugin-rss';
import syntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight';
import webc from '@11ty/eleventy-plugin-webc';
import {eleventyImageTransformPlugin} from '@11ty/eleventy-img';
import readingtime from '@myxotod/eleventy-plugin-readingtime';

// custom
import {markdownLib} from './plugins/markdown.js';
import {drafts} from './plugins/drafts.js';

// Custom transforms
import {htmlConfig} from './plugins/html-config.js';

export default {
  EleventyRenderPlugin,
  rss,
  syntaxHighlight,
  webc,
  eleventyImageTransformPlugin,
  readingtime,
  markdownLib,
  drafts,
  htmlConfig
};
