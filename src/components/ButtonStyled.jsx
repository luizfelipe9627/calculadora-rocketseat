import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
`;

export const Button = styled.button`
  padding: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  height: 67px;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: #ebebeb;
  box-shadow: 0px 2px 3px 0px rgba(255, 255, 255, 0.1) inset,
    0px 0px 2px 0px rgba(0, 0, 0, 0.29), 0px 2px 4px 0px rgba(0, 0, 0, 0.26),
    0px 4px 6px 0px rgba(0, 0, 0, 0.1), 0px 7px 7px 0px rgba(0, 0, 0, 0.04),
    0px 11px 7px 0px rgba(0, 0, 0, 0.01);

  &:hover {
    filter: brightness(90%);
  }
`;
