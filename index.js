// ===== 章データ =====
const chapters = {
  be: [
    { question:"I ___ a student.", choices:["am","is","are","be"], answer:0, explain:"I のときは am" },
    { question:"He ___ busy.", choices:["am","is","are","be"], answer:1, explain:"He は is" },
    { question:"They ___ friends.", choices:["am","is","are","be"], answer:2, explain:"They は are" },
    { question:"She ___ from Japan.", choices:["am","is","are","be"], answer:1, explain:"She は is" },
    { question:"We ___ ready.", choices:["am","is","are","be"], answer:2, explain:"We は are" },
    { question:"It ___ a cat.", choices:["am","is","are","be"], answer:1, explain:"It は is" },
    { question:"You ___ kind.", choices:["am","is","are","be"], answer:2, explain:"You は are" },
    { question:"I ___ not tired.", choices:["am","is","are","be"], answer:0, explain:"I は am" },
    { question:"He ___ not a teacher.", choices:["am","is","are","be"], answer:1, explain:"He は is" },
    { question:"They ___ not happy.", choices:["am","is","are","be"], answer:2, explain:"They は are" },

    { question:"She ___ my sister.", choices:["am","is","are","be"], answer:1, explain:"She は is" },
    { question:"They ___ in the park.", choices:["am","is","are","be"], answer:2, explain:"They は are" },
    { question:"I ___ happy today.", choices:["am","is","are","be"], answer:0, explain:"I は am" },
    { question:"This ___ my book.", choices:["am","is","are","be"], answer:1, explain:"This は is" },
    { question:"We ___ students.", choices:["am","is","are","be"], answer:2, explain:"We は are" },
    { question:"He ___ a teacher.", choices:["am","is","are","be"], answer:1, explain:"He は is" },
    { question:"You ___ very kind.", choices:["am","is","are","be"], answer:2, explain:"You は are" },
    { question:"The dog ___ cute.", choices:["am","is","are","be"], answer:1, explain:"The dog = It → is" },
    { question:"I ___ in Japan.", choices:["am","is","are","be"], answer:0, explain:"I は am" },
    { question:"They ___ friends.", choices:["am","is","are","be"], answer:2, explain:"They は are" },
    { question:"She ___ busy today.", choices:["am","is","are","be"], answer:1, explain:"She は is" },
    { question:"We ___ ready.", choices:["am","is","are","be"], answer:2, explain:"We は are" },
    { question:"I ___ not tired.", choices:["am","is","are","be"], answer:0, explain:"I は am" },
    { question:"He ___ at school.", choices:["am","is","are","be"], answer:1, explain:"He は is" },
    { question:"They ___ very tall.", choices:["am","is","are","be"], answer:2, explain:"They は are" },
    { question:"This ___ a pen.", choices:["am","is","are","be"], answer:1, explain:"This は is" },
    { question:"I ___ a soccer fan.", choices:["am","is","are","be"], answer:0, explain:"I は am" },
    { question:"We ___ in the classroom.", choices:["am","is","are","be"], answer:2, explain:"We は are" },
    { question:"She ___ my friend.", choices:["am","is","are","be"], answer:1, explain:"She は is" },
    { question:"You ___ a good student.", choices:["am","is","are","be"], answer:2, explain:"You は are" },
  { question:"I ___ a student.", choices:["am","is","are","be"], answer:0, explain:"I → am" },
  { question:"He ___ busy today.", choices:["am","is","are","be"], answer:1, explain:"He → is" },
  { question:"They ___ my friends.", choices:["am","is","are","be"], answer:2, explain:"They → are" },
  { question:"She ___ from Japan.", choices:["am","is","are","be"], answer:1, explain:"She → is" },
  { question:"We ___ ready now.", choices:["am","is","are","be"], answer:2, explain:"We → are" },
  { question:"It ___ a cat.", choices:["am","is","are","be"], answer:1, explain:"It → is" },
  { question:"You ___ kind.", choices:["am","is","are","be"], answer:2, explain:"You → are" },
  { question:"I ___ not tired.", choices:["am","is","are","be"], answer:0, explain:"I → am" },
  { question:"He ___ not a teacher.", choices:["am","is","are","be"], answer:1, explain:"He → is" },
  { question:"They ___ not happy.", choices:["am","is","are","be"], answer:2, explain:"They → are" },

  { question:"This ___ my book.", choices:["am","is","are","be"], answer:1, explain:"This → is" },
  { question:"That ___ your pen.", choices:["am","is","are","be"], answer:1, explain:"That → is" },
  { question:"These ___ my shoes.", choices:["am","is","are","be"], answer:2, explain:"These → are" },
  { question:"Those ___ your bags.", choices:["am","is","are","be"], answer:2, explain:"Those → are" },
  { question:"My name ___ Ken.", choices:["am","is","are","be"], answer:1, explain:"My name → is" },
  { question:"Her name ___ Sara.", choices:["am","is","are","be"], answer:1, explain:"Her name → is" },
  { question:"Their names ___ on the list.", choices:["am","is","are","be"], answer:2, explain:"names → are" },
  { question:"I ___ in Tokyo.", choices:["am","is","are","be"], answer:0, explain:"I → am" },
  { question:"She ___ at home.", choices:["am","is","are","be"], answer:1, explain:"She → is" },
  { question:"We ___ in the classroom.", choices:["am","is","are","be"], answer:2, explain:"We → are" },

  { question:"He ___ a doctor.", choices:["am","is","are","be"], answer:1, explain:"He → is" },
  { question:"They ___ students.", choices:["am","is","are","be"], answer:2, explain:"They → are" },
  { question:"You ___ my best friend.", choices:["am","is","are","be"], answer:2, explain:"You → are" },
  { question:"It ___ cold today.", choices:["am","is","are","be"], answer:1, explain:"It → is" },
  { question:"I ___ happy now.", choices:["am","is","are","be"], answer:0, explain:"I → am" },
  { question:"She ___ very busy.", choices:["am","is","are","be"], answer:1, explain:"She → is" },
  { question:"We ___ excited.", choices:["am","is","are","be"], answer:2, explain:"We → are" },
  { question:"They ___ in the park.", choices:["am","is","are","be"], answer:2, explain:"They → are" },
  { question:"This ___ a pen.", choices:["am","is","are","be"], answer:1, explain:"This → is" },
  { question:"Those ___ my books.", choices:["am","is","are","be"], answer:2, explain:"Those → are" },

  { question:"I ___ a soccer fan.", choices:["am","is","are","be"], answer:0, explain:"I → am" },
  { question:"He ___ my brother.", choices:["am","is","are","be"], answer:1, explain:"He → is" },
  { question:"She ___ my sister.", choices:["am","is","are","be"], answer:1, explain:"She → is" },
  { question:"We ___ good friends.", choices:["am","is","are","be"], answer:2, explain:"We → are" },
  { question:"You ___ a good student.", choices:["am","is","are","be"], answer:2, explain:"You → are" },
  { question:"It ___ a new phone.", choices:["am","is","are","be"], answer:1, explain:"It → is" },
  { question:"I ___ in a hurry.", choices:["am","is","are","be"], answer:0, explain:"I → am" },
  { question:"He ___ not at school.", choices:["am","is","are","be"], answer:1, explain:"He → is" },
  { question:"They ___ not hungry.", choices:["am","is","are","be"], answer:2, explain:"They → are" },
  { question:"She ___ not here.", choices:["am","is","are","be"], answer:1, explain:"She → is" },

  { question:"Are you ___ okay?", choices:["am","is","are","be"], answer:3, explain:"be動詞の原形は be" },
  { question:"I want to ___ a teacher.", choices:["am","is","are","be"], answer:3, explain:"to + 動詞の原形 → be" },
  { question:"I will ___ happy.", choices:["am","is","are","be"], answer:3, explain:"will + 原形 → be" },
  { question:"Can you ___ quiet?", choices:["am","is","are","be"], answer:3, explain:"can + 原形 → be" },
  { question:"She must ___ tired.", choices:["am","is","are","be"], answer:3, explain:"must + 原形 → be" },

  // ---- ここから量産（同じルールで100まで）----
  { question:"I ___ a beginner.", choices:["am","is","are","be"], answer:0, explain:"I → am" },
  { question:"He ___ a nice guy.", choices:["am","is","are","be"], answer:1, explain:"He → is" },
  { question:"They ___ very kind.", choices:["am","is","are","be"], answer:2, explain:"They → are" },
  { question:"She ___ a singer.", choices:["am","is","are","be"], answer:1, explain:"She → is" },
  { question:"We ___ in the library.", choices:["am","is","are","be"], answer:2, explain:"We → are" },
  { question:"It ___ my turn.", choices:["am","is","are","be"], answer:1, explain:"It → is" },
  { question:"You ___ late today.", choices:["am","is","are","be"], answer:2, explain:"You → are" },
  { question:"I ___ not sleepy.", choices:["am","is","are","be"], answer:0, explain:"I → am" },
  { question:"He ___ not busy now.", choices:["am","is","are","be"], answer:1, explain:"He → is" },
  { question:"They ___ not alone.", choices:["am","is","are","be"], answer:2, explain:"They → are" },

  { question:"This ___ my desk.", choices:["am","is","are","be"], answer:1, explain:"This → is" },
  { question:"That ___ a dog.", choices:["am","is","are","be"], answer:1, explain:"That → is" },
  { question:"These ___ my keys.", choices:["am","is","are","be"], answer:2, explain:"These → are" },
  { question:"Those ___ your glasses.", choices:["am","is","are","be"], answer:2, explain:"Those → are" },
  { question:"My hobby ___ music.", choices:["am","is","are","be"], answer:1, explain:"hobby → is" },
  { question:"Her favorite food ___ sushi.", choices:["am","is","are","be"], answer:1, explain:"food → is" },
  { question:"Our plans ___ simple.", choices:["am","is","are","be"], answer:2, explain:"plans → are" },
  { question:"I ___ in my room.", choices:["am","is","are","be"], answer:0, explain:"I → am" },
  { question:"She ___ at the station.", choices:["am","is","are","be"], answer:1, explain:"She → is" },
  { question:"We ___ at the mall.", choices:["am","is","are","be"], answer:2, explain:"We → are" },

  { question:"He ___ a student too.", choices:["am","is","are","be"], answer:1, explain:"He → is" },
  { question:"They ___ from China.", choices:["am","is","are","be"], answer:2, explain:"They → are" },
  { question:"You ___ my teacher.", choices:["am","is","are","be"], answer:2, explain:"You → are" },
  { question:"It ___ sunny today.", choices:["am","is","are","be"], answer:1, explain:"It → is" },
  { question:"I ___ ready.", choices:["am","is","are","be"], answer:0, explain:"I → am" },
  { question:"She ___ strong.", choices:["am","is","are","be"], answer:1, explain:"She → is" },
  { question:"We ___ hungry.", choices:["am","is","are","be"], answer:2, explain:"We → are" },
  { question:"They ___ tired.", choices:["am","is","are","be"], answer:2, explain:"They → are" },
  { question:"This ___ an apple.", choices:["am","is","are","be"], answer:1, explain:"This → is" },
  { question:"Those ___ new shoes.", choices:["am","is","are","be"], answer:2, explain:"Those → are" }

  // --- 残りは「同じ型」を増やすだけ（あなたの作り方でOK）---
  ],

  tense: [
    { question:"I ___ to school every day.", choices:["go","went","will go","gone"], answer:0, explain:"every day → 現在形 go" },
    { question:"I ___ to school yesterday.", choices:["go","went","will go","going"], answer:1, explain:"yesterday → 過去形 went" },
    { question:"I ___ to school tomorrow.", choices:["go","went","will go","going"], answer:2, explain:"tomorrow → 未来 will go" },
    { question:"She ___ TV now.", choices:["watch","watched","is watching","will watch"], answer:2, explain:"now → 現在進行形" },
    { question:"They ___ dinner when I arrived.", choices:["eat","ate","were eating","will eat"], answer:2, explain:"過去の進行 → were eating" },
    { question:"He ___ already finished his work.", choices:["has","have","had","will have"], answer:0, explain:"He → has" },
    { question:"I ___ never been to Osaka.", choices:["have","has","had","will have"], answer:0, explain:"I → have been" },
    { question:"We ___ studying English for two hours.", choices:["are","were","have been","will be"], answer:2, explain:"for + 時間 → have been" },
    { question:"The meeting ___ start at 10 a.m.", choices:["is","was","will","has"], answer:2, explain:"未来の予定 → will" },
    { question:"By next year, I ___ graduate.", choices:["will","will have","have","had"], answer:1, explain:"By + 未来 → 未来完了" },
      // ===== 三単現（追加20問）=====
  { question:"He ___ tennis on Sundays.", choices:["play","plays","played","playing"], answer:1, explain:"He → plays" },
  { question:"She ___ to school by bus.", choices:["go","goes","went","going"], answer:1, explain:"She → goes" },
  { question:"My father ___ dinner at 7.", choices:["eat","eats","ate","eating"], answer:1, explain:"三単現 → eats" },
  { question:"Ken ___ TV every night.", choices:["watch","watches","watched","watching"], answer:1, explain:"watch → watches" },
  { question:"Tom ___ English every day.", choices:["study","studies","studied","studying"], answer:1, explain:"study → studies（y→ies）" },
  { question:"She ___ lunch at noon.", choices:["have","has","had","having"], answer:1, explain:"She → has" },
  { question:"He ___ his homework after dinner.", choices:["do","does","did","doing"], answer:1, explain:"do → does" },
  { question:"My sister ___ the piano well.", choices:["play","plays","played","playing"], answer:1, explain:"三単現 → plays" },
  { question:"The dog ___ fast.", choices:["run","runs","ran","running"], answer:1, explain:"dog(It) → runs" },
  { question:"She ___ coffee every morning.", choices:["drink","drinks","drank","drinking"], answer:1, explain:"三単現 → drinks" },

  { question:"He ___ baseball after school.", choices:["like","likes","liked","liking"], answer:1, explain:"He → likes" },
  { question:"My mother ___ a car.", choices:["have","has","had","having"], answer:1, explain:"mother(She) → has" },
  { question:"Tom ___ to music at night.", choices:["listen","listens","listened","listening"], answer:1, explain:"listen → listens" },
  { question:"She ___ her room every week.", choices:["clean","cleans","cleaned","cleaning"], answer:1, explain:"三単現 → cleans" },
  { question:"He ___ early on weekdays.", choices:["get up","gets up","got up","getting up"], answer:1, explain:"He → gets up" },
  { question:"My brother ___ in Tokyo.", choices:["live","lives","lived","living"], answer:1, explain:"live → lives" },
  { question:"She ___ Japanese.", choices:["teach","teaches","taught","teaching"], answer:1, explain:"teach → teaches（es）" },
  { question:"He ___ the window every day.", choices:["open","opens","opened","opening"], answer:1, explain:"open → opens" },
  { question:"The student ___ questions.", choices:["ask","asks","asked","asking"], answer:1, explain:"student(He/She) → asks" },
  { question:"She ___ to the library often.", choices:["go","goes","went","going"], answer:1, explain:"go → goes（es）" },
    // ===== 三単現追加30問 =====
{ question:"He ___ soccer every Sunday.", choices:["play","plays","played","playing"], answer:1, explain:"He → plays" },
{ question:"She ___ English at school.", choices:["study","studies","studied","studying"], answer:1, explain:"study → studies" },
{ question:"My father ___ coffee every morning.", choices:["drink","drinks","drank","drinking"], answer:1, explain:"father → drinks" },
{ question:"Ken ___ TV after dinner.", choices:["watch","watches","watched","watching"], answer:1, explain:"watch → watches" },
{ question:"Tom ___ to music every night.", choices:["listen","listens","listened","listening"], answer:1, explain:"listen → listens" },

{ question:"She ___ lunch at 12.", choices:["eat","eats","ate","eating"], answer:1, explain:"She → eats" },
{ question:"He ___ his homework every day.", choices:["do","does","did","doing"], answer:1, explain:"do → does" },
{ question:"My sister ___ piano very well.", choices:["play","plays","played","playing"], answer:1, explain:"She → plays" },
{ question:"The dog ___ very fast.", choices:["run","runs","ran","running"], answer:1, explain:"dog(It) → runs" },
{ question:"She ___ tea every morning.", choices:["drink","drinks","drank","drinking"], answer:1, explain:"She → drinks" },

{ question:"He ___ baseball after school.", choices:["like","likes","liked","liking"], answer:1, explain:"He → likes" },
{ question:"My mother ___ a car.", choices:["have","has","had","having"], answer:1, explain:"mother → has" },
{ question:"Tom ___ English every day.", choices:["practice","practices","practiced","practicing"], answer:1, explain:"practice → practices" },
{ question:"She ___ her room every week.", choices:["clean","cleans","cleaned","cleaning"], answer:1, explain:"She → cleans" },
{ question:"He ___ early every morning.", choices:["get up","gets up","got up","getting up"], answer:1, explain:"He → gets up" },

{ question:"My brother ___ in Tokyo.", choices:["live","lives","lived","living"], answer:1, explain:"live → lives" },
{ question:"She ___ math at school.", choices:["teach","teaches","taught","teaching"], answer:1, explain:"teach → teaches" },
{ question:"He ___ the window every day.", choices:["open","opens","opened","opening"], answer:1, explain:"open → opens" },
{ question:"The teacher ___ many questions.", choices:["ask","asks","asked","asking"], answer:1, explain:"teacher → asks" },
{ question:"She ___ to the library often.", choices:["go","goes","went","going"], answer:1, explain:"go → goes" },

{ question:"He ___ rice every day.", choices:["eat","eats","ate","eating"], answer:1, explain:"He → eats" },
{ question:"My friend ___ English well.", choices:["speak","speaks","spoke","speaking"], answer:1, explain:"friend → speaks" },
{ question:"She ___ the guitar.", choices:["play","plays","played","playing"], answer:1, explain:"She → plays" },
{ question:"He ___ the newspaper.", choices:["read","reads","reading","readed"], answer:1, explain:"He → reads" },
{ question:"Tom ___ to school by bike.", choices:["go","goes","went","going"], answer:1, explain:"Tom → goes" },

{ question:"She ___ the dishes.", choices:["wash","washes","washed","washing"], answer:1, explain:"wash → washes" },
{ question:"He ___ his room.", choices:["clean","cleans","cleaned","cleaning"], answer:1, explain:"He → cleans" },
{ question:"My sister ___ very hard.", choices:["study","studies","studied","studying"], answer:1, explain:"study → studies" },
{ question:"Ken ___ his dog.", choices:["walk","walks","walked","walking"], answer:1, explain:"Ken → walks" },
{ question:"She ___ English books.", choices:["read","reads","reading","readed"], answer:1, explain:"She → reads" },
    // ===== 三人称単数現在 追加30問 =====
{ question:"He ___ baseball on Saturdays.", choices:["play","plays","played","playing"], answer:1, explain:"He → plays" },
{ question:"She ___ her homework every night.", choices:["do","does","did","doing"], answer:1, explain:"She → does" },
{ question:"My father ___ to work by train.", choices:["go","goes","went","going"], answer:1, explain:"father → goes" },
{ question:"Ken ___ English after dinner.", choices:["study","studies","studied","studying"], answer:1, explain:"study → studies" },
{ question:"Tom ___ TV in the evening.", choices:["watch","watches","watched","watching"], answer:1, explain:"watch → watches" },

{ question:"She ___ the piano every day.", choices:["practice","practices","practiced","practicing"], answer:1, explain:"She → practices" },
{ question:"He ___ lunch at school.", choices:["eat","eats","ate","eating"], answer:1, explain:"He → eats" },
{ question:"My sister ___ very fast.", choices:["run","runs","ran","running"], answer:1, explain:"sister → runs" },
{ question:"The dog ___ in the park.", choices:["play","plays","played","playing"], answer:1, explain:"dog(It) → plays" },
{ question:"She ___ coffee every morning.", choices:["drink","drinks","drank","drinking"], answer:1, explain:"She → drinks" },

{ question:"He ___ to music at night.", choices:["listen","listens","listened","listening"], answer:1, explain:"listen → listens" },
{ question:"My mother ___ breakfast at 7.", choices:["make","makes","made","making"], answer:1, explain:"mother → makes" },
{ question:"Tom ___ his room every week.", choices:["clean","cleans","cleaned","cleaning"], answer:1, explain:"Tom → cleans" },
{ question:"She ___ books in the library.", choices:["read","reads","reading","readed"], answer:1, explain:"She → reads" },
{ question:"He ___ his dog every morning.", choices:["walk","walks","walked","walking"], answer:1, explain:"He → walks" },

{ question:"My brother ___ in Chiba.", choices:["live","lives","lived","living"], answer:1, explain:"live → lives" },
{ question:"She ___ math at school.", choices:["teach","teaches","taught","teaching"], answer:1, explain:"teach → teaches" },
{ question:"He ___ the window every day.", choices:["open","opens","opened","opening"], answer:1, explain:"He → opens" },
{ question:"The teacher ___ many questions.", choices:["ask","asks","asked","asking"], answer:1, explain:"teacher → asks" },
{ question:"She ___ to the station by bus.", choices:["go","goes","went","going"], answer:1, explain:"go → goes" },

{ question:"He ___ rice for breakfast.", choices:["eat","eats","ate","eating"], answer:1, explain:"He → eats" },
{ question:"My friend ___ English very well.", choices:["speak","speaks","spoke","speaking"], answer:1, explain:"friend → speaks" },
{ question:"She ___ the guitar after school.", choices:["play","plays","played","playing"], answer:1, explain:"She → plays" },
{ question:"He ___ the newspaper every morning.", choices:["read","reads","reading","readed"], answer:1, explain:"He → reads" },
{ question:"Tom ___ to school with Ken.", choices:["go","goes","went","going"], answer:1, explain:"Tom → goes" },

{ question:"She ___ the dishes after dinner.", choices:["wash","washes","washed","washing"], answer:1, explain:"wash → washes" },
{ question:"He ___ his desk every day.", choices:["clean","cleans","cleaned","cleaning"], answer:1, explain:"He → cleans" },
{ question:"My sister ___ hard for tests.", choices:["study","studies","studied","studying"], answer:1, explain:"study → studies" },
{ question:"Ken ___ his bike to school.", choices:["ride","rides","rode","riding"], answer:1, explain:"Ken → rides" },
{ question:"She ___ letters to her friend.", choices:["write","writes","wrote","writing"], answer:1, explain:"She → writes" },
    // ===== 三人称単数現在 追加10問 =====
{ question:"He ___ the bus to school.", choices:["take","takes","took","taking"], answer:1, explain:"He → takes" },
{ question:"She ___ her grandmother every Sunday.", choices:["visit","visits","visited","visiting"], answer:1, explain:"She → visits" },
{ question:"My father ___ the newspaper every morning.", choices:["read","reads","reading","readed"], answer:1, explain:"father → reads" },
{ question:"Tom ___ his shoes at the door.", choices:["leave","leaves","left","leaving"], answer:1, explain:"Tom → leaves" },
{ question:"Ken ___ his face before breakfast.", choices:["wash","washes","washed","washing"], answer:1, explain:"wash → washes" },

{ question:"She ___ the answer quickly.", choices:["find","finds","found","finding"], answer:1, explain:"She → finds" },
{ question:"He ___ his bike in the garage.", choices:["keep","keeps","kept","keeping"], answer:1, explain:"He → keeps" },
{ question:"My sister ___ her lunch at school.", choices:["finish","finishes","finished","finishing"], answer:1, explain:"sister → finishes" },
{ question:"The teacher ___ the door at 8:00.", choices:["close","closes","closed","closing"], answer:1, explain:"teacher → closes" },
{ question:"She ___ pictures in her notebook.", choices:["draw","draws","drew","drawing"], answer:1, explain:"She → draws" }
  
  ],

  modal: [
    { question:"I ___ swim very well.", choices:["can","will","must","am"], answer:0, explain:"能力 → can" },
    { question:"You ___ finish your homework.", choices:["can","will","must","may"], answer:2, explain:"義務 → must" },
    { question:"I ___ call you tomorrow.", choices:["can","will","must","could"], answer:1, explain:"未来の意思 → will" },
    { question:"We ___ speak English here.", choices:["can","will","must","should"], answer:0, explain:"可能 → can" },
    { question:"You ___ be quiet in the library.", choices:["can","will","must","may"], answer:2, explain:"規則 → must" },
    { question:"She ___ be at home now.", choices:["can","will","must","should"], answer:2, explain:"強い推量 → must" },
    { question:"I ___ help you.", choices:["can","will","must","may"], answer:0, explain:"申し出 → can" },
    { question:"He ___ come tonight.", choices:["can","will","must","might"], answer:1, explain:"予定・意志 → will" },
    { question:"You ___ eat too much junk food.", choices:["can","will","must not","may"], answer:2, explain:"禁止 → must not" },
    { question:"___ I open the window?", choices:["Can","Will","Must","Do"], answer:0, explain:"許可 → Can I ?" },
      // ===== 時制（追加20問）=====
  { question:"I ___ to school every day.", choices:["go","went","will go","going"], answer:0, explain:"every day → 現在形 go" },
  { question:"I ___ to school yesterday.", choices:["go","went","will go","going"], answer:1, explain:"yesterday → 過去形 went" },
  { question:"I ___ to school tomorrow.", choices:["go","went","will go","going"], answer:2, explain:"tomorrow → will go" },
  { question:"She ___ TV now.", choices:["watch","watched","is watching","will watch"], answer:2, explain:"now → 現在進行形" },
  { question:"They ___ dinner when I arrived.", choices:["eat","ate","were eating","will eat"], answer:2, explain:"when + 過去の途中 → 過去進行" },

  { question:"He ___ already finished his work.", choices:["has","have","is","will"], answer:0, explain:"already → 現在完了 / He → has" },
  { question:"I ___ never been to Osaka.", choices:["have","has","am","will"], answer:0, explain:"I → have been（現在完了）" },
  { question:"We ___ studying for two hours.", choices:["are","were","have been","will be"], answer:2, explain:"for + 時間 → have been" },
  { question:"The meeting ___ start at 10.", choices:["is","was","will","has"], answer:2, explain:"未来の予定 → will" },
  { question:"By next year, I ___ graduate.", choices:["will","will have","have","had"], answer:1, explain:"By + 未来 → 未来完了" },

  { question:"He ___ a book now.", choices:["reads","read","is reading","will read"], answer:2, explain:"now → is reading" },
  { question:"She ___ lunch at 12 every day.", choices:["eat","eats","ate","will eat"], answer:1, explain:"every day → 現在形 / She → eats" },
  { question:"We ___ in Tokyo last year.", choices:["live","lived","will live","living"], answer:1, explain:"last year → 過去形" },
  { question:"I ___ you later.", choices:["call","called","will call","calling"], answer:2, explain:"later → will call" },
  { question:"They ___ soccer at that time.", choices:["play","played","were playing","will play"], answer:2, explain:"at that time → 過去進行" },

  { question:"He ___ in Japan since 2020.", choices:["lives","lived","has lived","will live"], answer:2, explain:"since → 現在完了（継続）" },
  { question:"I ___ my homework yet.", choices:["didn't finish","haven't finished","don't finish","won't finish"], answer:1, explain:"yet → 現在完了（否定）" },
  { question:"She ___ already ___ dinner.", choices:["has / eaten","have / ate","is / eat","will / ate"], answer:0, explain:"already → has eaten" },
  { question:"We ___ to the station now.", choices:["go","went","are going","will go"], answer:2, explain:"now → are going" },
  { question:"They ___ to Kyoto next week.", choices:["go","went","will go","are went"], answer:2, explain:"next week → will go" },
    // ===== 時制追加30問 =====
{ question:"He ___ soccer every day.", choices:["play","plays","played","playing"], answer:1, explain:"every day → 現在形" },
{ question:"She ___ to school yesterday.", choices:["goes","went","will go","going"], answer:1, explain:"yesterday → 過去形" },
{ question:"I ___ my homework tomorrow.", choices:["do","did","will do","doing"], answer:2, explain:"tomorrow → will do" },
{ question:"They ___ lunch now.", choices:["eat","ate","are eating","will eat"], answer:2, explain:"now → 現在進行形" },
{ question:"We ___ TV when he came home.", choices:["watch","watched","were watching","will watch"], answer:2, explain:"when he came home → 過去進行形" },

{ question:"He ___ already finished.", choices:["has","have","had","will"], answer:0, explain:"He → has" },
{ question:"I ___ never seen that movie.", choices:["have","has","had","will"], answer:0, explain:"I → have seen" },
{ question:"She ___ in Tokyo since 2020.", choices:["lives","lived","has lived","will live"], answer:2, explain:"since → 現在完了" },
{ question:"They ___ for two hours.", choices:["study","studied","have studied","will study"], answer:2, explain:"for two hours → 現在完了" },
{ question:"By next year, he ___ graduated.", choices:["will","will have","has","had"], answer:1, explain:"By next year → 未来完了" },

{ question:"I ___ breakfast every morning.", choices:["eat","ate","will eat","eating"], answer:0, explain:"every morning → 現在形" },
{ question:"She ___ a letter last night.", choices:["writes","wrote","will write","writing"], answer:1, explain:"last night → 過去形" },
{ question:"We ___ to Kyoto next week.", choices:["go","went","will go","going"], answer:2, explain:"next week → 未来形" },
{ question:"He ___ a book now.", choices:["reads","read","is reading","will read"], answer:2, explain:"now → 現在進行形" },
{ question:"They ___ dinner at 7 yesterday.", choices:["have","had","will have","having"], answer:1, explain:"yesterday → 過去形" },

{ question:"She ___ English since she was young.", choices:["studies","studied","has studied","will study"], answer:2, explain:"since → 現在完了" },
{ question:"I ___ him tomorrow.", choices:["see","saw","will see","seeing"], answer:2, explain:"tomorrow → 未来形" },
{ question:"We ___ when the phone rang.", choices:["sleep","slept","were sleeping","will sleep"], answer:2, explain:"rang の時進行中 → 過去進行形" },
{ question:"He ___ to school by bus every day.", choices:["go","goes","went","will go"], answer:1, explain:"every day → 現在形" },
{ question:"She ___ her room yesterday.", choices:["cleans","cleaned","will clean","cleaning"], answer:1, explain:"yesterday → 過去形" },

{ question:"I ___ already eaten lunch.", choices:["have","has","had","will"], answer:0, explain:"I → have eaten" },
{ question:"Tom ___ soccer tomorrow.", choices:["plays","played","will play","playing"], answer:2, explain:"tomorrow → will play" },
{ question:"My father ___ TV now.", choices:["watch","watched","is watching","will watch"], answer:2, explain:"now → 現在進行形" },
{ question:"They ___ in the park when it started to rain.", choices:["play","played","were playing","will play"], answer:2, explain:"過去進行形" },
{ question:"She ___ never been to Osaka.", choices:["have","has","had","will"], answer:1, explain:"She → has been" },

{ question:"We ___ math every Monday.", choices:["study","studied","will study","studying"], answer:0, explain:"every Monday → 現在形" },
{ question:"He ___ home late last night.", choices:["comes","came","will come","coming"], answer:1, explain:"last night → 過去形" },
{ question:"I ___ you next month.", choices:["visit","visited","will visit","visiting"], answer:2, explain:"next month → 未来形" },
{ question:"She ___ dinner now.", choices:["cook","cooked","is cooking","will cook"], answer:2, explain:"now → 現在進行形" },
{ question:"By 2030, they ___ built a new school.", choices:["will","will have","have","had"], answer:1, explain:"By 2030 → 未来完了" },
    // ===== 時制 追加40問 =====
{ question:"I ___ breakfast every morning.", choices:["eat","ate","will eat","eating"], answer:0, explain:"every morning → 現在形" },
{ question:"She ___ to the park yesterday.", choices:["goes","went","will go","going"], answer:1, explain:"yesterday → 過去形" },
{ question:"He ___ his homework tonight.", choices:["does","did","will do","doing"], answer:2, explain:"tonight → 未来形" },
{ question:"They ___ TV now.", choices:["watch","watched","are watching","will watch"], answer:2, explain:"now → 現在進行形" },
{ question:"We ___ soccer when it started to rain.", choices:["play","played","were playing","will play"], answer:2, explain:"started の時進行中 → 過去進行形" },

{ question:"She ___ already finished her homework.", choices:["has","have","had","will"], answer:0, explain:"She → has" },
{ question:"I ___ never seen that movie.", choices:["have","has","had","will"], answer:0, explain:"I → have seen" },
{ question:"He ___ in Tokyo since 2021.", choices:["lives","lived","has lived","will live"], answer:2, explain:"since → 現在完了" },
{ question:"They ___ English for three years.", choices:["study","studied","have studied","will study"], answer:2, explain:"for three years → 現在完了" },
{ question:"By next month, I ___ this book.", choices:["finish","finished","will finish","will have finished"], answer:3, explain:"By next month → 未来完了" },

{ question:"Tom ___ to school every day.", choices:["go","went","will go","going"], answer:0, explain:"every day → 現在形" },
{ question:"My father ___ home late last night.", choices:["comes","came","will come","coming"], answer:1, explain:"last night → 過去形" },
{ question:"We ___ to Kyoto next Sunday.", choices:["go","went","will go","going"], answer:2, explain:"next Sunday → 未来形" },
{ question:"She ___ dinner now.", choices:["cook","cooked","is cooking","will cook"], answer:2, explain:"now → 現在進行形" },
{ question:"He ___ when I called him.", choices:["sleep","slept","was sleeping","will sleep"], answer:2, explain:"called の時進行中 → 過去進行形" },

{ question:"I ___ already eaten lunch.", choices:["have","has","had","will"], answer:0, explain:"I → have eaten" },
{ question:"She ___ never been to Hokkaido.", choices:["have","has","had","will"], answer:1, explain:"She → has been" },
{ question:"We ___ here since April.", choices:["live","lived","have lived","will live"], answer:2, explain:"since April → 現在完了" },
{ question:"He ___ baseball for five years.", choices:["plays","played","has played","will play"], answer:2, explain:"for five years → 現在完了" },
{ question:"By 2030, they ___ a new station.", choices:["build","built","will build","will have built"], answer:3, explain:"By 2030 → 未来完了" },

{ question:"She ___ English every Monday.", choices:["study","studied","will study","studying"], answer:0, explain:"every Monday → 現在形" },
{ question:"I ___ my room yesterday.", choices:["clean","cleaned","will clean","cleaning"], answer:1, explain:"yesterday → 過去形" },
{ question:"He ___ you tomorrow.", choices:["helps","helped","will help","helping"], answer:2, explain:"tomorrow → 未来形" },
{ question:"They ___ lunch now.", choices:["eat","ate","are eating","will eat"], answer:2, explain:"now → 現在進行形" },
{ question:"We ___ TV when he came home.", choices:["watch","watched","were watching","will watch"], answer:2, explain:"came home の時進行中 → 過去進行形" },

{ question:"My mother ___ already left.", choices:["has","have","had","will"], answer:0, explain:"My mother → has" },
{ question:"I ___ never tried sushi.", choices:["have","has","had","will"], answer:0, explain:"I → have tried" },
{ question:"She ___ in this city since 2020.", choices:["lives","lived","has lived","will live"], answer:2, explain:"since 2020 → 現在完了" },
{ question:"They ___ Japanese for two months.", choices:["study","studied","have studied","will study"], answer:2, explain:"for two months → 現在完了" },
{ question:"By next year, he ___ from college.", choices:["graduates","graduated","will graduate","will have graduated"], answer:3, explain:"By next year → 未来完了" },

{ question:"Ken ___ soccer after school every day.", choices:["play","played","will play","plays"], answer:3, explain:"every day → 現在形 / Ken → plays" },
{ question:"She ___ breakfast at 7 this morning.", choices:["has","had","will have","having"], answer:1, explain:"this morning → 過去形" },
{ question:"I ___ my friend next week.", choices:["visit","visited","will visit","visiting"], answer:2, explain:"next week → 未来形" },
{ question:"He ___ a book now.", choices:["reads","read","is reading","will read"], answer:2, explain:"now → 現在進行形" },
{ question:"They ___ in the park when it began to rain.", choices:["play","played","were playing","will play"], answer:2, explain:"began の時進行中 → 過去進行形" },

{ question:"We ___ already seen that game.", choices:["have","has","had","will"], answer:0, explain:"We → have seen" },
{ question:"She ___ never eaten natto.", choices:["have","has","had","will"], answer:1, explain:"She → has eaten" },
{ question:"He ___ here since last week.", choices:["stays","stayed","has stayed","will stay"], answer:2, explain:"since last week → 現在完了" },
{ question:"I ___ English for one hour.", choices:["study","studied","have studied","will study"], answer:2, explain:"for one hour → 現在完了" },
{ question:"By tomorrow, we ___ the work.", choices:["finish","finished","will finish","will have finished"], answer:3, explain:"By tomorrow → 未来完了" }
    
  ],
  progressive: [

{ question:"I ___ studying now.", choices:["am","is","are","be"], answer:0, explain:"I + am + 動詞ing" },
{ question:"He ___ playing soccer now.", choices:["am","is","are","be"], answer:1, explain:"He + is + 動詞ing" },
{ question:"They ___ watching TV now.", choices:["am","is","are","be"], answer:2, explain:"They + are + 動詞ing" },
{ question:"She ___ reading a book now.", choices:["am","is","are","be"], answer:1, explain:"She + is + 動詞ing" },
{ question:"We ___ eating lunch now.", choices:["am","is","are","be"], answer:2, explain:"We + are + 動詞ing" },

{ question:"You ___ running fast now.", choices:["am","is","are","be"], answer:2, explain:"You + are + 動詞ing" },
{ question:"It ___ raining now.", choices:["am","is","are","be"], answer:1, explain:"It + is + 動詞ing" },
{ question:"I ___ doing my homework now.", choices:["am","is","are","be"], answer:0, explain:"I + am + 動詞ing" },
{ question:"He ___ sleeping now.", choices:["am","is","are","be"], answer:1, explain:"He + is + 動詞ing" },
{ question:"They ___ studying English now.", choices:["am","is","are","be"], answer:2, explain:"They + are + 動詞ing" },

{ question:"She ___ cooking dinner now.", choices:["am","is","are","be"], answer:1, explain:"She + is + 動詞ing" },
{ question:"We ___ cleaning the room now.", choices:["am","is","are","be"], answer:2, explain:"We + are + 動詞ing" },
{ question:"Tom ___ playing the piano now.", choices:["am","is","are","be"], answer:1, explain:"Tom = he → is" },
{ question:"My father ___ driving now.", choices:["am","is","are","be"], answer:1, explain:"My father = he → is" },
{ question:"The children ___ playing in the park now.", choices:["am","is","are","be"], answer:2, explain:"children → are" },

{ question:"I ___ not studying now.", choices:["am","is","are","be"], answer:0, explain:"I am not studying" },
{ question:"He ___ not watching TV now.", choices:["am","is","are","be"], answer:1, explain:"He is not watching" },
{ question:"They ___ not playing soccer now.", choices:["am","is","are","be"], answer:2, explain:"They are not playing" },
{ question:"She ___ not reading now.", choices:["am","is","are","be"], answer:1, explain:"She is not reading" },
{ question:"We ___ not eating now.", choices:["am","is","are","be"], answer:2, explain:"We are not eating" },
    // ===== 進行形追加80問 =====

{ question:"I ___ watching TV now.", choices:["am","is","are","be"], answer:0, explain:"I → am watching" },
{ question:"He ___ eating lunch now.", choices:["am","is","are","be"], answer:1, explain:"He → is eating" },
{ question:"They ___ playing soccer now.", choices:["am","is","are","be"], answer:2, explain:"They → are playing" },
{ question:"She ___ studying English now.", choices:["am","is","are","be"], answer:1, explain:"She → is studying" },
{ question:"We ___ listening to music now.", choices:["am","is","are","be"], answer:2, explain:"We → are listening" },

{ question:"You ___ talking loudly now.", choices:["am","is","are","be"], answer:2, explain:"You → are talking" },
{ question:"It ___ snowing now.", choices:["am","is","are","be"], answer:1, explain:"It → is snowing" },
{ question:"I ___ writing an email now.", choices:["am","is","are","be"], answer:0, explain:"I → am writing" },
{ question:"He ___ running in the park now.", choices:["am","is","are","be"], answer:1, explain:"He → is running" },
{ question:"They ___ working now.", choices:["am","is","are","be"], answer:2, explain:"They → are working" },

{ question:"She ___ cleaning her room now.", choices:["am","is","are","be"], answer:1, explain:"She → is cleaning" },
{ question:"We ___ building a house now.", choices:["am","is","are","be"], answer:2, explain:"We → are building" },
{ question:"Tom ___ studying math now.", choices:["am","is","are","be"], answer:1, explain:"Tom = he → is studying" },
{ question:"My brother ___ playing games now.", choices:["am","is","are","be"], answer:1, explain:"brother → is playing" },
{ question:"The students ___ reading now.", choices:["am","is","are","be"], answer:2, explain:"students → are reading" },

{ question:"I ___ learning Japanese now.", choices:["am","is","are","be"], answer:0, explain:"I → am learning" },
{ question:"He ___ drawing a picture now.", choices:["am","is","are","be"], answer:1, explain:"He → is drawing" },
{ question:"They ___ dancing now.", choices:["am","is","are","be"], answer:2, explain:"They → are dancing" },
{ question:"She ___ singing now.", choices:["am","is","are","be"], answer:1, explain:"She → is singing" },
{ question:"We ___ cooking now.", choices:["am","is","are","be"], answer:2, explain:"We → are cooking" },

{ question:"I ___ not watching TV now.", choices:["am","is","are","be"], answer:0, explain:"I am not watching" },
{ question:"He ___ not eating now.", choices:["am","is","are","be"], answer:1, explain:"He is not eating" },
{ question:"They ___ not playing now.", choices:["am","is","are","be"], answer:2, explain:"They are not playing" },
{ question:"She ___ not studying now.", choices:["am","is","are","be"], answer:1, explain:"She is not studying" },
{ question:"We ___ not talking now.", choices:["am","is","are","be"], answer:2, explain:"We are not talking" },

{ question:"The dog ___ barking now.", choices:["am","is","are","be"], answer:1, explain:"dog → is barking" },
{ question:"The boys ___ running now.", choices:["am","is","are","be"], answer:2, explain:"boys → are running" },
{ question:"My mother ___ cooking now.", choices:["am","is","are","be"], answer:1, explain:"mother → is cooking" },
{ question:"My friends ___ studying now.", choices:["am","is","are","be"], answer:2, explain:"friends → are studying" },
{ question:"The teacher ___ writing now.", choices:["am","is","are","be"], answer:1, explain:"teacher → is writing" },

{ question:"I ___ looking for my bag now.", choices:["am","is","are","be"], answer:0, explain:"I → am looking" },
{ question:"He ___ fixing the car now.", choices:["am","is","are","be"], answer:1, explain:"He → is fixing" },
{ question:"They ___ cleaning the park now.", choices:["am","is","are","be"], answer:2, explain:"They → are cleaning" },
{ question:"She ___ washing dishes now.", choices:["am","is","are","be"], answer:1, explain:"She → is washing" },
{ question:"We ___ painting the wall now.", choices:["am","is","are","be"], answer:2, explain:"We → are painting" },

{ question:"I ___ drinking coffee now.", choices:["am","is","are","be"], answer:0, explain:"I → am drinking" },
{ question:"He ___ taking a shower now.", choices:["am","is","are","be"], answer:1, explain:"He → is taking" },
{ question:"They ___ making lunch now.", choices:["am","is","are","be"], answer:2, explain:"They → are making" },
{ question:"She ___ playing the violin now.", choices:["am","is","are","be"], answer:1, explain:"She → is playing" },
{ question:"We ___ reading books now.", choices:["am","is","are","be"], answer:2, explain:"We → are reading" },

{ question:"I ___ checking my phone now.", choices:["am","is","are","be"], answer:0, explain:"I → am checking" },
{ question:"He ___ learning English now.", choices:["am","is","are","be"], answer:1, explain:"He → is learning" },
{ question:"They ___ working hard now.", choices:["am","is","are","be"], answer:2, explain:"They → are working" },
{ question:"She ___ talking with her friend now.", choices:["am","is","are","be"], answer:1, explain:"She → is talking" },
{ question:"We ___ waiting for the bus now.", choices:["am","is","are","be"], answer:2, explain:"We → are waiting" },

{ question:"The baby ___ crying now.", choices:["am","is","are","be"], answer:1, explain:"baby → is crying" },
{ question:"The players ___ training now.", choices:["am","is","are","be"], answer:2, explain:"players → are training" },
{ question:"My father ___ reading the news now.", choices:["am","is","are","be"], answer:1, explain:"father → is reading" },
{ question:"My sisters ___ studying now.", choices:["am","is","are","be"], answer:2, explain:"sisters → are studying" },
{ question:"The cat ___ sleeping now.", choices:["am","is","are","be"], answer:1, explain:"cat → is sleeping" },

{ question:"I ___ planning a trip now.", choices:["am","is","are","be"], answer:0, explain:"I → am planning" },
{ question:"He ___ buying a ticket now.", choices:["am","is","are","be"], answer:1, explain:"He → is buying" },
{ question:"They ___ preparing dinner now.", choices:["am","is","are","be"], answer:2, explain:"They → are preparing" },
{ question:"She ___ sending a message now.", choices:["am","is","are","be"], answer:1, explain:"She → is sending" },
{ question:"We ___ watching a movie now.", choices:["am","is","are","be"], answer:2, explain:"We → are watching" },

{ question:"I ___ practicing English now.", choices:["am","is","are","be"], answer:0, explain:"I → am practicing" },
{ question:"He ___ building a robot now.", choices:["am","is","are","be"], answer:1, explain:"He → is building" },
{ question:"They ___ drawing pictures now.", choices:["am","is","are","be"], answer:2, explain:"They → are drawing" },
{ question:"She ___ preparing for the test now.", choices:["am","is","are","be"], answer:1, explain:"She → is preparing" },
{ question:"We ___ walking to school now.", choices:["am","is","are","be"], answer:2, explain:"We → are walking" }

],
question_negative: [

/* ===== 疑問文 50問 ===== */

{ question:"___ you play soccer?", choices:["Do","Does","Are","Is"], answer:0, explain:"you → Do you" },
{ question:"___ he like coffee?", choices:["Do","Does","Are","Is"], answer:1, explain:"he → Does he" },
{ question:"___ they study English?", choices:["Do","Does","Are","Is"], answer:0, explain:"they → Do they" },
{ question:"___ she live in Tokyo?", choices:["Do","Does","Are","Is"], answer:1, explain:"she → Does she" },
{ question:"___ we need help?", choices:["Do","Does","Are","Is"], answer:0, explain:"we → Do we" },

{ question:"___ he play baseball?", choices:["Do","Does","Did","Doing"], answer:1, explain:"he → Does he play" },
{ question:"___ she watch TV?", choices:["Do","Does","Did","Doing"], answer:1, explain:"she → Does she watch" },
{ question:"___ they eat lunch at school?", choices:["Do","Does","Did","Doing"], answer:0, explain:"they → Do they eat" },
{ question:"___ Tom study math?", choices:["Do","Does","Did","Doing"], answer:1, explain:"Tom = he → Does Tom" },
{ question:"___ you understand English?", choices:["Do","Does","Did","Doing"], answer:0, explain:"you → Do you" },

{ question:"___ he go to school by bus?", choices:["Do","Does","Did","Doing"], answer:1, explain:"he → Does he go" },
{ question:"___ she read books?", choices:["Do","Does","Did","Doing"], answer:1, explain:"she → Does she read" },
{ question:"___ they play games?", choices:["Do","Does","Did","Doing"], answer:0, explain:"they → Do they play" },
{ question:"___ Ken like music?", choices:["Do","Does","Did","Doing"], answer:1, explain:"Ken → Does Ken" },
{ question:"___ you watch movies?", choices:["Do","Does","Did","Doing"], answer:0, explain:"you → Do you watch" },

{ question:"___ he eat breakfast?", choices:["Do","Does","Did","Doing"], answer:1, explain:"he → Does he eat" },
{ question:"___ she help you?", choices:["Do","Does","Did","Doing"], answer:1, explain:"she → Does she help" },
{ question:"___ they work here?", choices:["Do","Does","Did","Doing"], answer:0, explain:"they → Do they work" },
{ question:"___ Tom play tennis?", choices:["Do","Does","Did","Doing"], answer:1, explain:"Tom → Does Tom play" },
{ question:"___ you know Ken?", choices:["Do","Does","Did","Doing"], answer:0, explain:"you → Do you know" },

{ question:"___ he study English?", choices:["Do","Does","Did","Doing"], answer:1, explain:"he → Does he study" },
{ question:"___ she sing well?", choices:["Do","Does","Did","Doing"], answer:1, explain:"she → Does she sing" },
{ question:"___ they drive cars?", choices:["Do","Does","Did","Doing"], answer:0, explain:"they → Do they drive" },
{ question:"___ Ken play soccer?", choices:["Do","Does","Did","Doing"], answer:1, explain:"Ken → Does Ken play" },
{ question:"___ you like sushi?", choices:["Do","Does","Did","Doing"], answer:0, explain:"you → Do you like" },

{ question:"___ he read books?", choices:["Do","Does","Did","Doing"], answer:1, explain:"he → Does he read" },
{ question:"___ she drink coffee?", choices:["Do","Does","Did","Doing"], answer:1, explain:"she → Does she drink" },
{ question:"___ they study math?", choices:["Do","Does","Did","Doing"], answer:0, explain:"they → Do they study" },
{ question:"___ Tom live here?", choices:["Do","Does","Did","Doing"], answer:1, explain:"Tom → Does Tom live" },
{ question:"___ you eat breakfast?", choices:["Do","Does","Did","Doing"], answer:0, explain:"you → Do you eat" },

{ question:"___ he like pizza?", choices:["Do","Does","Did","Doing"], answer:1, explain:"he → Does he like" },
{ question:"___ she play tennis?", choices:["Do","Does","Did","Doing"], answer:1, explain:"she → Does she play" },
{ question:"___ they visit Kyoto?", choices:["Do","Does","Did","Doing"], answer:0, explain:"they → Do they visit" },
{ question:"___ Ken drive a car?", choices:["Do","Does","Did","Doing"], answer:1, explain:"Ken → Does Ken drive" },
{ question:"___ you enjoy music?", choices:["Do","Does","Did","Doing"], answer:0, explain:"you → Do you enjoy" },

{ question:"___ he cook dinner?", choices:["Do","Does","Did","Doing"], answer:1, explain:"he → Does he cook" },
{ question:"___ she clean the room?", choices:["Do","Does","Did","Doing"], answer:1, explain:"she → Does she clean" },
{ question:"___ they watch TV?", choices:["Do","Does","Did","Doing"], answer:0, explain:"they → Do they watch" },
{ question:"___ Tom study science?", choices:["Do","Does","Did","Doing"], answer:1, explain:"Tom → Does Tom study" },
{ question:"___ you play guitar?", choices:["Do","Does","Did","Doing"], answer:0, explain:"you → Do you play" },

/* ===== 否定文 50問 ===== */

{ question:"I ___ like coffee.", choices:["do not","does not","not","am not"], answer:0, explain:"I → do not like" },
{ question:"He ___ play soccer.", choices:["do not","does not","not","am not"], answer:1, explain:"he → does not play" },
{ question:"She ___ watch TV.", choices:["do not","does not","not","am not"], answer:1, explain:"she → does not watch" },
{ question:"They ___ eat meat.", choices:["do not","does not","not","am not"], answer:0, explain:"they → do not eat" },
{ question:"We ___ need help.", choices:["do not","does not","not","am not"], answer:0, explain:"we → do not need" },

{ question:"He ___ like pizza.", choices:["do not","does not","not","am not"], answer:1, explain:"he → does not like" },
{ question:"She ___ drink coffee.", choices:["do not","does not","not","am not"], answer:1, explain:"she → does not drink" },
{ question:"They ___ study math.", choices:["do not","does not","not","am not"], answer:0, explain:"they → do not study" },
{ question:"Ken ___ play tennis.", choices:["do not","does not","not","am not"], answer:1, explain:"Ken → does not play" },
{ question:"You ___ understand this.", choices:["do not","does not","not","am not"], answer:0, explain:"you → do not understand" },

{ question:"He ___ watch movies.", choices:["do not","does not","not","am not"], answer:1, explain:"he → does not watch" },
{ question:"She ___ eat sushi.", choices:["do not","does not","not","am not"], answer:1, explain:"she → does not eat" },
{ question:"They ___ go to school.", choices:["do not","does not","not","am not"], answer:0, explain:"they → do not go" },
{ question:"Tom ___ play baseball.", choices:["do not","does not","not","am not"], answer:1, explain:"Tom → does not play" },
{ question:"You ___ need this.", choices:["do not","does not","not","am not"], answer:0, explain:"you → do not need" },

{ question:"He ___ study English.", choices:["do not","does not","not","am not"], answer:1, explain:"he → does not study" },
{ question:"She ___ drive a car.", choices:["do not","does not","not","am not"], answer:1, explain:"she → does not drive" },
{ question:"They ___ like fish.", choices:["do not","does not","not","am not"], answer:0, explain:"they → do not like" },
{ question:"Ken ___ eat breakfast.", choices:["do not","does not","not","am not"], answer:1, explain:"Ken → does not eat" },
{ question:"You ___ watch TV.", choices:["do not","does not","not","am not"], answer:0, explain:"you → do not watch" },

{ question:"He ___ read books.", choices:["do not","does not","not","am not"], answer:1, explain:"he → does not read" },
{ question:"She ___ play piano.", choices:["do not","does not","not","am not"], answer:1, explain:"she → does not play" },
{ question:"They ___ drink tea.", choices:["do not","does not","not","am not"], answer:0, explain:"they → do not drink" },
{ question:"Tom ___ go home early.", choices:["do not","does not","not","am not"], answer:1, explain:"Tom → does not go" },
{ question:"You ___ like math.", choices:["do not","does not","not","am not"], answer:0, explain:"you → do not like" }

]  
};

// ===== Pro 設定 =====
const PRO_STORAGE_KEY = "isPro";
const PRO_CODE = "P-8F3K-2Q9M";
const isPro = () => localStorage.getItem(PRO_STORAGE_KEY) === "true";

// ===== 共通状態 =====
let questions = [];
let current = 0;
let correctCount = 0;
let mode = "normal"; // normal / review
let wrongSet = new Set();
let reviewQueue = [];
let reviewIndex = 0;
let currentChapter = null;

// ===== ページ判定 =====
const isMenuPage =
  document.querySelectorAll(".menu-card").length > 0 &&
  !document.getElementById("question");

const isQuizPage = !!document.getElementById("question");

// ===== 成績保存 =====
function saveRate(rate) {
  const history = JSON.parse(localStorage.getItem("rateHistory")) || [];
  history.push({
    chapter: currentChapter,
    date: new Date().toLocaleDateString(),
    rate
  });
  localStorage.setItem("rateHistory", JSON.stringify(history));
}

// ===== Pro用：間違い保存 =====
const wrongKey = (ch) => `wrong_${ch}`;
const loadWrong = (ch) =>
  isPro() ? new Set(JSON.parse(localStorage.getItem(wrongKey(ch)) || "[]")) : new Set();
const saveWrong = (ch, set) =>
  isPro() && localStorage.setItem(wrongKey(ch), JSON.stringify([...set]));
const clearWrong = (ch) => localStorage.removeItem(wrongKey(ch));

// ===== 章選択（一覧ページ）=====
if (isMenuPage) {
  document.querySelectorAll(".menu-card").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.setItem("selectedChapter", btn.dataset.chapter);
      location.href = "eigo.html";
    });
  });
}

// ===== クイズ（eigo.html）=====
if (isQuizPage) {
  const questionEl = document.getElementById("question");
  const choiceBtns = document.querySelectorAll(".choices .choice");
  const resultEl = document.getElementById("result");
  const explainEl = document.getElementById("explain");
  const nextBtn = document.getElementById("nextBtn");
  const reviewBtn = document.getElementById("reviewBtn");
  const progressEl = document.getElementById("progress");
  const progressFill = document.getElementById("progressFill");
  const shareBtn = document.getElementById("shareBtn");

  const QUIZ_SIZE = 10;
  let quizOrder = []; // 今日の10問（indexリスト）

  const getQi = () => {
    if (mode === "normal") return quizOrder[current];
    return reviewQueue[reviewIndex];
  };

  // ===== シェア（X）=====
  if (shareBtn) {
    shareBtn.addEventListener("click", () => {
      const total = QUIZ_SIZE; // 今日の10問
      const text = `英語クイズで ${correctCount} / ${total} 正解！%0Aあなたは何点取れる？`;
      const url = "https://eliasenmanuel200531-oss.github.io/english-quize/";
      const tweet = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
      window.open(tweet, "_blank");
    });
  }

  function todayKey() {
    const d = new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  }

  function startChapter(ch) {
    currentChapter = ch;
    questions = chapters[ch] || [];

    // ===== 今日の10問（毎日固定）=====
    const dailyKey = `daily_${currentChapter}_${todayKey()}`;
    const saved = localStorage.getItem(dailyKey);

    if (saved) {
      quizOrder = JSON.parse(saved);
    } else {
      const allIdx = [...Array(questions.length).keys()];
      for (let i = allIdx.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allIdx[i], allIdx[j]] = [allIdx[j], allIdx[i]];
      }
      quizOrder = allIdx.slice(0, Math.min(QUIZ_SIZE, questions.length));
      localStorage.setItem(dailyKey, JSON.stringify(quizOrder));
    }

    current = 0;
    correctCount = 0;
    mode = "normal";

    wrongSet = loadWrong(ch);
    reviewQueue = [];
    reviewIndex = 0;

    if (shareBtn) shareBtn.style.display = "none";
    reviewBtn.style.display = (isPro() && wrongSet.size > 0) ? "block" : "none";

    show();
  }

  function show() {
    const qi = getQi();
    if (qi === undefined || qi === null) {
      questionEl.textContent = "次の問題が見つかりません（章を選び直してください）";
      nextBtn.style.display = "none";
      return;
    }

    const q = questions[qi];

    // 問題文
    questionEl.textContent = q.question;

    // 選択肢リセット
    choiceBtns.forEach((b, i) => {
      b.textContent = q.choices[i] ?? "";
      b.disabled = false;
      b.classList.remove("correct", "wrong");
    });

    // 結果・解説リセット
    resultEl.textContent = "";
    explainEl.textContent = "";
    explainEl.classList.add("hidden");
    nextBtn.style.display = "none";

    // 進捗
    const total = (mode === "normal") ? quizOrder.length : reviewQueue.length;
    const idx = (mode === "normal") ? current : reviewIndex;
    if (progressEl) progressEl.textContent = `${idx + 1} / ${total} 問`;

    if (progressFill) {
      const percent = ((idx + 1) / total) * 100;
      progressFill.style.width = percent + "%";
    }
  }

  // 選択肢クリック
  choiceBtns.forEach((btn, i) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const qi = getQi();
      const q = questions[qi];

      // 連打防止
      choiceBtns.forEach((b) => {
        b.disabled = true;
        b.classList.remove("correct", "wrong");
      });

      if (i === q.answer) {
        resultEl.textContent = "〇 正解";
        if (mode === "normal") correctCount++;
        if (mode === "review") {
          wrongSet.delete(qi);
          saveWrong(currentChapter, wrongSet);
        }
        btn.classList.add("correct");
      } else {
        resultEl.textContent = "× 不正解";
        wrongSet.add(qi);
        saveWrong(currentChapter, wrongSet);
        btn.classList.add("wrong");
        // 正解も表示
        choiceBtns[q.answer].classList.add("correct");
      }

      explainEl.textContent = "解説： " + (q.explain ?? "（解説は準備中）");
      explainEl.classList.remove("hidden");

      reviewBtn.style.display = "none";
      nextBtn.style.display = "block";
    });
  });

  // 次へ
  nextBtn.addEventListener("click", () => {
    nextBtn.style.display = "none";

    if (mode === "normal") {
      current++;

      if (current >= quizOrder.length) {
        if (wrongSet.size > 0) {
          mode = "review";
          reviewQueue = [...wrongSet];
          reviewIndex = 0;
        } else {
          const r = Math.round((correctCount / quizOrder.length) * 100);
          saveRate(r);
          questionEl.textContent = `終了！ 正答率 ${r}%`;
          if (shareBtn) shareBtn.style.display = "block";
          return;
        }
      }
    } else {
      reviewQueue = [...wrongSet];

      if (reviewQueue.length === 0) {
        const r = Math.round((correctCount / quizOrder.length) * 100);
        saveRate(r);
        clearWrong(currentChapter);
        questionEl.textContent = `復習完了！ 正答率 ${r}%`;
        if (shareBtn) shareBtn.style.display = "block";
        return;
      }

      reviewIndex = (reviewIndex + 1) % reviewQueue.length;
    }

    show();
  });

  // 間違いだけ解く（Pro）
  reviewBtn.addEventListener("click", () => {
    if (!isPro() || wrongSet.size === 0) return alert("Pro限定／保存された間違いがありません");
    mode = "review";
    reviewQueue = [...wrongSet];
    reviewIndex = 0;
    reviewBtn.style.display = "none";
    if (shareBtn) shareBtn.style.display = "none";
    show();
  });

  // 初期開始
  startChapter(localStorage.getItem("selectedChapter") || "be");
}

const nextCategoryBtn = document.getElementById("nextCategoryBtn");

if (nextCategoryBtn) {

  const order = ["be", "tense", "modal","progressive"];

  const names = {
    be: "be動詞",
    tense: "三人称単数現在",
    modal: "時制",
    progressive: "進行形"
  };

  let current = localStorage.getItem("selectedChapter") || "be";

  let currentIndex = order.indexOf(current);

  let next = order[(currentIndex + 1) % order.length];

  nextCategoryBtn.textContent = `次は ${names[next]} クイズ`;

  nextCategoryBtn.addEventListener("click", () => {

    localStorage.setItem("selectedChapter", next);

    location.reload();

  });

}

// ===== 問題数を自動表示 =====
const chapterNames = {
  be: "be動詞 / 一般動詞",
  tense: "三人称単数現在",
  modal: "時制",
  progressive: "進行形"
};

// トップページのタイトル更新
const mainTitle = document.getElementById("mainTitle");
if (mainTitle) {
  const total = Object.values(chapters).reduce((sum, arr) => sum + arr.length, 0);
  mainTitle.textContent = `英語文法クイズ（${total}問）｜間違いだけ復習できる`;
}

// 一覧ページの件数表示
const countBe = document.getElementById("count-be");
const countTense = document.getElementById("count-tense");
const countModal = document.getElementById("count-modal");
const countProgressive = document.getElementById("count-progressive");
const countQN = document.getElementById("count-question-negative");

if (countQN) {
countQN.textContent = `${chapters.question_negative.length}問`;
}

if (countProgressive) {
  countProgressive.textContent = `${chapters.progressive.length}問`;
}
if (countBe) {
  countBe.textContent = `${chapters.be.length}問`;
}
if (countTense) {
  countTense.textContent = `${chapters.tense.length}問`;
}
if (countModal) {
  countModal.textContent = `${chapters.modal.length}問`;
}

// 開発用：コンソールで問題数確認
console.log("カテゴリ別問題数", {
  be: chapters.be.length,
  tense: chapters.tense.length,
  modal: chapters.modal.length
});
console.log("合計問題数", Object.values(chapters).reduce((sum, arr) => sum + arr.length, 0));

function startDailyQuiz(){

const chapters = ["be","tense","modal","progressive"];

const random = chapters[Math.floor(Math.random()*chapters.length)];

localStorage.setItem("selectedChapter",random);

location.href="eigo.html";

}

















