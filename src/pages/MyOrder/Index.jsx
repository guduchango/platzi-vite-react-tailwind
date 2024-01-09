import { useContext } from "react";
import Layout from "../../Components/Layout";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export default function MyOrder() {
  const context = useContext(ShoppingCartContext)
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
  if(index === 'last') index = context.order?.length - 1 

  

  return (
    <Layout>
     <div className="flex items-center justify-center relative w-80">
        <Link to="/my-orders" className="absolute left-0">
        <ChevronLeftIcon
          className="h-6 w-6 text-black cursor-pointer" />
        </Link>
        <h1 className="font-medium text-xl">My Order</h1>
      </div>
      <div className='flex flex-col w-80'>
        {
          context.order?.[index]?.products.map(product => (
             <OrderCard
              id={product.id}
              key={product.id}
              title={product.title}
              imageUrl={product.images}
              price={product.price}
            />
          ))
        } 
      </div>
    </Layout>
  )
}