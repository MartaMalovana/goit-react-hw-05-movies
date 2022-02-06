import { NavLink } from 'react-router-dom';

export default function Navigation () {
    return (
        <nav>
            <NavLink exact to="/" activeStyle={{color: "red"}}>Home</NavLink>
            <NavLink to="/movies" activeStyle={{color: "red"}}>Movies</NavLink>
        </nav>
       
    );
}