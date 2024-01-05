import React, { useEffect, useState } from 'react';

import { Header } from "./components/Header";
import { Character } from "./components/Character";
import { Time } from './components/Time';

import { fetchCharactersData } from './data/api';

import './styles/global.scss';
import './styles/characters.scss';

export const App = () => {
  const [nData, setNData] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const onSelectCharacter = (character) => {
    setSelectedCharacter(character);
  };

  useEffect(() => {
    const loadingData = async () => {
      const characterTimeSete = [1344, 1307, 374];
      try {
        const dataCompleted = await fetchCharactersData(characterTimeSete);
        setNData(dataCompleted);
        setSelectedCharacter(dataCompleted[0]); // Definindo o primeiro personagem após a conclusão da chamada à API
      } catch (erro) {
        console.error('Erro ao carregar dados:', erro);
      }
    };

    loadingData();
  }, []);

  return (
    <div className='interface'>
      <Header />
      <main className='iMain'>
        <section className='characters'>
          <div className='wrapper'>
            { selectedCharacter ? <Character selectedCharacter={selectedCharacter} /> : null }
            <div className='timex'>
              {nData.map(item => (
                <Time key={item.id} dataCharacter={item} onSelectCharacter={onSelectCharacter} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
