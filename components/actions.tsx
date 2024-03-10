"use client";

import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";

interface ActionProps {
  children: React.ReactNode;
  side?: DropdownMenuContentProps["side"];
  sideOffSet?: DropdownMenuContentProps["sideOffset"];
  id: string;
  title: string;
}

export const Actions = ({ children, side, sideOffSet }: ActionProps) => {
  return <div>Actions</div>;
};
