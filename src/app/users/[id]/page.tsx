import { Typography } from "@/components/base/Typography";
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

      <ul>
        {userPosts.map((post) => (
          <li key={post.id}>
            <Typography styling="h3">{post.title}</Typography>
            <Typography>{post.body}</Typography>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UserPage;
