import React from 'react';

export default  class HelloWorld extends React.Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
     
      this.props.actions.buttonClick();
        
    }

    render() {
      console.log(this.props,'ababab')
        return (
           <div  onClick={this.handleClick}>{`Hello World,welcome${this.props.text}`}</div>
        );
    }
}