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
    color: string;
}

export const ItemCases: React.FC<IItemCases> = ({
    src,
    name,
    path,
    title,
    description,
    technology,
    color
}: IItemCases) => {
    return (
        <div data-aos='fade-up' data-aos-duration='1000' className="amb">
            <img src={src} alt="AmbImg" />
            <p className="font-bold text-[20px]">{name}</p>
            <Link to={path}>
                <div className={`bgAmb hover:bg-[${color}]/50`}>
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
