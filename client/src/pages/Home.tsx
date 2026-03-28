import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Search, Share2, Heart, Copy, Check, Bookmark } from "lucide-react";
import { matureQuotes, matureSections } from "@/data/mature-quotes";
import { toast } from "sonner";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"all" | "liked">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [likedQuotes, setLikedQuotes] = useState<Set<number>>(new Set());

  // Filter quotes based on search and section
  const filteredQuotes = useMemo(() => {
    let quotes = matureQuotes;

    // Filter by liked status if in liked tab
    if (activeTab === "liked") {
      quotes = quotes.filter((q) => likedQuotes.has(q.id));
    }

    return quotes.filter((quote) => {
      const matchesSearch =
        quote.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (quote.author && quote.author.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (quote.source && quote.source.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesSection = !selectedSection || quote.section === selectedSection;
      return matchesSearch && matchesSection;
    });
  }, [searchQuery, selectedSection, activeTab, likedQuotes]);

  const handleCopy = (text: string, id: number) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    toast.success("명언이 복사되었습니다!");
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleShare = (quote: string, source?: string, author?: string) => {
    const attribution = author ? ` - ${author}` : source ? ` - ${source}` : "";
    const text = `"${quote}"${attribution}`;
    if (navigator.share) {
      navigator.share({
        title: "수험생 응원 명언",
        text: text,
      });
    } else {
      navigator.clipboard.writeText(text);
      toast.success("클립보드에 복사되었습니다!");
    }
  };

  const handleLike = (id: number) => {
    const newLiked = new Set(likedQuotes);
    if (newLiked.has(id)) {
      newLiked.delete(id);
      toast.success("찜을 해제했습니다.");
    } else {
      newLiked.add(id);
      toast.success("명언을 찜했습니다!");
    }
    setLikedQuotes(newLiked);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-100">
        <div className="container py-6">
          <div className="text-center mb-6">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
              수험생 응원 명언 500선
            </h1>
            <p className="text-gray-600">대학생 수준의 성숙한 명언으로 당신의 꿈을 응원합니다</p>
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-2 mb-6 border-b border-blue-200">
            <Button
              variant={activeTab === "all" ? "default" : "ghost"}
              onClick={() => {
                setActiveTab("all");
                setSelectedSection(null);
              }}
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600"
            >
              <span className="text-lg">📚 전체 명언</span>
            </Button>
            <Button
              variant={activeTab === "liked" ? "default" : "ghost"}
              onClick={() => {
                setActiveTab("liked");
                setSelectedSection(null);
              }}
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600"
            >
              <span className="text-lg">❤️ 내 명언 ({likedQuotes.size})</span>
            </Button>
          </div>

          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder="명언 검색 (텍스트, 저자, 출처)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 py-3 text-base border-2 border-blue-200 focus:border-blue-500 rounded-lg"
            />
          </div>

          {/* Section Filter */}
          {activeTab === "all" && (
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedSection === null ? "default" : "outline"}
                onClick={() => setSelectedSection(null)}
                className="rounded-full"
              >
                전체 ({matureQuotes.length})
              </Button>
              {matureSections.map((section) => {
                const count = matureQuotes.filter((q) => q.section === section.key).length;
                return (
                  <Button
                    key={section.key}
                    variant={selectedSection === section.key ? "default" : "outline"}
                    onClick={() => setSelectedSection(section.key)}
                    className="rounded-full"
                  >
                    {section.label} ({count})
                  </Button>
                );
              })}
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-12">
        {filteredQuotes.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-lg text-gray-500 mb-4">
              {activeTab === "liked"
                ? "찜한 명언이 없습니다. 마음에 드는 명언을 찜해보세요!"
                : "검색 결과가 없습니다."}
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery("");
                setSelectedSection(null);
                if (activeTab === "liked") {
                  setActiveTab("all");
                }
              }}
            >
              초기화
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredQuotes.map((quote) => (
              <Card
                key={quote.id}
                className="group hover:shadow-lg transition-all duration-300 border-blue-200 bg-white/50 backdrop-blur-sm hover:bg-white/80 p-6 rounded-xl flex flex-col justify-between"
              >
                {/* Quote Text */}
                <div className="mb-4">
                  <p className="text-lg font-semibold text-gray-800 mb-3 leading-relaxed">
                    "{quote.text}"
                  </p>

                  {/* Source Info */}
                  <div className="text-sm text-gray-600 space-y-1">
                    {quote.author && (
                      <p className="font-medium text-indigo-600">— {quote.author}</p>
                    )}
                    {quote.source && (
                      <p className="text-gray-500">
                        {quote.sourceType === "movie" ? "🎬 영화" : "🎭 드라마"} {quote.source}
                      </p>
                    )}
                    {quote.sectionKo && (
                      <p className="text-xs text-gray-400 uppercase tracking-wide">
                        {quote.sectionKo}
                      </p>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-4 border-t border-blue-100">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleCopy(quote.text, quote.id)}
                    className="flex-1 text-gray-600 hover:text-blue-600"
                    title="복사"
                  >
                    {copiedId === quote.id ? (
                      <>
                        <Check className="w-4 h-4 mr-1" />
                        복사됨
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 mr-1" />
                        복사
                      </>
                    )}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      handleShare(quote.text, quote.source, quote.author)
                    }
                    className="flex-1 text-gray-600 hover:text-blue-600"
                    title="공유"
                  >
                    <Share2 className="w-4 h-4 mr-1" />
                    공유
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleLike(quote.id)}
                    className="flex-1"
                    title={likedQuotes.has(quote.id) ? "찜 해제" : "찜"}
                  >
                    <Heart
                      className={`w-4 h-4 mr-1 ${
                        likedQuotes.has(quote.id)
                          ? "fill-red-500 text-red-500"
                          : "text-gray-600"
                      }`}
                    />
                    {likedQuotes.has(quote.id) ? "찜됨" : "찜"}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-6 bg-white/50 backdrop-blur-sm rounded-lg border border-blue-100">
            <p className="text-3xl font-bold text-blue-600">{matureQuotes.length}</p>
            <p className="text-sm text-gray-600 mt-2">총 명언 수</p>
          </div>
          <div className="p-6 bg-white/50 backdrop-blur-sm rounded-lg border border-blue-100">
            <p className="text-3xl font-bold text-indigo-600">
              {matureSections.length}
            </p>
            <p className="text-sm text-gray-600 mt-2">카테고리</p>
          </div>
          <div className="p-6 bg-white/50 backdrop-blur-sm rounded-lg border border-blue-100">
            <p className="text-3xl font-bold text-red-600">{likedQuotes.size}</p>
            <p className="text-sm text-gray-600 mt-2">찜한 명언</p>
          </div>
          <div className="p-6 bg-white/50 backdrop-blur-sm rounded-lg border border-blue-100">
            <p className="text-3xl font-bold text-purple-600">
              {filteredQuotes.length}
            </p>
            <p className="text-sm text-gray-600 mt-2">검색 결과</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-blue-100 bg-white/50 backdrop-blur-sm mt-16">
        <div className="container py-8 text-center text-gray-600">
          <p>
            고3 수험생과 재수생을 위한 응원의 말씀입니다.
          </p>
          <p className="text-sm mt-2">
            © 2026 수험생 응원 명언 | 당신의 꿈을 응원합니다
          </p>
        </div>
      </footer>
    </div>
  );
}
