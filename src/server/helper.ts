import { ZodError, ZodSchema } from "zod";

type Params<T, Return> = {
  schema: ZodSchema<T>;
  action: (params: T) => Promise<Return>;
};

export const serverActionHelper = <T, Return>(
  params: Params<T, Return>
): ((params: unknown) => Promise<Return | undefined>) => {
  const { schema, action } = params;

  return async (params: unknown) => {
    try {
      const parsedParams = schema.parse(params);

      return await action(parsedParams);
    } catch (error) {
      if (error instanceof ZodError) {
        throw new Error(error.message);
      }
    }
  };
};
