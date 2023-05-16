import './Logo.css'

const Logo = () => {
    const loguito = "https://cdn-icons-png.flaticon.com/512/9/9194.png" 
    return (
    <div>
        <img className='logo' src={loguito} alt="pesas" />
    </div>
    )
}

export default Logo
