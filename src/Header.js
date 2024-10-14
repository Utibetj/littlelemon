import Logo from './icons_assets/Logo .svg';


function Header(){
    return <header>
        <img src={Logo} alt="Logo" />
        <nav className="navbar">
        <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservation">Reservation</a></li>
            <li><a href="/order online">Order Online</a></li>
            <li><a href="/login">Login</a></li>
        </ul>
        </nav>
    </header>
}

export default Header;