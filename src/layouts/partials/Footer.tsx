"use client";

import Logo from "@/components/Logo";
import Social from "@/components/Social";
import config from "@/config/config.json";
import menu from "@/config/menu.json";
import social from "@/config/social.json";
import { markdownify } from "@/lib/utils/textConverter";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const { copyright } = config.params;

  return (
    <footer className="bg-theme-light dark:bg-darkmode-theme-light">
      <div className="container">
        <div className="row items-center sm:py-10 py-5">
          <div className="mb-8 text-center lg:col-3 lg:mb-0 lg:text-left">
            <Logo />
          </div>
          <div className="mb-8 text-center lg:col-6 lg:mb-0">
            <div className="grid sm:grid-cols-3 grid-row-3 gap-3 items-center justify-center">
              <Link className="flex sm:flex-col flex-row gap-2 items-center" href={"https://rookhq.com"}>
                {/* TODO: crop the damn image to remove unecessary space */}
                <Image className="h-8 w-auto object-contain  sm:block  hidden sm:-my-2" src="/bg/rookhq.png" width={500} height={500} alt="Rook" />
                <span className="h-6 font-semibold sm:hidden">Rook</span>
                <span>SaaS Company</span>
              </Link>
              <Link className="flex sm:flex-col flex-row gap-2" href={"https://fellows.rookhq.com"}>
                <Image className="h-6 w-auto object-contain sm:block hidden" src="/bg/fellows.png" width={500} height={500} alt="Rook Fellows" />
                <span className="h-6 font-semibold sm:hidden">Rook Fellows</span>
                <span>Virtual Workforce</span>
              </Link>
              <Link className="flex sm:flex-col flex-row gap-2" href={"https://rookhq.com"}>
                <span className="h-6 font-semibold">Insta PR</span>
                <span>Press Release</span>
                {/* <Image className="h-8 w-auto" src={"/assets/footer/rookhq.png"} width={100} height={100} alt="Legacies" /> */}
              </Link>
            </div>
          </div>
          <div className="mb-8 text-center lg:col-3 lg:mb-0 lg:mt-0 lg:text-right">
            <Social source={social.main} className="social-icons" />
          </div>
        </div>
      </div>
      <div className="border-t border-border py-7 dark:border-darkmode-border">
        <div className="container text-center text-light dark:text-darkmode-light">
          <p>Powered by Rook Fellows</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
