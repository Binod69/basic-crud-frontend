'use client';
import Link from 'next/link';
import { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
} from '@nextui-org/react';

const Navbars = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Navbar
        className="bg-bgColor container"
        shouldHideOnScroll
        isBordered
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className="sm:hidden"
          />
          <NavbarBrand>
            <Link href="/">
              <p className="font-bold text-2xl text-textColor">Basic Crud</p>
            </Link>
          </NavbarBrand>
        </NavbarContent>
      </Navbar>
    </>
  );
};

export default Navbars;
