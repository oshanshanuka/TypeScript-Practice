import { ModifyCart } from "../ModifyCart/ModifyCart.tsx";
import { useState } from "react";

type ProductData = {
    id: number;
    name: string;
    price: string;
    currency: string;
    image: string;
};

type ProductProps = {
    data: ProductData;
};

const images: Record<string, string> = import.meta.glob('../../../assets/products/*', {
    eager: true,
    import: 'default',
});

export function Product({ data }: ProductProps) {
    const image = images[`../../../assets/products/${data.image}`];

    const [isActive, setIsActive] = useState(false);

    const addToCart = () => {
        setIsActive(true);
    };

    return (
        <div className="w-30 h-36 mr-2 mb-2 justify-center items-center border-gray-500 border-[0.5px]">
            <div>
                <img className="h-[100px] w-[200px]" src={image} alt="" />
            </div>
            <div className="flex">
                <div>
                    <h3 className="text-[#1f9e4b] text-[12px] pl-2">{data.name}</h3>
                </div>
                <div className="bg-yellow-300 ml-1 p-[0.3px] rounded-lg pr-2">
                    <h3 className="text-[12px] pl-1">
                        {data.price} <small className="text-[7px]">{data.currency}</small>
                    </h3>
                </div>
            </div>
            <div className="flex justify-center">
                {isActive ? (
                    <ModifyCart
                        data={{
                            product: data,
                            itemCount: 1,
                        }}
                    />
                ) : (
                    <button
                        className="bg-blue-500 text-white text-[12px] px-2 py-1 rounded mt-2"
                        onClick={addToCart}
                    >
                        Add to Cart
                    </button>
                )}
            </div>
        </div>
    );
}