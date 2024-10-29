import React from 'react'

const Flex = ({children,className}) => {
  return (
    <div className={`md:flex lg:flex ${className}`}>{children}</div>
  )
}

export default Flex