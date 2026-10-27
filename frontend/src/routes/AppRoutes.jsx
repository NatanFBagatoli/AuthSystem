import { Routes, Route } from 'react-router'
import Auth from '../pages/auth'
import Home from '../pages/home'

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    )
}

export default AppRoutes