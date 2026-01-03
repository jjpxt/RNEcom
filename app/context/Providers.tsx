import { FC, ReactNode } from 'react';
import AuthProvider from './AuthProvider';
import CartProvider from './CartProvider';

interface Props {
    children: ReactNode
}

const Providers: FC<Props> = ({ children }) => {
    return <AuthProvider>
        <CartProvider>
            {children}
        </CartProvider>
    </AuthProvider>
}

export default Providers;