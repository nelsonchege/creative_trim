import React from "react";

type MenuItemProps = {
  name: string;
  icon: any;
};

const MenuItem = ({ name, icon }: MenuItemProps) => {
  return (
    <div className="flex items-center gap-1 p-2 hover:shadow-lg hover:border hover:rounded-[7px] cursor-pointer">
      {icon}
      <span>{name}</span>
    </div>
  );
};

export default MenuItem;
