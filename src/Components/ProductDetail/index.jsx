
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import { useContext } from 'react'

export default function ProductDetail() {
    const context = useContext(ShoppingCartContext)
    return (
        <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} w-1/5 h-full flex-col fixed right-0 top-20  border border-black rounded-lg bg-white`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">Detail</h2>
                <div>
                    <XMarkIcon 
                    className="h-6 w-6 text-black cursor-pointer"
                    onClick={() => context.closeProductDetail()} />
                </div>
            </div>
            <figure className='px-6'>
                <img className='w-full h-full rounded-lg'
                    src={context.productToShow?.images}
                    alt={context.productToShow.title} />
            </figure>
            <p className='flex-col flex p-6'>
                <span className='font-medium text-2xl mb-2'>${context.productToShow.price}</span>
                <span className='font-medium text-md'>{context.productToShow.title}</span>
                <span className='font-light text-sm'>{context.productToShow.description}</span>
            </p>

        </aside >
    )
}