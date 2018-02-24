import React, { Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import Page from './Page';


class Box extends Component{
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
    
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
      }
    
      handleClick() {
        this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
        }));
      }

        
    render(){
        let nameVal = 0;
        return(
        <div className={this.state.isToggleOn ? 'ON' : 'OFF'}>
             <div onClick={this.handleClick} className="buttonS"> 
                <Header bg={this.props.bgC}/>
                <Page contentP={this.props.pContent} backColor={this.props.bgPageColor}/>
                <Footer footerBgg={this.props.footerC}/>
              </div> 
        </div>
        );
    }
}
export default Box;