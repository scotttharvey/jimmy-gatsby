import React, { useState, useEffect } from 'react'

// markup
const IndexPage = () => {
  const [state, setstate] = useState('');
  const [show, setShow] = useState(true);
  const toggleView = () => {
    setShow(!show)
    setstate(show ? 'Pal' : '')
  }

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked${state ? ' Pal.' : '?'}`;
  });


  return (
    <main>
      <title>Home Page</title>
      <h1>Hello ther{state ? 'ɘ' : 'e'}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem iusto possimus adipisci officia. Labore maxime numquam quas quae! Vero animi adipisci labore incidunt quod modi eius expedita itaque unde fuga?</p>
      <button onClick={() => toggleView()}>Nicely done {state}</button>
    </main>
  )
}

export default IndexPage
