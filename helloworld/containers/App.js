
import React from 'react';
import {render} from 'react-dom';
import { createStore,bindActionCreators } from 'redux';
import { connect} from 'react-redux';
import * as helloWorld from '../actions/helloWorld';
import HelloWorld from '../components/HelloWorld';


//App
 class App extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        const { actions, text} = this.props;
        console.log(text)
       
        return (
            <div>
                <HelloWorld actions={actions} text={text} />
            </div>
        );
    }
}


function mapStateToProps(state) {
    console.log('**********',state)
    return { text: state.a.text }
}


function mapDispatchToProps(dispatch){
    return{
        actions : bindActionCreators(helloWorld,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)