import { Typography } from "@/components/base/Typography";
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-5">
      <Typography styling="h1">Hello World</Typography>

      <nav className="mt-2">
        <ul>
          <li>
            <Link href="/users">
              <Typography className="cursor-pointer">Users Page</Typography>
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
