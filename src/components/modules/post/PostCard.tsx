import { Typography } from "@/components/base/Typography";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentProps, ForwardRefRenderFunction, forwardRef } from "react";

type Props = {
  post: Post;
};

export type PostCardProps = ComponentProps<"div"> & Props;

const PostCardComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  PostCardProps
> = (props, ref) => {
  const { post, className, ...rest } = props;

  return (
    <Card {...rest} ref={ref} className={cn("flex flex-col h-full", className)}>
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{post.body}</CardDescription>
      </CardContent>
      <CardFooter className="mt-auto flex flex-row justify-between gap-3">
        <Button asChild>
          <Link href={`/users/${post.userId}`}>
            <Typography styling="small">See all user posts</Typography>
          </Link>
        </Button>

        <Button asChild>
          <Link href={`/posts/${post.userId}`}>
            <Typography styling="small">See post</Typography>
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export const PostCard = forwardRef(PostCardComponent);
