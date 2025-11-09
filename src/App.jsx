import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/Error';
import RootLayout from './components/layout/RootLayout'
import GiftList from './pages/giftList';

const router = createBrowserRouter([
  { path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children:[
  {path: '/', element: <HomePage />},
  {path: '/paginaprendas', element: <GiftList />}
]
}
]);

function App() {

  return <RouterProvider router={router}/>

}
  
export default App;
