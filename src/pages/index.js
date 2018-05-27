import React from "react";
import Link from "gatsby-link";

export default ({ data }) => {
  console.log(data);
  return (
    <div>
      <h2>Developers Meetup in Los Angeles, CA</h2>
      <p>
      Are you a coder / developer / programmer from Glendale, CA or surrounding areas? This is a group for anyone interested in learning to code, pair-programming, teaching how to code, and learning new technologies.
      Weekly gatherings. Supportive enviornment. Beginners are welcome! Workshops and guest speakers! <br />
      <b>Technologies we love: </b>
      Javascript (React, Node, Angular, React Native), Python, PHP, Ruby, Go, HTML, CSS, Magento, Wordpress, Java, C#, C, C++ and much more!
      </p>
      <h2>Read Our Blog</h2>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link
            to={node.fields.slug}
          >
            <h3 style={{ marginBottom: '4px' }}>
              {node.frontmatter.title}{" "}
              <span style={{ color: "#BBB" }}>— {node.frontmatter.date}</span>
            </h3>
          </Link>
            <p>{node.excerpt}</p>
        </div>
          ))}
    </div>
      );
      };

      export const query = graphql`
  query IndexQuery {
        allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
        totalCount
      edges {
        node {
      id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            author
          }
          fields {
        slug
      }
      excerpt
    }
  }
}
}
`;
