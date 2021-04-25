import React from "react"
import Link from "gatsby-link"
import '../index.css'
import Img from "gatsby-image"


const PostComponent = ({post}) => (
    <div>
        <div key={post.id} className="article-box">
          <Img fixed= {post.frontmatter.avatar.childImageSharp.fixed}/>
          <Link to={post.fields.slug} style={{textDecoration: 'none', color: 'inherit'}}>
            <h3 className="title">{post.frontmatter.title}</h3>
          </Link>
          <p className="author">Author: <i>{post.frontmatter.author}</i></p>
          <p className="date">{post.frontmatter.date} {post.timeToRead} min read</p>
          <p className="excerpt">{post.excerpt}</p>
        </div>
    </div>
);
export default PostComponent
