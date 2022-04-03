import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 0 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: ${props => props.theme.accentColor};
  font-size: 28px;
`;

const Loader = styled.div`
  text-align: center;
  display: block;
`;

const Rank = styled.div`
  color: ${props => props.theme.accentColor};
  font-size: 28px;
  margin-left: 20px;
`;

interface RouteState {
  name: string;
  rank: number;
}

const Coin = () => {
  const { coinId } = useParams();
  const [loading, setLoading] = useState(true);
  const { name, rank } = useLocation().state as RouteState;

  return (
    <Container>
      <Header>
        <Title>{name ? `Coin: ${name}` : "Loading..."}</Title>
        <Rank>Coin Rank: {rank}</Rank>
      </Header>
      {loading ? <Loader>loading...</Loader> : null}
    </Container>
  );
};

export default Coin;
