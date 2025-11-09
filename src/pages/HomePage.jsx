import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
    return(
        <div className="home-container">
            <h1>Compras de Natal </h1>
            
            <div className="home-card">
                <h2>Bem-vindo(a)!</h2>
                
                <Link to='/paginaprendas' className="home-link">
                    Ver Lista das Prendas
                </Link>
            </div>
        </div>
    );
}

export default HomePage;