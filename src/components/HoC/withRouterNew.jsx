import {useLocation, useParams} from 'react-router-dom'

const withRouterNew = (WrappedComponent) => {
    const EnhancedComponent = (props) => {
        const location = useLocation();
        const params = useParams()
        return (
            <WrappedComponent params={params} location={location} {...props}/>
        )
    }

return EnhancedComponent;
}

export default withRouterNew;