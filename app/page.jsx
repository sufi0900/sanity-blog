import Link from "next/link";
import { client } from "./lib/sanity";
import Head from "next/head";

async function getData() {
  const query = `*[_type == "post"]`;

  const data = await client.fetch(query);

  return data;
}
export const metadata = {
  title: "home",
  description: "Generated by create next app",
};
export default async function IndexPage() {
  const data = await getData();

  return (
    <>
      <Head>
        <title>My Skills - Sufian Mustafa</title>
        <meta
          name="description"
          content="Explore Sufian Mustafa's proficiency in various technologies and tools. Discover his expertise in web development, including ReactJS, Node.js, HTML5, CSS3, and more."
        />
        <link rel="canonical" href="https://sufianmustafa.com/#Skill" />
      </Head>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            All Posts
          </h1>
        </div>

        <ul>
          {data.map((post) => (
            <li key={post._id} className="py-4">
              <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                <div>
                  <p className="text-base font-medium leading-6 text-teal-500">
                    {new Date(post._createdAt).toISOString().split("T")[0]}
                  </p>
                </div>

                <Link href={`/post/${post.slug.current}`} prefetch>
                  <div className="space-y-3 xl:col-span-3">
                    <div>
                      <h3 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                        {post.title}
                      </h3>
                    </div>

                    <p className="prose max-w-none text-gray-500 dark:text-gray-400 line-clamp-2">
                      {post.overview}
                    </p>
                  </div>
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
