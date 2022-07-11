import './Navbar.css'
const Navbar = (props)=> {
    return (
        <nav style={styles.navStyle}>
            <h1> {props.text}</h1>

            <ul className='Navbar'>
                <li>GIF Home Page</li>
                <li>GIF images</li>
              
            </ul>
        </nav>
    )
}

const styles = {
    navStyle: {
        display: 'flex',
        justifyContent: 'space-around',
        border: 'solid red 2px'
    }
}
export default Navbar