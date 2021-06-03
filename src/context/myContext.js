import { useContext, createContext, useState } from 'react'


const myContext = createContext()

function ContextProvider(props) {
  const [troggle, setTroggle] = useState(false)
  const palm = false
  const provideValue = { troggle, palm }
  console.log(provideValue)
  return (
    <myContext.Provider value={provideValue}>{props.children}</myContext.Provider>
  )
}

function useMyContext() {

  const context = useContext(myContext)

  if (context === undefined) {
    throw new Error('My context must use under provider')
  }
  return context
}
export { ContextProvider, useMyContext }
