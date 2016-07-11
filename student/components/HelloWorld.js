import React from 'react';

export default  class HelloWorld extends React.Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.changeText = this.changeText.bind(this);
    }

    handleClick(){
     
      this.props.actions.buttonClick();
        
    }
    changeText(){
      this.props.actions.changeText();
    }

    render() {
     
        return (
            <div>
              <div  onClick={this.handleClick}>{`${this.props.text}`}</div>
              <div  onClick={this.changeText}>Just click me to change text</div>
            </div>
        );
    }
}