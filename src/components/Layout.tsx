// src/components/Layout.tsx
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { ModeToggle } from "./mode-toggle";

// src/components/Layout.tsx
const Layout = () => {
  return (
    <div className="min-h-screen flex">
      <Navbar />
      <ModeToggle />
        <main className="flex-1 px-16">
          <Outlet />
        </main>
    </div>
  );
};

export default Layout;