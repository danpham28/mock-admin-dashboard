import React from 'react';
import { NavItem } from './nav-item';
import { SettingsIcon, UsersIcon } from '@/components/icons';
import { ArrowRightLeft, Layers3, Workflow } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="grid items-start px-4 text-sm font-medium">
      <NavItem href="/transaction">
        <ArrowRightLeft className="h-4 w-4" />
        Transaction
      </NavItem>
      <NavItem href="/affilliate">
        <Workflow className="h-4 w-4" />
        Affilliate
      </NavItem>
      <NavItem href="/staking">
        <Layers3 className="h-4 w-4" />
        Staking
      </NavItem>
      <NavItem href="/user">
        <UsersIcon className="h-4 w-4" />
        Users
      </NavItem>
      <NavItem href="/settings">
        <SettingsIcon className="h-4 w-4" />
        Settings
      </NavItem>
    </nav>
  );
};

export default Navbar;
