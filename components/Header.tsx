import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="bg-primary text-primary-foreground py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">DevPortfolio</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Button variant="ghost" asChild><Link href="/">Home</Link></Button></li>
            <li><Button variant="ghost" asChild><Link href="/projects">Projects</Link></Button></li>
            <li><Button variant="ghost" asChild><Link href="/skills">Skills</Link></Button></li>
            <li><Button variant="ghost" asChild><Link href="/blog">Blog</Link></Button></li>
            <li><Button variant="ghost" asChild><Link href="/contact">Contact</Link></Button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}