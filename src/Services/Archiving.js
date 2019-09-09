import React, {Component} from "react";

class Archiving extends Component {
        constructor(props) {
                super(props);
                this.myRef = React.createRef();
                this.state = {scrollTop: 0}
        }

        onScroll = () => {
                const scrollTop = this.myRef.current.scrollTop;
                this.setState({scrollTop: scrollTop});
                if (scrollTop > 10) {
                        let boxhdr = document.querySelector(".nav");
                                boxhdr.style.height = '90px';
                                boxhdr.style.display = 'block';
                                boxhdr.style.background = 'rgba(35,42,52,0.95)';
                }
                else {
                        let boxhdr = document.querySelector(".nav");
                        boxhdr.style.height = '10px';
                        boxhdr.style.display = 'block';
                        boxhdr.style.background = 'rgba(0,0,0,0.1)';
                }
        };


        render() {
                const { scrollTop } = this.state;
        return (
            <div ref={this.myRef} onScroll={this.onScroll} style={{
                        border: '1px solid black',
                        //width: '600px',
                        height: '200px',
                        overflow: 'scroll',
                }} >
                <h1 className={this.state.isToggleOn ? 'burgeroff' : 'burgeron'}>Archiving</h1>
                    <div id="status"></div>
                    <div id="statusb"></div>
                    <div id="statusc"></div>
                    <p>ScrollTop is {scrollTop}</p>
                    <p>This demonstrates how to get the scrollTop position within a scrollable
                            react component.</p>
                    <p>This demonstrates how to get the scrollTop position within a scrollable
                            react component.</p>
                    <p>This demonstrates how to get the scrollTop position within a scrollable
                            react component.</p>
                    <p>This demonstrates how to get the scrollTop position within a scrollable
                            react component.</p>
                    <p>This demonstrates how to get the scrollTop position within a scrollable
                            react component.</p>
                    <p>This demonstrates how to get the scrollTop position within a scrollable
                            react component.</p>
                    </div>
        )
    }
}
export default Archiving;