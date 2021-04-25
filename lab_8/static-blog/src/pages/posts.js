import { graphql } from "gatsby";
import React from "react";
import '../index.css';
import TemplateWrapper from '../layouts';
import { DiscussionEmbed } from "disqus-react"



const Post = ({data}) => {
    const post = data.markdownRemark;
    const disqusConfig = {
      shortname: "testadress",
      config: { identifier: post.slug, title: post.frontmatter.title },
    }
    return (
        <TemplateWrapper>
            <div>
            <h1>{post.frontmatter.title}</h1>
            <h4 style={{color: 'rgb(165, 164, 164)'}}>{post.frontmatter.author}<span style={{fontSize: '0.8em'}}> -{post.frontmatter.date}</span></h4>
            <div dangerouslySetInnerHTML = {{ __html: post.html }}/>
            </div>
            <DiscussionEmbed {...disqusConfig} />
        </TemplateWrapper>

    );
};

export default Post

export const query = graphql`
    query PostQuery($slug: String!){
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                author
                date
            }
        }
    }
`
