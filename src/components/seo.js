import React from "react"
import Helmet from "react-helmet"

import useMetadata from '../hooks/useMetadata'

const SEO = ({ description, lang = `en`, meta = [], title = ``}) => {
    const metadata = useMetadata();
    const metaDescription = description || metadata.description;

    return (
        <Helmet
            htmlAttributes={{lang}}
            title={title.length > 0 ? title : metadata.title}
            titleTemplate={title.length > 0 ? `%s | ${metadata.title}` : `%s`}
            meta={
                [
                    {
                        name: `description`,
                        content: metaDescription,
                    },
                    {
                        property: `og:title`,
                        content: title,
                    },
                    {
                        property: `og:description`,
                        content: metaDescription,
                    },
                    {
                        property: `og:type`,
                        content: `website`,
                    },
                    {
                        name: `twitter:card`,
                        content: `summary`,
                    },
                    {
                        name: `twitter:creator`,
                        content: metadata.author,
                    },
                    {
                        name: `twitter:title`,
                        content: title,
                    },
                    {
                        name: `twitter:description`,
                        content: metaDescription,
                    },
                ].concat(meta)
            }
        />
    );
};

export default SEO;
