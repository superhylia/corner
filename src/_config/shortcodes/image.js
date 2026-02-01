import Image from '@11ty/eleventy-img';
import path from 'node:path';

const stringifyAttributes = attributeMap => {
  return Object.entries(attributeMap)
    .map(([attribute, value]) => {
      if (typeof value === 'undefined') return '';
      return `${attribute}="${value}"`;
    })
    .join(' ');
};

const errorSrcRequired = shortcodeName => {
  throw new Error(`src parameter is required for {% ${shortcodeName} %} shortcode`);
};

// Handles image processing
const processImage = async options => {
  let {
    src,
    alt = '',
    caption = '',
    credit = '',
    loading = 'lazy',
    containerClass,
    imageClass,
    widths = [650, 960, 1400],
    sizes,
    formats = ['avif', 'webp', 'jpeg']
  } = options;

  // Set sizes based on loading (if not provided)
  if (sizes == null) {
    sizes = loading === 'lazy' ? 'auto' : '100vw';
  }

  // Prepend "./src" if not present
  if (!src.startsWith('./src')) {
    src = `./src${src}`;
  }

  const cacheDir = path.join(process.cwd(), ".cache");
  console.log(`[11ty-img] Checking cache for: ${src}`);
  const metadata = await Image(src, {
    widths: [...widths],
    formats: [...formats],
    cacheOptions: {
      duration: "1d",
      directory: cacheDir,
      removeDotDot: false,
      useCache: true
    },
    urlPath: '/assets/images/',
    outputDir: './.cache/images/',
    filenameFormat: (id, src, width, format, options) => {
      const extension = path.extname(src);
      const name = path.basename(src, extension);
      return `${name}-${width}w.${format}`;
    }
  });

  const lowsrc = metadata.jpeg[metadata.jpeg.length - 1];

  const imageSources = Object.values(metadata)
    .map(imageFormat => {
      return `  <source type="${imageFormat[0].sourceType}" srcset="${imageFormat
        .map(entry => entry.srcset)
        .join(', ')}" sizes="${sizes}">`;
    })
    .join('\n');

  const imageAttributes = stringifyAttributes({
    'src': lowsrc.url,
    'width': lowsrc.width,
    'height': lowsrc.height,
    alt,
    loading,
    'decoding': loading === 'eager' ? 'sync' : 'async',
    ...(imageClass && {class: imageClass}),
    'eleventy:ignore': ''
  });

  const pictureElement = `<picture> ${imageSources}<img ${imageAttributes}></picture>`;

  let imageMarkup = pictureElement;

  if (credit) {
    const finalContainerClass = containerClass ? `feature ${containerClass}` : 'feature';
    imageMarkup = `<div class="${finalContainerClass}" style="position: relative; display: inline-block; max-width: 100%; line-height: 0;">
        ${pictureElement}
        <div class="credit">${credit}</div>
      </div>`;
  }

  if (caption) {
    return `<figure slot="image" style="text-align: center; margin-inline: auto;">
      ${imageMarkup}
      <figcaption>${caption}</figcaption>
    </figure>`;
  }

  return `<div slot="image" style="display: flex; justify-content: center; width: 100%; margin-block-end: var(--space-s);">${imageMarkup}</div>`;
  }

  

// Positional parameters (legacy)
export const imageShortcode = async (
  src,
  alt,
  caption,
  credit,
  loading,
  containerClass,
  imageClass,
  widths,
  sizes,
  formats
) => {
  if (!src) {
    errorSrcRequired('image');
  }
  return processImage({
    src,
    alt,
    caption,
    credit,
    loading,
    containerClass,
    imageClass,
    widths,
    sizes,
    formats
  });
};

// Named parameters
export const imageKeysShortcode = async (options = {}) => {
  if (!options.src) {
    errorSrcRequired('imageKeys');
  }
  return processImage(options);
};
