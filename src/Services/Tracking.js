import React, {Component} from "react";
import GoogleMapReact from 'google-map-react';
import Archiving from "./Archiving";

class Tracking extends Component {
    constructor(props){
        super(props);
        this.mapClick = this.mapClick.bind(this);
    }
    mapClick() {
        function toggle_visibility() {

            if (navigator.geolocation) {
                console.log('available');


                navigator.geolocation.getCurrentPosition(

                    // Success callback
                    function(position) {

                        var lat = position.coords.latitude;
                        var lng = position.coords.longitude;
                        console.log(lat+" / "+lng);
                        document.getElementById("location").innerHTML = "Longitude: "+lng+"<br />Latitude:"+lat+"";
                    },

                    // Optional error callback
                    function(error){

                        /*
                        In the error object is stored the reason for the failed attempt:

                        error = {
                            code - Error code representing the type of error
                                    1 - PERMISSION_DENIED
                                    2 - POSITION_UNAVAILABLE
                                    3 - TIMEOUT

                            message - Details about the error in human-readable format.
                        }
                        */

                    }
                );

                // geolocation is available
            } else {
                console.log('not available');
                // geolocation is not supported
            }
        }
        toggle_visibility();
    }
    static defaultProps = {
        center: {
            lat: 53.27058815066849,
            lng: -6.239037857237632
        },
        zoom: 11
    };

    render() {
        return (
            <div onLoad={this.mapClick()}>
                <div id="status"></div>
                <div id="statusb"></div>
                <div id="statusc"></div>
                dsfksgfdjsfg
                <h3>Location</h3>
                <div id="location"></div>
                <div style={{ height: '100vh', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyAiiVFPQ8OsJB8wvTpqs_e6J58pWRNHfEk' }}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                    >
                        <Archiving
                            lat={59.955413}
                            lng={30.337844}
                            text="My Marker"
                        />
                    </GoogleMapReact>
                </div>
            </div>
        )
    }
}
export default Tracking;