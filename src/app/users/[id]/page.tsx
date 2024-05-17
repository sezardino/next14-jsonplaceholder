import { Typography } from "@/components/base/Typography";
import { PostCard } from "@/components/modules/post/PostCard";
import { getUserData, getUserPostsData } from "@/server";
import Link from "next/link";
import { FC } from "react";

type Params = {
  params: {
    id: string;
  };
};

const UserPage: FC<Params> = async ({ params: { id } }) => {
  const user = await getUserData(id);
  const userPosts = await getUserPostsData(id);

  return (
    <>
      <header className="flex flex-col gap-2">
        <Link href="/users">
          <Typography styling="small">To users page</Typography>
        </Link>
        <Typography styling="h2">{user.name}</Typography>
      </header>

      <ul className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {userPosts.map((post) => (
          <li key={post.id}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default UserPage;
