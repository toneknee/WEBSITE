import Container from "./ui/container";

const Footer = () => {
  return (
    <footer className="sm:flex sm:justify-center py-3 px-4 border-t">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-center w-full">
          <nav className="flex items-center space-x-4 lg:space-x-6 md:block"></nav>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
