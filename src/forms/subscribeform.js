import React, {Component} from "react";
import "./forms.css";


class Subscribeform extends Component {
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
            <form className="subscribe" id="subscribeA">
                <input type="text" name="" placeholder="Email" />
                <button type="button">Subscribe</button>
            </form>
        )
    }
}
export default Subscribeform;