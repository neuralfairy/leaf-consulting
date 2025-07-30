import React from 'react';
    import AppRoutes from './routes';
    import { Toaster } from '@/components/ui/toaster';
    import './App.css'; // Keep this for global styles if any

    function App() {
      return (
        <div className="flex flex-col min-h-screen">
          <AppRoutes />
          <Toaster />
        </div>
      );
    }

    export default App;
