import React from 'react'

const MyComponent = (props) => {
  const { children, className } = props
  return (
    <div>
      <h3>Instruqt Repo Playground</h3>
      <iframe src="https://play.instruqt.com/gregorio-test/invite/uilgiorlcdqh"></iframe>
    </div>
  )
}

export default MyComponent
