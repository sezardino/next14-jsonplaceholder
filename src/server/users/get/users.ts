export const getUsersData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!res.ok) {
    throw new Error("Failed to fetch users data");
  }

  return (await res.json()) as User[];
};
