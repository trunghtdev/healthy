import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import { routes } from './data'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {routes.map(({ Component, ...route }) => {
          return (
            <Route 
              {...route} 
              key={route.path} 
              element={<Component />} 
            />
          )
        })}
      </Routes>
    </Router>
  )
}

export default AppRoutes