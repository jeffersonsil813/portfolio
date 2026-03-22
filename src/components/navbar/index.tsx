import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`text-white h-16 w-[95%] sticky rounded-md p-6 top-5 mx-auto transition duration-300 ${
        scrolled ? "backdrop-blur-md bg-zinc-950/10" : "bg-transparent"
      }`}
    />
  );
};

export default Navbar;
