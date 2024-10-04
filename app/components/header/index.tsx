"use client";

import Birds from "@/images/love-birds.png";
import logotext from "@/images/logo-text.png";
import Image from "next/image";
import Link from "next/link";
import { Dialog, Disclosure } from "@headlessui/react";

import { useState } from "react";
import { Menu, X, ChevronDown, MessageSquareHeart } from "lucide-react";

const sectionDesigns = [
  { name: "Header Sections", href: "/headersections" },
  { name: "Hero Sections", href: "/herosections" },
  { name: "Feature Sections", href: "/featuresections" },
  { name: "Pricing Sections", href: "/pricingsections" },
  { name: "Newsletter Sections", href: "/newslettersections" },
  { name: "Promo Sections", href: "/promosections" },
  { name: "Blog Sections", href: "/blogsections" },
  { name: "Contact Sections", href: "/contactsections" },
  { name: "Team Sections", href: "/teamsections" },
  { name: "Content Sections", href: "/contentsections" },
  { name: "Banner Sections", href: "/bannersections" },
  { name: "CTA Sections", href: "/ctasections" },
  { name: "Testimonial Sections", href: "/testimonialsections" },
];
const pagesDesigns = [
  { name: "Storfront Pages", href: "/storefrontpages" },
  { name: "Product Pages", href: "/productpages" },
  { name: "Shopping Cart Pages", href: "/shoppingcartpages" },
  { name: "Category Pages", href: "/categorypages" },
  { name: "Checkout Pages", href: "/checkoutpages" },
  { name: "Order Details Pages", href: "/orderdetailspages" },
  { name: "Order History Pages", href: "/orderhistorypages" },
  { name: "Landing Pages", href: "/landingpages" },
  { name: "Home Pages", href: "/homepages" },
  { name: "Pricing Pages", href: "/pricingpages" },
  { name: "About Pages", href: "/aboutpages" },
  { name: "Details Pages", href: "/detailspages" },
  { name: "Settings Pages", href: "/settingspages" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <header className="bg-gray-950 text-gray-200 sticky top-0 z-40">
      <nav className=" mx-auto max-w-7xl flex items-center justify-between h-20 px-4 lg:px-8">
        {/* Logo */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#EB6395] hover:text-teal-200 duration-200"
          >
            <span className="sr-only">Open main menu</span>
            {/* <span className=" font-bold px-2 text-xl ">BZ</span> */}
            <MessageSquareHeart className="h-7 w-7" aria-hidden="true" />
          </button>
        </div>

        {/* Contactme button */}
        <div className="hidden lg:flex items-center justify-between max-w-md">
          <Link href={"/"} className="headerList">
            <span className="text-[#EB6395] headerList font-bold px-2 text-xl ">
              Bem.zinho
            </span>
          </Link>
        </div>
        <div className="flex items-center justify-center flex-col">
          <Image
            src={Birds}
            alt="LovelyBirds"
            className="h-8 w-auto scale-90 hover:scale-105 duration-200"
          />
          <span className="text-[#EB6395] headerList font-bold px-2 text-xl font-pop uppercase ">
            Bemzinho
          </span>
        </div>
        {/* <Link href={"/contactme"} className="headerList">
          Contact Us <span aria-hidden="true">&rarr;</span>
        </Link> */}
        {/* small menu bar */}
        <div className="flex">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#EB6395] hover:text-teal-200 duration-200"
          >
            <span className="sr-only">Open main menu</span>

            <Menu className="h-7 w-7" aria-hidden="true" />
          </button>
        </div>
      </nav>
      {/* ============ Mobile Navigation Start here ========= */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50">
          <Dialog.Panel className="fixed inset-y-0 right-0 w-full overflow-y-auto bg-gray-950 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href={"/"}>
                <Image src={logotext} alt="logotext" className="h-16 w-auto" />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white hover:text-red-500 duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root text-gray-200">
              <div className="-my-6 divide-y divide-gray-100/20">
                <div className="space-y-2 py-6">
                  <Link
                    href={"/"}
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base hover:bg-gray-800 hover:text-white duration-200 font-semibold"
                  >
                    Home
                  </Link>
                  <Link
                    onClick={() => setMobileMenuOpen(false)}
                    href="/features"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-800 hover:text-white duration-200"
                  >
                    Features
                  </Link>
                  <Link
                    onClick={() => setMobileMenuOpen(false)}
                    href="/unknown"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-800 hover:text-white duration-200"
                  >
                    Not Found
                  </Link>
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-800 hover:text-white duration-200">
                          Pages Designs{" "}
                          <ChevronDown
                            className={classNames(
                              open ? "rotate-180" : "",
                              "h-5 w-5 flex-none"
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel>
                          {pagesDesigns?.map((item) => (
                            <Disclosure.Button
                              key={item?.name}
                              as="a"
                              href={item?.href}
                              className="block rounded-lg py-2 pl-6 pr-3 font-semibold leading-7 hover:bg-gray-800 hover:text-white duration-200"
                            >
                              {item?.name}
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-800 hover:text-white duration-200">
                          Tailwind Designs
                          <ChevronDown
                            className={classNames(
                              open ? "rotate-180" : "",
                              "h-5 w-5 flex-none"
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          {sectionDesigns?.map((item) => (
                            <Disclosure.Button
                              key={item?.name}
                              as="a"
                              href={item?.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 hover:bg-gray-800 hover:text-white duration-200"
                            >
                              {item?.name}
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
                <div>
                  <Link
                    href={"/contactme"}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 hover:bg-gray-800 hover:text-white duration-200"
                  >
                    Contact Me <span>&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
      {/* ============ Mobile Navigation End here =========== */}
    </header>
  );
};

export default Header;
