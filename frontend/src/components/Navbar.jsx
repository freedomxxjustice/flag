import { Link, useResolvedPath } from "react-router-dom";
import { Flag, PersonStanding } from "lucide-react";
import ThemeSelector from "./ThemeSelector";
import { useThemeStore } from "../store/useThemeStore";

function Navbar() {
  const { pathname } = useResolvedPath();
  const isHomePage = pathname === "/";



  return (
    <div className="bg-base-100/80 backdrop-blur-lg border-b border-base-content/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="navbar px-4 min-h-[4rem] justify-between">
          <div className="flex-1 lg:flex-none">
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <div className="flex items-center gap-2">
                {/* <Flag className="size-5 text-primary" /> */}
                <span
                  className="font-extrabold font-sans pl-5 tracking-widest text-2xl 
                    bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
                >
                  F!AG
                </span>
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <ThemeSelector />

            {isHomePage && (
              <div className="indicator">
                <div className="p-2 rounded-full hover:bg-base-200 transition-colors">
                  <PersonStanding />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
