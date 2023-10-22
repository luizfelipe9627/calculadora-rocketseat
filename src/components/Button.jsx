import * as S from "./ButtonStyled";

const Button = ({ children, event, background, ...props }) => {
  return (
    <S.Button
      style={{
        background: `linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0.01%, rgba(255, 255, 255, 0.05) 100%), ${background}`,
        ...props,
      }}
      onClick={event}
    >
      {children}
    </S.Button>
  );
};

export default Button;
