import { graphql, useStaticQuery } from 'gatsby';

const useContentful = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulProject(
                filter: {
                    category: { enabled: { eq: true } }
                    enabled: { eq: true }
                }
                sort: { fields: [order], order: ASC }
            ) {
                group(field: category___order) {
                    edges {
                        node {
                            title
                            category {
                                name
                            }
                            skills
                            images {
                                title
                                file {
                                    url
                                }
                            }
                            links {
                                title
                                url
                            }
                            body {
                                json
                            }
                        }
                    }
                }
            }
        }
    `);

    const categories = data.allContentfulProject.group.map(group => {
        return {
            name: group.edges[0].node.category.name,
            projects: group.edges.map(edge => {
                const { category, ...node } = edge.node;
                return node;
            }),
        };
    });

    const skills = Array.from(
        new Set(
            categories
                .map(category =>
                    category.projects.map(project => project.skills)
                )
                .flat(2)
        )
    ).sort();

    return {categories, skills};
};

export default useContentful;
