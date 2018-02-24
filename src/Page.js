import React, {Component} from 'react';

class Page extends Component{
    render(){
        var stylesS = {
           /*  backgroundColor: this.props.backColor, */
            height:'auto',
            padding:'20px',
            fontFamily: "'Sacramento', cursive;",
          

        };
        return(
            <div style={stylesS}>
                {this.props.contentP}
                
            </div>
        );
    }
}
export default Page;