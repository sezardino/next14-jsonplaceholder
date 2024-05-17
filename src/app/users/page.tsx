import { Typography } from "@/components/base/Typography";
import { getUsersData } from "@/server";
import Link from "next/link";

const UsersPage = async () => {
  const users = await getUsersData();

  return (
    <>
      <Typography styling="h1">Users Page</Typography>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              <Typography level="span">{user.name}</Typography>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;
