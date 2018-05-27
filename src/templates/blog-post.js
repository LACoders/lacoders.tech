import React from "react";

export default ({ data }) => {
    const post = data.markdownRemark;
    return (
        <div>
            <h1 style={{ margin: 0 }}>{post.frontmatter.title}</h1>
            <p style={{ color: 'rgb(187, 187, 187)', marginBottom: 10, marginTop: 5 }}>By {post.frontmatter.author} on {post.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
    );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`;
