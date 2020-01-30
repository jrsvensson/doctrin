import useVisit from "../useVisit";
import Thank from "./Thank";
import {SsnInput} from "./SsnInput";
import {IllnessSelector} from "./IllnessSelector";
import Questionnaire from "./Questionnaire";
import React from "react";
import styled from "styled-components";

const Header = styled.header`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  padding: 16px;
  font-size: 32px;
  background-color: #98cde0;
  color: #fff;
`;

const ContentWrapper = styled.main`
  margin-top: 72px;
  text-align: center;
`;

const Page = () => {
    const {visit = {}} = useVisit();
    let Content = Thank;
    if (!visit.id) {
        Content = SsnInput;
    } else if (!visit.illness) {
        Content = IllnessSelector;
    } else if (!visit.isFinished) {
        Content = Questionnaire;
    }

    return (
        <>
            <Header>Doctrin</Header>
            <ContentWrapper>
                <Content/>
            </ContentWrapper>
        </>
    );
};

export default Page;