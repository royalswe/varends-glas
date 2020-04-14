import React from 'react'
import PropTypes from 'prop-types'
import { DocumentPageTemplate } from '../../templates/document-page'

const DocumentPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()
  const entryDocuments = entry.getIn(['data', 'documents', 'document'])
  const document = entryDocuments ? entryDocuments.toJS() : []

  return (
    <DocumentPageTemplate
      title={data.title}
      description={data.description}
      heading={data.heading}
      image={data.image}
      documents={{document}}
    />
  )
}

DocumentPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default DocumentPagePreview
