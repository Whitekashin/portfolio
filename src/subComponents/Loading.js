import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Box = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loading = () => {
  const { t } = useTranslation(["systems"]);
  return (
    <Box>
      <h1>{t("loading")}</h1>
    </Box>
  );
};

export default Loading;
