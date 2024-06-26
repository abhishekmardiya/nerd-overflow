import Image from "next/image";
import Link from "next/link";
import RenderTag from "./RenderTag";

const RightSidebar = () => {
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {[1, 2, 3, 4, 5]?.map((el, index) => (
            <Link
              href="/"
              key={index}
              className="flex items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">
                Best practices for data fetching in a Next.js application with
                Server-Side Rendering (SSR)?
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="chevron right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {[1, 2, 3, 4, 5]?.map((el, index) => (
            <RenderTag
              key={index}
              _id={index}
              name="Javascript"
              totalQuestions={5}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default RightSidebar;
