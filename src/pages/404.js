import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Not found">
      <h1>Page not found</h1>
      <p >
        Sorry{' '}
        <span role='img' aria-label='Pensive emoji'>
          😔
        </span>{' '}
        we couldn’t find what you were looking for.
        <br />
        <Link to='/'>Go home</Link>.
      </p>
    </Layout>
  )
}

export default IndexPage
