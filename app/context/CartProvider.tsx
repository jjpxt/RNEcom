import { createContext, FC, ReactNode, useContext, useState } from 'react';

type Product = {
    id: number;
    price?: {
        mrp?: number;
        sale?: number;
    };
};

type cartItem = {
    product: Product;
    count: number;
};

interface ICartContext {
    items: cartItem[];
    addItem(product: Product): void;
    increaseItem(product: Product): void;
    decreaseItem(productId: number): void;
    removeFromCart(productId: number): void;
    clearCart(): void;
    countAllItems(): number;
    countTotalPrice(): string;
    updateCart(product: Product, qty: number): void;
}

const CartContext = createContext<ICartContext | null>(null);

interface Props {
    children: ReactNode;
}

const CartProvider: FC<Props> = ({ children }) => {
    const [cartItems, setCartItems] = useState<cartItem[]>([]);

    const addItem = (product: Product) => {
        const finalCartItems = [...cartItems];
        const index = finalCartItems.findIndex(item => item.product.id === product.id);

        if (index === -1) {
            finalCartItems.push({ count: 1, product });
        } else {
            finalCartItems[index].count += 1;
        }

        setCartItems(finalCartItems);
    };

    const increaseItem = (product: Product) => {
        addItem(product);
    };

    const decreaseItem = (productId: number) => {
        const finalCartItems = [...cartItems];
        const index = finalCartItems.findIndex(item => item.product.id === productId);

        if (index !== -1) {
            finalCartItems[index].count -= 1;

            if (finalCartItems[index].count <= 0) {
                removeFromCart(productId);
            } else {
                setCartItems(finalCartItems);
            }
        }
    };

    const removeFromCart = (productId: number) => {
        setCartItems(oldItems => oldItems.filter(item => item.product.id !== productId));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const countAllItems = () => {
        return cartItems.reduce((total, item) => total + item.count, 0);
    };

    const countTotalPrice = () => {
        const total = cartItems.reduce((total, item) => {
            const price = item.product.price?.sale || 0;
            return total + price * item.count;
        }, 0);
        return total.toFixed(2);
    };

    const updateCart = (product: Product, qty: number) => {
        if (qty === 0) return;

        if (qty > 0) {
            for (let i = 0; i < qty; i++) addItem(product);
        } else {
            const times = Math.abs(qty);
            for (let i = 0; i < times; i++) decreaseItem(product.id);
        }
    };

    return (
        <CartContext.Provider
            value={{
                items: cartItems,
                addItem,
                increaseItem,
                decreaseItem,
                removeFromCart,
                clearCart,
                countAllItems,
                countTotalPrice,
                updateCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error('useCart must be used within CartProvider');
    return ctx;
};

export default CartProvider;