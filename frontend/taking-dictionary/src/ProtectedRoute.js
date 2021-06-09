import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ isAuth, component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => {
                if (isAuth) {
                    console.log(isAuth);
                    return <Component />;
                } else {
                    console.log(isAuth);
                    return <Redirect to="/login" />;
                }
            }}
        />
    );
};

export default ProtectedRoute;
