import React from 'react'
import PropTypes from 'prop-types'
import { DocumentPageTemplate } from '../../templates/document-page'

const DocumentPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()
  const entryImages = entry.getIn(['data', 'documents', 'document', 'image'])
  const Images = entryImages ? entryImages.toJS() : []

  return (
    <DocumentPageTemplate
      title={data.title}
      description={data.description}
      heading={data.heading}
      image={data.image}
      documents={{
        title: entry.getIn(['data', 'document', 'title']),
        description: entry.getIn(['data', 'document', 'description']),
        Images
      }}
    />
  )
}

DocumentPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  })
}

export default DocumentPagePreview
