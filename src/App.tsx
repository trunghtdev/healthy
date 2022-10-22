import { Suspense } from 'react'

import AppRoutes from './routes'

function App() {
  return (
    <Suspense fallback={<>loading...</>}>
      <AppRoutes />
    </Suspense>
  );
}

export default App;
