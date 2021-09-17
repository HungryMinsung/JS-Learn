const quotes = [
    {
        quote: "황금 백만냥도 자식 하나 가르침만 못하다.",
        author: "안중근",
    },
    {
        quote: "무엇이든 넓게 경험하고, 파고들어 스스로를 귀한 존재로 만들어라",
        author: "세종대왕",
    },
    {
        quote: "두 가지 세 가지 일로 마음을 두 갈래 세 갈래 내는 일이 없어야 한다.",
        author: "이황",
    },
    {
        quote: "신은 용기있는자를 결코 버리지 않는다.",
        author: "켄러",
    },
    {
        quote: "1%의 가능성, 그것이 나의 길이다.",
        author: "나폴레옹",
    },
    {
        quote: "자신을 내 보여라. 그러면 재능이 드러날 것이다.",
        author: "발타사르 그라시안",
    },
    {
        quote: "이른 아침은 입에 황금을 물고 있다.",
        author: "벤자민 프랭클린",
    },
    {
        quote: "불행은 누가 진정한 친구가 아닌지를 보여준다.",
        author: "아리스토텔레스",
    },
    {
        quote: "완벽함이 아니라 탁월함을 위해서 애써라.",
        author: "H.잭슨 브라운 주니어",
    },
    {
        quote: "얼마나 많이 주는지보다 얼마나 많은 사랑을 담는지가 중요하다.",
        author: "마더 테레사",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
//0~9까지 array의 길이를 정해주는 램던함수

quote.innerText = todaysQuote.quote; 
author.innerText = todaysQuote.author;