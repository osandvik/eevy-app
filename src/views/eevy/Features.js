import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CCard,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CCol,
  CCardBody,
  CCardHeader,
  CRow,
  CProgress,
  CAvatar,
} from '@coreui/react'
import { CFormCheck, CFormInput, CFormSelect } from '@coreui/react'
import { CNav, CNavLink } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilCheck,
  cilChartLine,
  cilDevices,
  cilFlagAlt,
  cilLibraryAdd,
  cilMediaPause,
  cilMediaPlay,
  cilMediaSkipForward,
  cilMemory,
  cilOptions,
  cilXCircle,
} from '@coreui/icons'
//import volantAtcButtonImage from 'src/assets/eevy/volant_atc_button.png'

import features from 'src/data/features.json'

const statusIcons = [
  cilChartLine,
  cilCheck,
  cilLibraryAdd,
  cilFlagAlt,
  cilMediaSkipForward,
  cilXCircle,
]

const statusClasses = [
  'text-success',
  'text-info',
  'text-warning',
  'text-danger',
  'text-dark',
  'text-dark',
]

const statusNames = ['OPTIMIZING', 'ENABLED', 'NEW', 'ERROR', 'PERSISTENT', 'DISABLED']

const statusElement = (statusId) => {
  return (
    <>
      <CIcon icon={statusIcons[statusId]} className={statusClasses[statusId]} />
      <span className="p-2 small text-medium-emphasis">{statusNames[statusId]}</span>
    </>
  )
}

const Features = () => {
  let navigate = useNavigate()

  return (
    <>
      <div style={{ display: 'none' }}>
        {features.map((f, index) => (
          <div key={f.feature}>
            {f.feature}
            <br />
            variants: {Object.keys(f.variants).length}
          </div>
        ))}
      </div>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Features</CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-success py-1 px-3">
                        <div className="text-medium-emphasis small">Enabled</div>
                        <div className="fs-5 fw-semibold">63</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-warning py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">New</div>
                        <div className="fs-5 fw-semibold">27</div>
                      </div>
                    </CCol>
                  </CRow>
                </CCol>

                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-light py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Disabled</div>
                        <div className="fs-5 fw-semibold">33</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-light py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">All features</div>
                        <div className="fs-5 fw-semibold">123</div>
                      </div>
                    </CCol>
                  </CRow>
                </CCol>
              </CRow>
              <CRow>
                <CCol>
                  <CFormInput
                    type="text"
                    size="sm"
                    placeholder="search"
                    aria-label="sm input example"
                  />
                </CCol>
                <CCol></CCol>
                <CCol>
                  <CFormCheck
                    inline
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineCheckbox1"
                    value="list"
                    label="List"
                    defaultChecked
                  />
                  <CFormCheck
                    inline
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineCheckbox2"
                    value="preview"
                    label="Preview"
                  />
                </CCol>
                <CCol>
                  <CFormSelect size="sm" className="mb-3" aria-label="Small select example">
                    <option>Sort by</option>
                    <option value="1">Status</option>
                    <option value="2">Name</option>
                    <option value="3">Newest - Oldest</option>
                    <option value="4">Oldest - Newest</option>
                    <option value="5">Environment</option>
                    <option value="6">Page</option>
                  </CFormSelect>
                </CCol>
              </CRow>

              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell>Feature</CTableHeaderCell>
                    <CTableHeaderCell></CTableHeaderCell>
                    <CTableHeaderCell>Environment</CTableHeaderCell>
                    <CTableHeaderCell>Variants</CTableHeaderCell>
                    <CTableHeaderCell>Status</CTableHeaderCell>
                    <CTableHeaderCell></CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {features.map((f, index) => (
                    <CTableRow
                      v-for="item in tableItems"
                      key={index}
                      onClick={() => {
                        navigate(f.feature)
                      }}
                    >
                      <CTableDataCell className="text-center">
                        <div
                          style={{
                            background: 'transparent',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 100,
                            width: 250,
                          }}
                        >
                          <img
                            style={{
                              border: '1px solid #eee',
                              maxHeight: '100%',
                              maxWidth: '100%',
                            }}
                            src={f.image}
                          />
                        </div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{f.name}</div>
                        <div className="small text-medium-emphasis">
                          <span>{f.feature}</span>
                        </div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <span className="text-medium-emphasis">volant.no</span>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <span>{Object.keys(f.variants).length}</span>
                      </CTableDataCell>
                      <CTableDataCell>{statusElement(f.status)}</CTableDataCell>
                      <CTableDataCell>
                        <CIcon icon={cilOptions} className="" />
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Features
