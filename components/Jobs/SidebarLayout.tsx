"use client"
import React from 'react';
import { Checkbox, Label, TextInput, RangeSlider, Sidebar, Button } from 'flowbite-react';
import { HiMail, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards, HiArrowSmRight } from 'react-icons/hi';
import { BiBuoy } from 'react-icons/bi';
import { IconType } from 'react-icons'; // Import the IconType for type definition

interface SidebarItemWithCheckboxProps {
  href: string;
  label: string;
  icon?: IconType; // icon is optional now
}

const SidebarItemWithCheckbox: React.FC<SidebarItemWithCheckboxProps> = ({ href, icon, label }) => {
  const IconComponent = icon; // Assign icon to a variable to use as a component

  return (
    <div className="flex items-center justify-between">
      <Sidebar.Item href={href} icon={IconComponent ? <IconComponent /> : undefined}>
        {label}
      </Sidebar.Item>
      <Checkbox id={`checkbox-${label}`} />
    </div>
  );
};
const Sidebarr: React.FC = () => {
  return (
    <div className="bg-gray-200 h-screen p-4 md:block">
      <Sidebar aria-label="Sidebar with content separator example">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Collapse icon={HiShoppingBag} label="Company">
              <div className="max-w-md">
                <div className="mb-2 block">
                  <Label htmlFor="email4" value="Search for Company" />
                </div>
                <TextInput id="email4" type="email" rightIcon={HiMail} placeholder="Microsoft" required />
                <div className='flex  justify-end mt-2'>
                  <Button type="submit">Submit</Button>
                </div>
              </div>
              <SidebarItemWithCheckbox href="#" label="Google" />
              <SidebarItemWithCheckbox href="#" label="Microsoft" />
              <SidebarItemWithCheckbox href="#" label="Meta" />
            </Sidebar.Collapse>

            <Sidebar.Collapse icon={HiShoppingBag} label="Salary">
              <div>
                <div className="mb-1 block">
                  <Label htmlFor="default-range" value="LPA" />
                </div>
                <RangeSlider id="default-range" />
              </div>
            </Sidebar.Collapse>

            <Sidebar.Collapse icon={HiShoppingBag} label="Roles">
              <SidebarItemWithCheckbox href="#" label="Front-end" />
              <SidebarItemWithCheckbox href="#" label="Back-end" />
              <SidebarItemWithCheckbox href="#" label="Full-Stack" />
              <SidebarItemWithCheckbox href="#" label="Dev-ops" />
            </Sidebar.Collapse>

            <Sidebar.Collapse icon={HiShoppingBag} label="Location">
              <SidebarItemWithCheckbox href="#" label="Remote" />
              <SidebarItemWithCheckbox href="#" label="Noida" />
              <SidebarItemWithCheckbox href="#" label="Gurgaon" />
              <SidebarItemWithCheckbox href="#" label="Banglore" />
            </Sidebar.Collapse>

            <Sidebar.Collapse icon={HiShoppingBag} label="Experience">
              <SidebarItemWithCheckbox href="#" label="Freshers" />
              <SidebarItemWithCheckbox href="#" label="1+ Year" />
              <SidebarItemWithCheckbox href="#" label="2+ years" />
              <SidebarItemWithCheckbox href="#" label="3+ years" />
            </Sidebar.Collapse>

            <Sidebar.Collapse icon={HiShoppingBag} label="Skills">
              <SidebarItemWithCheckbox href="#" label="C++" />
              <SidebarItemWithCheckbox href="#" label="Java" />
              <SidebarItemWithCheckbox href="#" label="NodeJs" />
              <SidebarItemWithCheckbox href="#" label="Python" />
              <SidebarItemWithCheckbox href="#" label="ReactJs" />
              <SidebarItemWithCheckbox href="#" label="Django" />
              <SidebarItemWithCheckbox href="#" label="JavaScript" />
              <SidebarItemWithCheckbox href="#" label="NextJs" />
            </Sidebar.Collapse>
            
            <Sidebar.Item href="#" icon={HiChartPie}>Dashboard</Sidebar.Item>
            <Sidebar.Item href="#" icon={HiInbox}>Inbox</Sidebar.Item>
            <Sidebar.Item href="#" icon={HiUser}>Users</Sidebar.Item>
            <Sidebar.Item href="#" icon={HiShoppingBag}>Products</Sidebar.Item>
            <Sidebar.Item href="#" icon={HiArrowSmRight}>Sign In</Sidebar.Item>
            <Sidebar.Item href="#" icon={HiTable}>Sign Up</Sidebar.Item>
          </Sidebar.ItemGroup>
          
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiChartPie}>Upgrade to Pro</Sidebar.Item>
            <Sidebar.Item href="#" icon={HiViewBoards}>Documentation</Sidebar.Item>
            <Sidebar.Item href="#" icon={BiBuoy}>Help</Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default Sidebarr;
