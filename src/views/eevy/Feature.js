import React from 'react'
import { useState } from 'react'
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
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
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

  const [activeKey, setActiveKey] = useState(1)

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>{feature.name || feature.feature}</strong>
          </CCardHeader>
          <CCardBody>
            <CRow>
            <CCol>
              <CNav variant="tabs" role="tablist">
                <CNavItem role="presentation">
                  <CNavLink
                    active={activeKey === 1}
                    component="button"
                    role="tab"
                    aria-controls="preview-tab-pane"
                    aria-selected={activeKey === 1}
                    onClick={() => setActiveKey(1)}
                  >
                    Preview
                  </CNavLink>
                </CNavItem>
                <CNavItem role="presentation">
                  <CNavLink
                    active={activeKey === 2}
                    component="button"
                    role="tab"
                    aria-controls="stats-tab-pane"
                    aria-selected={activeKey === 2}
                    onClick={() => setActiveKey(2)}
                  >
                    Analytics
                  </CNavLink>
                </CNavItem>
              </CNav>
              <CTabContent>
                <CTabPane role="tabpanel" aria-labelledby="preview-tab-pane" visible={activeKey === 1}>
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
                      src={feature.image2}
                      style={{ border: '1px solid #eee', maxHeight: '500px', maxWidth: '80%' }}
                    />
                  </div>
                </CTabPane>
                <CTabPane role="tabpanel" aria-labelledby="stats-tab-pane" visible={activeKey === 2}>
                  <br />
                  <iframe 
                    width="590" 
                    height="366" 
                    seamless 
                    frameborder="0" 
                    scrolling="no" 
                    src={feature.analytics}
                  ></iframe>
                </CTabPane>
              </CTabContent>
            </CCol>
            <CCol>
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
            </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Accordion
