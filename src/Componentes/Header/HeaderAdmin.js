const HeaderAdmin=()=>{
    return(
        <header className="header">
            <h1 className="header-h1">UKE MOCHI</h1>
            <div className="header-user">
                <img src="https://i.ibb.co/1bbdzbw/dashicons-menu-alt2-convert-io.webp" alt="icono de men&uacute;" className="header-icon-menu" />
                <div className="header-admin">
                    <img src="https://i.ibb.co/R4dLmTj/user.webp" alt="icono de usuario" className="header-icon-user"/>
                    <span>Administrador</span>
                </div>
            </div>
        </header>
    )
}
export default HeaderAdmin;