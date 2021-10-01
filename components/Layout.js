import styles from '../styles/Layout.module.css'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const Layout = ({ children }) => {
    const router = useRouter();
    
    return (
            <div className={styles.container}>
                <main>
                    { children }
                </main>
            </div>
    )
}

export default Layout;