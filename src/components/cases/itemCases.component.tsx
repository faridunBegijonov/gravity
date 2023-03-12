import * as React from "react";
import { Link } from "react-router-dom";
import "./cases.style.scss";

interface IItemCases {
  src: string;
  name: string;
  title: string;
  description: string;
  technology: string;
  path: string;
}

export const ItemCases: React.FC<IItemCases> = ({
  src,
  name,
  path,
  title,
  description,
  technology,
}: IItemCases) => {
  return (
    <div className="amb">
      <img src={src} alt="AmbImg" />
      <p>{name}</p>
      <Link to={path}>
        <div className="bgAmb hover:bg-[#16a34a]/50">
          <div className="flex flex-col">
            <span className="text-[22px] mb-[8px] ">{title}</span>
            <span className="text-[18px] mb-[8px]">{description}</span>
            <span>{technology}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};
