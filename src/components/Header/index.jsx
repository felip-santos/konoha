import { useEffect, useState } from 'react';

import ImageLogo from '../../assets/naruto.png';
import iconMenu from '../../assets/iconMenu.svg';

import './style.scss';

export const Header = () => {
    const [activeMenu, setActiveMenu] = useState(false);
    const [headerBackground, setHeaderBackground] = useState('transparent');

    const toggleActiveMenu = () => {
        setActiveMenu(!activeMenu);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            if (scrollPosition > 10) {
                setHeaderBackground('#222');
            } else {
                setHeaderBackground('transparent');
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <header className='iHeader' style={{ background: headerBackground, padding: '10px', transition: 'background 0.3s' }}>
            <div className='wrapper'>
                <div className='contentLogo'>
                    <img src={ImageLogo} alt='Logotipo' />
                </div>

                <nav className={activeMenu ? 'listMenu activeMenu' : 'listMenu'}>
                    <ul>
                        <li className='menuItem'>Home</li>
                        <li className='menuItem'>Sobre</li>
                        <li className='menuItem'>Contato</li>
                    </ul>
                </nav>

                <div className='btnMenu' onClick={toggleActiveMenu}>
                    <img src={iconMenu} alt='Ícone de menu' />
                </div>
            </div>
        </header>
    );
}