import { createContext, FC, ReactNode, useContext, useState } from 'react';

export type Product = {
    id: number;
    title: string;
    description: string;
    category: string;
    poster: string;
    bulletPoints: string[];
    price: {
        mrp: number;
        sale: number;
    };
    images?: string[];
};

interface IFavContext {
    items: Product[];
    updateFavorite(product: Product): void;
}

interface Props {
    children: ReactNode;
}

const FavoriteContext = createContext<IFavContext | null>(null);

const FavoriteProductProvider: FC<Props> = ({ children }) => {
    const [items, setItems] = useState<Product[]>([]);

    const updateFavorite = (product: Product) => {
        const index = items.findIndex(({ id }) => id === product.id);

        if (index === -1)
            setItems([...items, product])
        else
            setItems(old => old.filter(({ id }) => id !== product.id));

    };

    return (
        <FavoriteContext.Provider
            value={{
                items,
                updateFavorite
            }}
        >
            {children}
        </FavoriteContext.Provider>
    );
};

export const useFavorite = () => useContext(FavoriteContext);
export default FavoriteProductProvider;