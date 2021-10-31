import Link from "next/link";

const Custom404 = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 flex items-center">
      <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
        <div className="max-w-md">
          <div className="text-5xl text-gray-900 dark:text-white font-bold my-6">
            404
          </div>
          <p className="text-2xl md:text-3xl font-light leading-normal text-gray-900 dark:text-gray-300 mb-3">
            Sorry we couldn't find this page.{" "}
          </p>
          <p className="mb-8 text-gray-900 dark:text-gray-100">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <Link href="/">
            <a className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-green-600 dark:bg-green-700 active:bg-gray-600 hover:bg-green-500 dark:hover:bg-green-600">
              back to homepage
            </a>
          </Link>
        </div>
        <div className="max-w-lg"></div>
      </div>
    </div>
  );
};

export default Custom404;
