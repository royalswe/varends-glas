import React from 'react'
import PropTypes from 'prop-types'
import { ServiceTemplate } from '../../templates/service'

const ServicePreview = ({ entry, widgetFor }) => (
  <ServiceTemplate
    content={widgetFor('body')}
    title={entry.getIn(['data', 'title'])}
  />
)

ServicePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ServicePreview
