import Link from 'next/link'
import React from 'react';
import Styles from './Header.module.css'
import Image from 'next/image';

const Header = () => {
  return (
    <header className={Styles.header}>
      <Link href="/"><Image src="/next.svg" width={50} height={50} alt="Icon" /></Link>
      <div className={Styles.nav_container}>
      <Link href="/">Home</Link>
      <Link href="/form">Form</Link>
      </div>
    </header>
  )
}

export default Header