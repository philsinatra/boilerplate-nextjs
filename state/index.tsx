import PropTypes from 'prop-types'
import React, { useState } from 'react'

const AppContext = React.createContext(null)

export function AppProvider({ children }) {
  const [state, setState] = useState({
    // Set state variables here
    isLoading: true,
  })

  return (
    <AppContext.Provider value={[state, setState]}>
      {children}
    </AppContext.Provider>
  )
}

AppProvider.propTypes = {
  children: PropTypes.any,
}

export default AppProvider
