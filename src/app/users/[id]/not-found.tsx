import { Typography } from "@/components/base/Typography";
import Link from "next/link";

type Params = {
  params: {
    id: string;
  };
};

const NotFound = () => {
  return (
    <>
      <header className="flex flex-col gap-2">
        <Link href="/users">
          <Typography styling="small">To users page</Typography>
        </Link>
        <Typography styling="h1">User not found</Typography>
      </header>
    </>
  );
};

export default NotFound;
