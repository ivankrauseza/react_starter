import React, {Component} from "react";
import "./forms.css";
import Loginform from './loginform';
import Registerform from './registerform';
import Accountform from "./accountform";
import Subscribeform from "./subscribeform";

class ContactForm extends Component {
    constructor(props){
        super(props);
        this.mapClicked = this.mapClicked.bind(this);
        this.state = {scrollTop: 0}
    }
    mapClicked() {
        alert('clicked');
    }
    // RENDER COMPONENT
    render() {
        return (
            <div id="main">
                <button onClick={this.mapClicked}>TEST</button>
                <Loginform />
                <hr/>
                <Registerform />
                <hr/>
                <Accountform/>
                <hr/>
                <Subscribeform/>
                <hr/>
                <form className="contact" id="contactA">
                    <input placeholder="Full Name" />
                    <input placeholder="Email Address" />
                    <input placeholder="Contact Number" />
                    <textarea placeholder="Enter Message"></textarea>
                    <label>
                        <input id="subscribe" type="checkbox" />
                        Subscribe to our mailing list
                    </label>
                    <button type="button">Send</button>
                    <button type="reset">Clear</button>
                </form>
                <hr/>
            </div>
        )
    }
}
export default ContactForm;