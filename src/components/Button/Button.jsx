import './Button.css'


function Button({children, aoClicar, isActive}) {

    return <button className={isActive ? 'color': ''} onClick={aoClicar}>{children}</button>
}

export default Button;

