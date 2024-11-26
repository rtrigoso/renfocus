import { getAllPosts } from "@/lib/api";
import Link from "next/link";

export default function Home() {
  const allPosts = getAllPosts();

  return (
    <div>
      {allPosts.length > 0 && allPosts.map(post => (
        <Link key={post.slug} href={`/posts/${post.slug}`}>
          {post.title}
        </Link>
      ))}
    </div>
  );
}
