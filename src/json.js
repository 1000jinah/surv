export const json = {
  showProgressBar: "top",
  goNextPageAutomatic: true,
  showNavigationButtons: false,
  pages: [
    {
      elements: [
        {
          type: "radiogroup",
          name: "firstSurv",
          title: "당신은 숲을 지나가다 외진 길에 주차된 차 한 대를 찾았습니다.",
          choices: [
            "트렁크의 식료품들만 가져간다. 주변에 사람도 없으니 내가 가져가는 걸 알 사람도 없다. 게다가 이런 상황에서 물자들을 내려둔 건 본인들의 잘못이다.",
            "차량에 탑승하여 운전한다. 이제 이 차는 제 겁니다. 이야호!",
            "주인이 있을 수도 있는 물건들이다, 좋건 나쁘건 간에 막 집어갔다간 원한을 질지도 모르는 일이다.",
            "차 주변에서 기다렸다가 돌아올 수도 있는 사람들을 기다리고, 매복한 뒤 그들을 습격한다.",
            "시동이 걸린 걸 본다면 분명 주위에 사람이 있다! 그들이 누구든 간에 합류한다면 좋을 것이다. 기다렸다가 우호적으로 다가간다.",
            "사람들이 날 받아줄지는 모르겠지만, 그들 사이에 들어가서 나의 중요함을 입증하고 입지를 굳혀서 영향력을 얻는다면 지금의 생활보다 훨 편할 것이다.",
            "우호적인 태도를 유지하고 접근해서 만약 그들이 날 받아준다면 배신하고 많은 물자와 이 멋진 차를 챙기고 도주할 수 있겠다.",

          ],
        },
      ],
    },
    {
      elements: [
        {
          type: "radiogroup",
          name: "libertyordeath",
          title: "Who said 'Give me liberty or give me death?'",
          choicesOrder: "random",
          choices: [
            "John Hancock",
            "James Madison",
            "Patrick Henry",
            "Samuel Adams",
          ],
        },
      ],
    },
    {
      elements: [
        {
          type: "radiogroup",
          name: "magnacarta",
          title: "What is the Magna Carta?",
          choicesOrder: "random",
          choices: [
            "The foundation of the British parliamentary system",
            "The Great Seal of the monarchs of England",
            "The French Declaration of the Rights of Man",
            "The charter signed by the Pilgrims on the Mayflower",
          ],
        },
      ],
    },
  ],
  // completedHtml:
  //   "<p>Your anwers are:</p><p>When was the Civil War?: <b>{civilwar}</b>. The correct is: <b>1850-1900</b></p><p>Who said 'Give me liberty or give me death?': <b>{libertyordeath}</b>. The correct is: <b>Patrick Henry</b></p><p>What is the Magna Carta?: <b>{magnacarta}</b>. The correct is: <b>The foundation of the British parliamentary system</b></p>",
};
