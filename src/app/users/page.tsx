import { Typography } from "@/components/base/Typography";
import { List } from "@/components/modules/shared/List";
import { UserCard } from "@/components/modules/user/UserCard";
import { getUsersData } from "@/server";
import { notFound } from "next/navigation";

const UsersPage = async () => {
  const users = await getUsersData();

  if (!users) return notFound();

  return (
    <>
      <Typography styling="h1">Users Page</Typography>

      <List className="mt-4">
        {users.map((user) => (
          <li key={user.id}>
            <UserCard user={user} />
          </li>
        ))}
      </List>
    </>
  );
};

export default UsersPage;
