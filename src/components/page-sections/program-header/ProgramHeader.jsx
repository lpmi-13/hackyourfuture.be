import React from "react"
import { Link } from "gatsby"

import { Container, AbsoluteContainer } from "./style"
import { Title, Text, Section, Wrapper, Image, Button } from "../../ui"
import imageUrl from "../../../assets/images/new-career.jpg"
import { COLOR } from "../../../utils/constants"

const data = {
  title: "Your new career starts here",
  description:
    "HackYourFuture is a <b>free 8-month web development program</b> for passionate refugees and vulnerable newcomers in Belgium. You don’t need any technical background to start.<br/><br/>We launch new classes 3 times a year.<br/><b>Women are strongly encouraged to apply!</b><br><br>",
  cta1: "Next class starts : 20 September (Full)",
  cta2: "Following class starts: February 2020 (To be confirmed)",
  cta: "Apply Now",
  ctaLink: "/apply",
  image: imageUrl,
}

const ProgramHeader = () => (
  <Section style={{ marginBottom: "20px" }}>
    <Wrapper direction="row" justifyContent="flex-start">
      <Container>
        <Title level={1} size="L" color={COLOR.BLUE_VIOLET}>
          {data.title}
        </Title>
        <Text
          margin="10px 0"
          dangerouslySetInnerHTML={{ __html: data.description }}
        />
        <Text
          margin="10px 0"
          style={{ textDecoration: "underline", color: COLOR.BLUE_VIOLET }}
        >
          {data.cta1}
        </Text>
        <Text
          margin="10px 0 50px 0"
          style={{ textDecoration: "underline", color: COLOR.BLUE_VIOLET }}
        >
          {data.cta2}
        </Text>
        <Button as={Link} to={data.ctaLink}>
          {data.cta}
        </Button>
      </Container>
      <AbsoluteContainer>
        <Image src={data.image} width="100%" height="100%" objectFit="cover" />
      </AbsoluteContainer>
    </Wrapper>
  </Section>
)

export default ProgramHeader
