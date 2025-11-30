import { Routes, Route } from 'react-router-dom';
import Products from '../pages/Products';
import Details from '../pages/Details';
import NotFound from '../pages/NotFound';
import UserAccount from '../pages/UserAccount';
import UserDetails from '../pages/UserDetails'
import UserLayout from './UserLayout';

const Navigator = () => {
    return (
        <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="user" element={<UserLayout />}>
                <Route path="details" element={<UserDetails />} />
                <Route path="account" element={<UserAccount />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default Navigator