import React, {Component} from "react";
import "./forms.css";


class Accountform extends Component {
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
            <form className="account" id="accountA">
                <input type="text" name="" placeholder="Username" />
                <input type="text" name="" placeholder="Name" />
                <input type="text" name="" placeholder="Surname" />
                <input type="text" name="" placeholder="Email" />
                <input type="text" name="" placeholder="Password" />
                <input type="text" name="" placeholder="Password Repeat" />
                <input type="text" name="" placeholder="Telephone" />
                <input type="text" name="" placeholder="Street" />
                <input type="text" name="" placeholder="Apartment" />
                <input type="text" name="" placeholder="City" />
                <input type="text" name="" placeholder="Province" />
                <input type="text" name="" placeholder="Country" />
                <button type="button">Update</button>
            </form>
        )
    }
}
export default Accountform;