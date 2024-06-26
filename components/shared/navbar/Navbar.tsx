import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggleBtn } from "./ThemeToggleBtn";
import MobileNav from "./MobileNav";
import GlobalSearch from "../search/GlobalSearch";

const Navbar = () => {
  return (
    <nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-6 p-6 shadow-light-300 dark:shadow-none sm:px-12">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/assets/images/site-logo.svg"
          width={23}
          height={23}
          alt="Nerd Overflow"
        />
        <p className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          Nerd <span className="text-primary-500">Overflow</span>
        </p>
      </Link>
      <GlobalSearch />
      <div className="flex-between gap-5">
        <ThemeToggleBtn />
        {/* SignedIn --> whatever comes in this component will only visible if user is signed in */}
        <SignedIn>
          {/* UserButton --> user profile button */}
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "h-10 w-10",
              },
              variables: {
                colorPrimary: "#ff7000",
              },
            }}
          />
        </SignedIn>
        <MobileNav />
      </div>
    </nav>
  );
};
export default Navbar;
