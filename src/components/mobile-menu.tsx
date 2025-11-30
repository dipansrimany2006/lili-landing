"use client";

import { cn } from "@/lib/utils"
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState, useCallback } from "react";

interface MobileMenuProps {
  className?: string;
}

const menuItems = [
  { name: "Why Us", href: "#why-us" },
  { name: "How it works", href: "#how-it-works" },
  { name: "Contact", href: "#contact" },
];

export const MobileMenu = ({ className }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <Dialog.Root modal={false} open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <button
          className={cn(
            "group lg:hidden p-2 text-foreground transition-colors",
            className
          )}
          aria-label="Open menu"
        >
          <Menu className="group-[[data-state=open]]:hidden" size={24} />
          <X className="hidden group-[[data-state=open]]:block" size={24} />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <div
          data-overlay="true"
          className="fixed z-30 inset-0 bg-black/50 backdrop-blur-sm"
        />

        <Dialog.Content
          onInteractOutside={(e) => {
            if (
              e.target instanceof HTMLElement &&
              e.target.dataset.overlay !== "true"
            ) {
              e.preventDefault();
            }
          }}
          className="fixed top-0 left-0 w-full z-40 py-28 md:py-40"
        >
          <Dialog.Title className="sr-only">Menu</Dialog.Title>

          <nav className="flex flex-col space-y-6 mx-auto px-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={handleLinkClick}
                className="text-xl font-poppins uppercase text-foreground/60 transition-colors ease-out duration-150 hover:text-soft-teal py-2"
              >
                {item.name}
              </Link>
            ))}

            <div className="mt-6">
              <Link
                href="/#sign-in"
                onClick={handleLinkClick}
                className="inline-block text-xl font-poppins uppercase text-soft-mint transition-colors ease-out duration-150 hover:text-soft-mint/80 py-2"
              >
                Get Started
              </Link>
            </div>
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
