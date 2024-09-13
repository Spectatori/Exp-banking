import React from 'react'

const ShadowBox = ({ children, className='' }) => {
  return (
    <div className={`flex bg-white flex-row rounded-xl p-5 mt-3 h-fit  ${className}`} style={{
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'
    }}>
        {children}
    </div>
  )
}

export default ShadowBox
