interface BlogPost {
  title: string;
  date: string;
  content: string;
}

const blogPosts: Record<string, BlogPost> = {
  'getting-started-with-nextjs': {
    title: 'Getting Started with Next.js',
    date: '2023-05-15',
    content: '<p>Next.js is a powerful React framework that makes it easy to build server-side rendered and statically generated web applications. In this post, we\'ll explore the basics of Next.js and how to get started with your first project.</p>',
  },
  'power-of-tailwind-css': {
    title: 'The Power of Tailwind CSS',
    date: '2023-06-02',
    content: '<p>Tailwind CSS is a utility-first CSS framework that allows you to rapidly build custom user interfaces. We\'ll dive into the benefits of using Tailwind and how it can speed up your development process.</p>',
  },
  'building-scalable-apis-nodejs': {
    title: 'Building Scalable APIs with Node.js',
    date: '2023-06-20',
    content: '<p>Node.js is an excellent choice for building scalable and performant APIs. In this article, we\'ll discuss best practices for designing and implementing APIs using Node.js and Express.</p>',
  },
};

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts[slug];
}