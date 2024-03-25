"use client";

import { SheetClose } from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavContent = () => {
  const pathName = usePathname();

  return (
    <section className="flex h-full flex-col gap-6 pt-16">
      {sidebarLinks?.map((el) => {
        const isActive = pathName?.includes(el?.route);

        return (
          <SheetClose asChild key={el?.route}>
            <Link
              href={el?.route}
              className={`${isActive ? "primary-gradient rounded-lg text-light-900" : "text-dark300_light900"} flex items-center justify-start gap-4 bg-transparent p-4`}
            >
              <Image
                src={el?.imgURL}
                alt={el?.label}
                width={20}
                height={20}
                className={`${!isActive && "invert-colors"}`}
              />
              <p className={`${isActive ? "base-bold" : "base-medium"}`}>
                {el?.label}
              </p>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
};

export default NavContent;
