import styled from "styled-components";

export const HomePageConatiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px;
  width: 100%;
  overflow-x: hidden;

  @media (min-width: 481px) {
    padding: 20px 40px;
  }

  @media (min-width: 768px) {
    padding: 20px 60px;
  }

  @media (min-width: 1024px) {
    padding: 20px 80px;
  }
  `;