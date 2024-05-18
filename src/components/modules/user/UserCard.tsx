"use client";

import { Avatar } from "@/components/ui/Avatar";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";

import { cn } from "@/lib/utils";
import { AvatarFallback } from "@radix-ui/react-avatar";
import Link from "next/link";
import { ComponentProps, ForwardRefRenderFunction, forwardRef } from "react";

type Props = {
  user: User;
};

export type UserCardProps = ComponentProps<"div"> & Props;

const UserCardComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  UserCardProps
> = (props, ref) => {
  const { user, className, ...rest } = props;

  return (
    <Card {...rest} ref={ref} className={cn(className)}>
      <CardHeader className="flex flex-row items-center gap-3">
        <Avatar>
          <AvatarFallback className="w-full h-full flex items-center justify-center bg-slate-200">
            {user.name[0]}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-1">
          <CardTitle>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </CardTitle>
          <CardDescription>{user.email}</CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
};

export const UserCard = forwardRef(UserCardComponent);
