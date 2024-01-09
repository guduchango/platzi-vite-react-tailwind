import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context'

import Home from "../Home/Index"
import MyAccount from "../MyAccount/Index"
import MyOrder from "../MyOrder/Index"
import MyOrders from "../MyOrders/Index"
import NotFound from "../NotFound/Index"
import SignIn from "../SignIn/Index"
import Navbar from "../../Components/Navbar"
import CheckoutSideMenu from '../../Components/CheckoutSideMenu'


const AppRoutes = () => {

  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/clothes', element: <Home /> },
    { path: '/electronics', element: <Home /> },
    { path: '/furnitures', element: <Home /> },
    { path: '/toys', element: <Home /> },
    { path: '/others', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: '/sing-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },

  ])

  return routes
}


export default function App() {

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>

  )

}