const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Ray Thurman - Portfolio', // Navigation and Site Title
  siteTitleAlt: 'Thurman Web Development', // Alternative Site title for SEO
  siteTitleShort: 'RT', // short_name for manifest
  siteHeadline: 'Full stack web developer', // Headline for schema.org JSONLD
  siteUrl: 'https://raythurman.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Raymond Thurman is a web developer based out of Corydon Indiana for all of your web and app needs.',
  author: 'Ray Thurman, Corydon Indiana', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@raythurman2386', // Twitter Username
  ogSiteName: 'Ray Thurman - Portfolio', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-139068572-1',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
