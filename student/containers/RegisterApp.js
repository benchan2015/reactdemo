
import React from 'react';
import {render} from 'react-dom';
import { createStore,bindActionCreators } from 'redux';
import { connect} from 'react-redux';
import * as registerAction from '../actions/register';
import RegisterComponent from '../components/Register';


//App
 class RegisterApp extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        const { actions, isValid} = this.props;       
        return (
            <div>
                <RegisterComponent actions={actions} isValid={isValid} name={name} />
            </div>
        );
    }
}


function mapStateToProps(state) {   
    return { isValid: state.register.isValid,name:state.register.name }
}


function mapDispatchToProps(dispatch){
    return{
        actions : bindActionCreators(registerAction,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(RegisterApp)