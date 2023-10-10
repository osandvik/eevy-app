import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div className="d-none">
        <a href="https://eevy.ai" target="_blank" rel="noopener noreferrer">
          eevy.ai
        </a>
        <span className="ms-1">&copy; 2023 Eevy AS</span>
      </div>
      <div className="d-none ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer">
          CoreUI React Admin &amp; Dashboard Template
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
