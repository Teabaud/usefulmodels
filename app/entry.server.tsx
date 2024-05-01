import * as ReactDOMServer from 'react-dom/server';
import { RemixServer } from '@remix-run/react';
import type { EntryContext } from '@remix-run/node';
import theme from './theme';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';


export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) {
  const html = ReactDOMServer.renderToString(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RemixServer context={remixContext} url={request.url} />
    </ThemeProvider>
  );

  responseHeaders.set('Content-Type', 'text/html');
    return new Response(`<!DOCTYPE html>${html}`, {
      status: responseStatusCode,
      headers: responseHeaders,
    });
  }
  