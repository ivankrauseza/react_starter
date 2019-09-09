import React, {Component} from "react";
import axios from 'axios';
import "./Homepage.css";

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countryName: '',
            countryCode: ''
        }
    }

    getGeoInfo = () => {
        axios.get('https://ipapi.co/json/').then((response) => {
            let data = response.data;
            this.setState({
                countryName: data.country_name,
                countryCode: data.country_calling_code,
                countryIP: data.ip,
                countryCity: data.city,
                countryReg: data.region,
                countryRegCode: data.region_code,
                countryCntry: data.country,
                countryCont: data.continent_code,
                countryEu: data.in_eu,
                countryPost: data.postal,
                countryLat: data.latitude,
                countryLon: data.longitude,
                countryTme: data.timezone,
                countryUtc: data.utc_offset,
                countryCurr: data.currency,
                countryLang: data.languages,
                countryAsn: data.asn,
                countryOrg: data.org
            });
        }).catch((error) => {
            console.log(error);
        });
    };
    componentDidMount() {

        this.getGeoInfo();


        window.addEventListener('wheel', function(e) {

            if (e.offsetY > 0) {
                document.getElementById('statusb').innerHTML = 'scrolling top up';
            }
            if (e.offsetY < 0) {
                document.getElementById('statusb').innerHTML = 'scrolling top down';
            }
            if (e.deltaY < 0) {
                document.getElementById('status').innerHTML = 'scrolling up';
            }
            if (e.deltaY > 0) {
                document.getElementById('status').innerHTML = 'scrolling down';
            }
            if (e.deltaX < 0) {
                document.getElementById('status').innerHTML = 'scrolling left';
            }
            if (e.deltaX > 0) {
                document.getElementById('status').innerHTML = 'scrolling right';
            }
        });


        function getscreenresolution()
        {
            let hgt = window.innerHeight;
            let wdt = window.innerWidth;
            let res = ""+wdt+ "px X "+hgt+"px";
            document.getElementById("resolution").innerHTML =
                "<h3>Resolution</h3><p>" + window.screen.width + "px X " + window.screen.height + "px</p>"
                + "<h3>Viewport</h3><p>"+res+"</p>";

            document.getElementById("domain").innerHTML =
                "<h3>Href</h3>" + window.location.href + "</p>"
                + "<h3>Hostname</h3><p>" + window.location.hostname + "</p>"
                + "<h3>Pathname</h3><p>" + window.location.pathname + "</p>"
                + "<h3>Port</h3><p>" + window.location.port + "</p>"
                + "<h3>Protocal</h3><p>" + window.location.protocal + "</p>"
                + "<h3>Hostname</h3><p>" + window.location.assign + "</p>";

        }
        getscreenresolution();
        window.addEventListener('resize', getscreenresolution);
        (function () {
            let module = {
                options: [],
                header: [
                    navigator.platform,
                    navigator.userAgent,
                    navigator.appVersion,
                    navigator.vendor,
                    window.opera
                ],
                dataos: [
                    { name: 'Windows Phone', value: 'Windows Phone', version: 'OS' },
                    { name: 'Windows', value: 'Win', version: 'NT' },
                    { name: 'iPhone', value: 'iPhone', version: 'OS' },
                    { name: 'iPad', value: 'iPad', version: 'OS' },
                    { name: 'Kindle', value: 'Silk', version: 'Silk' },
                    { name: 'Android', value: 'Android', version: 'Android' },
                    { name: 'PlayBook', value: 'PlayBook', version: 'OS' },
                    { name: 'BlackBerry', value: 'BlackBerry', version: '/' },
                    { name: 'Macintosh', value: 'Mac', version: 'OS X' },
                    { name: 'Linux', value: 'Linux', version: 'rv' },
                    { name: 'Palm', value: 'Palm', version: 'PalmOS' }
                ],
                databrowser: [
                    { name: 'Chrome', value: 'Chrome', version: 'Chrome' },
                    { name: 'Firefox', value: 'Firefox', version: 'Firefox' },
                    { name: 'Safari', value: 'Safari', version: 'Version' },
                    { name: 'Internet Explorer', value: 'MSIE', version: 'MSIE' },
                    { name: 'Opera', value: 'Opera', version: 'Opera' },
                    { name: 'BlackBerry', value: 'CLDC', version: 'CLDC' },
                    { name: 'Mozilla', value: 'Mozilla', version: 'Mozilla' }
                ],
                init: function () {
                    var agent = this.header.join(' '),
                        os = this.matchItem(agent, this.dataos),
                        browser = this.matchItem(agent, this.databrowser);

                    return { os: os, browser: browser };
                },
                matchItem: function (string, data) {
                    var i = 0,
                        j = 0,
                        regex,
                        regexv,
                        match,
                        matches,
                        version;

                    for (i = 0; i < data.length; i += 1) {
                        regex = new RegExp(data[i].value, 'i');
                        match = regex.test(string);
                        if (match) {
                            regexv = new RegExp(data[i].version + '[- /:;]([\\d._]+)', 'i');
                            matches = string.match(regexv);
                            version = '';
                            if (matches) { if (matches[1]) { matches = matches[1]; } }
                            if (matches) {
                                matches = matches.split(/[._]+/);
                                for (j = 0; j < matches.length; j += 1) {
                                    if (j === 0) {
                                        version += matches[j] + '.';
                                    } else {
                                        version += matches[j];
                                    }
                                }
                            } else {
                                version = '0';
                            }
                            return {
                                name: data[i].name,
                                version: parseFloat(version)
                            };
                        }
                    }
                    return { name: 'unknown', version: 0 };
                }
            };

            var e = module.init(),
                debug = '';

            debug += 'os.name = ' + e.os.name + '<br/>';
            debug += 'os.version = ' + e.os.version + '<br/>';
            debug += 'browser.name = ' + e.browser.name + '<br/>';
            debug += 'browser.version = ' + e.browser.version + '<br/>';
            debug += '<br/>';
            debug += 'navigator.userAgent = ' + navigator.userAgent + '<br/>';
            debug += 'navigator.appVersion = ' + navigator.appVersion + '<br/>';
            debug += 'navigator.platform = ' + navigator.platform + '<br/>';

            document.getElementById('log').innerHTML = debug;
        }());
    }

    render() {
        return (
            <div id="main">
                <div id="status"></div>
                <div id="statusb"></div>
                <div id="statusc"></div>
                <div id="log"></div>
                <hr/>
                <h2>Display</h2>
                <div id="resolution"></div>
                <hr/>
                <h2>Server</h2>
                <div id="domain"></div>
                <hr/>
                <h2>Location</h2>
                <div>
                    <h3>Country Name</h3>
                    <p> {this.state.countryName}</p>
                    <h3>Country Code</h3>
                <p>Country phone code: {this.state.countryCode}</p>
            <p>IP Address: {this.state.countryIP}</p>
<p>City: {this.state.countryCity}</p>
<p>Region: {this.state.countryReg}</p>
<p>Region Code: {this.state.countryRegCode}</p>
<p>Country: {this.state.countryCntry}</p>
<p>Continent: {this.state.countryCont}</p>
<p>EMPTY: {this.state.countryEu}</p>
<p>Country post code: {this.state.countryPost}</p>
<p>Country Latitude: {this.state.countryLat}</p>
<p>Country Longitude: {this.state.countryLon}</p>
<p>Time zone: {this.state.countryTme}</p>
<p>Country UTC: {this.state.countryUtc}</p>
<p>Currency: {this.state.countryCurr}</p>
<p>Language: {this.state.countryLang}</p>
<p>Country ASN: {this.state.countryAsn}</p>
<p>Country org:{this.state.countryOrg}</p>
                </div>
            </div>
        )
    }
}
export default Homepage;