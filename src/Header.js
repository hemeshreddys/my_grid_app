import React, {Component} from 'react';

class Header extends Component{
    render(){
        const styleE = {
            backgroundColor : "red",
                  fontSize:20,
            color: 'white'
          };

        var styles = {
            width : this.props.width,
            height: this.props.height,
            backgroundColor: this.props.bg
        }
        return(
            <div style={styles}>
                <i class="material-icons">turned_in</i>
            </div>
        );
    }
}
export default Header;