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
  content,
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
          marginBottom: "0",
        }}
      >
        <h2
          className="has-text-weight-bold is-size-1"
          style={{
            boxShadow: "0.5rem 0 0 #f40, -0.5rem 0 0 #f40",
            backgroundColor: "#f40",
            color: "white",
            padding: "1rem",
          }}
        >
          {title}
        </h2>
      </div>
      <section className="section">
        <div className="column is-6 is-offset-1">
          <h1 className="title">
            {heading}
          </h1>
          <h6 className="subtitle">
            {description}
          </h6>
        </div>
      </section>
      <section className="section contact-section">
        <div className="section columns">
          <div className="column is-6">
            <PostContent content={content} />
          </div>
          <div className="column is-6">
            <Contact />
          </div>
        </div>
      </section>

      <iframe 
        title="maps" 
        src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d8713.689714834336!2d14.5588655!3d56.9072883!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x4659fa8cdb3e60d3%3A0x4e553492247cf5a9!2sV%C3%A4rends%20Glas%2C%20Ekebogatan%2016%2C%20342%2030%20Alvesta!3m2!1d56.9072883!2d14.5588655!5e0!3m2!1ssv!2sse!4v1586873755829!5m2!1ssv!2sse"
        width="100%" height="450" frameBorder="0" style={{border:"0"}} allowFullScreen="" aria-hidden="false">
      </iframe>
      <section className="section">
        <Employees gridItems={employees.employee} />
      </section>
    </div>
  );
};


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
            fluid(maxWidth: 1400, quality: 64) {
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
            title
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
