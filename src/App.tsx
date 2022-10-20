import { Suspense } from 'react'
import BasicLayout from './layouts/BasicLayout';

import AppRoutes from './routes'

import './App.less'

function App() {
  return (
    <Suspense fallback={<>loading...</>}>
      <BasicLayout>
        <AppRoutes />
      </BasicLayout>
    </Suspense>
  );
}

export default App;
