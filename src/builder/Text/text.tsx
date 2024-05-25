'use client';

import { ChevronsUpDown } from 'lucide-react';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

import AdvencedLayout from './Advenced/Layout/AdvencedLayout';
import ContentText from './content/Content';
import Alingement from './style/Alingement/Alingement';
import TextColor from './style/TextColor/TextColor';
import Typography from './style/Typography/Typography';

const Text = () => {
  // collapse
  const [OpenCollapse, setOpenCollapse] = React.useState(false);
  const [OpenCollapseStyle, setOpenCollapseStyle] = React.useState(false);
  const [OpenCollapseLayout, setOpenCollapseLayout] = React.useState(false);

  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle option selection
  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false); // Close the dropdown after selection
    // Perform any action based on the selected option
    switch (option) {
      case 'Dashboard':
        // Action for Dashboard
        break;
      case 'Settings':
        // Action for Settings
        break;
      case 'Earnings':
        // Action for Earnings
        break;
      case 'Sign out':
        // Action for Sign out
        break;
      default:
        // Default action
        break;
    }
  };
  return (
    <div>
      <Collapsible
        open={OpenCollapse}
        onOpenChange={setOpenCollapse}
        className="w-full space-y-2"
      >
        <div className="flex items-center justify-between space-x-4 px-4">
          <h4 className="text-sm font-semibold">Content</h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-9 p-0">
              <ChevronsUpDown className="size-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>

        <CollapsibleContent className="space-y-2">
          <ContentText />
        </CollapsibleContent>
      </Collapsible>

      {/** style section */}
      <Collapsible
        open={OpenCollapseStyle}
        onOpenChange={setOpenCollapseStyle}
        className="w-full space-y-2"
      >
        <div className="flex items-center justify-between space-x-4 px-4">
          <h4 className="text-sm font-semibold">Style</h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-9 p-0">
              <ChevronsUpDown className="size-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>

        <CollapsibleContent className="space-y-2">
          <form className="px-4">
            {/** alignement */}
            <Alingement />
            {/** alignement */}

            {/** text color */}
            <TextColor />
            {/** text color */}

            {/** typography */}
            <Typography />
            {/** typography */}
          </form>
        </CollapsibleContent>
      </Collapsible>
      {/** style section */}

      {/** layout section */}
      <Collapsible
        open={OpenCollapseLayout}
        onOpenChange={setOpenCollapseLayout}
        className="w-full space-y-2"
      >
        <div className="flex items-center justify-between space-x-4 px-4">
          <h4 className="text-sm font-semibold">Advenced</h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-9 p-0">
              <ChevronsUpDown className="size-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>

        <CollapsibleContent className="space-y-2">
          <form className="px-4">
            {/** advenced */}
            <AdvencedLayout />
            {/** advenced */}
          </form>
        </CollapsibleContent>
      </Collapsible>
      {/** style section */}
    </div>
  );
};

export default Text;
