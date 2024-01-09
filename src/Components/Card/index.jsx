import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { PlusIcon, CheckIcon } from "@heroicons/react/24/solid";


export default function Card({ data }) {
    const context = useContext(ShoppingCartContext)

    const { category } = data;

    const showProduct = (productDetail) => {
        context.openProductDetail()
        context.setProductToShow(productDetail)
        context.closeCheckoutSideMenu()
    }

    const addProductToCart = (event, productData) => {
        event.stopPropagation()
        context.setCartProducts([...context.cartProducts, productData])
        context.setCount(context.count + 1)
        context.closeProductDetail()
        context.openCheckoutSideMenu()
    }

    const renderIcon = (id) => {
        const isInCart = context.cartProducts.filter(product => product.id == id).length > 0

        if (isInCart) {
            return (
                <button
                    className="absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1">
                    <CheckIcon className="h-6 w-6 text-white" />
                </button>
            )
        } else {
            return (
                <button
                    className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
                    onClick={(event) => addProductToCart(event, data)}>
                    <PlusIcon className="h-6 w-6 text-black"/>
                </button>
            )
        }
    }


    return (
        <div className="bg-white cursor-pointer w-56 h-60 rounded-lg"
            onClick={() => showProduct(data)}>
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{category?.name}</span>
                <img className="w-full h-full object-cover rounded-lg" src={data?.images[0]} alt={data?.title} />
                {renderIcon(data.id)}
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">{data?.title}</span>
                <span className="text-lg font-medium">{data?.price}</span>
            </p>
        </div>
    )
}