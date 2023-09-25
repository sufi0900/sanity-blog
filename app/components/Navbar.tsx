import Link from "next/link";
import Themebutton from "./ThemeButton";

export default function Navbar() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex justify-between items-center w-full">
          <Link href="/" className="px-2">
            <h1 className="text-2xl font-medium">
              Jan <span className="text-blue-500">Blog</span>
            </h1>
          </Link>

          <Link href="/about" className="px-2">
            <h1 className="text-2xl font-medium">
              About <span className="text-blue-500"></span>
            </h1>
          </Link>

          <Link href="/post" className="px-2">
            <h1 className="text-2xl font-medium">
              blogs <span className="text-blue-500"></span>
            </h1>
          </Link>

          <Link href="/skills" className="px-2">
            <h1 className="text-2xl font-medium">
              skills <span className="text-blue-500"></span>
            </h1>
          </Link>

          <Link href="/project" className="px-2">
            <h1 className="text-2xl font-medium">
              <span className="text-blue-500"> projects</span>
            </h1>
          </Link>
          <Link href="/contact" className="px-2">
            <h1 className="text-2xl font-medium">
              <span className="text-blue-500"> contact</span>
            </h1>
          </Link>

          <Link href="https://sanity-blogs-app.sanity.studio/" className="px-2">
            <h1 className="text-2xl font-medium">
              Sanity <span className="text-blue-500">Studio</span>
            </h1>
          </Link>

          <Themebutton />
        </div>
      </div>
    </div>
  );
}
