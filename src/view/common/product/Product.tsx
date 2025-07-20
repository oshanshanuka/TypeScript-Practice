import {ModifyCart} from "../ModifyCart/ModifyCart.tsx";
import type {ProductData} from "../../../model/ProductData.ts";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../../../store/store.ts";
import {addItemToCart} from "../../../slice/cartSlice.ts";

type ProductProps = {
    data: ProductData
}

const images: Record<string, string>
    = import.meta.glob(
    '../../../assets/products/*',
    {eager: true, import: 'default'});

export function Product({data}: ProductProps) {
    const image = images[`../../../assets/products/${data.image}`];

    const dispatch = useDispatch<AppDispatch>();
    const item = useSelector(
        (state: RootState) =>
            state.cart.items.find(cartItem =>
                cartItem.product.id === data.id));
    // const [isActive, setIsActive] = useState(false);
    const addToCart = () => {
        dispatch(addItemToCart(data));
        // setIsActive(true);
    }

    return (
        <div className="w-[14rem] h-[17.2rem] mr-2 mb-2 justify-center items-center
                               shadow-lg rounded-lg border border-green-300
                               hover:bg-green-200">
            <div>
                <img className="h-[10rem] w-[10rem]"
                     src={image} alt=""/>
            </div>
            <div className="flex mt-2">
                <div>
                    <h3 className="text-[#1f9e4b]
                                          text-[2rem] pl-2 pr-2">
                        {data.name}</h3>
                </div>
                <div className="bg-yellow-300 ml-1 p-[0.3px] rounded-lg pr-2">
                    <h3 className="text-[1.4rem] pl-1">{data.price}
                        <small className="text-[0.8rem] pl-1">{data.currency}</small></h3>
                </div>
            </div>
            <div className="flex justify-center">
                {
                    item ? (
                        <ModifyCart data={data}/>
                    ) : (
                        <button className="w-full mt-4
                            p-[0.5rem] bg-[#1f9e4b] text-[1rem]
                            text-white border-gray-500 border-[0.5px] rounded-lg
                            cursor-pointer"
                                onClick={addToCart}>Add to Cart
                        </button>
                    )
                }
            </div>
        </div>
    );
}