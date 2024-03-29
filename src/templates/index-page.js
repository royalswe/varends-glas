import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import Features from "../components/Features";
import WideFeatures from "../components/WideFeatures";
import Contact from "../components/Contact";
import Content, { HTMLContent } from "../components/Content";
import { getSrc } from "gatsby-plugin-image";


export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  main,
  content,
  contentComponent
}) => {
  const PostContent = contentComponent || Content;
  return (
    <div>
      <div className="jumbotron-container">
        <div
          className="full-width-image fixed-scroll-image img-zoom--slowmo"
          style={{
            backgroundImage: `url(${
              !!image.childImageSharp ? getSrc(image) : image
            })`,
          }}
        >
          <div
            style={{
              display: "flex",
              height: "200px",
              lineHeight: "1",
              textAlign: "center",
              justifyContent: "space-around",
              alignItems: "left",
              flexDirection: "column",
            }}
          >
            <h1
              className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen animate fade-in"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                color: "#fff",
                lineHeight: "1",
                padding: "0.25em",
                letterSpacing: "2px",
              }}
            >
              {title}
            </h1>

            <h3
              className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen animate fade-in"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                color: "#fff",
                lineHeight: "1",
                padding: "0.25em",
                textAlign: "center",
                letterSpacing: "2px",
              }}
            >
              {subheading}
            </h3>
            <Link
              className="button is-outlined is-large animate fade-in-up"
              style={{
                color: "#696969",
                backgroundColor: "#fff",
                borderColor: "#696969",
                borderWidth: "3px",
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
      </div>
      <section className="section">
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
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
        content={data.markdownRemark.html}
        contentComponent={HTMLContent}
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

export const pageQuery = graphql`query IndexPage($id: String!) {
  markdownRemark(id: {eq: $id}) {
    html
    frontmatter {
      title
      image {
        childImageSharp {
          gatsbyImageData(quality: 64, layout: FULL_WIDTH, placeholder: BLURRED)
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
              gatsbyImageData(width: 240, height: 240, quality: 64, layout: CONSTRAINED)
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
              gatsbyImageData(quality: 64, layout: FULL_WIDTH)
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
