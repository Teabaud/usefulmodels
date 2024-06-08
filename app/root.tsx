import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";
import React, { useLayoutEffect } from "react";
import { EmotionCache, withEmotionCache } from "@emotion/react";
import { Box, Typography } from "@mui/material";

import ClientStyleContext from "./utils/ClientStyleContext";
import Sidebar from "./components/Sidebar"
import theme from "./theme/theme"


interface DocumentProps {
  children: React.ReactNode;
  title?: string;
}

export const Document = withEmotionCache(({ children, title }: DocumentProps, emotionCache: EmotionCache) => {
  const clientStyleData = React.useContext(ClientStyleContext);

  // Only executed on client
  useLayoutEffect(() => {
    // re-link sheet container
    emotionCache.sheet.container = document.head;
    // re-inject tags
    const tags = emotionCache.sheet.tags;
    emotionCache.sheet.flush();
    tags.forEach((tag) => {
      // eslint-disable-next-line no-underscore-dangle
      (emotionCache.sheet as any)._insertTag(tag);
    });
    // reset cache to reapply global styles
    clientStyleData.reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content={theme.palette.primary.main} />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
        <meta name="emotion-insertion-point" content="emotion-insertion-point"/>
      </head>
      <body>
        <Sidebar>
          <Box
            display="flex"
            justifyContent="center"
            maxWidth="105ch"
            margin="auto"
          >
            {children}
          </Box>
        </Sidebar>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
});


export default function App() {
  return (
    <Document>
        <Outlet />
    </Document>
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
      <Document title={`${error.status} ${error.statusText}`}>
        <Box>
          <Typography variant="h1">{error.status}: {error.statusText}</Typography>
          {message}
        </Box>
      </Document>
    );
  }

  if (error instanceof Error) {
    console.error(error);
    return (
      <Document title={`${error.name}`}>
        <div>
          <h1>There was an error</h1>
          <p>{error.message}</p>
          <hr />
          <p>Hey, developer, you should replace this with what you want your users to see.</p>
        </div>
      </Document>
    );
  }

  return <h1>Unknown Error</h1>;
}
