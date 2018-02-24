import React, {Component} from 'react';

class Footer extends Component{
    render(){
        var stylesS = {
            width : this.props.width,
            height: this.props.height,
            backgroundColor: this.props.footerBgg,
        };

        return(
            <div style={stylesS}>
                <i class="material-icons">grade</i>
            </div>
        );
    }
}
export default Footer;

