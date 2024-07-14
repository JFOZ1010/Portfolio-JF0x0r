import React, { useEffect, useState } from "react";
import axios from "axios";

interface Post {
  title: string;
  link: string;
  pubDate: string;
  guid: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const getPostData = async () => {
    try {
      const response = await axios.get(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@juanfelipeoz.rar"
      );
      setPosts(response.data.items as Post[]); // Type assertion for clarity
    } catch (error) {
      console.error("Error fetching blog posts:", error);
    }
  };

  useEffect(() => {
    getPostData();
  }, []);

  
  const selectSpecificPosts = (posts: Post[]): Post[] => {
    const indices = [0, 4, 7, 9]; // Índices para los posts 1, 5, 8 y 9 (basado en índice 0)
    return indices
      .map(index => posts[index])
      .filter(post => post !== undefined);
  };

  const sortedPosts = posts.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());

  return (
    <div>
      <div className="grid grid-cols-2 gap-8 mb-5">
        {selectSpecificPosts(sortedPosts).map(post => (
          <div key={post.guid}>
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block m-auto max-w-sm p-6 h-full bg-gray-300 outline outline-offset-4 outline-2 outline-green-100 rounded-lg shadow hover:bg-gray-100 transition duration-300"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</h5>
              <p className="font-normal text-[10px] text-gray-700 dark:text-gray-400">Medium:@juanfelipeoz.rar</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;