import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <>
      <h2> 404 Page not found </h2>
      <Link to='/'>Return to Home Page</Link>
    </>
  )
}