import { Typography } from "@/components/base/Typography";
import { PostCard } from "@/components/modules/post/PostCard";
import { getUserData, getUserPostsData, getUsersData } from "@/server";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FC } from "react";

type Params = {
  params: {
    id: string;
  };
};

const UserPage: FC<Params> = async ({ params: { id } }) => {
  const user = await getUserData(id);
  const userPosts = await getUserPostsData(id);

  if (!user || !userPosts) return notFound();

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

export const generateMetadata = async (params: Params): Promise<Metadata> => {
  const user = await getUserData(params.params.id);

  if (!user) return { title: "User not found" };

  return {
    title: user.name,
    description: user.email,
  };
};

export const generateStaticParams = async () => {
  const users = await getUsersData();

  if (!users) return [];

  return users.map((user) => ({ params: { id: user.id.toString() } }));
};

export default UserPage;
