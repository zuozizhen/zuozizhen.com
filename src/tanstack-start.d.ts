/* eslint-disable @typescript-eslint/no-empty-object-type, @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */
import type { AnyContext, AnyRoute } from "@tanstack/router-core";

type RouteMethodHandlerCtx<TParams = Record<string, string>> = {
  request: Request;
  params: TParams;
  pathname: string;
  context: unknown;
  next: (options?: { context?: unknown }) => { isNext: true; context: unknown };
};

type RouteMethodHandler = (ctx: RouteMethodHandlerCtx) => Response | undefined | Promise<Response | undefined>;

declare module "@tanstack/router-core" {
  interface FilebaseRouteOptionsInterface<
    TRegister,
    TParentRoute extends AnyRoute = AnyRoute,
    TId extends string = string,
    TPath extends string = string,
    TSearchValidator = undefined,
    TParams = {},
    TLoaderDeps extends Record<string, any> = {},
    TLoaderFn = undefined,
    TRouterContext = {},
    TRouteContextFn = AnyContext,
    TBeforeLoadFn = AnyContext,
    TRemountDepsFn = AnyContext,
    TSSR = unknown,
    TServerMiddlewares = unknown,
    THandlers = undefined,
  > {
    server?: {
      handlers?: Partial<Record<"ANY" | "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "OPTIONS" | "HEAD", RouteMethodHandler>>;
    };
  }
}
