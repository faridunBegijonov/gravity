import * as React from 'react';
import { Link } from 'react-router-dom';

interface IItemCases {
    img: string;
    spanName: string;
    spanDes: string;
    spanTex: string;
}

export const ItemCases: React.FC<IItemCases> = ({ img, spanName, spanDes, spanTex }: IItemCases) => {
    return (
        <div className="amb">
            <img src={img} alt="AmbImg" />
            <p>Амонатбонк</p>
            <Link to="/cases/amb">
                <div className="bgAmb hover:bg-[#16a34a]/50">
                    <div className="flex flex-col">
                        <span className="text-[22px] mb-[8px] ">
                            {spanName}
                        </span>
                        <span className="text-[18px] mb-[8px]">
                            {spanDes}
                        </span>
                        <span>
                            {spanTex}
                        </span>
                    </div>
                </div>
            </Link>
        </div>

    )
}