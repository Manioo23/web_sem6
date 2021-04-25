import React, { useState } from "react"
import '../index.css'
import { graphql } from 'gatsby'
import TemplateWrapper from "../layouts"
import SearchBar from '../components/SearchContainer';
import { useFlexSearch } from 'react-use-flexsearch';
import PostComponent from '../components/PostComponent';

const unflattenResults = results =>
    results.map(post => {
        const { date, slug, tags, title, author, excerpt, timeToRead, avatar } = post;
        return { fields: {slug}, frontmatter: { title, date, tags, author, avatar} , timeToRead, excerpt };
    });

const IndexPage = ({
    data: {
        localSearchPages: { index, store },
        allMarkdownRemark: { nodes },
    },
}) => {
    const { search } = window.location;
    const query = new URLSearchParams(search).get('search');
    const [searchQuery, setSearchQuery] = useState(query || '');

    const results = useFlexSearch(searchQuery, index, store);
    const posts = searchQuery ? unflattenResults(results) : nodes;

    return (

        <TemplateWrapper>
        <div>
            <SearchBar
                searchQuery = { searchQuery }
                setSearchQuery = { setSearchQuery }
            />
            {posts.map(post => (
                <PostComponent post={post} />
            ))}
        </div>
        </TemplateWrapper>
    );
};


export default IndexPage;


export const query = graphql`
query HomePageQuery{
  localSearchPages {
      index
      store
  }
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
                    ...GatsbyImageSharpFixed
                }
            }
        }
        }
        excerpt
        timeToRead
      }
    }
}
`
