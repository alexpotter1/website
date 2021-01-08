module.exports = {
    plugins: [
        `gatsby-transformer-json`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `./cv`,
            },
        },
    `gatsby-plugin-react-helmet`,
    `gatsby-source-local-git`
    ],
}
