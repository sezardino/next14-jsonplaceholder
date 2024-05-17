export const getUserData = async (id: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch user data");
  }

  return res.json();
};
