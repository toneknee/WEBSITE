import { Button } from "./ui/button";
import Container from "./ui/container";
import Link from "next/link";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
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

  return (
    <footer className="sm:flex sm:justify-center py-3 px-4 border-t">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-center w-full">
          <nav className="flex items-center space-x-4 lg:space-x-6 md:block">
            {contacts.map((contact) => (
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="scale-125"
                key={contact.id}
              >
                <Link
                  href={contact.href}
                  className="text-sm font-medium transition-colors"
                >
                  {contact.label}
                </Link>
              </Button>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
