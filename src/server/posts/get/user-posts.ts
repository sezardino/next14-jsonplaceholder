export const getUserPostsData = async (id: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}&_start=0&_limit=9`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch user posts data");
  }

  return (await res.json()) as Post[];
};
