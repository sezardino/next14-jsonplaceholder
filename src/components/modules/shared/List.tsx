import { ComponentProps, ForwardRefRenderFunction, forwardRef } from "react";

type Props = {};

export type ListProps = ComponentProps<"ul"> & Props;

export const ListComponent: ForwardRefRenderFunction<
  HTMLUListElement,
  ListProps
> = (props, ref) => {
  const { className, children, ...rest } = props;

  return (
    <ul
      {...rest}
      ref={ref}
      className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      {children}
    </ul>
  );
};

export const List = forwardRef(ListComponent);
