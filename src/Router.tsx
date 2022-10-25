import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './Layouts/DefaultLayout'
import { Checkout } from './Pages/Checkout'
import { CheckoutFilled } from './Pages/CheckoutFilled'
import { Home } from './Pages/Home'
import { Success } from './Pages/Success'



export const Router = () => {
  return (
    <Routes>

      <Route path='/' element={<DefaultLayout />}>
        <Route path='/home' element={<Home />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/checkoutfilled' element={<CheckoutFilled />} />
        <Route path='/success' element={<Success />} />
      </Route>

    </Routes>
  )
}