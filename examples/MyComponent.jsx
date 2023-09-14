import React from 'react'

const MyComponent = (props) => {
  const { children, className } = props
  return (
    <div style={{
      padding: "3em",
      width: "100%",
      background: "papayawhip",
      position: "relative",  
      boxSizing: "border-box",
    }}>
    </div>
    <div className="App">
      <h3>Iframes in React</h3>
      <iframe src="https://platform.twitter.com/widgets/tweet_button.html"></iframe>
    </div>
  )
}

export default MyComponent
