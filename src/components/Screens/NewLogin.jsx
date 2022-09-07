import React from 'react';
import withRouterNew from '../HoC/withRouterNew';

class NewLogin extends React.Component{
    render() {
        const URLParams = new URLSearchParams(this.props.location.search)
        console.log('KW104',this.props.location, URLParams.get('name'), URLParams.get('midName'))
        return(
            <div>Hello {URLParams.get('name')}</div>
        )
       
    }
}

export default withRouterNew(NewLogin)