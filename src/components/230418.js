import React from "react";
import { Link } from "react-router-dom";
const Survey = () => {
  const questions = [
    {
      questionText:
        "당신은 숲을 지나가다 외진 길에 주차된 차 한 대를 찾았습니다.",
      answerOptions: [
        {
          answerText:
            "트렁크의 식료품들만 가져간다. 주변에 사람도 없으니 내가 가져가는 걸 알 사람도 없다. 게다가 이런 상황에서 물자들을 내려둔 건 본인들의 잘못이다.",
          isCorrect: false,
        },
        {
          answerText:
            "차량에 탑승하여 운전한다. 이제 이 차는 제 겁니다. 이야호!",
          isCorrect: false,
        },
        {
          answerText:
            "주인이 있을 수도 있는 물건들이다, 좋건 나쁘건 간에 막 집어갔다간 원한을 질지도 모르는 일이다.",
          isCorrect: true,
        },
        {
          answerText:
            "시동이 걸린 걸 본다면 분명 주위에 사람이 있다! 그들이 누구든 간에 합류한다면 좋을 것이다. 기다렸다가 우호적으로 다가간다.",
          isCorrect: false,
        },
        {
          answerText:
            "사람들이 날 받아줄지는 모르겠지만, 그들 사이에 들어가서 나의 중요함을 입증하고 입지를 굳혀서 영향력을 얻는다면 지금의 생활보다 훨 편할 것이다.",
          isCorrect: false,
        },
        {
          answerText:
            "우호적인 태도를 유지하고 접근해서 만약 그들이 날 받아준다면 배신하고 많은 물자와 이 멋진 차를 챙기고 도주할 수 있겠다.",
          isCorrect: false,
        },
        {
          answerText:
            "차 주변에서 기다렸다가 돌아올 수도 있는 사람들을 기다리고, 매복한 뒤 그들을 습격한다.",
          isCorrect: false,
        },
      ],
    },
    {
      questionText: "당신은 라디오를 청취 중이었습니다.",
      answerOptions: [
        {
          answerText:
            "방송의 출처가 불분명한데다가 굳이 위험을 감수해서 그곳까지 갈 필요는 없으니 알아만 두고 가지는 않는다. ",
          isCorrect: false,
        },
        {
          answerText:
            "식량과 식수가 넉넉하고 안전하기까지 하다면 안 갈 이유가 없다. 위험을 감수하고서라도 가는 길에 오른다.",
          isCorrect: true,
        },
        {
          answerText:
            "가능할지는 모르겠지만, 그곳을 습격한다면 아주 많은 물자를 확보할 수 있을 것이다.",
          isCorrect: false,
        },
        {
          answerText:
            "그곳으로 가서 물자를 얼마 훔쳐 몰래 빠져나올 수 있다면 어쨌든 간에 좋을 것이다.",
          isCorrect: false,
        },
      ],
    },
    {
      questionText: "당신은 2층 건물의 2층을 수색 중이었습니다.",
      answerOptions: [
        {
          answerText:
            "적어도 고통 없는 죽음을 줘야한다. 물건은 조금밖에 챙기지 못하겠지만, 총알 한 발로 산 채로 뜯어먹히는 신세를 면하게 해주는 것은 분명 옳은 일일 것이다.",
          isCorrect: true,
        },
        {
          answerText:
            "이미 물렸으니 별 수 없다. 어차피 물렸으니 좀비가 될 테고 산 사람은 살아야 하니까 물건들부터 챙긴다. 저 사람이 죽는 덕분에 내가 물건을 더 챙길 수 있으니 총알도 아낄 겸, 살인도 하지 않는다.",
          isCorrect: false,
        },
        {
          answerText:
            "물렸지만 그래도 지금 당장 구하면 살 수도 있다. 권총에 삽입된 탄창이 가득 차있으니 저 사람을 포위한 좀비들을 해치우고 구출한다.",
          isCorrect: false,
        },
        {
          answerText:
            "함께 있는 그룹원 중 하나에게 어서 구해야하지 않겠느냐고, 아니면 적어도 쏴야하지 않겠냐고 나 대신 그가 가거나 쏘게끔 이야기를 늘어놓는다.",
          isCorrect: false,
        },
      ],
    },
    {
      questionText: "당신은 한적한 도시 근교를 지나가던 중이었습니다.",
      answerOptions: [
        {
          answerText:
            "그대로 두었다간 물건을 빼앗기는 것 뿐만 아니라 사람이 죽을 수도 있는 일이다. 총알은 몇 없지만 주저 없이 불량배 같이 생긴 둘을 향해 총구를 겨누고 방아쇠를 당긴다.",
          isCorrect: true,
        },
        {
          answerText:
            "무슨 일인지 알 수는 없지만 바로 쏘는 건 괜한 총알만 낭비할 수도 있다. 총구를 겨누고 물러나라고 협박한 뒤, 필요하다면 딱 한 발 정도만 위협용으로 사격하고 모두가 흩어지면 빨리 자리를 벗어난다.",
          isCorrect: false,
        },
        {
          answerText:
            "굳이 총알을 낭비할 이유도 없고, 은닉한 총기가 있을 수도 있으니 위험을 감수할 필요도 없다. 이런 상황에서는 조용히 지나쳐야 할 필요가 있다. 굳이 소란을 만들지 않고 자리를 피한다.",
          isCorrect: false,
        },
        {
          answerText:
            "햇병아리들의 무장과 뭔지는 모르겠지만 저기 가방을 들고 있는 녀석의 물건 모두 탐난다. 모두 죽여버리고 물건을 챙기면 되겠다.",
          isCorrect: false,
        },
        {
          answerText:
            "아마 저놈들 모두 지금 상황에선 털어먹기 딱 좋을 것이다. 총도 없는 것 같으니 적당히 협박하고 싹싹 털어가자.",
          isCorrect: true,
        },
        {
          answerText:
            "불량배들을 쫓아내고 위협받던 청년을 살펴본다, 건강한 상태라면 영입을 제의한다. 방금까지 위협받던 걸 보면 그만한 이유가 있어서겠지...",
          isCorrect: false,
        },
        {
          answerText:
            "함께 있는 그룹원 중 하나에게 어서 구해야하지 않겠느냐고, 아니면 적어도 쏴야하지 않겠냐고 나 대신 그가 가거나 쏘게끔 이야기를 늘어놓는다.",
          isCorrect: false,
        },
      ],
    },
    {
      questionText: "당신은 상당히 우호적인 생존자들을 조우했습니다.",
      answerOptions: [
        {
          answerText:
            "수상하기 그지없다. 그럴싸한 이야기긴 하지만, 그렇다고 따라가서 좋을 건 없을 것 같다. 사람이 부족하다고는 하지만 이런 상황에서 머릿수가 더 있어서 좋을 게 어딨다는 거야?",
          isCorrect: true,
        },
        {
          answerText:
            "물건이 많은데다가 사람도 별로 없다면 훔쳐서 나오기 딱인 곳일 터이다. 경계를 늦추지 않은 채 간다면 총이 빈 상태긴 하지만 적당히 견제하고 나올 수 있을 것이다.",
          isCorrect: false,
        },
        {
          answerText:
            "사람이 별로 없고 물건도 많다면, 거기에 무장도 있을 테니 몰래 훔쳐서 구성원들을 모두 해치고 나 혼자서 독차지 해도 되는 것 아닌가? 그들을 해칠 작정으로 따라간다.",
          isCorrect: false,
        },
        {
          answerText:
            "식량도 있고 사람도 있다면, 머무르기 딱 좋은 곳이 아닐까? 식량도 식수도 없고, 내가 약간의 노동력만 제공한다면 더할나위 없이 머물기 좋은 곳일 터이다. 여차하면 총도 있어서, 비어있긴 하지만 호신용으로 위협할 수도 있을 것이다.",
          isCorrect: false,
        },
        {
          answerText:
            "그곳에 가서 이 사람들에게 나를 단단히 각인시켜두면 더할나위 없이 편한 삶이 될 것이다. 그 다음 내가 거기의 지도권을 휘어잡는다면... 흑심을 품고 동행한다.",
          isCorrect: true,
        },
        {
          answerText:
            "너무 긴장은 하지 말고 그냥 따라가서 적당히 일하다가 물자가 떨어진다 싶으면 그때 홀라당 다 챙기고 나온다.",
          isCorrect: false,
        },
      ],
    },
    {
      questionText: "당신은 길을 가다 정신을 잃은 생존자를 발견했습니다.",
      answerOptions: [
        {
          answerText:
            "그를 깨운 다음 길을 간다. 내가 이 사람을 그냥 두고 가면 누군가 또 이 사람에게 해코지를 할 수 있는 가능성을 남겨두는 것과도 같기 때문에 깨워두는 편이 그에게도 좋다. 나쁜 사람이어서 내가 나중에 추적당할 수도 있지만 저 사람은 혼자 다니는 것 같으니까.",
          isCorrect: true,
        },
        {
          answerText:
            "길에 완전히 무방비 상태로 있는 것은 아무리 생각해도 이 사람 잘못인 게 분명하다. 이런 상황에서는 더욱이 그렇고, 죽을 작정을 한 거나 다름 없으니 물건만 빼돌려서 지나쳐 간다.",
          isCorrect: false,
        },
        {
          answerText:
            "괜히 물건에 손 대기도 그렇고, 깨워서 오히려 나를 위협하면 그건 더 좋지 않은 일이다. 그냥 후환 없이 가는 게 제일 좋으니 가던 길 마저 가자.",
          isCorrect: false,
        },
        {
          answerText:
            "나 잡아가쇼 있는 걸 보니 좀비에게 미끼로 줘도 문제가 없을 것 같다. 아니면 내가 피를 보면서 재미를 좀 봐도 괜찮을 것 같고 말이다.",
          isCorrect: false,
        },
        {
          answerText:
            "깨운 다음 괜찮은 사람이다 싶으면 동행을 요청한다. 혼자 다니기에는 너무나도 버겁다.",
          isCorrect: false,
        },
      ],
    },
    {
      questionText: "당신의 동료가 사실을 털어놓았습니다.",
      answerOptions: [
        {
          answerText:
            "쫓아내거나 헤어진다. 더 이상 동행하지 않고 각자의 길을 간다. 손발이 맞아서 괜찮은 동료긴 했지만 부담도 지기 싫고, 그렇다고 해를 끼치기도 껄끄럽다.",
          isCorrect: true,
        },
        {
          answerText:
            "거짓말로 치부한다. 물린 부위는 가짜일 것 같다. 아니 적어도 지금 멀쩡한 걸 보면 아무래도 면역자일 수도 있다. 잘 모르겠지만 부인하고 개의치 않고 동행한다.",
          isCorrect: false,
        },
        {
          answerText:
            "동료의 왼팔을 절단한다. 피 냄새와 비명을 어떻게든 막기만 한다면 할 수 있는 일이다. 설령 새어나가도 이 동료와 함께 할 수 있다면 위험을 감수한다.",
          isCorrect: false,
        },
        {
          answerText:
            "격리시킨다. 식수와 식량을 대신 가져다 주기로 하고 방 안에 동료를 격리시켜 며칠 동안 지켜본다. 팔을 자르는 위험을 감수하는 것도 그렇고, 죽이는 것도 할 수 없다.",
          isCorrect: false,
        },
        {
          answerText:
            "살해한다. 권총으로 편안하게 보내준다. 총알 한 발로 안식을 줄 수 있는 건 그간 지내온 정으로 줄 수 있는 일이다.",
          isCorrect: false,
        },
        {
          answerText:
            "자살을 종용한다. 권총을 그에게 넘겨주고 알아서 하라고 선택권을 넘겨둔다. 무책임할 수도 있지만 내 손에 피를 묻힐 수는 없다.",
          isCorrect: false,
        },
      ],
    },
    {
      questionText: "당신을 붙잡은 불량배들로부터 제안을 받았습니다.",
      answerOptions: [
        {
          answerText:
            "살려면 별 수 없으니 합류한다. 무슨 악행을 저지르는 일이 있다고 해도 결국 이런 상황에서 붙들린 상황이라면 체념하고 그들과 함께 다니는 게 오히려 더 살 확률이 높을 테니까...",
          isCorrect: true,
        },
        {
          answerText:
            "아무리 그래도 그렇지 이런 불량배들 하고 어울릴 수는 없다. 얻어맞고 피투성이가 되어 죽거나 산 채로 좀비 밥이 될 게 뻔하지만 거부한다.",
          isCorrect: false,
        },
        {
          answerText:
            "숙이는 척 하면서 기회를 노리다가 복수하고 달아난다. 죽을 수도 있겠지만 그게 제일인 것 같다.",
          isCorrect: false,
        },
        {
          answerText:
            "들어가서 그들의 비위를 맞추는 동시에 천천히 나의 영향력을 키운다. 이렇게 된 거 아예 독하게 마음을 먹고 그들과 동화되어 그들 안에서 입지를 굳힌다.",
          isCorrect: false,
        },
      ],
    },
    {
      questionText: "당신은 시체가 즐비한 캠프를 살피던 중이었습니다.",
      answerOptions: [
        {
          answerText:
            "저 가방 안에 총을 숨겼을지도 모르는 일이다, 노인이라고 다를 건 없으니 가차없이 방아쇠를 당기고 가방을 확인한다.",
          isCorrect: true,
        },
        {
          answerText:
            "물건이 없다는 건 거짓말이 분명하다. 노인에게 총구를 들이대며 가방을 내려놓으라고 협박한다. 살 만큼 산 사람이니까 괜찮을 것이다.",
          isCorrect: false,
        },
        {
          answerText:
            "우선 총구를 계속 겨누고, 다 털었냐고 물어본 다음에 이곳을 마저 살펴 딱히 특별한 게 없다면 노인에게 해코지는 않고 자릴 벗어난다.",
          isCorrect: false,
        },
        {
          answerText:
            "이런 노인이 살기에는 세상이 너무나도 험상궂다. 우리 그룹에 영입하는 건 어떨까? 절름발이긴 하지만... 그래도 사람을 그냥 내치기엔 좀 그럴 것 같다.",
          isCorrect: false,
        },
        {
          answerText:
            "영입하는 것은 무리지만 그래도 적당한 물과 음식은 쥐여드리고 떠날 수 있을 것 같다. 수색하러 와서 손해만 본다고 생각할 수도 있겠지만... 그래도 사람 돕는 일이다.",
          isCorrect: true,
        },
      ],
    },
    {
      questionText: "당신은 주택을 살피던 중이었습니다.",
      answerOptions: [
        {
          answerText:
            "아이는 데리고 다녀봤자 식량과 식수만 축낼 뿐이다. 그냥 여기 두고 주택을 빨리 빠져나간다.",
          isCorrect: true,
        },
        {
          answerText:
            "아무리 그래도 아이인데... 그냥 두고 가기에는 너무 그러니까 달랜 후 동행할지 물어본다.",
          isCorrect: false,
        },
        {
          answerText:
            "그룹에서 책임질 여력은 없다. 그냥 적당한 식량과 물 정도만 대충 앞에다 던져놓고 빠져나간다.",
          isCorrect: false,
        },
        {
          answerText:
            "아이를 데려가면 그룹에서 인간성을 추구하는 파벌쪽의 신뢰를 사들일 수 있을 것이다. 그로써 내 입지를 굳게 굳힐 수 있겠지... 그럼 이후의 내 영향력도 커질 것이다.",
          isCorrect: false,
        },
        {
          answerText:
            "아이를 속이고 데려가서 약탈자 무리에 인신매매한다. 서커스 하는 어릿광대는 그 놈들이 찾는 아주 귀한 가치를 가지고 있으니... 거래의 대가로 받는 식량도 충분할 것이다.",
          isCorrect: false,
        },
        {
          answerText:
            "데려가서 광대 훈련을 시킨다. 킥킥킥...마침 지루한데 잘 됐어.....",
          isCorrect: false,
        },
      ],
    },
    {
      questionText: "당신은 머리에 총구가 겨눠졌습니다.",
      answerOptions: [
        {
          answerText:
            "결국 이렇게 되는 건가? 일러바치거나 투항하는 것도 포기하고 그냥 혼자서 그룹을 미리 떠난다. 적어도 생포당할 일도, 맞서 싸울 일도 없을 것이다.",
          isCorrect: true,
        },
        {
          answerText:
            "무슨 놈들인지는 모르겠지만 죽기 살기로 맞서 싸워야 한다. 돌아가서 일행들에게 이 사실을 알리고 경계 태세에 들어간다.",
          isCorrect: false,
        },
        {
          answerText:
            "투항하면 살 수 있다는 건 괜찮은 것 같다. 적어도 목숨 만큼은 부지할 수 있을 것이다...",
          isCorrect: false,
        },
        {
          answerText:
            "차라리 이건 기회가 될 수도 있다. 어차피 돈독한 사람들도 아니었으니 기왕 붙을 거 갈아타는 게 좋을 것 같다.",
          isCorrect: false,
        },
      ],
    },
    {
      questionText:
        "당신은 쓰러진 사람에게 붕대를 감아주고 일어서는 사람과 마주쳤습니다.",
      answerOptions: [
        {
          answerText:
            "어떻게 해서든 저 사람을 데려가야 한다. 온갖 회유하는 말과 함께 그를 영입하려고 노력한다.",
          isCorrect: true,
        },
        {
          answerText:
            "어떻게 해서든 데려가야 하니까, 강제로라도 그래야만 한다. 당장 달려가서 그를 붙들고 끌고간다.",
          isCorrect: false,
        },
        {
          answerText:
            "협조의 뜻도 보이지 않고, 게다가 분명 희귀한 인력이긴 하지만 그만큼 부담해야 할 짐도 늘어나는 것이다. 아무리 의사가 있어도 물리면 끝인데 굳이 무리해서 영입을 시도할 필요는 없다.",
          isCorrect: false,
        },
        {
          answerText:
            "권총으로 그를 위협하며 가방을 내려놓으라 협박한다. 의사라면 분명 의약품을 가지고 있을 테니 유용하게 쓸 수 있겠지...",
          isCorrect: false,
        },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [showScore, setShowScore] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const handleAnswerButtonClick = (isCorrect, value) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  const renderProgressBar = () => {
    const progress = (currentQuestion / questions.length) * 100;
    return (
      <div style={{ width: "100%", height: "20px", backgroundColor: "#eee" }}>
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            backgroundColor: "#2196f3",
            position: "relative",
          }}
        >
          <span
            style={{
              position: "absolute",
              left: 20,
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            ({Math.round(progress)}%)
          </span>
        </div>
      </div>
    );
  };
  return (
    <div>
      {showScore ? (
        <div className="score-section">
          수고하셨습니다.

          <Link to="/result">결과보기</Link>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
              {renderProgressBar()}
            </div>

            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div
            className="answer-section"
            style={{
              width: "100%",
            }}
          >
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <button
                  // className={isTransitioning ? "transition" : ""}
                  style={{
                    width: "100%",
                    border: "1px solid #efefef",
                    cursor: "pointer",
                    padding: "20px",
                    marginBottom: "10px",
                    fontSize: "14px",
                  }}
                  onClick={() =>
                    handleAnswerButtonClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              )
            )}
          </div>
        </>
      )}
    </div>
  );
};
export default Survey;
