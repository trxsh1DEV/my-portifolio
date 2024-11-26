import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
// import './index.css'
import Layout from './components/Layout';
import Home from './pages/Home';
import { ThemeProvider } from './components/theme-provider';
import { Toaster } from './components/ui/toaster';

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          // element: <ProtectedRoute />, // Adicione o ProtectedRoute aqui
          children: [
            {
              path: "/",
              element: <Home />,
            },
            // {
            //   path: "*",
            //   element: <NotFound />,
            // },
          ],
        },
        // {
        //   path: "/login",
        //   element: <LoginPage />,
        // },
      ],
    },
  ]);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    {/* {children} */}
    <Toaster />
    <RouterProvider router={router} />
  </ThemeProvider>
  );
}