export const url = process.env.URL || 'http://localhost:8080';
export const siteName = 'Hylia\'s Corner';
export const siteDescription = 'i talk or something';
export const siteType = 'Person'; // schema
export const locale = 'en_EN';
export const lang = 'en';
export const skipContent = 'Skip to content';
export const author = {
  name: 'Levi Ireri', // i.e. Lene Saile - page / blog author's name. Must be set.
  avatar: '/icon-512x512.png', // path to the author's avatar. In this case just using a favicon.
  email: 'superlevi12345@gmail.com', // i.e. hola@lenesaile.com - email of the author
  website: 'https://superhylia.dev', // i.e. https.://www.lenesaile.com - the personal site of the author
};
export const creator = {
  name: 'Lene Saile', // i.e. Lene Saile - creator's (developer) name.
  email: 'hola@lenesaile.com',
  website: 'https://www.lenesaile.com',
  social: 'https://front-end.social/@lene'
};
export const pathToSvgLogo = 'src/assets/svg/misc/logo.svg'; // used for favicon generation
export const themeColor = '#dd4462'; // used in manifest, for example primary color value
export const themeLight = '#edece4'; // used for meta tag theme-color, if light colors are prefered. best use value set for light bg
export const themeDark = '#12131b'; // used for meta tag theme-color, if dark colors are prefered. best use value set for dark bg
export const opengraph_default = '/assets/images/template/opengraph-default.jpg'; // fallback/default meta image
export const opengraph_default_alt =
  "I make too many things to list, so here's something I did not make but like a lot. Please play Kingdom Hearts II. It's peak."; // alt text for default meta image"
export const blog = {
  // RSS feed
  name: 'Hylia\'s Corner: A Blog',
  description: 'Scribbles and essays about creating something in the world (and guilty pleasures).',
  toc: 'Table of contents',
  skipToc: 'Skip table of contents',
  // feed links are looped over in the head. You may add more to the array.
  feedLinks: [
    {
      title: 'Atom Feed',
      url: '/feed.xml',
      type: 'application/atom+xml'
    },
    {
      title: 'JSON Feed',
      url: '/feed.json',
      type: 'application/json'
    }
  ],
  // Tags
  tagSingle: 'Tag',
  tagPlural: 'Tags',
  tagMore: 'More tags:',
  // pagination
  paginationLabel: 'Blog',
  paginationPage: 'Page',
  paginationPrevious: 'Previous',
  paginationNext: 'Next',
  paginationNumbers: true
};
export const details = {
  aria: 'section controls',
  expand: 'expand all',
  collapse: 'collapse all'
};
export const navigation = {
  navLabel: 'Menu',
  ariaTop: 'Main',
  ariaBottom: 'Complementary',
  ariaPlatforms: 'Platforms',
  drawerNav: true
};
export const themeSwitch = {
  title: 'Theme',
  light: 'light',
  dark: 'dark'
};
export const greenweb = {
  // this goes into src/common/greenweb.njk
  providers: {
    // if you want to add more than one, edit the array directly.
    domain: 'netlify.com',
    service: 'cdn'
  },
  credentials: {
    // optional, eg: 	{ domain='my-org.com', doctype = 'webpage', url = 'https://my-org.com/our-climate-record'}
    domain: '',
    doctype: '',
    url: ''
  }
};
export const viewRepo = {
  // this is for the view/edit on github link. The value in the package.json will be pulled in.
  allow: true,
  infoText: 'View this page on GitHub'
};
export const easteregg = true;
