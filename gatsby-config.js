const config = require('./data/config');

module.exports = {
    siteMetadata: {
        title: config.siteTitle,
        description: config.siteDescription,
        author: `@remiboissise`,
        menuLinks: [
            {
                name: 'Navigation.Projects',
                link: '/projects'
            },
            {
                name: 'Navigation.Contact',
                link: '/contact'
            }
        ]
    },
    plugins: [
        `gatsby-transformer-remark`,
        `gatsby-plugin-remove-trailing-slashes`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-json`,
        `gatsby-plugin-react-helmet`,
        {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `assets`,
            path: `${__dirname}/static`,
        },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/data`,
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
            trackingId: config.googleAnalyticsTrackingId,
            },
        },
        {
            resolve: `gatsby-plugin-netlify`,
            options: {
                headers: {
                    '/*.js': ['cache-control: public, max-age=31536000, immutable'],
                    '/*.css': ['cache-control: public, max-age=31536000, immutable'],
                    '/sw.js': ['cache-control: public, max-age=0, must-revalidate'],
                },
            },
        },
        `gatsby-plugin-sass`,
        {
        resolve: `gatsby-plugin-manifest`,
            options: {
                name: config.siteTitle,
                short_name: config.siteTitleShort,
                description: config.siteDescription,
                start_url: config.pathPrefix,
                background_color: config.backgroundColor,
                theme_color: config.themeColor,
                display: `minimal-ui`,
                icon: config.faviconUrl
            },
        },
    ]
}
