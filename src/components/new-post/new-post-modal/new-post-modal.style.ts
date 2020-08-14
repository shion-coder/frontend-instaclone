import styled from 'styled-components';

/* -------------------------------------------------------------------------- */

export const Container = styled.div`
  min-height: 20rem;
  width: 60rem;
  grid-column: center-start / center-end;
  justify-self: center;
  background-color: $color-grey-3;
  box-shadow: 0 1rem 2rem $color-black;
  position: relative;
  display: grid;
  grid-template-rows: min-content 50rem 15rem min-content;
`;
