import styled from "styled-components";

// For Scrolling Effect

export const Wrapper = styled.div`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100vh;
`;

export const Content = styled.div`
  scroll-snap-align: start;
`;
