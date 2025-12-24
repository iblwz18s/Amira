import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "الرئيسية", href: "#hero" },
  { label: "عن المنصة", href: "#about" },
  { label: "التحديات", href: "#challenges" },
  { label: "الحلول", href: "#solutions" },
  { label: "الإحصائيات", href: "#stats" },
  { label: "تواصل معنا", href: "#footer" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="تجمع تبوك الصحي" className="h-14 w-auto" />
            <div className="hidden sm:block">
              <h1 className="font-bold text-foreground text-lg">منصة Smartsheet</h1>
              <p className="text-xs text-muted-foreground">تجمع تبوك الصحي</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Phone Button */}
          <div className="hidden md:flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <Phone className="w-4 h-4" />
              <span>920031955</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="py-3 px-4 text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors text-right font-medium"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;