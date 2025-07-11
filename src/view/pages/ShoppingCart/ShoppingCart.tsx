import type {CartItem} from "../../../model/CartItem.ts";

interface ShoppingCartProps {
    itemsList: CartItem[];
}

export function ShoppingCart({itemsList} :ShoppingCartProps) {
    return (
        <div className="flex justify-center items-center px-4">
            <div className= "w-full max-w-screen-xl border border-green-200">
                <table className="min-w-full border-collapse mt-10">
                    <thead>
                    <tr className="bg-green-700 text-black">

                        <th className="text-xs font-bold border-green-600 border p-4">Id</th>
                        <th className="text-xs font-bold border-green-600 border p-4">Name</th>
                        <th className="text-xs font-bold border-green-600 border p-4">Unit Price</th>
                        <th className="text-xs font-bold border-green-600 border p-4">Quantity</th>
                        <th className="text-xs font-bold border-green-600 border p-4">Total Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        itemsList.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="border-green-300 border p-2 bg-green-100">
                                    <p className="text-center text-sm text-black"> No items to display</p>
                                </td>
                            </tr>
                        ) : (itemsList.map((item, index) => (
                                <tr key={item.product.id} className={`${index % 2 === 0
                                    ? "bg-green-100"
                                    : "bg-green-200"}
                           hover:bg-green-300
                           border border-green-300
                           `}>
                                    <td>{item.product.id}</td>
                                    <td>{item.product.name}</td>
                                    <td>{item.product.price}
                                        {item.product.currency}</td>
                                    <td>{item.itemCount}</td>
                                    <td>{item.product.price * item.itemCount}
                                        {item.product.currency}</td>

                                </tr>
                            ))

                        )
                    }

                    </tbody>
                </table>
            </div>
        </div>
    );
}