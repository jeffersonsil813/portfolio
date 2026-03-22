import NavList from "./navList";

const Navbar = () => {
  return (
    <div className="h-16 w-7xl max-w-[95%] rounded-full inset-x-0 mx-auto my-5 fixed p-6 z-50 shadow-md bg-zinc-50">
      <NavList />
    </div>
  );
};

export default Navbar;
