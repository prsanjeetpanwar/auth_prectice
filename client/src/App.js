
import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Username from './components/Username';
import Register from './components/Register';
import Password from './components/Password';
import Reset from './components/Reset';
import Profile from './components/Profile';
import Recovery from './components/Recovery';
import PageNotFound from './components/PageNotFound';



const router=createBrowserRouter([


  {
    path:'/',
    element:<Username/>
  },
  { 
    path:'/register',
    element:<Register/>
  },
  {
    path:'/password',
    element:<Password/>
  },
  {
    path:'/reset',
    element:<Reset/>

  },
  {
    path:'/profile',
    element:<Profile/>
  },
  {
    path:'/recovery',
    element:<Recovery/>
  },
  {
    path:'*',
    element:<PageNotFound/>
  }

])
function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
      
    </main>
  );
}

export default App;
