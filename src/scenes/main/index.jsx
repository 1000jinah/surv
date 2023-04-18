import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Survey from "components/SurveyComponent";

const Main = () => {
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
            <Typography variant="h4" style={{ fontWeight: "bold" }}>
              ZNP TEST
            </Typography>
            <Typography>Who are you in the apocalypse</Typography>
          </Box>
          {/* TopNavbar */}
          <Box>
            <Link to="/" style={{ padding: "0 10px", fontSize: "14px" }}>
              뉴클리어 아포칼립스 메인
            </Link>
            <Link to="/" style={{ padding: "0 10px", fontSize: "14px" }}>
              단편집
            </Link>
            <Link to="/" style={{ padding: "0 10px", fontSize: "14px" }}>
              Zombie Apocaylpse Test V.18
            </Link>
          </Box>
        </Box>
        {/* Content */}
        <Box>
          <Box mt={"3rem"}>
            <Typography variant="h3" style={{ fontWeight: "bold" }}>
              좀비 아포칼립스 테스트 v.18
            </Typography>
          </Box>
          <Box display={"flex"} alignItems={"center"}>
            <Typography style={{ fontWeight: "bold" }}>
              Are you other language user?
            </Typography>
            <Link to="/">Click here.</Link>
          </Box>
          <Box>
            <Typography my={2}>
              문항 약 12개와 11개로 구성된 심리테스트 결과를 통해 좀비
              아포칼립스와 같이 인륜이 무너진 세상의 당신을 그려보세요, 문항은
              지속적으로 추가됩니다.
            </Typography>
            <Typography my={2}>
              X축은 악행에 대한 인지도와 생존 확률, 그리고 Y축은 소속감의 정도를
              나타냅니다.
            </Typography>
            <Typography my={2}>
              선택지 밑에 상황에 대한 설명이 있습니다. 상황 묘사를 읽고
              자신이라면 어떻게 행동할지 생각한 뒤 선택지를 고르세요. 자신이
              정말 극한 상황에 있는 것처럼 생각하면 더 알맞은 결과가 도출됩니다.
              가볍게 하셔도 문제 없습니다. 다만 시간을 들여 읽으시면 종말의
              피폐함을 느끼실 수 있을 겁니다.
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
        {/* Survey */}
        <Box>
          <Survey  />{" "}
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

export default Main;
