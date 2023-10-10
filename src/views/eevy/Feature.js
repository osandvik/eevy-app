import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
} from '@coreui/react'
import { DocsExample } from 'src/components'
import { useParams } from 'react-router-dom'
import features from 'src/data/features.json'

const Accordion = () => {
  const { featureId } = useParams()
  var feature = null
  features.map((f) => {
    if (f.feature == featureId) {
      feature = f
    }
  })

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>{feature.name || feature.feature}</strong>
          </CCardHeader>
          <CCardBody>
            <div
              style={{
                background: '#eee',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
              }}
            >
              <img
                src={feature.image}
                style={{ border: '1px solid #eee', maxHeight: '300px', maxWidth: '80%' }}
              />
            </div>
            <p className="text-medium-emphasis small">
              <span>{feature.name}</span>
              <br />
              <code>{feature.feature}</code>
              <br />
              <span>status: {feature.status}</span>
            </p>
            <CAccordion alwaysOpen>
              {Object.keys(feature.variants).map((vKey, index) => (
                <CAccordionItem key={index}>
                  <CAccordionHeader>
                    <span>variant: {vKey}</span>
                  </CAccordionHeader>
                  <CAccordionBody>
                    <strong>Variant: {vKey}</strong>
                    <br />
                    <span className="text-medium-emphasis small">Variant description</span>
                    <br />
                    <div
                      style={{
                        background: '#eee',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                      }}
                    >
                      <img
                        src={feature.image}
                        style={{ border: '1px solid #eee', maxHeight: '300px', maxWidth: '80%' }}
                      />
                    </div>
                    <code>{feature.variants[vKey]}</code>
                  </CAccordionBody>
                </CAccordionItem>
              ))}
            </CAccordion>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Accordion
