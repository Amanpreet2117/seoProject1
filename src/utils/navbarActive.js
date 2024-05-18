"use client";
import React from "react";
import { usePathname } from "next/navigation";
const NavbarActive = () => {
  const pathname = usePathname();
  console.log("param", pathname);
  let path = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/service" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    // { name: "Message Us", path: "/contact" },
    { name: "Contact Now", path: "/contact" },
  ];

  return (
    <div>
      <ul className="nav">
        {path.map((res) => {
          return (
            <>
              <li className="scroll-to-section">
                {res.path == pathname ? (
                  <a href={res.path} className="active">
                    {res.name}
                  </a>
                ) : (
                  <a href={res.path}>{res.name}</a>
                )}
              </li>
            </>
          );
        })}
        
        <li className="scroll-to-section">
          <div className="main-red-button">
            <a href="contact">Contact Now</a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default NavbarActive;
