import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { bundleMDX } from 'mdx-bundler';

const articlesDirectory = path.join(process.cwd(), 'app', 'articles');

export async function getArticle(slug: string) {
  const fullPath = path.join(articlesDirectory, `${slug}.mdx`);
  
  try {
    await fs.promises.access(fullPath, fs.constants.F_OK);
  } catch (err) {
    throw new Response('Not Found', { status: 404, statusText: 'No model found' });
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const { code } = await bundleMDX({
    source: content,
    cwd: path.join(process.cwd(), 'app', 'playsketches')
  });

  return {
    frontmatter: data,
    code,
  };
}

export async function getAllArticles() {
  const fileNames = fs.readdirSync(articlesDirectory);

  const allArticlesData = fileNames.map(fileName => {
    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    return {
      slug: fileName.replace(/\.mdx$/, ''),
      ...data,
    };
  });

  return allArticlesData;
}
