import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import defaultImage from '../img/featured.jpg'

class ServiceRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="columns is-multiline">
        {posts && posts.map(({ node: post }) => (
          <div className="blog-card" key={post.id}>
            <div className="meta">
              <div
                className="photo"
                style={{
                  backgroundImage: `url(${
                    !!post.frontmatter.featuredimage.childImageSharp
                      ? post.frontmatter.featuredimage.childImageSharp.fluid.src
                      : defaultImage
                  })`,
                }}
              ></div>
            </div>
            <div className="description">
              <Link to={post.fields.slug}> <h1>{post.frontmatter.title}</h1></Link>
              <h2>{post.frontmatter.subtitle}</h2>
              <p>{post.frontmatter.description}</p>
              <p className="read-more">
                <Link to={post.fields.slug}>Läs mer</Link>
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

ServiceRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query ServiceRollQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "service" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                subtitle
                description
                templateKey
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 300, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <ServiceRoll data={data} count={count} />}
  />
)
