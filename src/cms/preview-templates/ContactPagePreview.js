import React from 'react'
import PropTypes from 'prop-types'
import { ContactPageTemplate } from '../../templates/contact-page'

const ContactPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()
  const entryEmployees = entry.getIn(['data', 'employees', 'employee'])
  const employee = entryEmployees ? entryEmployees.toJS() : []

  return (
    <ContactPageTemplate
      title={data.title}
      description={data.description}
      heading={data.heading}
      image={data.image}
      content={widgetFor('body')}
      employees={{employee}}
    />
  )
}

ContactPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ContactPagePreview
