import React, { useEffect, useState } from "react";
import BannerMain from "../../components/BannerMain";
import Carousel from "../../components/Carousel";
import PageDefault from "../../components/PageDefault";
import { getAllWithVideos } from "../../repositories/categoria";

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    getAllWithVideos().then((response) => {
      setDadosIniciais(response);
    });
  }, []);

  return (
    <PageDefault paddingHorizontal={0}>
      {dadosIniciais.length === 0 && <div>Loading...</div>}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={categoria.videos[0].titulo}
                url={categoria.videos[0].url}
                videoDescription={"O que é Front-end?"}
              />

              <Carousel ignoreFirstVideo category={categoria} />
            </div>
          );
        }
        return <Carousel key={categoria.id} category={categoria} />;
      })}
    </PageDefault>
  );
}

export default Home;
