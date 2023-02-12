import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BsPlusLg } from "react-icons/bs";
import axios from "axios";
import { useParams } from "react-router-dom";

function Details() {
    const params = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://192.168.29.54:4000/disney/${params.id}?api_key=d70d0c6e132d7eb0da25eaf570491f62`
      )
      .then((response) => {
        // console.log(response.data);
        // console.log("response.data.results");
        setMovie(response.data);
      });
  }, []);

  // console.log(movie);


  return (
    <Container>
       
            <Background>
                
            <img src={`${movie.backgroundImg}`}/>
            </Background>

           <ImageTitle><img src={movie.titleImg} alt="" /></ImageTitle>

      <Controls>
        <PlayButton>
          <img src="/Disney Plus/images/play-icon-black.png" alt="" />
          <span>PLAY</span>
        </PlayButton>

        <TrailerButton>
          <img src="/Disney Plus/images/play-icon-white.png" alt="" />
          <span>Trailer</span>
        </TrailerButton>

        <AddButton>
          <BsPlusLg />
        </AddButton>
        
        <GroupWatchButton>
          <img src="/Disney Plus/images/group-icon.png" alt="" />
        </GroupWatchButton>
      </Controls>

      <SubTitle>{movie.subtitle}</SubTitle>

      <Description>
        {movie.description}
      </Description>
    </Container>
  );
}

export default Details;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.7;

  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;
  margin-bottom: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

const Controls = styled.div`
  display: flex;
  align-items: center;
`;
const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  padding: 0px 24px;
  margin-right: 22px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb(249, 249, 249);
  border: none;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;

const TrailerButton = styled(PlayButton)`
  background: rgb(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
`;

const AddButton = styled.button`
  margin-right: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  font-size: 18px;
  color: white;
  cursor: pointer;
`;

const GroupWatchButton = styled(AddButton)`
  background: rgb(0, 0, 0);
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 18px;
  min-height: 20px;
  margin-top: 26px;
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 22px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
  max-width: 760px;
`;
