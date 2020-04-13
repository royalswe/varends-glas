import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import PropTypes from 'prop-types';

const ServiceLinks = ({ data }) => {
  const links = data.allMarkdownRemark.edges
  return(
    <div className="navbar-item has-dropdown is-hoverable">
      <Link className="navbar-link" activeClassName={'active-page'} to="/services">Våra tjänster</Link>
      <div className="navbar-dropdown">
        {links && links.map(({ node: link }) => (         
          <Link className="navbar-dropdown-item" activeClassName={'active-page'} key={link.id} to={link.fields.slug}>
            {link.frontmatter.title}
          </Link>
        ))}
      </div>
    </div>
  )
};

ServiceLinks.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default props => (
  <StaticQuery
    query={graphql`
      query ServiceLinksQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "service" } } }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
              id
            }
          }
        }
      }
    `}
    render={data => <ServiceLinks data={data} />}
  />
);
