import Link from "next/link";
import siteMetadata from "../data/siteMetadata";

const MAX_DISPLAY = 5;
const postDateTemplate = { year: "numeric", month: "long", day: "numeric" };

export default function Home({ posts }) {
  return (
    <>
      <div>
        <div className="flex flex-col items-center my-6 xl:flex-row gap-x-12 xl:mb-12">
          <div className="pt-6">
            <h1 className="pb-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Hi, I’m Mukesh
            </h1>
            <h2 className="text-lg prose text-gray-600 dark:text-gray-400">
              {`Welcome to my blog - ${siteMetadata.description}. I am IT enthusiast BEIT student. In my free time, I like developing `}
              <Link href="/projects">
                <a>side projects</a>
              </Link>
              {" and "}
              <Link href="/blog">
                <a>blogging</a>
              </Link>
              {" about them. Have a good read!"}
            </h2>
          </div>
          {/* <div className="flex items-center justify-center mx-2 my-12 w-96">
            <BlogNewsletterForm title="Stay updated, receive the latest post straight to your mailbox" />
          </div> */}
        </div>
        <h2 className="flex pb-6 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl md:text-5xl">
          Latest
        </h2>
        <hr className="border-gray-200 dark:border-gray-700" />
      </div>
    </>
  );
}
