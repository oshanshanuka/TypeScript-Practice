import {useState} from "react";
import {ModifyCart} from "../ModifyCart/ModifyCart.tsx";
import type {ProductData} from "../../../model/ProductData.ts";

// type ProductData = {
//     id: number,
//     name: string,
//     price: number,
//     currency: string,
//     image: string
// }

type ProductProps = {
    data: ProductData
}

const images: Record<string, string> = import.meta.glob('../../../assets/products/*',
    {eager: true, import: 'default'});

export function Product({data}: ProductProps) {
    // console.log(images);
    // console.log(`../../../assets/images/products/${data.image}`)
    const image = images[`../../../assets/products/${data.image}`];

    const [isActive, setIsActive] = useState(false);

    const addToCart = () => {
        setIsActive(true);
    };

    return (
        <>
            <div
                className="w-45 h-50 mr-2 mb-5 gap-2.5
                                rounded-2xl shadow-xl/30 flex flex-col justify-center items-center"
            >
                <div>
                    <img src={image} alt="" className="w-20 h-20"/>
                </div>
                <div className='flex items-center'>
                    <h3 className='text-[16px] text-[#333] pl-2 text-lg'>{data.name}</h3>
                    <div className='bg-yellow-300 py-0.5 px-[5px] rounded-lg ml-2'>
                        <h3>{data.price}
                            <small>{data.currency}</small>
                        </h3>
                    </div>
                </div>
                <div>
                    {
                        isActive ? (
                            <ModifyCart data={{
                                product:data
                            }}/>
                        ):(
                            <button
                                className='bg-green-600 border-0 rounded-[10px] mt-[8px] p-2
                                   cursor-pointer text-white hover:bg-green-700'
                                onClick={addToCart}>
                                Add to Cart
                            </button>
                        )
                    }
                </div>
            </div>
        </>
    );
}