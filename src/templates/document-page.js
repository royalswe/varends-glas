import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Documents from '../components/Documents'

export const DocumentPageTemplate = ({
  title,
  description,
  heading,
  image,
  documents
}) => (
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
              <Documents gridItems={documents.document} />
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )

DocumentPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  documents: PropTypes.shape({
    document: PropTypes.array,
  }),
}

const DocumentPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <DocumentPageTemplate
        title={frontmatter.title}
        description={frontmatter.description}
        image={frontmatter.image}
        heading={frontmatter.heading}
        documents={frontmatter.documents}
      />
    </Layout>
  )
}

DocumentPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default DocumentPage

export const documentsPageQuery = graphql`
  query DocumentPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 640, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        description
        heading
        documents {
          document {
            Title
            description
            file
            image {
              childImageSharp {
                fluid(maxWidth: 640, quality: 100) {
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
