"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import Container from "./ui/container";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const NavBar = () => {
  const [currentTheme, setCurrentTheme] = useState("dark");
  const { setTheme } = useTheme();

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

  const toggleTheme = () => {
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setCurrentTheme(newTheme);
    setTheme(newTheme);
  };

  return (
    <header
      className={`sm:flex sm:justify-between py-3 px-4 border-b sticky top-0 ${
        currentTheme === "dark" ? "bg-slate-950" : "bg-white"
      } z-50`}
    >
      <Container>
        <div className="relative px-4 sm:px-6 lg: flex h-16 items-center justify-between w-full">
          <div className="flex items-center">
            <h1 className="text-xl font-bold ml-4 lg:ml-0">Tony Trinh</h1>
          </div>
          <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 md:block">
            {contacts.map((contact) => (
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="scale-125 cursor-pointer"
                key={contact.id}
                onClick={() => window.open(contact.href, "_blank")}
              >
                <div className="text-sm font-medium transition-colors">
                  {contact.label}
                </div>
              </Button>
            ))}
          </nav>
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle Theme"
              className="mr-6"
              onClick={toggleTheme}
            >
              {currentTheme === "dark" ? (
                <Sun
                  className={`h-6 w-6 transition-all ${
                    currentTheme === "dark"
                      ? "rotate-0 scale-100"
                      : "rotate-90 scale-0"
                  }`}
                />
              ) : (
                <Moon
                  className={`absolute h-6 w-6 transition-all ${
                    currentTheme === "dark"
                      ? "rotate-90 scale-0"
                      : "rotate-0 scale-100"
                  }`}
                />
              )}
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default NavBar;
