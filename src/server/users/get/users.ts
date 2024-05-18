export const getUsersData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 60 },
  });

  if (!res.ok) return undefined;

  return (await res.json()) as User[];
};
