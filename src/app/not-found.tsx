import Link from 'next/link';
import React from 'react'

const NotFound = () => {
  return (
    <section>
      <h2>Page not found</h2>
      <p>Sorry, the page does not exist</p>
      <Link href='/'>Return to Homepage</Link>
    </section>
  )
}

export default NotFound;