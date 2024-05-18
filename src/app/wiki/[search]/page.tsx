import { WikiResultCard } from "@/components/modules/wiki/WikiResultCard";
import { getWikiResults } from "@/server/wiki";
import { Metadata } from "next";

type Props = { params: { search: string } };

export const WikiSearchPage = async (props: Props) => {
  const {
    params: { search },
  } = props;

  const result = await getWikiResults(search);
  const pages = Object.values(result?.query?.pages || {});

  return (
    <main className="mx-auto container">
      <h1>Search results for {search}</h1>

      {!!pages && pages.length && (
        <ul className="mt-4 flex flex-col gap-4">
          {pages.map((page) => (
            <li key={page.pageid}>
              <WikiResultCard wiki={page} />
            </li>
          ))}
        </ul>
      )}

      {(!result || !pages.length) && <p className="mt-4">No results found</p>}
    </main>
  );
};

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const {
    params: { search },
  } = props;

  const result = await getWikiResults(search);

  if (!result || !result.query?.pages?.length)
    return {
      title: "Search results",
    };

  return {
    title: `Wiki search results`,
  };
};

export default WikiSearchPage;
