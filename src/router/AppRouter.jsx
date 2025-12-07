import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom'; 
 import MainLayout from "../components/layout/MainLayout";
import TodayPage from "../pages/TodayPage";
import WeekPage from "../pages/WeekPage";

/**
 * Application router defining routes and layout.
 */

function AppRouter() {
    return (
        <BrowserRouter>
            <MainLayout>
                <nav className="card" style={{marginBottom: "1rem"}}>
                    <NavLink to="/" end>
                     <h2>Today Forecast</h2>
                    </NavLink>
                    
                    <NavLink to ="/week"> <h2>Week Forecast</h2></NavLink>
                    </nav>

                    

                    {/* We Define the routes here */}
                    <Routes>
                        <Route path="/" element={<TodayPage />} />
                        <Route path="/week" element={<WeekPage />} />
                    </Routes>
                    </MainLayout>
                    </BrowserRouter>
    );
}

export default AppRouter;
                       