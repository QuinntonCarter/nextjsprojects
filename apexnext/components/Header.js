import React from 'react';
import Image from 'next/image'
import headerStyles from '../styles/Header.module.scss';
import { header_logo__height } from '../styles/typography.module.scss';
import apexLegendsLogo from '../public/apex-legends-logo.svg';

const Header = () => {
    return (
        <div className={headerStyles.header_container}>
            <Image
                className={headerStyles.header_logo}
                title='Apex Legends logo and IP trademark Electronic Arts'
                height={ header_logo__height }
                src={apexLegendsLogo}
                alt='Apex legends svg logo trademark of Electronic Arts'/>
                <p> Apex Legends logo and IP trademark Electronic Arts </p>
            <h3 title='Data provided by https://apexlegendsapi.com/'>
                <br/>
                Unofficial
                <br/>
                Player Stats Viewer
            </h3>
        </div>
    )
};

export default Header;