import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import { ShoppingBagIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
    const context = useContext(ShoppingCartContext)
    const navStile = 'underline underline-offset-4'

    return (
        <nav className='flex justify-between items-center top-0 fixed z-10 w-full py-5 px-8 text-sm font-light'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink to='/'>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/'
                        onClick={() => context.setSearchByCategory()}
                        className={({ isActive }) =>
                            isActive ? navStile : 'undefined'
                        }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/clothes'
                        onClick={() => context.setSearchByCategory('clothes')}
                        className={({ isActive }) =>
                            isActive ? navStile : 'undefined'
                        }
                    >
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/electronics'
                        onClick={() => context.setSearchByCategory('electronics')}
                        className={({ isActive }) =>
                            isActive ? navStile : 'undefined'
                        }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/furnitures'
                        onClick={() => context.setSearchByCategory('furnitures')}
                        className={({ isActive }) =>
                            isActive ? navStile : 'undefined'
                        }>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/toys'
                        onClick={() => context.setSearchByCategory('toys')}
                        className={({ isActive }) =>
                            isActive ? navStile : 'undefined'
                        }>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/others'
                        onClick={() => context.setSearchByCategory('others')}
                        className={({ isActive }) =>
                            isActive ? navStile : 'undefined'
                        }>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-3'>
                <li className='text-black/60'>
                    teff@platzi.com
                </li>
                <li>
                    <NavLink
                        to='/my-orders'
                        className={({ isActive }) =>
                            isActive ? navStile : 'undefined'
                        }>
                        My orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/my-account'
                        className={({ isActive }) =>
                            isActive ? navStile : 'undefined'
                        }>
                        My account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/sign-in'
                        className={({ isActive }) =>
                            isActive ? navStile : 'undefined'
                        }>
                        Sign in
                    </NavLink>
                </li>
                <li className='flex items-center'>
                    <ShoppingBagIcon className="h-6 w-6 text-blue-500" /> 
                    <div>{context.cartProducts.length}</div>
                </li>



            </ul>
        </nav>
    )
}