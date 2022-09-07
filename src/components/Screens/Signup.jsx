import React from 'react';
import { withRouter } from '../HoC/withRouter';


class Signup extends React.Component{
    render(){
        console.log('KW103', this.props)
        return(
            <div>Sign Up

                <button onClick={() => {
                    this.props.navigate('/NewLogin')

                }}>Login</button>
            </div>
        )
    }
}

export default withRouter(Signup)