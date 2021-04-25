module.exports = {
    siteMetadata: {
        title: `Static Blog`,
        description: `This is example of static Gatsby blog`,
        author: `@pwr`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `blogposts`,
                path: `${__dirname}/src/blog-posts`
            }
        },
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 200,
                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/blog-posts`,
            },
        },
        {
            resolve: 'gatsby-plugin-local-search',
            options: {
                name: 'pages',
                engine: 'flexsearch',
                query: `
                {
                  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
                      nodes {
                        id
                        fields {
                          slug
                        }
                        frontmatter {
                          title
                          date
                          author
                          avatar {
                            childImageSharp {
                                fixed(width: 125 , height:125){
                                        base64
                                        width
                                        height
                                        src
                                        srcSet
                                    }
                                }
                            }
                        }
                        excerpt
                        timeToRead
                      }
                    }
                }
            `,
                ref: 'slug',
                index: ['title', 'excerpt'],
                store: ['title', 'excerpt', 'date', 'slug', 'author', 'timeToRead', 'avatar' ],
                normalizer: ({ data }) =>
                    data.allMarkdownRemark.nodes.map(node => ({
                        title: node.frontmatter.title,
                        excerpt: node.excerpt,
                        author: node.frontmatter.author,
                        date: node.frontmatter.date,
                        slug: node.fields.slug,
                        timeToRead: node.timeToRead,
                        avatar: node.frontmatter.avatar,
                    })),
            }
        },
        `gatsby-plugin-gatsby-cloud`,

        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
