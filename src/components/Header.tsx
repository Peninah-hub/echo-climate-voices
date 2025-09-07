import { Button } from "@/components/ui/button";

const Header = () => {
  const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "What We Do", href: "#what-we-do" },
    { name: "Impact", href: "#impact" },
    { name: "Get Involved", href: "#get-involved" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-6 py-4">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">V4CJ</span>
          </div>
          <span className="text-white text-lg font-semibold hidden sm:block">
            Voices for Climate Justice
          </span>
        </div>

        {/* Navigation Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white hover:text-primary transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Our Stories Button */}
        <Button variant="hero-outline" size="sm" className="hidden md:block">
          📖 Our Stories
        </Button>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Header;