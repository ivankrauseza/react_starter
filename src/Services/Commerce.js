import React, {Component} from "react";
import "./Commerce.css";

class Commerce extends Component {
    render() {
        return (
            <div className="commerce">
                <h1>E-Commerce</h1>
                <div id="status"></div>
                <div id="statusb"></div>
                <div id="statusc"></div>

                <h3>Features</h3>
                <ul>
                    <li>Buy with credits</li>
                    <li>Classified adverts</li>
                </ul>
                <hr/>

                <div className="productArchive">
                    <h3>Product listings</h3>
                    <div className="productList">
                        <form method="post">
                            <ul>
                                <li><img src="https://i.imgur.com/4vmoBP3.png" />
                                    <ul className="productThumbs">
                                        <li>Image thumb</li>
                                        <li>Image thumb</li>
                                        <li>Image thumb</li>
                                        <li>Image thumb</li>
                                    </ul>
                                </li>
                                <li className="productTitle">Title</li>
                                <li className="productDesc">Description</li>
                                <li className="productPrice">Price</li>
                            </ul>
                            <input type="hidden" value="000001" />
                            <button>Add to cart</button>
                        </form>
                        <form method="post">
                            <button>Add to Wishlist</button>
                        </form>
                    </div>
                </div>

                <hr/>

                <div className="productCart">
                    <h3>Shopping Cart</h3>
                    <ul>
                        <li>Title</li>
                        <li>Quantity</li>
                        <li>Sub Total</li>
                    </ul>
                    <div>Total</div>
                    <button>Checkout</button>
                    <button>Update</button>
                    <button>Empty Cart</button>
                </div>

                <hr/>

                <div className="productWish">
                    <h3>Wishlist</h3>
                    <ul>
                        <li>Title</li>
                        <li>Quantity</li>
                        <li>Sub Total</li>
                        <li><button>Add to cart</button></li>
                        <li><button>Remove</button></li>
                    </ul>
                </div>

                <hr/>

                <div>
                    <h3>Checkout</h3>
                    <h4>Login account</h4>
                    <form>
                        <input type="text" name="" placeholder="Email" />
                        <input type="text" name="" placeholder="Password" />
                        <button>Login</button>
                    </form>
                    <h4>Create account</h4>
                    <form>
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
                        <button>Submit</button>
                    </form>
                    <h4>Shipping</h4>
                    <ul>
                        <li>Shipping option 1</li>
                    </ul>
                    <h4>Update total</h4>
                    <ul>
                        <li>Shipping option 1</li>
                    </ul>
                    <button>Update</button>
                    <h4>Payment</h4>
                    <ul>
                        <li>Payment option 1</li>
                    </ul>
                    <button>Proceed to payment</button>
                    <ul>
                        <li>Response</li>
                        <li>Fail</li>
                        <li>Cancel</li>
                    </ul>
                </div>

                <hr/>

                <div className="userAccount">
                    <h3>User account</h3>
                    <h4>Update profile</h4>
                    <form>
                        <input type="text" />
                        <button>Update</button>
                    </form>
                    <h4>Update profile</h4>
                    <form>
                        <input type="text" />
                        <button>Update</button>
                    </form>

                    <h3>Order history</h3>
                    <ul>
                        <li><button>Order number</button>
                            <p>When the user clicks the button above, their order will display as below:</p>
                            <div className="userOrder">
                                <h5>Invoice details</h5>
                                <h6>Invoice/Order number</h6>
                                <p>#0000001</p>
                                <h5>Date issued</h5>
                                <p>01/01/2019</p>
                                <h5>Payment status</h5>
                                <p>Paid/Pending payment</p>
                                <p>If paid display payment type, else display payment options.</p>
                                <h5>Customer:</h5>
                                <ul>
                                    <li>Name</li>
                                    <li>Address</li>
                                    <li>Telephone</li>
                                </ul>
                                <h6>Order</h6>
                                <div className="orderList">
                                    <ul className="orderDetails">
                                        <li>1</li>
                                        <li>Item name</li>
                                        <li>Qty</li>
                                        <li>Price</li>
                                    </ul>
                                    <ul className="orderDetails">
                                        <li>2</li>
                                        <li>Item name</li>
                                        <li>Qty</li>
                                        <li>Price</li>
                                    </ul>
                                </div>
                                <p>Total Price</p>
                                <h4>Disclaimer</h4>
                                <p>Disclaimer text...</p>
                            </div>
                        </li>
                    </ul>

                </div>
            </div>
        )
    }
}
export default Commerce;