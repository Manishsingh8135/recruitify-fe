import { UserButton } from "@clerk/nextjs";
import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from 'flowbite-react';

export default function Navbarr() {
  return (
    <div className=' w-full fixed top-0 z-50'>
      <Navbar fluid rounded>
        <NavbarBrand href="https://recruitify.com">

          <span className="self-center whitespace-nowrap text-xl font-semibold text-slate-600 dark:text-white ml-4">Recruitify</span>
        </NavbarBrand>
        <div className="flex md:order-2">
          <div className="mr-2">
            <UserButton afterSignOutUrl="/" />
          </div>
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt="User settings" img="https://recruitify.com/docs/images/people/profile-picture-5.jpg" rounded />
            }
          >
        
            <DropdownItem>Dashboard</DropdownItem>
            <DropdownItem>Settings</DropdownItem>
            <DropdownItem>Earnings</DropdownItem>
            <DropdownDivider />
            <DropdownItem>Sign out</DropdownItem>
          </Dropdown>
          <NavbarToggle />


        </div>

        <NavbarCollapse>
          <NavbarLink href="#" active>
            Home
          </NavbarLink>
          <NavbarLink href="#">About</NavbarLink>
          <NavbarLink href="#">Jobs</NavbarLink>
          <NavbarLink href="#">Referrals</NavbarLink>
          <NavbarLink href="#">Contact</NavbarLink>

        </NavbarCollapse>
      </Navbar>
    </div>
  );
}
