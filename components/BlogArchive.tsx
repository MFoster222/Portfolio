import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Link from 'next/link';

const posts = [
  { id: 1, title: 'Getting Started with Next.js', date: '2023-05-15', slug: 'getting-started-with-nextjs' },
  { id: 2, title: 'The Power of Tailwind CSS', date: '2023-06-02', slug: 'power-of-tailwind-css' },
  { id: 3, title: 'Building Scalable APIs with Node.js', date: '2023-06-20', slug: 'building-scalable-apis-nodejs' },
  { id: 4, title: 'React Hooks Explained', date: '2023-07-05', slug: 'react-hooks-explained' },
  { id: 5, title: 'Introduction to GraphQL', date: '2023-07-18', slug: 'introduction-to-graphql' },
  { id: 6, title: 'Optimizing Web Performance', date: '2023-08-01', slug: 'optimizing-web-performance' },
];

export default function BlogArchive() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <Link href={`/blog/${post.slug}`} key={post.id}>
          <Card className="neubrutalism hover:translate-x-1 hover:translate-y-1 transition-transform">
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>{post.date}</CardDescription>
            </CardHeader>
          </Card>
        </Link>
      ))}
    </div>
  );
}