
import { XMarkIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import { useContext } from 'react'
import OrderCard from '../../Components/OrderCard'
import { totalPrice } from '../../Utils'

export default function CheckoutSideMenu() {
    const context = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id !== id)
        context.setCartProducts(filteredProducts)
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: '01.02.23',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }

        context.setOrder([...context.order,orderToAdd])
        context.setCartProducts([])
        context.setSearByTitle(null)
    }

    return (
        <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} w-1/5 h-full flex-col fixed right-0 top-20 border border-black rounded-lg bg-white`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">My Order</h2>
                <div>
                    <XMarkIcon 
                    className="h-6 w-6 text-black cursor-pointer"
                    onClick={() => context.closeCheckoutSideMenu()} />
                </div>
            </div>
            <div className='px-6 overflow-y-scroll'>
            {
                context.cartProducts.map( product => {
                     return <OrderCard 
                    key={product.id}
                    title={product.title} 
                    imageUrl={product.images}
                    price={product.price}
                    handleDelete={handleDelete}
                    id={product.id}
                    />
                })
            }
            </div>
            <div className='px-6 mb-6'>
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-light'>Total:</span>
                    <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
                </p>
                <Link to="/my-orders/last">
                <button className='w-full bg-black py-3 text-white rounded-lg'
                onClick={() => handleCheckout()}>Checkout</button>    
                </Link>
                
            </div>
           
        </aside >
    )
}