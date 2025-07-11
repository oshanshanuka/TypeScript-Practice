import {useEffect, useState} from "react";
import type {CartItem} from "../../../model/CartItem.ts";

interface ModifyCartProps {
    data: any
}

export const itemsList:CartItem[] = [];

export function ModifyCart({data}: ModifyCartProps) {

    const [itemCount, setItemCount] = useState(1);

    useEffect(() => {
        const existingItem = itemsList.find(item => item.product.id === data.product.id);
        if (existingItem){
            existingItem.itemCount = itemCount;
        }else {
            itemsList.push({
                product: data.product,
                itemCount: itemCount
            });
        }
        console.log(itemsList);
    }, [itemCount, data])

    const decreaseItemCount = () => {
        setItemCount(
            prevValue => prevValue > 1 ? prevValue - 1 : (alert("Item count cannot be less than 1"), prevValue)
        )
    };
    const increaseItemCount = () => {
        setItemCount(
            prevValue => prevValue + 1
        );
    };
    return (
        <>
            <div className="w-full mt-1 p-[2.4px] text-[8px] text-center">
                <button
                    className='float-left text-[16px] bg-yellow-300 rounded-lg h-8 w-8 cursor-pointer hover:bg-amber-200'
                    onClick={decreaseItemCount}>-
                </button>
                <small className='text-[20px] ml-3 mr-3'>{itemCount}</small>
                <button
                    className='float-right text-[16px] bg-yellow-300 rounded-lg h-8 w-8 cursor-pointer hover:bg-amber-200'
                    onClick={increaseItemCount}>+
                </button>
            </div>
        </>
    );
}
