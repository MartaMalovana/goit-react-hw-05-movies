import { NavLink } from 'react-router-dom';
import {Nav} from './Navigation.styled';

export default function Navigation () {

    const navStyle = {
        textDecoration: 'none', 
        color: 'black',
        marginRight: '10px',
    }
    return (
    
        <Nav>
            <NavLink exact to="/" style={navStyle} activeStyle={{color: 'red'}}>Home</NavLink>
            <NavLink to="/movies" style={navStyle} activeStyle={{color: 'red'}}>Movies</NavLink>
        </Nav>
        
    );
}