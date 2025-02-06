import Image from "next/image";
import SearchForm from "../../components/SearchForm";
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";
import { client } from "@/sanity/lib/client";
import { STARTUPS_QUERY } from "@/sanity/lib/query";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {

  const query = (await searchParams).query;

  const params={search:query || null}

const {data:posts} = await sanityFetch({query:STARTUPS_QUERY,params});
// const posts = await client.fetch(STARTUPS_QUERY);

  console.log(JSON.stringify(posts,null,2));

  // const posts = [
  //   {
  //     _id: 1,
  //     _createdAt: new Date(),
  //     author: {
  //       name: 'Bhavik',
  //       id: 1
  //     },
  //     description: 'description hai',
  //     image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapers.com%2Fsuper-cool-pictures&psig=AOvVaw011heqUGuODwcexAIGLd9m&ust=1738812542502000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIjvm9HLq4sDFQAAAAAdAAAAABAE",
  //     category: 'this is category',
  //     title: 'Tittle',
  //     views: 32
  //   }
  // ]

  return (
    <>
      <section className="pink_container">

        <h1 className="heading">
          Pitch you idea,
          Connect with Entrepreneurs
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches
        </p>

        <SearchForm query={query} />


      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>

<SanityLive/>

    </>

  );
}
