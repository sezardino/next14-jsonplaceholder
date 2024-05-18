import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import {
  ComponentPropsWithoutRef,
  ForwardRefRenderFunction,
  forwardRef,
} from "react";

type Props = {
  wiki: WikiResult;
};

export type WikiResultCardProps = ComponentPropsWithoutRef<"div"> & Props;

const WikiResultCardComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  WikiResultCardProps
> = (props, ref) => {
  const { wiki, className, ...rest } = props;

  return (
    <Card {...rest} ref={ref} className={cn(className)}>
      <CardHeader className="flex flex-row items-center gap-3">
        {wiki.thumbnail && (
          <Image
            src={wiki.thumbnail?.source}
            height={wiki.thumbnail?.height}
            width={wiki.thumbnail?.width}
            alt={wiki.title}
          />
        )}
        <div className="flex flex-col gap-1">
          <CardTitle>
            <Link
              target="_blank"
              rel="noopener"
              href={`https://en.wikipedia.org/?curid=${wiki.pageid}`}
            >
              {wiki.title}
            </Link>
          </CardTitle>
          <CardDescription>{wiki.extract}</CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
};

export const WikiResultCard = forwardRef(WikiResultCardComponent);
