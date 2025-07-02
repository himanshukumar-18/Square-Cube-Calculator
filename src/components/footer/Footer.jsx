import React from 'react'
import { Link } from 'react-router';

const Footer = () => {

  const footerLinks = [
    {
      title: "Square",
      slug: "/",
    },
    {
      title: "Cube",
      slug: "/cube",
    },
  ];

  return (
    <>
      <div className={`footer-container min-w-full border-t-1 border-[#ffffff1f] `}>
        <footer className={`footer px-[20%] py-8 flex justify-between`}>
          <div className={`copyright-wrapper`}>
            <p className={`text-[#ffffff] text-[14px]`}>© 2025 Himanshu Kumar. All Right Reserved</p>
          </div>

          <div className={`footer-links-wrapper`}>
            <ul className={`flex items-center gap-8`}>
              {footerLinks.map((link) => (
                <Link to={link.slug}>
                  <li key={link} className={`text-[#ffffff] text-[14px] font-[500]`}>
                    {link.title}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Footer