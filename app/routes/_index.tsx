import { Box, Link, List, ListItem, Typography } from "@mui/material";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <Box>
      <Typography variant="h2">Welcome to Remix</Typography>
      <List>
        <ListItem>
          <Link
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </Link>
        </ListItem>
        <ListItem>
          <Link
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </Link>
        </ListItem>
        <ListItem>
          <Link
            target="_blank"
            href="https://remix.run/docs"
            rel="noreferrer"
          >
            Remix Docs
          </Link>
        </ListItem>
      </List>
    </Box>
  );
}
