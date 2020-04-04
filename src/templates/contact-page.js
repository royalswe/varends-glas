import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Employees from '../components/Employees'
import Contact from "../components/Contact";
import Content, { HTMLContent } from "../components/Content";

export const ContactPageTemplate = ({
  title,
  description,
  heading,
  image,
  employees,
  contentComponent,
  content
}) => {
  const PostContent = contentComponent || Content;

  return (
  <div className="content">
  <div
    className="full-width-image-container margin-top-0"
    style={{
      backgroundImage: `url(${
        !!image.childImageSharp ? image.childImageSharp.fluid.src : image
      })`,
    }}
  >
    <h2
      className="has-text-weight-bold is-size-1"
      style={{
        boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
        backgroundColor: '#f40',
        color: 'white',
        padding: '1rem',
      }}
    >
      {title}
    </h2>
  </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">

            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {heading}
              </h2>
              <p>{description}</p>
              <div className="columns">
                <div className="column is-6">
                  <PostContent content={content} />
                </div>
                <div className="column is-6">
                  <Contact />
                </div>
              </div>
              <Employees gridItems={employees.employee} />
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

ContactPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  documents: PropTypes.shape({
    document: PropTypes.array,
  }),
}

const ContactPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ContactPageTemplate
        title={frontmatter.title}
        description={frontmatter.description}
        image={frontmatter.image}
        heading={frontmatter.heading}
        employees={frontmatter.employees}
        contentComponent={HTMLContent}
        content={data.markdownRemark.html}
      />
    </Layout>
  )
}

ContactPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  employees: PropTypes.shape({
    employee: PropTypes.array,
  }),
}

export default ContactPage

export const documentsPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 640, quality: 64) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        description
        heading
        employees {
          employee {
            name
            phone
            email
            image {
              childImageSharp {
                fluid(maxWidth: 640, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
