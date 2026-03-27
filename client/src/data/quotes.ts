export interface Quote {
  id: number;
  text: string;
  author: string;
  category: string;
  categoryKo: string;
}

export const quotes: Quote[] = [
  // 1. 작게 시작하기 & 시작하기
  { id: 1, text: "천리 길도 한 걸음부터 시작된다.", author: "Lao Tzu", category: "starting", categoryKo: "작게 시작하기" },
  { id: 2, text: "있는 곳에서 시작하라. 가진 것을 사용하라. 할 수 있는 일을 하라.", author: "Arthur Ashe", category: "starting", categoryKo: "작게 시작하기" },
  { id: 3, text: "이 작은 시작을 멸시하지 말라, 주님은 일이 시작되는 것을 기뻐하신다.", author: "The Bible, Zechariah 4:10", category: "starting", categoryKo: "작게 시작하기" },
  { id: 4, text: "위대한 일은 충동으로 이루어지지 않고, 작은 일들이 모여서 이루어진다.", author: "Vincent van Gogh", category: "starting", categoryKo: "작게 시작하기" },
  { id: 5, text: "작은 도끼질이 큰 참나무를 쓰러뜨린다.", author: "Benjamin Franklin", category: "starting", categoryKo: "작게 시작하기" },
  { id: 6, text: "지금부터 1년 후에 당신은 오늘 시작했기를 바랄지도 모른다.", author: "Karen Lamb", category: "starting", categoryKo: "작게 시작하기" },
  { id: 7, text: "시작하기 위해 위대할 필요는 없지만, 위대해지기 위해 시작해야 한다.", author: "Zig Ziglar", category: "starting", categoryKo: "작게 시작하기" },
  { id: 8, text: "앞서 나가는 비결은 시작하는 것이다.", author: "Mark Twain", category: "starting", categoryKo: "작게 시작하기" },
  { id: 9, text: "작은 행동이 계획된 큰 행동보다 낫다.", author: "Peter Marshall", category: "starting", categoryKo: "작게 시작하기" },
  { id: 10, text: "가장 오래 걸리는 일은 시작되지 않은 일이다.", author: "J.R.R. Tolkien", category: "starting", categoryKo: "작게 시작하기" },

  // 2. 일관성 & 출석
  { id: 11, text: "우리는 반복적으로 하는 것이 우리 자신이다. 그러므로 탁월함은 행위가 아니라 습관이다.", author: "Will Durant", category: "consistency", categoryKo: "일관성 & 출석" },
  { id: 12, text: "성공은 작은 노력들의 합이며, 매일 반복된다.", author: "Robert Collier", category: "consistency", categoryKo: "일관성 & 출석" },
  { id: 13, text: "가끔 하는 것이 우리 삶을 형성하는 것이 아니다. 꾸준히 하는 것이 우리 삶을 형성한다.", author: "Tony Robbins", category: "consistency", categoryKo: "일관성 & 출석" },
  { id: 14, text: "위대한 일은 힘이 아니라 인내로 이루어진다.", author: "Samuel Johnson", category: "consistency", categoryKo: "일관성 & 출석" },
  { id: 15, text: "인내로 달팽이는 방주에 도달했다.", author: "Charles Spurgeon", category: "consistency", categoryKo: "일관성 & 출석" },
  { id: 16, text: "장기적인 일관성이 단기적인 강도를 이긴다.", author: "Bruce Lee", category: "consistency", categoryKo: "일관성 & 출석" },
  { id: 17, text: "먼저 영감을 잊어라. 습관이 더 믿을 만하다. 영감이 있든 없든 습관이 당신을 지탱할 것이다.", author: "Octavia Butler", category: "consistency", categoryKo: "일관성 & 출석" },
  { id: 18, text: "한 방울 한 방울 물 항아리가 채워진다.", author: "The Dhammapada", category: "consistency", categoryKo: "일관성 & 출석" },
  { id: 19, text: "에너지와 끈기가 모든 것을 정복한다.", author: "Benjamin Franklin", category: "consistency", categoryKo: "일관성 & 출석" },
  { id: 20, text: "우리가 쉽게 하고자 하는 것은 먼저 부지런히 배워야 한다.", author: "Samuel Johnson", category: "consistency", categoryKo: "일관성 & 출석" },

  // 3. 규율 & 자기 통제
  { id: 21, text: "규율은 목표와 성취 사이의 다리이다.", author: "Jim Rohn", category: "discipline", categoryKo: "규율 & 자기 통제" },
  { id: 22, text: "첫 번째이자 최고의 승리는 자신을 정복하는 것이다.", author: "Plato", category: "discipline", categoryKo: "규율 & 자기 통제" },
  { id: 23, text: "미래는 오늘 당신이 하는 일에 달려 있다.", author: "Mahatma Gandhi", category: "discipline", categoryKo: "규율 & 자기 통제" },
  { id: 24, text: "자제력은 힘이다. 올바른 생각은 숙달이다. 침착함은 힘이다.", author: "James Allen", category: "discipline", categoryKo: "규율 & 자기 통제" },
  { id: 25, text: "우리가 할 수 있는 일은 하지 않을 수 있는 힘도 가지고 있다.", author: "Aristotle", category: "discipline", categoryKo: "규율 & 자기 통제" },
  { id: 26, text: "자신을 지배하지 못하는 사람은 자유롭지 않다.", author: "Epictetus", category: "discipline", categoryKo: "규율 & 자기 통제" },
  { id: 27, text: "무규율한 사람은 기분, 욕구, 열정의 노예이다.", author: "Stephen R. Covey", category: "discipline", categoryKo: "규율 & 자기 통제" },
  { id: 28, text: "우리는 모두 두 가지 중 하나의 고통을 겪어야 한다: 규율의 고통 또는 후회와 실망의 고통.", author: "Jim Rohn", category: "discipline", categoryKo: "규율 & 자기 통제" },
  { id: 29, text: "진정한 자유는 규율에 의해 자유롭게 된 마음 없이는 불가능하다.", author: "Mortimer J. Adler", category: "discipline", categoryKo: "규율 & 자기 통제" },
  { id: 30, text: "위대한 사람들의 삶을 읽으면서, 그들이 처음으로 이긴 승리는 자신에 대한 것이었다는 것을 알게 되었다.", author: "Harry S. Truman", category: "discipline", categoryKo: "규율 & 자기 통제" },

  // 4. 정체성 & 당신이 되는 사람
  { id: 31, text: "Character is simply habit long continued.", author: "Plutarch", category: "identity", categoryKo: "정체성 & 당신이 되는 사람" },
  { id: 32, text: "The chains of habit are too weak to be felt until they are too strong to be broken.", author: "Samuel Johnson", category: "identity", categoryKo: "정체성 & 당신이 되는 사람" },
  { id: 33, text: "Habits change into character.", author: "Ovid", category: "identity", categoryKo: "정체성 & 당신이 되는 사람" },
  { id: 34, text: "Sow a thought, and you reap an act; sow an act, and you reap a habit; sow a habit, and you reap a character; sow a character, and you reap a destiny.", author: "Ralph Waldo Emerson", category: "identity", categoryKo: "정체성 & 당신이 되는 사람" },
  { id: 35, text: "Our character is basically a composite of our habits. Because they are consistent, often unconscious patterns, they constantly, daily, express our character.", author: "Stephen R. Covey", category: "identity", categoryKo: "정체성 & 당신이 되는 사람" },
  { id: 36, text: "First we form habits, then they form us.", author: "Rob Gilbert", category: "identity", categoryKo: "정체성 & 당신이 되는 사람" },
  { id: 37, text: "You are what you do, not what you say you'll do.", author: "Carl Jung", category: "identity", categoryKo: "정체성 & 당신이 되는 사람" },
  { id: 38, text: "Good habits, once established, are just as hard to break as bad habits.", author: "Robert Puller", category: "identity", categoryKo: "정체성 & 당신이 되는 사람" },
  { id: 39, text: "We become what we repeatedly do.", author: "Aristotle", category: "identity", categoryKo: "정체성 & 당신이 되는 사람" },
  { id: 40, text: "A nail is driven out by another nail; habit is overcome by habit.", author: "Desiderius Erasmus", category: "identity", categoryKo: "정체성 & 당신이 되는 사람" },

  // 5. 시스템, 루틴 & 환경
  { id: 41, text: "당신은 목표의 수준으로 올라가지 않는다. 당신은 시스템의 수준으로 떨어진다.", author: "James Clear", category: "systems", categoryKo: "시스템, 루틴 & 환경" },
  { id: 42, text: "동기는 당신을 시작하게 한다. 습관은 당신을 계속 가게 한다.", author: "Jim Ryun", category: "systems", categoryKo: "시스템, 루틴 & 환경" },
  { id: 43, text: "인생의 후반부는 전반부에 습득한 습관으로 이루어져 있다.", author: "Fyodor Dostoevsky", category: "systems", categoryKo: "시스템, 루틴 & 환경" },
  { id: 44, text: "우리는 먼저 우리의 습관을 만들고, 그 다음에 우리의 습관이 우리를 만든다.", author: "John Dryden", category: "systems", categoryKo: "시스템, 루틴 & 환경" },
  { id: 45, text: "우리는 도구를 만들고, 그 후에 도구가 우리를 만든다.", author: "Marshall McLuhan", category: "systems", categoryKo: "시스템, 루틴 & 환경" },
  { id: 46, text: "지적인 사람에게 있어서 일상은 야망의 표시이다.", author: "W.H. Auden", category: "systems", categoryKo: "시스템, 루틴 & 환경" },
  { id: 47, text: "나쁜 습관을 예방하는 것이 그것을 깨는 것보다 쉽다.", author: "Benjamin Franklin", category: "systems", categoryKo: "시스템, 루틴 & 환경" },
  { id: 48, text: "나쁜 습관은 편안한 침대와 같다: 들어가기는 쉽지만, 나오기는 어렵다.", author: "Anonymous", category: "systems", categoryKo: "시스템, 루틴 & 환경" },
  { id: 49, text: "성공한 사람들은 단순히 성공적인 습관을 가진 사람들이다.", author: "Brian Tracy", category: "systems", categoryKo: "시스템, 루틴 & 환경" },
  { id: 50, text: "일상적인 것들이 꾸준히 이루어지면 비범한 결과를 낳는다.", author: "Anonymous", category: "systems", categoryKo: "시스템, 루틴 & 환경" },

  // 6. 동기, 목적 & "왜"
  { id: 51, text: "살아야 할 이유를 아는 사람은 거의 모든 방법을 견딜 수 있다.", author: "Friedrich Nietzsche", category: "motivation", categoryKo: "동기, 목적 & 왜" },
  { id: 52, text: "사람들은 자신의 미래를 결정하지 않는다. 그들은 자신의 습관을 결정하고, 그 습관이 그들의 미래를 결정한다.", author: "F.M. Alexander", category: "motivation", categoryKo: "동기, 목적 & 왜" },
  { id: 53, text: "이기고자 하는 의지는 이기기 위해 준비하고자 하는 의지만큼 중요하지 않다.", author: "Bobby Knight", category: "motivation", categoryKo: "동기, 목적 & 왜" },
  { id: 54, text: "성공은 매일 연습하는 몇 가지 간단한 규율에 불과하다.", author: "Jim Rohn", category: "motivation", categoryKo: "동기, 목적 & 왜" },
  { id: 55, text: "당신의 가치는 당신의 운명이 된다.", author: "Mahatma Gandhi", category: "motivation", categoryKo: "동기, 목적 & 왜" },
  { id: 56, text: "목적과 방향이 없다면 노력과 용기는 충분하지 않다.", author: "John F. Kennedy", category: "motivation", categoryKo: "동기, 목적 & 왜" },
  { id: 57, text: "어느 항구로 항해하는지 모른다면, 어떤 바람도 유리하지 않다.", author: "Seneca", category: "motivation", categoryKo: "동기, 목적 & 왜" },
  { id: 58, text: "목표를 달성함으로써 얻는 것보다 목표를 달성함으로써 당신이 되는 것이 더 중요하다.", author: "Zig Ziglar", category: "motivation", categoryKo: "동기, 목적 & 왜" },
  { id: 59, text: "영혼은 생각의 색으로 물든다.", author: "Marcus Aurelius", category: "motivation", categoryKo: "동기, 목적 & 왜" },
  { id: 60, text: "당신이 하지 않으면 아무것도 작동하지 않는다.", author: "Maya Angelou", category: "motivation", categoryKo: "동기, 목적 & 왜" },

  // 7. 실패, 실수 및 재시작
  { id: 61, text: "우리의 가장 큰 영광은 결코 넘어지지 않는 것이 아니라, 넘어질 때마다 일어서는 것이다.", author: "Confucius", category: "resilience", categoryKo: "실패, 실수 및 재시작" },
  { id: 62, text: "일곱 번 넘어져도 여덟 번 일어나라.", author: "Japanese Proverb", category: "resilience", categoryKo: "실패, 실수 및 재시작" },
  { id: 63, text: "나는 실패한 것이 아니다. 단지 작동하지 않는 10,000가지 방법을 찾은 것이다.", author: "Thomas Edison", category: "resilience", categoryKo: "실패, 실수 및 재시작" },
  { id: 64, text: "실수를 저지르고 그것을 수정하지 않는 사람은 또 다른 실수를 저지르고 있는 것이다.", author: "Confucius", category: "resilience", categoryKo: "실패, 실수 및 재시작" },
  { id: 65, text: "실패는 더 지혜롭게 다시 시작할 수 있는 기회일 뿐이다.", author: "Henry Ford", category: "resilience", categoryKo: "실패, 실수 및 재시작" },
  { id: 66, text: "성공은 최종적인 것이 아니고, 실패는 치명적인 것이 아니다: 계속할 용기가 중요하다.", author: "Winston Churchill", category: "resilience", categoryKo: "실패, 실수 및 재시작" },
  { id: 67, text: "멈추지 않는 한 얼마나 천천히 가는지는 중요하지 않다.", author: "Confucius", category: "resilience", categoryKo: "실패, 실수 및 재시작" },
  { id: 68, text: "모든 스트라이크는 다음 홈런에 더 가까워지게 한다.", author: "Babe Ruth", category: "resilience", categoryKo: "실패, 실수 및 재시작" },
  { id: 69, text: "어려움은 노동이 몸을 강화하듯이 마음을 강화한다.", author: "Seneca", category: "resilience", categoryKo: "실패, 실수 및 재시작" },
  { id: 70, text: "세상은 고통으로 가득 차 있지만, 그것을 극복하는 것으로도 가득 차 있다.", author: "Helen Keller", category: "resilience", categoryKo: "실패, 실수 및 재시작" },

  // 8. 연습, 학습 및 개선
  { id: 71, text: "나는 여전히 배우고 있다.", author: "Michelangelo", category: "learning", categoryKo: "연습, 학습 및 개선" },
  { id: 72, text: "지식에 대한 투자는 최고의 이자를 낸다.", author: "Benjamin Franklin", category: "learning", categoryKo: "연습, 학습 및 개선" },
  { id: 73, text: "연습은 잘하게 된 후에 하는 것이 아니라, 잘하게 만드는 것이다.", author: "Malcolm Gladwell", category: "learning", categoryKo: "연습, 학습 및 개선" },
  { id: 74, text: "우리는 반복적으로 연습하는 것이 된다.", author: "Anonymous", category: "learning", categoryKo: "연습, 학습 및 개선" },
  { id: 75, text: "배움은 마음을 지치게 하지 않는다.", author: "Leonardo da Vinci", category: "learning", categoryKo: "연습, 학습 및 개선" },
  { id: 76, text: "실수는 발견의 관문이다.", author: "James Joyce", category: "learning", categoryKo: "연습, 학습 및 개선" },
  { id: 77, text: "배우지만 생각하지 않는 자는 길을 잃는다. 생각하지만 배우지 않는 자는 큰 위험에 처한다.", author: "Confucius", category: "learning", categoryKo: "연습, 학습 및 개선" },
  { id: 78, text: "내가 더 많이 연습할수록, 운이 더 좋아진다.", author: "Gary Player", category: "learning", categoryKo: "연습, 학습 및 개선" },
  { id: 79, text: "변화는 모든 진정한 배움의 최종 결과이다.", author: "Leo Buscaglia", category: "learning", categoryKo: "연습, 학습 및 개선" },
  { id: 80, text: "내일 죽을 것처럼 살아라. 영원히 살 것처럼 배워라.", author: "Mahatma Gandhi", category: "learning", categoryKo: "연습, 학습 및 개선" },

  // 9. 건강, 에너지 및 자기 관리 습관
  { id: 81, text: "몸을 돌보세요. 그것은 당신이 살 수 있는 유일한 장소입니다.", author: "Jim Rohn", category: "health", categoryKo: "건강, 에너지 및 자기 관리" },
  { id: 82, text: "일찍 자고 일찍 일어나는 것은 사람을 건강하고 부유하며 현명하게 만듭니다.", author: "Benjamin Franklin", category: "health", categoryKo: "건강, 에너지 및 자기 관리" },
  { id: 83, text: "몸을 건강하게 유지하는 것은 의무입니다… 그렇지 않으면 우리는 마음을 강하고 명확하게 유지할 수 없습니다.", author: "Buddha", category: "health", categoryKo: "건강, 에너지 및 자기 관리" },
  { id: 84, text: "신체 운동할 시간이 없다고 생각하는 사람들은 조만간 질병을 위한 시간을 찾아야 할 것입니다.", author: "Edward Stanley", category: "health", categoryKo: "건강, 에너지 및 자기 관리" },
  { id: 85, text: "행복은 좋은 건강과 나쁜 기억 그 이상이 아닙니다.", author: "Albert Schweitzer", category: "health", categoryKo: "건강, 에너지 및 자기 관리" },
  { id: 86, text: "최고의 부는 건강이다.", author: "Virgil", category: "health", categoryKo: "건강, 에너지 및 자기 관리" },
  { id: 87, text: "거의 모든 것은 몇 분 동안 플러그를 뽑으면 다시 작동합니다, 당신도 포함하여.", author: "Anne Lamott", category: "health", categoryKo: "건강, 에너지 및 자기 관리" },
  { id: 88, text: "휴식은 게으름이 아니다.", author: "John Lubbock", category: "health", categoryKo: "건강, 에너지 및 자기 관리" },
  { id: 89, text: "자기 돌봄은 자기 방종이 아니라 자기 보존이다.", author: "Audre Lorde", category: "health", categoryKo: "건강, 에너지 및 자기 관리" },
  { id: 90, text: "평온한 마음은 내적 힘과 자신감을 가져다 주므로, 이는 건강에 매우 중요합니다.", author: "Dalai Lama", category: "health", categoryKo: "건강, 에너지 및 자기 관리" },

  // 10. 장기 비전과 복리 효과
  { id: 91, text: "습관은 규칙보다 안전합니다; 당신은 그것들을 지켜볼 필요가 없습니다. 그리고 당신은 그것들을 유지할 필요도 없습니다. 그것들이 당신을 지켜줍니다.", author: "Frank Hall Crane", category: "vision", categoryKo: "장기 비전과 복리 효과" },
  { id: 92, text: "모든 큰 일은 작은 시작에서 옵니다. 모든 습관의 씨앗은 하나의 작은 결정입니다.", author: "James Clear", category: "vision", categoryKo: "장기 비전과 복리 효과" },
  { id: 93, text: "우리는 반복적으로 하는 것이 우리 자신입니다. 그러므로 탁월함은 행위가 아니라 습관입니다.", author: "Will Durant", category: "vision", categoryKo: "장기 비전과 복리 효과" },
  { id: 94, text: "나무를 심기에 가장 좋은 시기는 20년 전이었습니다. 두 번째로 좋은 시기는 지금입니다.", author: "Chinese Proverb", category: "vision", categoryKo: "장기 비전과 복리 효과" },
  { id: 95, text: "대부분의 사람들은 1년 안에 할 수 있는 일을 과대평가하고 10년 안에 할 수 있는 일을 과소평가합니다.", author: "Bill Gates", category: "vision", categoryKo: "장기 비전과 복리 효과" },
  { id: 96, text: "매일 당신은 진보를 이룰 수 있습니다. 매 단계가 결실을 맺을 수 있습니다. 그러나 당신 앞에는 점점 길어지고, 점점 높아지고, 점점 개선되는 길이 펼쳐질 것입니다.", author: "Winston Churchill", category: "vision", categoryKo: "장기 비전과 복리 효과" },
  { id: 97, text: "매일 일관되게 반복되는 작은 규율은 시간이 지나면서 천천히 얻어진 위대한 성취로 이어집니다.", author: "John C. Maxwell", category: "vision", categoryKo: "장기 비전과 복리 효과" },
  { id: 98, text: "오늘 한 가지 인용문을 선택하세요. 오늘 그 중 가장 작은 버전을 실행하세요. 당신의 미래 자아가 이미 당신에게 감사하고 있습니다.", author: "OpenL Team", category: "vision", categoryKo: "장기 비전과 복리 효과" },
  { id: 99, text: "습관은 당신의 하루를 조용히 쓰는 보이지 않는 패턴입니다.", author: "OpenL Blog", category: "vision", categoryKo: "장기 비전과 복리 효과" },
  { id: 100, text: "그것들이 작을 때는 눈치채지 못하지만, 시간이 지나면 그것들은 당신의 삶의 이야기가 됩니다.", author: "OpenL Blog", category: "vision", categoryKo: "장기 비전과 복리 효과" },
];

export const categories = [
  { key: "starting", label: "작게 시작하기", icon: "🚪" },
  { key: "consistency", label: "일관성 & 출석", icon: "📅" },
  { key: "discipline", label: "규율 & 자기 통제", icon: "🎯" },
  { key: "identity", label: "정체성 & 당신이 되는 사람", icon: "🧬" },
  { key: "systems", label: "시스템, 루틴 & 환경", icon: "🧱" },
  { key: "motivation", label: "동기, 목적 & 왜", icon: "🔥" },
  { key: "resilience", label: "실패, 실수 및 재시작", icon: "🩹" },
  { key: "learning", label: "연습, 학습 및 개선", icon: "📚" },
  { key: "health", label: "건강, 에너지 및 자기 관리", icon: "💚" },
  { key: "vision", label: "장기 비전과 복리 효과", icon: "📈" },
];
