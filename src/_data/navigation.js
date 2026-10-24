export default {
  top: [
    {
      text: 'About',
      url: '/about/'
    },
    {
      text: 'Blog',
      url: '/blog/'
    },
    {
      text: 'Now',
      url: '/now/'
    },
    {
      text: 'Portfolio',
      url: '/portfolio/',
      submenu: [
        {
          text: 'Overview',
          url: '/portfolio/'
        },
        {
          text: 'Graphics',
          url: '/graphics/'
        },
        {
          text: 'Games',
          url: '/games/'
        },
        {
          text: 'UI/UX',
          url: '/ui-ux/'
        }
      ]
    }
  ],
  bottom: [
    {
      text: '/uses',
      url: '/uses/'
    }, 
    {
      text: '/slashes',
      url: '/slashes/'
    }
  ]
};
