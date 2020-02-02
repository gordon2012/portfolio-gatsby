module.exports = {
    siteMetadata: {
        title: `Gordon Doskas`,
        description: ``,
        author: `Gordon Doskas`
    },
    plugins: [
        {
            resolve: 'gatsby-source-contentful',
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            },
        },
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [
                    {
                        family: `Montserrat`,
                        variants: ['700']
                    },
                    {
                        family: `Ubuntu`,
                        variants: ['400']
                    },
                    {
                        family: `Ubuntu Mono`,
                        variants: ['400']
                    },
                    {
                        family: `Fira Code`,
                        variants: ['700']
                    }
                ]
            }
        },
        `gatsby-plugin-react-helmet`
    ],
};
