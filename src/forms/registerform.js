import React, {Component} from "react";
import "./forms.css";


class Registerform extends Component {
    constructor(props){
        super(props);
        this.mapClick = this.mapClick.bind(this);
    }
    mapClick() {
        alert('clicked');
    }
    // RENDER COMPONENT
    render() {
        return (
            <form className="register" id="registerA">
                <input placeholder="Username" />
                <input type="text" name="" placeholder="Email" />
                <input type="text" name="" placeholder="Password" />
                <input type="text" name="" placeholder="Password Repeat" />
                <button type="button">Register</button>
            </form>
        )
    }
}
export default Registerform;