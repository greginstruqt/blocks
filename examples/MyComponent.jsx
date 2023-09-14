import React from 'react'

const MyComponent = (props) => {
  const { children, className } = props
  return (
    <div>
      <h3>Iframes in React</h3>
      <iframe src="https://platform.twitter.com/widgets/tweet_button.html"></iframe>
    </div>
  )
}

export default MyComponent
