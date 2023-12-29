import Post from "./post";

type PostData = {
    id: number;
    postName: string;
    postAuthor: string;
}

export default function Page() {
    var posts = [{ id: 0, postName: "First post", postAuthor: "Spencer Hall" } as PostData,
                    { id: 1, postName: "All your base are belong to us", postAuthor: "Spencer Hall" } as PostData];

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <p>This is the home page.</p>
            {
                posts != null &&
                posts.map((post) => (
                    <Post key={post.id} props={post} />
                ))
            }
        </main> 
    );
}