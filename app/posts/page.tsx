import Link from 'next/link';
import { Post } from '@/app/types/Post'

async function getPosts(): Promise<Post[]> {
    const res = await fetch('http://localhost:3001/posts');
    const posts = await res.json();

    return posts;
}

export default async function PostsPage(){
const posts = await getPosts();

console.log(posts);
    return (
        <div>
            <h1>Posts Page</h1>

            {posts.map((post)=>(
                <article key={post.id}>
                    <h2>
                        <Link href={`/posts/${post.slug}`}>
                            {post.title}
                        </Link>
                    </h2>
                </article>
            ))}
        </div>
    )
}