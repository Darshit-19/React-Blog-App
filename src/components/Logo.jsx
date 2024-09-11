// Desc: Logo component
import logo from "../assets/logo2.png"
function Logo({width = '100px'}){
    return(
        <img src={logo} alt="Logo Image" width={width} className="rounded-full "/>
    )
}

export default Logo;