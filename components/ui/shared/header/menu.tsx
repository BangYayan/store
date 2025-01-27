import { EllipsisVertical, ShoppingCart, UserIcon } from "lucide-react";
import { Button } from "../../button";
import Link from "next/link";
import ModeToggle from "./mode-toggle";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../../sheet";


const Menu = () => {
    return ( <div className="flex justify-end gap-3">
        <nav className="hidden md:flex w-full max-w-xs gap-1">
        <ModeToggle />
          <Button asChild variant="ghost">
            <Link href="/cart"  >
              <ShoppingCart /> Cart
            </Link>
          </Button>
          <Button asChild>
            <Link href="/sign-in">
              <UserIcon /> Sign In
            </Link>
          </Button>
        </nav>
        <nav className="md:hidden">
            <Sheet>
                <SheetTrigger className="align-middle">
                    <EllipsisVertical />
                </SheetTrigger>
                <SheetContent className="flex flex-col items-start gap-2">
                    <SheetHeader className="mb-1">
                        <SheetTitle>Menu</SheetTitle>
                    </SheetHeader>
                    <ModeToggle />
                    <Button asChild variant="ghost">
                        <Link href="/cart"  >
                            <ShoppingCart /> Cart
                        </Link>
                    </Button>
                    <Button asChild>
                        <Link href="/sign-in">
                            <UserIcon /> Sign In
                        </Link>
                    </Button> 
                </SheetContent>
            </Sheet>
        </nav>
    </div> );
}
 
export default Menu;