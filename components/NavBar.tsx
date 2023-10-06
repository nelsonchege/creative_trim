"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import MenuItem from "./MenuItem";
import {
  ClipboardEdit,
  Files,
  Home,
  LogIn,
  Menu,
  UserCircle,
  X,
} from "lucide-react";

const NavBar = () => {
  const [menuOn, setMenuOn] = useState<Boolean>(false);

  return (
    <div className="w-11/12 py-3">
      <nav className="flex justify-between items-center">
        <div>Material Tailwind React</div>
        <div className="block sm:hidden">
          {!menuOn ? (
            <Menu onClick={() => setMenuOn(true)} className="cursor-pointer" />
          ) : (
            <X onClick={() => setMenuOn(false)} className="cursor-pointer" />
          )}
        </div>
        <div className="hidden  sm:flex w-2/3 items-center">
          <div className="hidden lg:flex gap-5">
            <MenuItem name={"Home"} icon={<Home />} />
            <MenuItem name={"Profile"} icon={<UserCircle />} />
            <MenuItem name={"Sign in"} icon={<LogIn />} />
            <MenuItem name={"Sign up"} icon={<ClipboardEdit />} />
            <MenuItem name={"Docs"} icon={<Files />} />
          </div>
          <div className="ml-auto flex gap-3">
            <Button className="rounded-[10px] hover:bg-gray-100/10">
              Pro Version
            </Button>
            <Button className="rounded-[10px] bg-blue-500 hover:bg-blue-500/90 hover:shadow-xl">
              Free download
            </Button>
          </div>
        </div>
      </nav>
      {menuOn && (
        <nav className="sm:hidden border rounded-xl p-3 mt-3 bg-white text-black shadow-lg">
          <div className="flex flex-col gap-2">
            <MenuItem name={"Home"} icon={<Home />} />
            <MenuItem name={"Profile"} icon={<UserCircle />} />
            <MenuItem name={"Sign in"} icon={<LogIn />} />
            <MenuItem name={"Sign up"} icon={<ClipboardEdit />} />
            <MenuItem name={"Docs"} icon={<Files />} />
          </div>
          <div className="mt-3 w-full flex flex-col gap-2">
            <Button className=" text-blue-500 hover:rounded-[7px] hover:bg-blue-400/10 ">
              Pro Version
            </Button>
            <Button className="bg-blue-400/90 rounded-[7px] text-white hover:text-blue-400">
              Free Download
            </Button>
          </div>
        </nav>
      )}
    </div>
  );
};

export default NavBar;
