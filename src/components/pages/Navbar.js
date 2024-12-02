import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
      <Link to='/'>Home</Link>
      <Link to='/counter'>Counter</Link>
      <Link to='/image-gallery'>Image Gallery</Link>
      <Link to='/timer'>Timer</Link>
    </div>
  )
}
