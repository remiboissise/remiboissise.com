const config = require('./data/config');

module.exports = {
    siteMetadata: {
        title: config.siteTitle,
        description: config.siteDescription,
        author: `@remiboissise`,
        menuLinks: [
            {
                name: 'projects',
                link: '/projects'
            },
            {
                name: 'contact',
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
