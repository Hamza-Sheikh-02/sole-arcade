import Link from "next/link";
import { FaShoppingCart, FaUser, FaBars } from "react-icons/fa";
import { ModeToggle } from "@/components/theme-button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <div className="navbar bg-background text-foreground shadow-md dark:bg-background dark:text-foreground">
      <div className="navbar-start">
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="btn btn-ghost p-2">
                <FaBars className="text-xl" />
              </button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle className="text-foreground">Menu</SheetTitle>
              </SheetHeader>
              <ul className="menu p-4 space-y-2">
                <li>
                  <Link href="/" className="hover:text-primary">
                    Home
                  </Link>
                </li>
                <li>
                  <details>
                    <summary>Categories</summary>
                    <ul className="p-2 space-y-2">
                      <li>
                        <Link
                          href="/product/men"
                          className="hover:text-primary"
                        >
                          Men
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/product/women"
                          className="hover:text-primary"
                        >
                          Women
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/product/kids"
                          className="hover:text-primary"
                        >
                          Kids
                        </Link>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <Link href="/sale" className="hover:text-primary">
                    Sale
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </SheetContent>
          </Sheet>
        </div>
        <Link href="/" className="btn btn-ghost text-xl font-bold">
          Sole Arcade
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-4 space-x-6">
          <li>
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
          </li>
          <li>
            <details>
              <summary>Categories</summary>
              <ul className="p-2 bg-background dark:bg-card rounded-lg shadow-md space-y-2">
                <li>
                  <Link href="/product/men" className="hover:text-primary">
                    Men
                  </Link>
                </li>
                <li>
                  <Link href="/product/women" className="hover:text-primary">
                    Women
                  </Link>
                </li>
                <li>
                  <Link href="/product/kids" className="hover:text-primary">
                    Kids
                  </Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link href="/sale" className="hover:text-primary">
              Sale
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-primary">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end space-x-1 lg:space-x-3">
        <Link href={"/shopping-cart"}>
          <button className="btn btn-ghost">
            <FaShoppingCart className="text-lg" />
          </button>
        </Link>
        <button className="btn btn-ghost">
          <FaUser className="text-lg" />
        </button>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
