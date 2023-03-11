import React from "react";
import { Navbar } from "../navbar/navbar.component";
import { Footer } from "../footer/footer.component";

interface ILayout {
  children: React.ReactNode
}

export const Layout: React.FC<ILayout> = ({ children }: ILayout) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
