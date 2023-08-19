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
      <Navbar shouldHideOnScroll isBordered onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className="sm:hidden"
          />
          <NavbarBrand>
            <Link href="/">
              <p className="font-bold text-inherit text-2xl">Basic Crud</p>
            </Link>
          </NavbarBrand>
        </NavbarContent>
      </Navbar>
    </>
  );
};

export default Navbars;
