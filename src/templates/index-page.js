import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Features from "../components/Features";
import WideFeatures from "../components/WideFeatures";
import Contact from "../components/Contact";
import Content, { HTMLContent } from "../components/Content";

export const IndexPageTemplate = ({
  content,
  contentComponent,
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  main
}) => {
  const PostContent = contentComponent || Content;

  return (
    <div>
      <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,
          backgroundPosition: `top left`,
          backgroundAttachment: `fixed`,
        }}
      >
        <div
          style={{
            display: "flex",
            height: "200px",
            lineHeight: "1",
            justifyContent: "space-around",
            alignItems: "left",
            flexDirection: "column",
          }}
        >
          <h1
            className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              color: "white",
              lineHeight: "1",
              padding: "0.25em",
            }}
          >
            {title}
          </h1>
          <h3
            className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              color: "white",
              lineHeight: "1",
              padding: "0.25em",
              textAlign: "center",
            }}
          >
            {subheading}
          </h3>
          <Link
            className="button is-outlined is-large"
            style={{
              color: "#fff",
              backgroundColor: "#28a745",
              borderColor: "#28a745",
              alignSelf: "center",
              padding: "25px",
              marginTop: "25px",
            }}
            to="/contact"
          >
            Kontakta oss
          </Link>
        </div>
      </div>
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="content">
                    <div className="tile">
                      <h1 className="title">{mainpitch.title}</h1>
                    </div>
                    <div className="tile">
                      <h3 className="subtitle">{mainpitch.description}</h3>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column is-12">
                      <h3 className="has-text-weight-semibold is-size-2">
                        {heading}
                      </h3>
                      <p>{description}</p>
                    </div>
                  </div>
                  <div className="full-width-container has-text-centered feature-grid">
                    <h3>{intro.heading}</h3>
                    <p>{intro.description}</p>
                    <Features gridItems={intro.blurbs} />
                  </div>
                </div>
              </div>
            </div>
            <div className="content">
            <WideFeatures gridItems={main.blurbs} />

            <div className="columns" style={{ padding: "5em" }}>
              <div className="column is-12 has-text-centered">
                <Link className="btn" to="/services">
                  Se våra tjänster
                </Link>
              </div>
            </div>
           
            <div className="columns">
              <div className="column is-6">
                <PostContent content={content} />
              </div>
              <div className="column is-6">
                <Contact />
              </div>
            </div>
            
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  }),
  main: PropTypes.shape({
    blurbs: PropTypes.array
  })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        content={data.markdownRemark.html}
        contentComponent={HTMLContent}
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
              extension
              publicURL
            }
            text
          }
          heading
          description
        }
        main {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 800, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
              extension
              publicURL
            }
            alt
            title
            text
            link
          }
        }
      }
    }
  }
`;
