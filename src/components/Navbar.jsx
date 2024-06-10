import { Component } from "react";
import { MenuData } from './MenuData';

class Navbar extends Component {
    render () {
       return (
        <nav className="NavbarItems">
            <h1>React <i className="fab fa-react"></i></h1>
            <ul>
                {MenuData.map((item, index) => {
                    return (
                        <li key={index}>
                            <a href={item.url} className={item.cName}><i className={item.icon}></i>{item.title}</a>
                        </li>
                    )
                })}
                
            </ul>
        </nav>
       ) 
    }
}

export default Navbar;