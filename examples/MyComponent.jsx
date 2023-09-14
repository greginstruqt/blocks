import React from 'react'

const MyComponent = (props) => {
  const { children, className } = props
  return (
    <iframe 
      style={{
        width: "1140",
        height: "640",
        order: 0
      }}
      sandbox="allow-forms allow-modals allow-popups allow-same-origin allow-scripts"
      src="https://play.instruqt.com/embed/gregorio-test/tracks/repo-playground-poc-bun?token=em_hXRPTI6f6oLxqYmU">
    </iframe>
  )
}

export default MyComponent
