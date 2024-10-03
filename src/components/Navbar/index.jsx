import React, { useState } from "react";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { CartIcon, LogoIcon } from "../../svg/Icons";
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Importing hamburger and close icons
import { Text,X } from 'lucide-react';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-between w-full p-6 items-center z-50 relative gap-4">
      <div className="flex gap-3 max-h-16 items-center">
        <LogoIcon />
        <h1 className="text-xl text-white text-nowrap">Pop Rock Crystal</h1>
      </div>


      

     <div className="flex w-full max-w-[38rem] justify-end md:justify-between gap-4 items-center ">
     <div className="md:hidden" onClick={toggleMenu}>
        {isMenuOpen ? (
          <X className="text-white text-2xl cursor-pointer" />
        ) : (
          <Text className="text-white text-2xl cursor-pointer" />
        )}
      </div>
     <NavigationMenu className="hidden md:flex ">
        <NavigationMenuList>
          <NavigationMenuItem className="w-80 gap-4 flex justify-between items-center text-white">
            <NavigationMenuLink className="hover:text-slate-200 cursor-pointer">
              Home
            </NavigationMenuLink>
            <NavigationMenuLink className="hover:text-slate-200 cursor-pointer">
              Shop
            </NavigationMenuLink>
            <NavigationMenuLink className="hover:text-slate-200 cursor-pointer">
              About Us
            </NavigationMenuLink>
            <NavigationMenuLink className="hover:text-slate-200 cursor-pointer">
              Help
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>


      <div className="flex gap-1 items-center">
        <div className="bg-red-500 rounded-full h-4 aspect-square text-xs flex justify-center text-white">
          00
        </div>
        <CartIcon />
      </div>
     </div>

      {/* Cart Icon */}


      {/* Mobile Menu - shown when isMenuOpen is true */}
      {isMenuOpen && (
        <div className="absolute top-[100%] left-0 w-full bg-black text-white flex flex-col items-center md:hidden z-50">
          <NavigationMenuList className="w-full text-center p-4">
            <NavigationMenuItem className="py-2">
              <NavigationMenuLink className="hover:text-slate-200 cursor-pointer">
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="py-2">
              <NavigationMenuLink className="hover:text-slate-200 cursor-pointer">
                Shop
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="py-2">
              <NavigationMenuLink className="hover:text-slate-200 cursor-pointer">
                About Us
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="py-2">
              <NavigationMenuLink className="hover:text-slate-200 cursor-pointer">
                Help
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </div>
      )}
    </div>
  );
};

export default Navbar;
