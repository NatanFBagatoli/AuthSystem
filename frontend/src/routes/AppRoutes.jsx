import { Routes, Route, Navigate } from 'react-router'
import Auth from '../pages/auth'

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Auth />} />
        </Routes>
    )
}

export default AppRoutes