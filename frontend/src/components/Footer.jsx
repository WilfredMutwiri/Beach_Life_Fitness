
"use client";
import { Footer } from "flowbite-react";
import {BsFacebook, BsWhatsapp, BsInstagram, BsTiktok, BsYoutube,} from "react-icons/bs";
import Logo from '../assets/logo-520698693.webp'
export function FooterComp() {
  return (
    <div className="">
        <Footer container className="bg-gray-300">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="#"
              src={Logo}
              alt="Beach-life Logo"
              name="Beach-life Fitness"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">About Us</Footer.Link>
                <Footer.Link href="#">Our Updates</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="https://www.facebook.com/beachlifefitnesskenya?sfnsn=wa&mibextid=RUbZ1f" target="_blank">Facebook</Footer.Link>
                <Footer.Link href="https://www.instagram.com/beachlifefitnesskenya/" target="_blank">Instagram</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="https://www.instagram.com/beachlifefitnesskenya/" target="_blank" by="Beach-Life Fitness Kenya™" year={new Date().getFullYear()} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="https://www.facebook.com/beachlifefitnesskenya?sfnsn=wa&mibextid=RUbZ1f" target="_blank"icon={BsFacebook} />
            <Footer.Icon href="https://www.instagram.com/beachlifefitnesskenya/" target="_blank" icon={BsInstagram} />
            <Footer.Icon href="https://www.tiktok.com/@beachlifefitnesskenya?_t=8lMARcbvPXS&_r=1" target="_blank" icon={BsTiktok} />
            <Footer.Icon href="https://www.youtube.com/@beachlifefitnesskenya" target="_blank" icon={BsYoutube} />
            <Footer.Icon href="#" target="_blank" icon={BsWhatsapp} />
          </div>
        </div>
        <p className="text-center pt-2 text-sm">Developed by Wilfred Mutwiri <span className="text-blue-600 hover:text-yellow-400 cursor-pointer"><a href="https://wilfredmutwiri.vercel.app/" target="_blanck"> View Portfolio</a></span></p>
      </div>
    </Footer>
    </div>
  );
}
