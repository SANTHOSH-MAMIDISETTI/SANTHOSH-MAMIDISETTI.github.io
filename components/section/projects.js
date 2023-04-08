import Image from "next/legacy/image";
import { FaHtml5, FaNodeJs, FaAngleRight, FaGithub, FaLaravel, FaPython, FaJava, FaReact } from "react-icons/fa";
import { useState, Fragment } from "react";
import { clsx } from "clsx";
import Waypoints from "../dust/waypoints";

export default function Projects() {
    let gh = "https://github.com/SANTHOSH-MAMIDISETTI";
    let [projects] = useState([
      {
        name: "Hospital Management System",
        description:
          "A simple java CLI application from scratch made by us using the basic concepts of Java.",
        isLeft: true,
        link: "/Hospital-Management-System",
        icon: {
          name: FaJava,
          fill: clsx("group-hover:fill-[#FF2D20]"),
        },
        image: {
          src: "/img/projects/HMS.webp",
          alt: "HMS Java",
          width: 447,
          height: 208,
          // layout: "fill",
        },
      },
      {
        name: "Breast Cancer Prediction",
        description:
          "Predict whether the cancer is benign or malignant using regressions in Python.",
        isLeft: false,
        link: "/Breast-Cancer-Prediction",
        icon: {
          name: FaPython,
          fill: clsx("group-hover:fill-[#E96228]"),
        },
        image: {
          src: "/img/projects/bc.webp",
          alt: "Breast Cancer Prediction",
          // width: 448,
          // height: 148,
          layout : "fill",
        },
      },
      {
        name: "Critical Temperature Prediction",
        description:
          "Regression models to help us determine The Critical Temperatures of various Super Conductors.",
        isLeft: true,
        link: "/Critical-Temperature-Prediction",
        icon: {
          name: FaPython,
          fill: clsx("group-hover:fill-[#E96228]"),
        },
        image: {
          src: "/img/projects/CriticalTempPredictor.webp",
          alt: "Critical Temperature Prediction",
          width: 448,
          height: 172,
          // layout: "fill",
        },
      },
      {
        name: "AIException",
        description:
          "lablab.ai hackthon's implementation by team AIException. ",
        isLeft: false,
        link: "/AIException",
        icon: {
          name: FaPython,
          fill: clsx("group-hover:fill-[#689F63]"),
        },
        image: {
          src: "/img/projects/AiException.webp",
          alt: "AIException",
          layout: "fill",
        },
      },
      {
        name: "Password Strength Checker",
        description:
          "A web application to check the strength of a password made with NextJs & TailwindCss.",
        isLeft: true,
        link: "/password-strength-checker",
        icon: {
          name: FaReact,
          fill: clsx("group-hover:fill-[#689F63]"),
        },
        image: {
          src: "/img/projects/PasswordStrength.webp",
          alt: "Password Strength Checker",
          // width: 448,
          // height: 148,
          layout: "fill",
        },
      },
    ]);
    return (
      <>
        {/* Projects Starts */}

        <div className="px-6">
          <Waypoints target={'toprojects'}>
            <section id="projects" className="pt-28">
              <h1 className="text-2xl font-bold text-center" data-aos="fade-up">
                Some of My Projects
              </h1>
              <div className="flex justify-center">
                <span
                  className="bg-[#6C63FF] w-[150px] h-[5px]"
                  data-aos="fade-up"
                  data-aos-delay="400"
                ></span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 mt-20 gap-4">
                {projects.map(
                  ({ name, description, isLeft, link, icon, image }) => {
                    return (
                      <Fragment key={name}>
                        <div className="flex justify-center">
                          <a
                            className={`group hover:scale-110 ${
                              isLeft ? "hover:rotate-6" : "hover:-rotate-6"
                            } transition delay-75`}
                            href={gh + link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div
                              className="card max-w-md bg-base-100 shadow-xl image-full"
                              data-aos="fade-up"
                            >
                              <figure>
                                <Image {...image} />
                              </figure>
                              <div className="card-body">
                                <h2 className="card-title">
                                  <icon.name
                                    className={`${icon.fill} transition ease-in-out delay-150`}
                                  />
                                  {name}
                                </h2>
                                <p>{description}</p>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div></div>
                        <div></div>
                      </Fragment>
                    );
                  }
                )}
              </div>

              <div className="text-center mt-20">
                <a
                  className="btn btn-wide"
                  href="https://github.com/SANTHOSH-MAMIDISETTI?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="mr-2 w-5 h-5" />
                  View all my Projects. <FaAngleRight className="ml-2" />
                </a>
              </div>
            </section>
          </Waypoints>
        </div>

        {/* Projects Ends */}
      </>
    );
}