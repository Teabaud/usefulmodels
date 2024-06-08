import { getMDXComponent } from 'mdx-bundler/client';
import { useMemo } from 'react';
import { useLoaderData } from '@remix-run/react';
import { Divider, Stack, Typography } from "@mui/material";
import { Paragraph } from "~/components/Text";
import { MdxMuiComponents } from "~/theme/MdxMuiComponents"

import { getArticle } from '~/utils/mdx.server';
import { LoaderFunctionArgs, MetaFunction } from '@remix-run/node';

interface LoaderFunctionArgsWithSlug extends LoaderFunctionArgs {
  params: {
    slug: string;
  } & LoaderFunctionArgs['params'];
}

export let loader = async ({ params }: LoaderFunctionArgsWithSlug)=> {
  return await getArticle(params.slug);
};

export const meta: MetaFunction<typeof loader> = ({ data, }) => {
  const { frontmatter } = data as Awaited<ReturnType<typeof loader>>
  return [{
    title: `Useful Models | ${frontmatter.title}`,
    description: "Let's get some useful tools!",
  }];
};

export default function Article() {
  const { frontmatter, code } = useLoaderData<typeof loader>();
  const ArticleContent = useMemo(() => getMDXComponent(code), [code])

  return (
    <Stack spacing={2}>
      <Typography variant="h1" display="flex" justifyContent="center">{frontmatter.title}</Typography>
      <Paragraph>{frontmatter.summary}</Paragraph>
      <Divider />
      <ArticleContent components={MdxMuiComponents}/>
    </Stack>
  )
}