import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Result = () => {
  return (
    <Box p="1.2rem" backgroundColor="#fff" width={"100%"} height={"100vh"}>
      <Box p="1.4rem" backgroundColor="#f9f9f9">
        {/* Top */}
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          {/* Logo */}
          <Box>
            <Typography variant="h5" style={{ fontWeight: "bold" }}>
              ZNP TEST
            </Typography>
            <Typography>Who are you in the apocalypse</Typography>
          </Box>
          {/* TopNavbar */}
          <Box>
            <Link to="/" style={{ padding: "0 10px", fontSize: "12px" }}>
              뉴클리어 아포칼립스 메인
            </Link>
            <Link to="/" style={{ padding: "0 10px", fontSize: "12px" }}>
              단편집
            </Link>
            <Link to="/" style={{ padding: "0 10px", fontSize: "12px" }}>
              Zombie Apocaylpse Test V.18
            </Link>
          </Box>
        </Box>
        {/* Content */}
        <Box>
          <Box mt={"3rem"}>
            <Typography variant="h2" style={{ fontWeight: "bold" }}>
              부추기는 조종자
            </Typography>
          </Box>

          <Box>
            <Typography variant="h4" my={2}>
              생존확률
            </Typography>
            <Typography my={2}>
              당신은 그룹에서 영향력을 얻는 것을 희망합니다. 높은 소속감은 이의
              방증이며, 사실상 생존율이 제일 높은 유형 중 하나입니다. 당신은
              자신이 직접 나서지 않고 같은 그룹의 다른 인원들이 위험성을 가진
              일들을 시키게 부추기는 데 능하며, 따라서 정작 자신은 그 위험에서
              빠진 채 안전하게 있고는 합니다. 이런 사실들로 인해 당신은 교묘하게
              그룹에서 입지를 굳힌 채 지도자는 아니되 중역을 맡고 있으며, 그로
              하여금 모든 유형들 중 제일 높은 생존율을 자랑합니다.
            </Typography>
            <Typography variant="h4" my={2}>
              악행인지
            </Typography>
            <Typography my={2}>
              당신은 자신의 생존을 위해서라면 악행은 무엇이든지 할 수 있지만
              자신의 손을 더럽히길 꺼리는, 경계하는 스캐빈저의 위선적인 모습이
              극대화 된 유형 중 하나입니다. 공동체에 있을 때 묻어가거나
              졸속처리를 하거나, 자신은 빠지려고 하는 이기주의자이기도 하죠.
              동시에 간사하지만 영리하여서 이런 상황에서 그만큼 다른 이들의
              동조를 얻기도 쉽고요, 그러나 당신은 여전히 악행에 대한 인지도가
              낮습니다.
              <Typography fontWeight={"bold"}>
                결론적으로 당신은 이런 재난 상황에서 자신의 생존을 위해 타인 및
                그룹의 여론을 이용합니다.
              </Typography>
            </Typography>
            <Typography variant="h4" my={2}>
              유형관계
            </Typography>
            <Typography my={2}>
              ‘가학적인 불한당’들은 당신이 도박을 걸어볼만한 그룹들 중
              하나입니다. 그들의 마음에만 든다면 상당히 풍족하고 안정적인 생활을
              할 수 있으니, 악행을 꺼리지 않을 당신으로 하여금 나쁘지 않은
              조건이 될 겁니다. 다만 그들을 잘 사로잡아야 할 겁니다. ‘외면하는
              부역자’는 당신이 희생시키기 쉬운 사람들 중 하나입니다. 그들을
              이용하는 것도 사실 상 당신이 제일 크죠. 자신의 악행을 그에게
              떠넘기곤 하면서 책임을 피하고, 나중 가서는 그 넘겨둔 책임들로
              희생을 강요하기도 합니다. ‘폐쇄적인 파수꾼’의 공동체는 쉽사리
              당신이 침범하지 못할 것입니다. 그들은 당신과 같은 교묘한
              외부인들에 대한 경계가 극도로 심하니 말입니다. ‘배신하는 내통자’는
              당신의 라이벌이자 눈엣가시입니다. 부추기려다가도 오히려 당신이
              된통 등쳐먹힐 수 있으니 주의하시길 바랍니다. ‘불신주의 방랑자’는
              어쩌면 당신에 의해 불신주의자가 됐을지도 모릅니다. 당신에 대한
              반감은 기본이겠네요.
            </Typography>
            <Typography my={2}>업데이트 로그</Typography>
          </Box>
        </Box>
        {/* Percent Box */}
        <Box
          width={"100%"}
          fontWeight="bold"
          textAlign="center"
          p="1rem"
          backgroundColor="#000"
          color="#fff"
        >
          100% 정확하지 않으며 9/21일 기준 12개의 결과만 있습니다.
        </Box>

        {/* Survey Result List */}
        <Box
          width={"100%"}
          fontWeight="bold"
          textAlign="center"
          p="1rem"
          backgroundColor="#000"
          // style={{
          //   background:
          //     "radial-gradient(circle at 27.59% 1.94%, #ffe5b3 0, #ffd7a8 16.67%, #ffc498 33.33%, #fcac84 50%, #ef9472 66.67%, #e58067 83.33%, #de7263 100%)",
          // }}
          color="#fff"
        >
          <Typography>
            현재 추가된 결과
            <br /> 1. 극악무도 막가파
            <br /> 2. 불량스런 약탈자
            <br /> 3. 경계하는 스캐빈저
            <br /> 4. 침묵하는 수색자
            <br /> 5. 부득이한 정찰자
            <br /> 6. 정의로운 징벌자
            <br /> 7. 외면하는 부역자
            <br /> 8. 불신주의 방랑자
            <br /> 9.부추기는 조종자
            <br /> 10. 폐쇄적인 파수꾼
            <br /> 11. 배신하는 내통자
            <br /> 12. 가학적인 불한당
          </Typography>
        </Box>
        {/* Footer */}
        <Box py={3} display={"flex"} alignItems={"center"}>
          <Link>ZNP TEST</Link>
          <Link>Copyright 2023</Link>
        </Box>
      </Box>
    </Box>
  );
};
export default Result;
