import React from 'react'

const MyComponent = (props) => {
  const { children, className } = props
  return (
    <iframe 
      style={{
        width: "1140",
        height: "640"
      }}
      sandbox="allow-forms allow-modals allow-popups allow-same-origin allow-scripts"
      src="https://play.instruqt.com/embed/gregorio-test/tracks/repo-playground-poc-bun?token=em_hXRPTI6f6oLxqYmU" style="border: 0;"
      >
  </iframe>
  )
}

export default MyComponent
