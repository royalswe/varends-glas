import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { getSrc } from "gatsby-plugin-image"
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const ServiceTemplate = ({
  content,
  contentComponent,
  description,
  title,
  image,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <div className="content">
      {helmet || ''}
      {image &&
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url(${
              !!image.childImageSharp ? getSrc(image) : image
            })`,
          }}
        ></div>
      }
      <div className="section container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            <PostContent content={content} />
          </div>
        </div>
      </div>
    </div>
  );
}

ServiceTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const Service = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ServiceTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Tjänster">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        title={post.frontmatter.title}
        image={post.frontmatter.image}
      />
    </Layout>
  )
}

Service.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Service

export const pageQuery = graphql`query ServiceByID($id: String!) {
  markdownRemark(id: {eq: $id}) {
    id
    html
    frontmatter {
      title
      image {
        childImageSharp {
          gatsbyImageData(quality: 64, layout: FULL_WIDTH)
        }
      }
      description
    }
  }
}
`
