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
      <section
        className="section"
        style={{
          paddingTop: "4em",
          paddingBottom: "3em",
        }}
      >
        <div className="container column is-7 is-offset-1">
          <h1 className="title" style={{}}>
            {heading}
          </h1>
          <h6 className="subtitle" style={{}}>
            {description}
          </h6>
        </div>
      </section>
      <section className="section  contact-section">
        <div className="section columns">
          <div className="column is-6">
            <PostContent content={content} />
          </div>
          <div className="column is-6">
            <Contact />
          </div>
        </div>
      </section>
      <div dangerouslySetInnerHTML={map()}></div>
      <section className="section">
        <Employees gridItems={employees.employee} />
      </section>
    </div>
  );
};

function map(){
  return{ __html: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2178.422429829637!2d14.556671451487668!3d56.907288280784066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4659fa8cdb3e60d3%3A0x4e553492247cf5a9!2sV%C3%A4rends%20Glas!5e0!3m2!1ssv!2sse!4v1586805556768!5m2!1ssv!2sse" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="true" aria-hidden="true" tabindex="0"></iframe>' }
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
            fluid(maxWidth: 1024, quality: 64) {
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
