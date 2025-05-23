export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  createdAt: string;
  tags: string[];
  author: string;
  imageUrl?: string;
} 