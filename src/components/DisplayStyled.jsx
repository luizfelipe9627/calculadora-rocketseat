import styled from "styled-components";

export const Display = styled.div`
  margin-bottom: 26px;
  padding: 0 22px;
`;

export const Operacao = styled.p`
  color: #6b6b6b;
  text-align: right;
  font-size: 20px;
  letter-spacing: -0.4px;
  margin-bottom: 8px;

  p {
    width: 258px;
    text-align: end;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Resultado = styled.div`
  display: flex;
  justify-content: space-between;
  color: #ebebeb;
  font-size: 36px;
  line-height: 140%;
  letter-spacing: -0.72px;

  p {
    width: 200px;
    text-align: end;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
