import { FC, ReactNode } from 'react';
import AuthProvider from './AuthProvider';
import CartProvider from './CartProvider';
import FavoriteProductProvider from './FavoriteProvider';

interface Props {
    children: ReactNode
}

const Providers: FC<Props> = ({ children }) => {
    return <AuthProvider>
        <FavoriteProductProvider>
            <CartProvider>
                {children}
            </CartProvider>
        </FavoriteProductProvider>
    </AuthProvider>
}

export default Providers;