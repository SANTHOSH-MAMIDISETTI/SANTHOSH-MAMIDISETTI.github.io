import { FaGithub, FaYoutube, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { useState, Fragment } from "react";
import { clsx } from "clsx";

export default function Social({ type }) {
    let [social] = useState([
      {
        href: "/github",
        icon: {
          icon: FaGithub,
          fill: clsx('hover:fill-black')
        },
      },
      {
        href: "/linkedin",
        icon: {
          icon: FaLinkedin,
          fill: clsx('hover:fill-blue-900')
        },
      },
      {
        href: "https://www.youtube.com/@santhoshmamidisetti",
        icon: {
          icon: FaYoutube,
          fill: clsx("hover:fill-red-500"),
        },
      },
      {
        href: "/instagram",
        icon: {
          icon: FaInstagram,
          fill: clsx("hover:fill-[url(#instagram-gradient)]"),
        },
      },
      {
        href: "/twitter",
        icon: {
          icon: FaTwitter,
          fill: clsx('hover:fill-blue-500'),
        },
      },
    ]);

    return (
      <>
        <div
          className={`flex text-2xl text-gray-500 ${
            type === "footer"
              ? "space-x-4 ml-2 md:space-x-6"
              : "space-x-7 mt-2 text-center md:text-left"
          }`}
        >
          {social.map(({ href, icon }) => {
            return (
              <Fragment key={href}>
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <icon.icon
                    className={`${icon.fill} transition delay-150`}
                  />
                </a>
              </Fragment>
            );
          })}
        </div>
      </>
    );
}