import React, {Component} from "react";
import "./forms.css";


class Loginform extends Component {
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
            <form className="login" id="loginA">
                <input placeholder="username" />
                <input placeholder="email" />
                <button type="button">Login</button>
            </form>
        )
    }
}
export default Loginform;