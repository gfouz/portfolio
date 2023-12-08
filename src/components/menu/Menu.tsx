'use client';
import React from 'react';
import Image from 'next/image';
import fouz_link from '../../../public/images/fouz-link.png';
import arrow from '../../../public/images/arrow.png';

export default function Menu() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <>
      <div className="flex flex-wrap bg-[#999999] py-2 ">
        <div className="bg-sky-[#00a9ff] w-full px-2">
          <nav className="relative flex flex-wrap items-center justify-between rounded bg-[#444444] px-0.5 py-1">
            <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
              <div className="relative flex w-full justify-between px-4 lg:static lg:block lg:w-auto lg:justify-start">
                <a
                  className="mr-4 inline-block flex whitespace-nowrap py-2 text-sm font-bold uppercase leading-relaxed text-white"
                  href="https://github.com/gfouz"
                >
                  <Image
                    className="h-auto w-[30px]"
                    src={fouz_link}
                    alt="technical-stack"
                  />
                  <span>Portfolio</span>
                </a>
                <button
                  className="btn glass flex cursor-pointer items-center text-xl leading-none text-white  lg:hidden "
                  type="button"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <span className="m-1">{menuOpen ? 'close' : 'open'}</span>
                </button>
              </div>
              <div
                className={
                  'flex-grow items-center lg:flex' +
                  (menuOpen ? ' flex' : ' hidden')
                }
                id="example-navbar-info"
              >
                <ul className="flex list-none flex-col lg:ml-auto lg:flex-row">
                  <li className="nav-item">
                    <a
                      className="flex items-center px-3 py-2 text-xs font-bold uppercase leading-snug text-white hover:opacity-75"
                      href="#pablo"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="flex items-center px-3 py-2 text-xs font-bold uppercase leading-snug text-white hover:opacity-75"
                      href="#pablo"
                    >
                      Blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="flex items-center px-3 py-2 text-xs font-bold uppercase leading-snug text-white hover:opacity-75"
                      href="#pablo"
                    >
                      Github
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

//linear-gradient(90deg, #200122 0%, #6f0000 100%)
