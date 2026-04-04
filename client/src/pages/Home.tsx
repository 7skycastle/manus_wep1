import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Search, Share2, Heart, Copy, Check } from "lucide-react";
import { quotes1000 } from "@/data/quotes-1000";
import { toast } from "sonner";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"all" | "liked">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [likedQuotes, setLikedQuotes] = useState<Set<number>>(new Set());

  // Get unique categories and types
  const categories = useMemo(() => {
    return Array.from(new Set(quotes1000.map((q) => q.category)));
  }, []);

  const types = useMemo(() => {
    return [
      { id: "foreign-movie", label: "해외 영화" },
      { id: "foreign-author", label: "해외 명사" },
      { id: "korean-movie", label: "국내 영화" },
      { id: "korean-author", label: "국내 명사" },
    ];
  }, []);

  // Filter quotes based on search, category, and type
  const filteredQuotes = useMemo(() => {
    let quotes = quotes1000;

    // Filter by liked status if in liked tab
    if (activeTab === "liked") {
      quotes = quotes.filter((q, idx) => likedQuotes.has(idx));
    }

    return quotes.filter((quote, idx) => {
      const matchesSearch =
        quote.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
        quote.source.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !selectedCategory || quote.category === selectedCategory;
      const matchesType = !selectedType || quote.type === selectedType;
      return matchesSearch && matchesCategory && matchesType;
    });
  }, [searchQuery, selectedCategory, selectedType, activeTab, likedQuotes]);

  const handleCopy = (text: string, id: number) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    toast.success("명언이 복사되었습니다!");
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleShare = (quote: string, source: string) => {
    const text = `"${quote}" - ${source}`;
    if (navigator.share) {
      navigator.share({
        title: "수험생 응원 명언 1000선",
        text: text,
      });
    } else {
      navigator.clipboard.writeText(text);
      toast.success("공유 텍스트가 복사되었습니다!");
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-blue-100">
        <div className="container py-3">
          {/* Tabs and Search in one line */}
          <div className="flex gap-3 items-center mb-3">
            <Button
              variant={activeTab === "all" ? "default" : "outline"}
              onClick={() => setActiveTab("all")}
              className="gap-2 flex-shrink-0"
            >
              📚 전체 명언
            </Button>
            <Button
              variant={activeTab === "liked" ? "default" : "outline"}
              onClick={() => setActiveTab("liked")}
              className="gap-2 flex-shrink-0"
            >
              ❤️ 내 명언 ({likedQuotes.size})
            </Button>
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <Input
                placeholder="명언 검색 (텍스트, 저자, 출처)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-2 border-blue-200 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-0.5">
            {/* Type Filter */}
            <Button
              variant={selectedType === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedType(null)}
              className="text-xs px-2 py-1 h-8"
            >
              전체 ({quotes1000.length})
            </Button>
            {types.map((type) => (
              <Button
                key={type.id}
                variant={selectedType === type.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedType(type.id as any)}
                className="text-xs px-2 py-1 h-8"
              >
                {type.label} (
                {quotes1000.filter((q) => q.type === type.id).length})
              </Button>
            ))}
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="text-xs px-2 py-1 h-8"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container py-8">
        {filteredQuotes.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">검색 결과가 없습니다.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredQuotes.map((quote, idx) => {
              const quoteIdx = quotes1000.indexOf(quote);
              const isLiked = likedQuotes.has(quoteIdx);
              const isCopied = copiedId === quoteIdx;

              return (
                <Card
                  key={idx}
                  className="p-3 hover:shadow-lg transition-all duration-300 border-blue-100 hover:border-blue-300 bg-white/50 backdrop-blur-sm flex flex-col"
                >
                  {/* Quote Text */}
                  <p className="text-2xl font-semibold mb-4 text-gray-900 leading-relaxed">
                    "{quote.text}"
                  </p>

                  {/* Source and Category in one line */}
                  <div className="flex items-center justify-between mb-2 gap-2">
                    <p className="text-xs text-gray-600">
                      <span className="inline-block mr-1">
                        {quote.type === "foreign-movie" && "🎬"}
                        {quote.type === "foreign-author" && "✍️"}
                        {quote.type === "korean-movie" && "🎭"}
                        {quote.type === "korean-author" && "📖"}
                      </span>
                      {quote.source}
                    </p>
                    <span className="inline-block px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full flex-shrink-0">
                      {quote.category}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleCopy(quote.text, quoteIdx)}
                      className="flex-1 gap-2"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-4 h-4" /> 복사됨
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" /> 복사
                        </>
                      )}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleShare(quote.text, quote.source)}
                      className="flex-1 gap-2"
                    >
                      <Share2 className="w-4 h-4" /> 공유
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleLike(quoteIdx)}
                      className={`flex-1 gap-2 ${isLiked ? "text-red-500" : ""}`}
                    >
                      <Heart
                        className="w-4 h-4"
                        fill={isLiked ? "currentColor" : "none"}
                      />
                      찜
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        )}

        {/* Results Count */}
        <div className="text-center mt-12 text-gray-600">
          <p>
            총 <span className="font-bold text-blue-600">{filteredQuotes.length}</span>개의
            명언을 찾았습니다
          </p>
        </div>
      </div>
    </div>
  );
}
