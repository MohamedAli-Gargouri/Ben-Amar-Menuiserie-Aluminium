import React, { FC, ReactElement } from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';

import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import Logo from '@/public/Images/logo/Logo.webp';
import Link from 'next/link';
export const Footer: FC = (): ReactElement => {
  const [logoLoaded,setlogoLoaded]=React.useState(false)
  return (
    <div className="w-full  px-[1.5rem]">
      <div className="border-r-0 border-l-0 border-b-2 border-t-2 border-solid border-[#558B2F] w-full mt-10 grid grid-cols-1 sm:grid-cols-4 py-6">
        <div className="m-0 flex flex-col justify-center items-center text-center">
            <img 
            src={Logo.src}
            alt="logo"
            title="logo"
            className=" w-[50%] object-contain  aspect-auto"
            
          />
          
          <h2 className="text-black font-poppins text-lg font-semibold tracking-wide mt-7">
            Siège social
          </h2>
          <p className="text-black font-poppins text-[14px] font-normal tracking-wider">
            Ben Amar Menuiserie Aluminium
          </p>
          <div className="text-black font-poppins text-[14px] font-normal tracking-wider">
            Route de Gremda km 7.5 Sfax , Tunisie
          </div>
        </div>
        <div className="m-0 flex flex-col justify-center items-center text-center">
          <h2 className="text-black font-poppins text-lg font-semibold tracking-wide">
            Entreprise
          </h2>
          {[
            { label: 'Présentation', url: '/' },
            { label: 'Nos Produits', url: '/products' },
            { label: 'À Propos', url: '/about' },
          ].map((v, i) => {
            return (
              <Link
                href={v.url}
                key={'SUBNAVMENU3' + i}
                className=" no-underline block text-black font-poppins text-[14px] font-normal tracking-wider mt-3 hover:underline cursor-pointer"
              >
                {v.label}
              </Link>
            );
          })}
        </div>
        <div className="m-0 flex flex-col justify-center items-center text-center">
          <h2 className="text-black font-poppins text-lg font-semibold tracking-wide">
            Soutien
          </h2>
          {[{ label: 'Contactez-nous', url: '/contact' }].map((v, i) => {
            return (
              <Link
                href={v.url}
                key={'SUBNAVMENU2' + i}
                className=" block no-underline text-black font-poppins text-[14px] font-normal tracking-wider mt-3 hover:underline cursor-pointer"
              >
                {v.label}
              </Link>
            );
          })}
        </div>
        <div className="m-0 flex flex-col justify-center items-center text-center">
          <h2 className="text-black font-poppins text-lg font-semibold tracking-wide mt-2">
            Suivez-nous
          </h2>
          <div className="flex flex-row">
            {[
              {
                name: 'FB',
                url: 'https://www.facebook.com/people/OPEN-CLOSE/61552007813502/',
                icon: (
                  <FacebookSharpIcon
                    sx={{ color: '#4267B2', fontSize: '35px' }}
                  />
                ),
              } ,
              {
                name:"INSTA",
                url:"https://www.instagram.com/openclosetunisia/",
                icon: (
                  <InstagramIcon sx={{ color: "#E1306C", fontSize: "35px" }} />
                ),
              },
            ].map((v, i) => {
              return (
                <a
                  key={'MEDIA' + i}
                  href={v.url}
                  className="text-black font-poppins text-[14px] font-normal tracking-wider hover:underline cursor-pointer mr-3 mt-0"
                >
                  {v.icon}
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between mt-2 pb-2 text-center">
        <p className="text-black font-poppins text-[14px] font-normal tracking-wider">
          © {new Date().getFullYear()} Ben Amar Menuiserie Aluminium All rights
          reserved.
        </p>
        {/*<p>
          <span className="text-black font-poppins text-[14px] font-normal tracking-wider">
            Developed by
          </span>
          <span className="text-black font-poppins text-[14px] font-normal tracking-wider">
            {" "}
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              GIT
            </a>
          </span>
          </p>*/}
      </div>
    </div>
  );
};

export default Footer;
