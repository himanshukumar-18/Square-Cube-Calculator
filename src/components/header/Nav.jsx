import { Link } from "react-router";
import { Logo } from "../../Index";
import { useState } from "react";

const Nav = () => {

  const [open, setOpen] = useState(false)

  const hamb = () => {
    setOpen(prev => !prev)
  }

  const navLinks = [
    {
      title: "Square",
      slug: "/",
    },
    {
      title: "Cube",
      slug: "/cube",
    },
    {
      title: "Compound interest",
      slug: "/compound",
    },
  ];

  return (
    <>
      <div
        className={`nav-container min-w-full min-h-8vh border-b-1 border-[#ffffff1f]`}
      >
        <nav className={`nav-wrapper w-full px-[20%] py-7 flex gap-5 relative`}>
          <Link to={"/"}>
            <div
              className={`logo-wrapper flex items-center outline-1 w-fit px-4 py-2 rounded-[100px] outline-[#ffffff1f]`}
            >
              <img src={Logo} alt="logo" className={`w-[50px]`} />
              <div>
                <h1 className={`logo-heading ml-3 font-[700] text-[18px] text-[#ffffff]`}>
                  Maths App.in
                </h1>
              </div>
            </div>
          </Link>

          <div
            className={`nav-links-wrapper outline-1 w-fit px-10 py-2 rounded-[100px] outline-[#ffffff1f] flex items-center ${open ? "open" : ""}`}
          >
            <ul className={`flex items-center gap-8`}>
              {navLinks.map((link) => (
                <Link to={link.slug}>
                  <li
                    key={link}
                    className={`text-[#ffffff] text-[16px] font-[500]`}
                  >
                    {link.title}
                  </li>
                </Link>
              ))}
            </ul>


            <div className="hamb" onClick={hamb}>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>

          <div className="hamb" onClick={hamb}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Nav;
