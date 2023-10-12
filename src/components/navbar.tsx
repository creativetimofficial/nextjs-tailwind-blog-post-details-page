import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";


const NAV_MENU = ["Home", "About Us", "Contact Us"];

function NavItem({ children }: { children: React.ReactNode }) {
  return (
    <li>
      <Typography
        as="a"
        href="#"
        variant="paragraph"
        color="gray"
        className="flex items-center gap-2 font-medium text-gray-900"
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <MTNavbar
      shadow={false}
      fullWidth
      color="transparent"
      className="absolute z-10 border-0"
    >
      <div className="container mx-auto flex items-center justify-between">
        <Typography color="white" className="text-lg font-bold">
          Material Tailwind
        </Typography>
        <ul className="ml-10 hidden items-center gap-8 lg:flex">
          {NAV_MENU.map((name) => (
            <NavItem key={name}>
              <span className="text-white">{name}</span>
            </NavItem>
          ))}
        </ul>
        <div className="hidden items-center gap-2 lg:flex">
          <Button variant="text" color="white">
            Log in
          </Button>
          <Button color="white">see offers</Button>
        </div>
        <IconButton
          variant="text"
          color="white"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto bg-white rounded-lg py-4 px-6 mt-3 border-t border-gray-200">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map((name) => (
              <NavItem key={name}>{name}</NavItem>
            ))}
          </ul>
          <div className="mt-6 flex items-center gap-2">
            <Button variant="text">Log in</Button>
            <Button color="gray">see offers</Button>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}




export default Navbar;
