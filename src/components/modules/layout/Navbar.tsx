"use client";

import { Typography } from "@/components/base/Typography";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ComponentPropsWithRef, FC } from "react";
import { SearchForm } from "./SearchForm";

type Props = {};

export type NavbarProps = ComponentPropsWithRef<"nav"> & Props;

export const Navbar: FC<NavbarProps> = (props) => {
  const { className, ...rest } = props;
  const router = useRouter();

  const searchHandler = (search: string) => {
    router.push(`/wiki/${search}`);
  };

  return (
    <nav {...rest} className={cn("bg-slate-100 py-4", className)}>
      <div className="container mx-auto flex items-row flex-wrap gap-3 justify-between">
        <Typography level="span" styling="lead" isMuted>
          <Link href="/">Next14-jsonplaceholder</Link>
        </Typography>

        <SearchForm onSearch={searchHandler} isResetOnSubmit />
      </div>
    </nav>
  );
};
