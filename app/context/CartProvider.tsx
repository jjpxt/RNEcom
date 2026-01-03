import { createContext, FC, ReactNode, useContext, useState } from 'react';

type Product = {
    id: number;
    price?: {
        mrp?: number;
        sale?: number;
    }
};

type cartItem = {
    product: Product;
    count: number;
}

interface ICartContext {
    items: cartItem[];
    updateCart(product: Product, qty: number): void;
    removeFromCart(product: Product): void;
    clearCart(): void;
    countAllItems(): void;
    countTotalPrice(): string;
}

const CartContext = createContext<ICartContext | null>(null);

interface Props {
    children: ReactNode;
}

const CartProvider: FC<Props> = ({ children }) => {
    const [cartItems, setCartItems] = useState<cartItem[]>([]);

    const updateCart = (product: Product, qty: number) => {
        const finalCartItems = [...cartItems];
        const index = finalCartItems.findIndex(item => item.product.id === product.id);

        if (index === -1)
            finalCartItems.push({ count: qty, product });
        else
            finalCartItems[index].count += qty

        if (finalCartItems[index]?.count <= 0)
            removeFromCart(product);
        else
            setCartItems(finalCartItems);
    }


    const removeFromCart = (product: Product) => {
        setCartItems(oldItems => {
            return oldItems.filter(item => item.product.id !== product.id);
        })
    }

    const clearCart = () => { }

    const countAllItems = () => {
        return cartItems.reduce((total, item) => total + item.count, 0);
    };

    const countTotalPrice = () => {
        const total = cartItems.reduce((total, item) => {
            const price = item.product.price?.sale || 0;
            return total + (price * item.count);
        }, 0);
        return total.toFixed(2);
    };

    return <CartContext.Provider value={{
        items: cartItems,
        updateCart,
        removeFromCart,
        clearCart,
        countAllItems,
        countTotalPrice
    }}> {children}</CartContext.Provider >
}

export const useCart = () => useContext(CartContext);

export default CartProvider;