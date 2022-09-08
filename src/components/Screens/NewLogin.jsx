import React from 'react';
import withRouter from '../HoC/withRouter';

class NewLogin extends React.Component{
    render() {
        const URLParams = new URLSearchParams(this.props.location.search)
        console.log('KW104',this.props.location, URLParams.get('name'), URLParams.get('midName'))
        return(
            <div>Hello {URLParams.get('name')}</div>
        )
       
    }
}

export default withRouter(NewLogin)