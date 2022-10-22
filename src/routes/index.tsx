import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import BasicLayout from '../layouts/BasicLayout';

import { routes } from './data'

const AppRoutes = () => {
  return (
    <Router>
      <BasicLayout>
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
      </BasicLayout>
    </Router>
  )
}

export default AppRoutes