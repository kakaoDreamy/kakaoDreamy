import React, { useState } from 'react';
import '../App.css';
import GlobalStyle from '../components/common/GlobalStyle';
import Layout from '../components/common/Layout';
import Header from '../components/common/Header';
import StatusBar from '../components/common/StatusBar';
import MapContents from '../components/Map/MapContents';
import ProgressBar from '../components/common/ProgressBar/ProgressBar';
import ResultPage from '../components/ResultPage';
import KaMap from '../components/common/KaMap/KaMap';
import RouletteContents from '../components/Roulette/RouletteContents';

function App() {
  const resname = '백일흑야';
  const [state, setState] = useState({
    curStage: 1,
    location: '',
    time: '',
    rouletteList: '',
    rouletteResult: '',
  });

  const nextStage = () => {
    setState({ ...state, curStage: state.curStage + 1 });
  };
  console.log(state);
  return (
    <div className="App">
      <GlobalStyle />
      <Layout>
        <Header>제목</Header>
        <StatusBar>
          <ProgressBar curStage={state.curStage} />
        </StatusBar>
        <ResultPage resName={resname} />
        {state.curStage === 5 && (
          <div>결과 페이지 : {state.rouletteResult.text}</div>
        )}

        {state.curStage !== 5 && state.curStage % 2 === 1 ? (
          <MapContents state={state} setState={setState} nextStage={nextStage}>
            <KaMap />
          </MapContents>
        ) : (
          <RouletteContents
            state={state}
            setState={setState}
            nextStage={nextStage}
          />
        )}
      </Layout>
    </div>
  );
}

export default App;