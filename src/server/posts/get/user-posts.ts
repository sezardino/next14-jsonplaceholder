export const getUserPostsData = async (
  id: string
): Promise<Post[] | undefined> => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}&_start=0&_limit=9`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) return undefined;

  return await res.json();
};
