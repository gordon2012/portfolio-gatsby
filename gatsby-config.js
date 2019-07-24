module.exports = {
    plugins: [
        // {
        //     resolve: 'gatsby-plugin-styletron',
        //     options: {
        //         prefix: '_',
        //     },
        // },
        {
            resolve: 'gatsby-source-contentful',
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            },
        },
    ],
};
