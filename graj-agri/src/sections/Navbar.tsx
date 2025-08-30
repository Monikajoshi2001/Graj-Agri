import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { navlinks } from "../constants/navLinks";
import { Menu, X } from "lucide-react";
import Button from "../components/Button";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalStyle;
    }
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Top Strip Line */}
      <div className="w-full h-10 bg-[#6d9732]"></div>

      <nav className="flex justify-between items-center p-4 md:px-10 bg-white shadow-sm sticky top-0 z-50">
        {/* Logo */}
        <img src={logo} width={50} height={50} alt="logo" />

        {/* Desktop Navigation */}
        <ul className="gap-6 hidden md:flex">
          {navlinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side - Button + Mobile Menu */}
        <div className="flex items-center gap-3">
          <Button>Queries?</Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <Menu className="size-8 text-gray-500 cursor-pointer" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`
        fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 md:hidden
        transform transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
      `}
      >
        <div className="p-6 space-y-6">
          <div className="flex justify-between items-center">
            <img src={logo} width={40} height={40} alt="logo" />
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <X className="size-7 text-gray-500 cursor-pointer" />
            </button>
          </div>

          <ul className="space-y-4">
            {navlinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block text-lg text-gray-700 hover:text-yellow-500 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <Button className="w-full">Queries?</Button>
        </div>
      </div>
    </>
  );
}
