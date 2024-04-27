"use client";

import { Button } from "./ui/button";
import Container from "./ui/container";
import Link from "next/link";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const NavBar = () => {
  const contacts = [
    {
      href: "https://github.com/toneknee",
      label: <FaGithub />,
      id: "0",
    },
    {
      href: "https://www.linkedin.com/in/tony-trinh-b38509131/",
      label: <TiSocialLinkedin />,
      id: "1",
    },
    {
      href: "mailto:tony.trinh18@gmail.com",
      label: <IoMdMail />,
      id: "2",
    },
  ];

  const { theme, setTheme } = useTheme();

  return (
    <header className="sm:flex sm:justify-between py-3 px-4 border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg: flex h-16 items-center justify-between w-full">
          <div className="flex items-center">
            <h1 className="text-xl font-bold ml-4 lg:ml-0">Tony Trinh</h1>
          </div>
          <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 md:block">
            {contacts.map((contacts) => (
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="scale-125"
                key={contacts.id}
              >
                <Link
                  href={contacts.href}
                  className="text-sm font-medium transition-colors"
                >
                  {contacts.label}
                </Link>
              </Button>
            ))}
          </nav>
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle Theme"
              className="mr-6"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default NavBar;
