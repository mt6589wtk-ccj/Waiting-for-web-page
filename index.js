console.log('Happy developing ✨')

// 監聽使用者點擊事件
document.addEventListener('click', () => {
    console.log('使用者已互動');
    // 可以在這裡執行其他互動邏輯，例如觸發某些功能
});
const quizData = [
    { question: "哪一部動畫的主角是魯夫？", choices: ["火影忍者", "航海王", "鬼滅之刃", "柯南"], answer: "航海王" },
    { question: "《你的名字》是哪位導演的作品？", choices: ["宮崎駿", "新海誠", "細田守", "押井守"], answer: "新海誠" },
    { question: "《鬼滅之刃》中炭治郎使用的呼吸法是？", choices: ["風之呼吸", "水之呼吸", "火之呼吸", "雷之呼吸"], answer: "水之呼吸" },
    { question: "《七龍珠》的主角是誰？", choices: ["達爾", "悟空", "悟飯", "比克"], answer: "悟空" },
    { question: "《死亡筆記本》中，L的真名是？", choices: ["路克", "夜神月", "L Lawliet", "松田"], answer: "L Lawliet" },
    { question: "《進擊的巨人》中誰是女巨人？", choices: ["艾倫", "亞妮", "米卡莎", "莎夏"], answer: "亞妮" },
    { question: "《名偵探柯南》的主角真實身份是？", choices: ["服部平次", "工藤新一", "怪盜基德", "赤井秀一"], answer: "工藤新一" },
    { question: "《火影忍者》中，九尾的名字是？", choices: ["九尾妖狐", "尾獸", "九喇嘛", "大蛇丸"], answer: "九喇嘛" },
    { question: "《刀劍神域》中，桐人的真實名字是？", choices: ["桐谷和人", "結城明日奈", "亞絲娜", "橘公司"], answer: "桐谷和人" },
    { question: "《CLANNAD》是哪間動畫公司的作品？", choices: ["京都動畫", "Ufotable", "MAPPA", "J.C.STAFF"], answer: "京都動畫" },
    { question: "《魔法少女小圓》中的QB是什麼？", choices: ["外星生物", "貓咪", "魔女", "人類"], answer: "外星生物" },
    { question: "《Re:從零開始的異世界生活》中，雷姆的頭髮顏色是？", choices: ["藍色", "粉紅色", "白色", "綠色"], answer: "藍色" },
    { question: "《鬼滅之刃》中，誰是音柱？", choices: ["煉獄杏壽郎", "宇髄天元", "時透無一郎", "胡蝶忍"], answer: "宇髄天元" },
    { question: "《JOJO的奇妙冒險》第三部主角是？", choices: ["喬瑟夫", "承太郎", "喬納森", "喬魯諾"], answer: "承太郎" },
    { question: "《櫻桃小丸子》中，小丸子的祖父名字是？", choices: ["友藏", "信雄", "健太", "裕一"], answer: "友藏" },
    { question: "《妖精的尾巴》中主角是？", choices: ["納茲", "洛基", "艾爾莎", "格雷"], answer: "納茲" },
    { question: "《灌籃高手》中櫻木花道的背號是？", choices: ["10", "11", "14", "7"], answer: "10" },
    { question: "《銀魂》中，主角的名字是？", choices: ["土方十四郎", "坂田銀時", "志村新八", "桂小太郎"], answer: "坂田銀時" },
    { question: "《暗殺教室》中，殺老師的顏色是？", choices: ["黃色", "紅色", "黑色", "藍色"], answer: "黃色" },
    { question: "《未聞花名》中，面麻的本名是？", choices: ["本間芽衣子", "安城鳴子", "鶴見知利子", "宿海仁太"], answer: "本間芽衣子" },
    { question: "《涼宮春日的憂鬱》中，女主角春日是什麼社團的？", choices: ["SOS團", "新聞社", "文藝部", "偵探社"], answer: "SOS團" },
    { question: "《化物語》的作者是？", choices: ["西尾維新", "虛淵玄", "奈須蘑菇", "木城幸人"], answer: "西尾維新" },
    { question: "《天元突破 紅蓮螺巖》的主角是誰？", choices: ["卡米那", "西蒙", "渚薰", "上條當麻"], answer: "西蒙" },
    { question: "《EVA》中初號機的駕駛是？", choices: ["碇真嗣", "綾波零", "明日香", "渚薰"], answer: "碇真嗣" },
    { question: "《鋼之鍊金術師》中，愛德華失去的是？", choices: ["手與腳", "眼與腳", "手與心臟", "腳與聲音"], answer: "手與腳" },
    { question: "《排球少年》中，日向翔陽是什麼位置？", choices: ["主攻手", "舉球員", "自由球員", "副攻手"], answer: "主攻手" },
    { question: "《黑子的籃球》中，黑子是？", choices: ["影子球員", "主力前鋒", "中鋒", "隊長"], answer: "影子球員" },
    { question: "《偶像活動》中，星宮莓的夢想是？", choices: ["成為頂尖偶像", "開餐廳", "當畫家", "經營花店"], answer: "成為頂尖偶像" },
    { question: "《精靈寶可夢》中皮卡丘的屬性是？", choices: ["電", "火", "草", "水"], answer: "電" },
    { question: "《烙印勇士》的作者是？", choices: ["三浦建太郎", "井上井恵", "車田正美", "尾田榮一郎"], answer: "三浦建太郎" },
    { question: "《漂流少年》中，主角被困在哪？", choices: ["漂浮學校", "月球", "網路世界", "森林裡"], answer: "漂浮學校" },
    { question: "《咒術迴戰》中虎杖悠仁體內封印的是誰？", choices: ["兩面宿儺", "五條悟", "七海建人", "伏黑惠"], answer: "兩面宿儺" },
    { question: "《約定的夢幻島》中，三位主角之一是？", choices: ["艾瑪", "瑞貝卡", "尤娜", "莉莉"], answer: "艾瑪" },
    { question: "《東京喰種》中，金木研的眼睛變化是？", choices: ["一隻變紅", "雙眼變黑", "眼睛發光", "變成貓眼"], answer: "一隻變紅" },
    { question: "《Dr.STONE》的男主角是誰？", choices: ["石神千空", "大木大樹", "獅子王司", "七海龍水"], answer: "石神千空" },
    { question: "《天氣之子》是誰的動畫作品？", choices: ["新海誠", "細田守", "湯淺政明", "押井守"], answer: "新海誠" },
    { question: "《Vivy》任務是？", choices: ["讓AI歌聲感動人類", "阻止戰爭", "研究AI", "逃出城市"], answer: "讓AI歌聲感動人類" },
    { question: "《SPY×FAMILY》中，安妮亞會什麼能力？", choices: ["讀心術", "瞬間移動", "預知未來", "變身"], answer: "讀心術" },
    { question: "《鏈鋸人》中，波奇塔原本是什麼惡魔？", choices: ["鏈鋸惡魔", "狗惡魔", "憤怒惡魔", "劍惡魔"], answer: "鏈鋸惡魔" },
    { question: "《Lycoris Recoil》中，千束是？", choices: ["殺手少女", "教師", "科學家", "警察"], answer: "殺手少女" },
    { question: "《輝夜姬想讓人告白》中，輝夜的對手是？", choices: ["白銀御行", "石上優", "藤原千花", "伊井野彌子"], answer: "白銀御行" },
    { question: "《異世界舅舅》中舅舅最愛的遊戲是？", choices: ["SEGA", "任天堂", "PS", "XBOX"], answer: "SEGA" },
    { question: "《寶可夢旅途》中，小豪最想收服的是？", choices: ["夢幻", "超夢", "噴火龍", "雷丘"], answer: "夢幻" },
    { question: "《女神異聞錄5》的主角代號是？", choices: ["Joker", "Ace", "King", "Fox"], answer: "Joker" },
    { question: "《Fate》中Saber真實身份是？", choices: ["亞瑟王", "蘭斯洛特", "梅林", "吉爾伽美什"], answer: "亞瑟王" },
    { question: "《盾之勇者成名錄》中，盾之勇者是？", choices: ["岩谷尚文", "天草四郎", "槍之勇者", "劍之勇者"], answer: "岩谷尚文" },
    { question: "「櫻桃小丸子」小丸子的好朋友叫什麼？", choices: ["花輪", "小杉", "山田", "竹下"], answer: "山田" },
    { question: "《銀之匙》主角八軒勇吾就讀的是哪種學校？", choices: ["農業高中", "商業高中", "體校", "美術高中"], answer: "農業高中" },
    { question: "《旋風管家》中女主角的名字是？", choices: ["三千院凪", "桂言葉", "久遠寺有珠", "高坂桐乃"], answer: "三千院凪" },
    { question: "《Code Geass》裡，魯路修使用的能力叫？", choices: ["Geass", "Shinigami Eye", "Stand", "Spirit Bomb"], answer: "Geass" },
    { question: "《青之驅魔師》中，兄弟講台詞「我是撒旦之子」的是？", choices: ["奧村燐", "奧村雪男", "志摩金造", "勝呂千尋"], answer: "奧村燐" },
    { question: "《寄生獸》中，主角泉新一被右手寄生的名字是？", choices: ["米基", "米吉", "米克", "米奇"], answer: "米吉" },
    { question: "《刀劍神域 Alicization》中主要場景是？", choices: ["Underworld", "Floating City", "Avalon", "Gun Gale Online"], answer: "Underworld" },
    { question: "《遊戲王》中使用卡片“青眼白龍”的是？", choices: ["海馬瀨人", "武藤遊戲", "城之內克也", "海馬瀨人"], answer: "海馬瀨人" },
    { question: "《四月是你的謊言》中，女主角小提琴手叫？", choices: ["宮園香", "渚", "若葉", "花澤"], answer: "宮園香" },
    { question: "《七大罪》團隊裡的團長是？", choices: ["梅麗奧達斯", "班", "高柏", "黛安"], answer: "梅麗奧達斯" },
    { question: "《暗殺教室》中，老師的外觀像？", choices: ["黃色章魚", "粉紅豬", "綠色青蛙", "紅色螞蟻"], answer: "黃色章魚" },
    { question: "《小魔女學園》中主角的名字是？", choices: ["阿梓", "菲涅", "蘇菲", "夏露露"], answer: "蘇菲" },
    { question: "《魔女宅急便》中，小黑貓叫什麼名字？", choices: ["吉吉", "塔塔", "喵喵", "露露"], answer: "吉吉" },
    { question: "《風之谷》的導演是？", choices: ["宮崎駿", "高畑勳", "細田守", "新海誠"], answer: "宮崎駿" },
    { question: "《龍貓》中，妹妹的名字是？", choices: ["梅", "美", "明", "未"], answer: "梅" },
    { question: "《崖上的波妞》背景是？", choices: ["海邊小鎮", "大都市", "森林", "雪山"], answer: "海邊小鎮" },
    { question: "《秒速五厘米》的導演？", choices: ["新海誠", "細田守", "宮崎駿", "高畑勳"], answer: "新海誠" },
    { question: "《星際牛仔》中清道夫獵人叫什麼？", choices: ["Spike Spiegel", "Jet Black", "Ed", "Faye"], answer: "Spike Spiegel" },
    { question: "《黑之契約者》中，主角名為？", choices: ["戴恩·克羅斯", "克洛洛", "艾恩斯", "黑崎"], answer: "戴恩·克羅斯" },
    { question: "《攻殼機動隊》中，少校是誰？", choices: ["草薙素子", "巴特", "巴特曼", "巴爾"], answer: "草薙素子" },
    { question: "《寄宿學校的朱麗葉》中女主角朱麗葉來自？", choices: ["帕爾馬王國", "威爾特王國", "東雅王國", "拉普拉斯王國"], answer: "帕爾馬王國" },
    { question: "《幽遊白書》中飛影使用的是？", choices: ["妖狐壺", "冰結界", "烏鴉蛙", "妖刀霞"], answer: "妖刀霞" },
    { question: "《未聞花名》中面麻和主角的朋友？", choices: ["宿海仁太", "安城鳴子", "本間芽衣子", "鶴見知利子"], answer: "鶴見知利子" },
    { question: "《魔卡少女櫻》中，主角名字是？", choices: ["木之本櫻", "大道寺知世", "月歌桃香", "李小狼"], answer: "木之本櫻" },
    { question: "《幽靈公主》的導演？", choices: ["宮崎駿", "細田守", "新海誠", "高畑勳"], answer: "宮崎駿" },
    { question: "《影之詩》中是哪一部作品？", choices: ["手機卡牌", "電視劇", "漫畫", "電影"], answer: "手機卡牌" },
    { question: "《蠟筆小新》中，小新的妹妹叫？", choices: ["小葵", "小瑤", "小美", "小冬"], answer: "小葵" },
    { question: "《哆啦A夢》中，四維鏡可以？", choices: ["穿越時空", "變身", "變小", "飛行"], answer: "穿越時空" },
    { question: "《文豪野犬》中，探偵社的社長是？", choices: ["太宰治", "中島敦", "織田作之助", "泉鏡花"], answer: "太宰治" },
    { question: "《未來日記》中，主角之一名字是？", choices: ["我妻由乃", "春日野穹", "仲村由理", "高坂穹"], answer: "我妻由乃" },
    { question: "《航海王》中，索隆的劍術流派是？", choices: ["一刀流", "三刀流", "雙刀流", "居合斬"], answer: "三刀流" },
    { question: "《你的名字》中，瀧與三葉第一次意識到交換身體的方式是？", choices: ["夢境", "訊息交換", "手機", "筆記本"], answer: "筆記本" },
    { question: "《鬼滅之刃》中，煉獄杏壽郎是什麼柱？", choices: ["炎柱", "音柱", "風柱", "岩柱"], answer: "炎柱" },
    { question: "《七龍珠》中，悟空的賽亞人名字是？", choices: ["卡卡羅特", "貝吉塔", "塔列斯", "那帕"], answer: "卡卡羅特" },
    { question: "《進擊的巨人》中，艾倫的父親是誰？", choices: ["葛利夏", "里維", "札克雷", "艾爾文"], answer: "葛利夏" },
    { question: "《名偵探柯南》中，怪盜基德的真實身份是？", choices: ["黑羽快斗", "服部平次", "赤井秀一", "安室透"], answer: "黑羽快斗" },
    { question: "《火影忍者》中，卡卡西的寫輪眼來自誰？", choices: ["帶土", "鼬", "佐助", "斑"], answer: "帶土" },
    { question: "《刀劍神域》中，亞絲娜在遊戲中的暱稱是？", choices: ["閃光", "女神", "劍姬", "紅髮"], answer: "閃光" },
    { question: "《CLANNAD》中，岡崎朋也最終與誰結婚？", choices: ["古河渚", "坂上智代", "藤林杏", "伊吹風子"], answer: "古河渚" },
    { question: "《Re:從零開始的異世界生活》中，艾蜜莉亞的種族是？", choices: ["半精靈", "人類", "精靈", "魔族"], answer: "半精靈" },
    { question: "《JOJO》第三部中，承太郎的替身能力叫什麼？", choices: ["白金之星", "世界", "紫煙之王", "瘋狂鑽石"], answer: "白金之星" },
    { question: "《暗殺教室》中，殺老師最怕的是什麼？", choices: ["水", "火", "雷", "女生"], answer: "水" },
    { question: "《未聞花名》中，面麻為何過世？", choices: ["溺水事故", "生病", "車禍", "火災"], answer: "溺水事故" },
    { question: "《EVA》中，明日香的國籍是？", choices: ["德國", "日本", "美國", "英國"], answer: "德國" },
    { question: "《黑子的籃球》中，火神大我來自哪裡？", choices: ["美國", "日本", "韓國", "德國"], answer: "美國" },
    { question: "《精靈寶可夢》中，小智的第一隻寶可夢是？", choices: ["皮卡丘", "妙蛙種子", "小火龍", "傑尼龜"], answer: "皮卡丘" },
    { question: "《咒術迴戰》中，五條悟的眼睛能力是？", choices: ["六眼", "寫輪眼", "開眼", "天眼"], answer: "六眼" },
    { question: "《Dr.STONE》中，千空的目標是？", choices: ["復興文明", "成為科學家", "拯救人類", "建造太空船"], answer: "復興文明" },
    { question: "《SPY×FAMILY》中，黃昏的真實職業是？", choices: ["間諜", "殺手", "老師", "軍人"], answer: "間諜" },
    { question: "《Lycoris Recoil》中，千束的搭檔是誰？", choices: ["井之上瀧奈", "真島", "吉松", "中原"], answer: "井之上瀧奈" },
    { question: "《Fate》中，Saber的寶具是？", choices: ["誓約勝利之劍", "王之財寶", "紅A之刃", "天之杯"], answer: "誓約勝利之劍" },
    { question: "《盾之勇者》中，拉芙塔莉雅的種族是？", choices: ["亞人族", "獸人族", "精靈族", "龍人族"], answer: "亞人族" },
    { question: "《鏈鋸人》中，電次的夢想是？", choices: ["吃好吃的", "交女朋友", "上學", "開車"], answer: "交女朋友" },
    { question: "《七龍珠》中，悟飯的老師是誰？", choices: ["比克", "悟空", "天津飯", "克林"], answer: "比克" },
    { question: "《JOJO》第四部中，主角名字是？", choices: ["東方仗助", "空條承太郎", "喬瑟夫", "喬魯諾"], answer: "東方仗助" }

];


let currentQuestion = 0;

// 隨機打亂題目順序
function shuffleQuestions() {
    for (let i = quizData.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [quizData[i], quizData[j]] = [quizData[j], quizData[i]];
    }
}

function loadQuestion() {
    const quiz = quizData[currentQuestion];
    const questionEl = document.getElementById('question');
    const choicesEl = document.getElementById('choices');
    const feedbackEl = document.getElementById('feedback');

    questionEl.textContent = quiz.question;
    choicesEl.innerHTML = '';
    feedbackEl.textContent = '';

    // Randomize the order of choices
    const shuffledChoices = [...quiz.choices];
    for (let i = shuffledChoices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledChoices[i], shuffledChoices[j]] = [shuffledChoices[j], shuffledChoices[i]];
    }

    shuffledChoices.forEach(choice => {
        const btn = document.createElement('button');
        btn.textContent = choice;
        btn.className = 'choice-button';
        btn.style.margin = '10px';
        btn.style.padding = '10px 20px';
        btn.style.borderRadius = '10px';
        btn.style.border = '1px solid #333';
        btn.style.cursor = 'pointer';
        btn.style.transition = 'transform 0.2s ease';
        btn.onmouseover = () => btn.style.transform = 'scale(1.1)';
        btn.onmouseout = () => btn.style.transform = 'scale(1)';
        btn.onclick = () => checkAnswer(choice);
        choicesEl.appendChild(btn);
    });
}

function checkAnswer(choice) {
    const quiz = quizData[currentQuestion];
    const feedbackEl = document.getElementById('feedback');

    if (choice === quiz.answer) {
        feedbackEl.textContent = '答對了！🎉';
        feedbackEl.style.color = 'green';
        setTimeout(() => {
            currentQuestion++;
            if (currentQuestion < quizData.length) {
                loadQuestion();
            } else {
                document.getElementById('question').textContent = '遊戲結束，謝謝參與！';
                document.getElementById('choices').innerHTML = '';
            }
        }, 1500);
    } else {
        feedbackEl.textContent = '答錯了 😢，請再試一次！';
        feedbackEl.style.color = 'red';
    }
}

// 啟動遊戲（等 DOM 載入完）
document.addEventListener('DOMContentLoaded', () => {
    shuffleQuestions(); // 隨機打亂題目
    loadQuestion();
});
