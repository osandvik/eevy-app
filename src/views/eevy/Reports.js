import React from 'react'
import { useState } from 'react'
import { 
  CCard,
  CCardBody,
  CCardHeader,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane
} from '@coreui/react'

const Report = () => {

  const [activeKey, setActiveKey] = useState(1)

  return (
    <>
      <CCard>
        <CCardHeader>
          <strong>Demo report header</strong>
        </CCardHeader>
        <CCardBody>
          <CNav variant="tabs" role="tablist">
            <CNavItem role="presentation">
              <CNavLink
                active={activeKey === 1}
                component="button"
                role="tab"
                aria-controls="g1-tab-pane"
                aria-selected={activeKey === 1}
                onClick={() => setActiveKey(1)}
              >
                G1
              </CNavLink>
            </CNavItem>
            <CNavItem role="presentation">
              <CNavLink
                active={activeKey === 2}
                component="button"
                role="tab"
                aria-controls="g2-tab-pane"
                aria-selected={activeKey === 2}
                onClick={() => setActiveKey(2)}
              >
                G2
              </CNavLink>
            </CNavItem>
            <CNavItem role="presentation">
              <CNavLink
                active={activeKey === 3}
                component="button"
                role="tab"
                aria-controls="g3-tab-pane"
                aria-selected={activeKey === 3}
                onClick={() => setActiveKey(3)}
              >
                G3
              </CNavLink>
            </CNavItem>
            <CNavItem role="presentation">
              <CNavLink
                active={activeKey === 4}
                component="button"
                role="tab"
                aria-controls="g4-tab-pane"
                aria-selected={activeKey === 4}
                onClick={() => setActiveKey(4)}
              >
                G4
              </CNavLink>
            </CNavItem>
            <CNavItem role="presentation">
              <CNavLink
                active={activeKey === 5}
                component="button"
                role="tab"
                aria-controls="g5-tab-pane"
                aria-selected={activeKey === 5}
                onClick={() => setActiveKey(5)}
              >
                G5
              </CNavLink>
            </CNavItem>
            <CNavItem role="presentation">
              <CNavLink
                active={activeKey === 6}
                component="button"
                role="tab"
                aria-controls="g6-tab-pane"
                aria-selected={activeKey === 6}
                onClick={() => setActiveKey(6)}
              >
                G6
              </CNavLink>
            </CNavItem>
          </CNav>
          <CTabContent>
            <CTabPane role="tabpanel" aria-labelledby="g1-tab-pane" visible={activeKey === 1}>
              G1 content
            </CTabPane>
            <CTabPane role="tabpanel" aria-labelledby="g2-tab-pane" visible={activeKey === 2}>
              G2 content
            </CTabPane>
            <CTabPane role="tabpanel" aria-labelledby="g3-tab-pane" visible={activeKey === 3}>
              G3 content
            </CTabPane>
            <CTabPane role="tabpanel" aria-labelledby="g4-tab-pane" visible={activeKey === 4}>
              G4 content
            </CTabPane>
            <CTabPane role="tabpanel" aria-labelledby="g5-tab-pane" visible={activeKey === 5}>
              G5 content
            </CTabPane>
            <CTabPane role="tabpanel" aria-labelledby="g6-tab-pane" visible={activeKey === 6}>
              G6 content
            </CTabPane>
          </CTabContent>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Report
