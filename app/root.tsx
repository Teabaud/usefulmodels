import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";
import PersistentDrawerLeft from "./components/sidebar"
import React from "react";


interface DocumentProps {
  children: React.ReactNode;
  title?: string;
}

export function Layout({ children, title }: DocumentProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
};


export default function App() {
  return (
    <PersistentDrawerLeft>
      <Outlet />
    </PersistentDrawerLeft>
  )
}


// https://remix.run/docs/en/main/route/error-boundary
export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    let message;
    switch (error.status) {
      case 401:
        message = <p>Oops! Looks like you tried to visit a page that you do not have access to.</p>;
        break;
      case 404:
        message = <p>Oops! Looks like you tried to visit a page that does not exist.</p>;
        break;

      default:
        throw new Error(error.data || error.statusText);
    }

    return (
      <Layout title={`${error.status} ${error.statusText}`}>
        <h1>
          {error.status}: {error.statusText}
        </h1>
        {message}
      </Layout>
    );
  }

  if (error instanceof Error) {
    console.error(error);
    return (
      <Layout title="Error!">
        <div>
          <h1>There was an error</h1>
          <p>{error.message}</p>
          <hr />
          <p>Hey, developer, you should replace this with what you want your users to see.</p>
        </div>
      </Layout>
    );
  }

  return <h1>Unknown Error</h1>;
}
