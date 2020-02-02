import { useStaticQuery, graphql } from 'gatsby';

const useMetadata = () => {
    const { site } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    author
                }
            }
        }
    `);

    return site.siteMetadata;
};

export default useMetadata;
