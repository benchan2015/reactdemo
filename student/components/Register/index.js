import React from 'react';
import reset from '../../public/css/reset.scss';
import styles from './main.scss';

export default  class HelloWorld extends React.Component{
    constructor(props) {
        super(props);
        this.checkName = this.checkName.bind(this);
    }

    checkName(){     
        this.props.actions.checkName();
     console.log(this.props) ;        
    }

    render() {
        let {name}=this.props;
        return (
            <div  className={`${styles}`} >              
              <section className="register">
                <section  className="header">registration now
                </section>
                <p className="tip">Enter your personal details below</p>
                <section>
                    <ul>
                        <li>
                            <input onInput={this.checkName} type="text" placeholder="Please input the name" value={name}  />
                        </li>
                        <li>
                            <input type="passpord" placeholder="Please input the passpord" />
                        </li>
                        <li>
                            <input type="text" placeholder="Please input the city" />
                        </li>
                        <li>
                            <input type="text" placeholder="Please input the name" />
                        </li>
                        <li>
                           <button  type="submit">Submit</button>
                        </li>
                    </ul>
                </section>
              </section>
            </div>
        );
    }
}