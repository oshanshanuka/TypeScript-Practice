import { useEffect, useState } from "react";
import type { CartItem } from "../../../Model/CartItem.ts";

interface ModifyCartProps {
    data: CartItem;
}

export const itemsList: CartItem[] = [];

export function ModifyCart({ data }: ModifyCartProps) {
    const [itemCount, setItemCount] = useState(1);

    useEffect(() => {
        const existingItem = itemsList.find(item => item.product.id === data.product.id);
        if (existingItem) {
            existingItem.itemCount = itemCount;
        } else {
            itemsList.push({
                product: data.product,
                itemCount: itemCount,
            });
        }
        console.log("itemsList", itemsList);
    }, [itemCount, data]);

    const decreseItemCount = () => {
        setItemCount(prevValue =>
            prevValue > 1 ? prevValue - 1 : (alert("Item count cannot be less than 1"), prevValue)
        );
    };

    const increaseItemCount = () => {
        setItemCount(prcCount => prcCount + 1);
    };

    return (
        <div className="w-full mt-1 p-[2.4px] text-[8px] text-center">
            <button
                className="text-black float-left text-[10px] bg-yellow-400 rounded-lg h-3 w-4 align"
                onClick={decreseItemCount}
            >
                -
            </button>
            <small className="text-[8px]">{itemCount}</small>
            <button
                className="text-black float-right text-[10px] bg-yellow-400 rounded-lg h-3 w-4 align"
                onClick={increaseItemCount}
            >
                +
            </button>
        </div>
    );
}