import { ReactNode, useEffect, useState } from "react";
import { get } from "./util/http";
import BlogPosts, { BlogPost } from "./components/BlogPosts";
import fetchingImg from "./assets/data-fetching.png";
import ErrorMessage from "./components/ErrorMessage";

type RawDataBlogPost = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

function App() {
  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>();
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      try {
        const data = (await get(
          "https://jsonplaceholder.typicode.com/posts"
        )) as RawDataBlogPost[];

        const blogPosts: BlogPost[] = data.map((postData) => {
          return {
            id: postData.id,
            title: postData.title,
            text: postData.body,
          };
        });

        setFetchedPosts(blogPosts);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      }
      setIsFetching(false);
    }

    fetchPosts();
  }, []);

  if (error) {
    return <ErrorMessage text={error} />;
  }

  const content: ReactNode = fetchedPosts ? (
    <BlogPosts posts={fetchedPosts} />
  ) : (
    <p id="loading-fallback">Fetching posts...</p>
  );

  return (
    <main>
      <img src={fetchingImg} alt="Fetching data" />
      {content}
    </main>
  );
}

export default App;
