import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Search, Share2, Heart, Copy, Check } from "lucide-react";
import { quotes, categories } from "@/data/quotes";
import { toast } from "sonner";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [likedQuotes, setLikedQuotes] = useState<Set<number>>(new Set());

  // Filter quotes based on search and category
  const filteredQuotes = useMemo(() => {
    return quotes.filter((quote) => {
      const matchesSearch =
        quote.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
        quote.author.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !selectedCategory || quote.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handleCopy = (text: string, id: number) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    toast.success("명언이 복사되었습니다!");
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleShare = (quote: string, author: string) => {
    const text = `"${quote}" - ${author}`;
    if (navigator.share) {
      navigator.share({
        title: "습관 명언",
        text: text,
      });
    } else {
      handleCopy(text, 0);
    }
  };

  const toggleLike = (id: number) => {
    const newLiked = new Set(likedQuotes);
    if (newLiked.has(id)) {
      newLiked.delete(id);
    } else {
      newLiked.add(id);
    }
    setLikedQuotes(newLiked);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-blue-100 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
              습관 명언 100선
            </h1>
            <p className="text-gray-600 text-lg">
              고3 수험생과 재수생을 위한 동기부여 플랫폼
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="명언이나 저자를 검색해보세요..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-3 text-base border-2 border-gray-200 focus:border-blue-500 rounded-lg"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-10">
            <h2 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">
              카테고리 선택
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
              <Button
                onClick={() => setSelectedCategory(null)}
                variant={selectedCategory === null ? "default" : "outline"}
                className="text-sm h-auto py-2 px-3 transition-all"
              >
                전체
              </Button>
              {categories.map((cat) => (
                <Button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  variant={selectedCategory === cat.key ? "default" : "outline"}
                  className="text-sm h-auto py-2 px-3 transition-all"
                  title={cat.label}
                >
                  <span className="mr-1">{cat.icon}</span>
                  <span className="hidden sm:inline">{cat.label.split(" ")[0]}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Results Info */}
          <div className="mb-6 text-sm text-gray-600">
            총 <span className="font-semibold text-blue-600">{filteredQuotes.length}</span>개의 명언이 있습니다.
          </div>

          {/* Quotes Grid */}
          <div className="space-y-4">
            {filteredQuotes.length > 0 ? (
              filteredQuotes.map((quote) => (
                <Card
                  key={quote.id}
                  className="p-6 border-l-4 border-l-blue-500 hover:shadow-lg transition-all duration-300 bg-white"
                >
                  <div className="flex flex-col gap-4">
                    {/* Quote Text */}
                    <blockquote className="text-lg font-medium text-gray-800 leading-relaxed">
                      "{quote.text}"
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-600 italic">— {quote.author}</p>
                      <span className="text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">
                        {quote.categoryKo}
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-2 border-t border-gray-100">
                      <Button
                        onClick={() => handleCopy(quote.text, quote.id)}
                        variant="ghost"
                        size="sm"
                        className="flex-1 text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                      >
                        {copiedId === quote.id ? (
                          <>
                            <Check className="w-4 h-4 mr-2" />
                            복사됨
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4 mr-2" />
                            복사
                          </>
                        )}
                      </Button>
                      <Button
                        onClick={() => handleShare(quote.text, quote.author)}
                        variant="ghost"
                        size="sm"
                        className="flex-1 text-gray-600 hover:text-green-600 hover:bg-green-50"
                      >
                        <Share2 className="w-4 h-4 mr-2" />
                        공유
                      </Button>
                      <Button
                        onClick={() => toggleLike(quote.id)}
                        variant="ghost"
                        size="sm"
                        className={`flex-1 ${
                          likedQuotes.has(quote.id)
                            ? "text-red-600 bg-red-50"
                            : "text-gray-600 hover:text-red-600 hover:bg-red-50"
                        }`}
                      >
                        <Heart
                          className="w-4 h-4 mr-2"
                          fill={likedQuotes.has(quote.id) ? "currentColor" : "none"}
                        />
                        {likedQuotes.has(quote.id) ? "찜됨" : "찜"}
                      </Button>
                    </div>
                  </div>
                </Card>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">검색 결과가 없습니다.</p>
                <p className="text-gray-400 text-sm mt-2">다른 검색어나 카테고리를 시도해보세요.</p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-gray-600 text-sm">
            <p className="mb-2">
              💡 매일 한 가지 명언을 선택하고 실천해보세요. 작은 습관이 모여 큰 변화를 만듭니다.
            </p>
            <p className="text-xs text-gray-500">
              © 2026 습관 명언 100선 | 수험생 여러분을 응원합니다
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
