"use client";

import { useState } from 'react';
import { PageHeader } from '@/components/common/page-header';
import { ArticleCard } from '@/components/blog/article-card';
import { articlesData, Article } from '@/constants/mock-data';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Tag } from 'lucide-react';

const allTags = Array.from(new Set(articlesData.flatMap(a => a.tags)));

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const filteredArticles = articlesData.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTags = selectedTags.length === 0 || selectedTags.every(tag => article.tags.includes(tag));
    return matchesSearch && matchesTags;
  });

  return (
    <div className="space-y-8">
      <PageHeader
        title="CaffeineCode Blog"
        description="My thoughts and insights on .NET development, C#, software architecture, Azure, and technology trends in the Microsoft ecosystem."
      />
      <div className="container mx-auto px-4">
        {/* Search and Filter */}
        <div className="mb-8 p-6 bg-card rounded-lg shadow-md">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 text-base"
            />
          </div>
          <div className="flex items-center gap-2 mb-2">
            <Tag className="h-5 w-5 text-muted-foreground" />
            <h3 className="text-sm font-medium text-muted-foreground">Filter by Tags:</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {allTags.map(tag => (
              <Badge
                key={tag}
                variant={selectedTags.includes(tag) ? "default" : "secondary"}
                onClick={() => toggleTag(tag)}
                className="cursor-pointer transition-all hover:opacity-80 text-xs"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Article Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">No articles found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
