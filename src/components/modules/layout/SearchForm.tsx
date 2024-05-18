"use client";

import { IoRocket } from "react-icons/io5";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { cn } from "@/lib/utils";
import { ComponentPropsWithRef, FC, FormEvent, useState } from "react";

type Props = {
  onSearch: (value: string) => void;
  isResetOnSubmit?: boolean;
};

type SearchFormProps = ComponentPropsWithRef<"form"> & Props;

export const SearchForm: FC<SearchFormProps> = (props) => {
  const { onSearch, isResetOnSubmit, className, ...rest } = props;

  const [search, setSearch] = useState("");

  const submitHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    onSearch(search);

    if (isResetOnSubmit) {
      setSearch("");
    }
  };

  return (
    <form
      {...rest}
      className={cn("flex items-center gap-2", className)}
      onSubmit={submitHandler}
    >
      <Input
        type="text"
        value={search}
        onChange={(evt) => setSearch(evt.currentTarget.value)}
        placeholder="Search..."
      />
      <Button type="submit" aria-label="Search">
        <IoRocket />
      </Button>
    </form>
  );
};
