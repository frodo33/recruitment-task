import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
// import './App.css';

import { GlobalStyle } from './globalStyles'
import styled from 'styled-components/macro';


const CardWrapper = styled.div`
    width: 90%;
    background: #fff;
    box-shadow: 0px 3px 15px 0px #00000030;
    margin: 20rem auto 0;
    padding: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Title = styled.h1`
    width: 25%;
    align-self: flex-start;
    text-align: center;
    font-size: 2.2rem;
    box-shadow: 0px 0px 15px 5px #8276f650;
    text-shadow: 0px 1px 5px #00000070;
    background: #8276f6;
    color: #fff;
    border: none;
    border-radius: 5px;
    outline: none;
    padding: 2rem 5rem;
`;
const Content = styled.div`
    position: relative;
    width: calc(75% + 25%/2);
    align-self: flex-end;
    /*background: #f4f4f4;*/
    border-left: 1px solid #b7bdca;
    padding: 20px 0 50px 0px;
`;

const Single = styled.div`
    position: relative;
    width: 50%;
    background: #fff;
    box-shadow: 0px 3px 15px 0px #00000030;
    margin: 3rem 0 3rem 10rem;
    border-radius: 5px;
    font-size: 2rem;
    font-weight: 600;
    padding: 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(-100%,-50%);
        width: 10rem;
        height: 0.1rem;
        background: #b7bdca;
    }
    &:after {
        content: 'And';
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(-450%,-50%);
        color: #b7bdca;
        font-size: 1.8rem;
    }
`;
const Border = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    overflow: hidden;
    pointer-events: none;
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 2%;
        height: 100%;
        background: #8276f6;
    }
`;

const ButtonRemove = styled.button`
    position: relative;
    width: 3rem;
    height: 3rem;
    background: #f45370;
    border-radius: 50%;
    border: none;
    outline: none;
    box-shadow: 0px 3px 15px 0px #00000030;
    &:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 1.5rem;
        height: 0.5rem;
        background: #fff;
        border-radius: 5px;
    }
`;

const ButtonAdd = styled.button`
    position: absolute;
    width: ${ ({ sublist }) => sublist ? '3rem' : '5rem' };
    height: ${ ({ sublist }) => sublist ? '3rem' : '5rem' };
    top: 100%;
    left: 0;
    transform: translate(-50%,-50%);
    background: linear-gradient(#89f3a0, #28e7e6);
    border-radius: 50%;
    border: none;
    outline: none;
    box-shadow: 
        ${ ({ sublist }) => sublist ? '0px 0px 0px 5px #ffffff' : '0px 0px 0px 10px #ffffff' },
        0px 13px 25px 0px #00000030;
    &:before, &:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: ${ ({ sublist }) => sublist ? '1.8rem' : '2.2rem' };
        height: ${ ({ sublist }) => sublist ? '.5rem' : '.6rem'};
        background: #fff;
        border-radius: 2px;
    }
    &:before {
        box-shadow: 0px 3px 15px 0px #00000030;
        transform: translate(-50%,-50%) rotate(-90deg);
    }
`;


const ListWrapper = styled(CardWrapper)`
    position: relative;
    width: 50%;
    margin: 3rem 0 3rem 10rem;
    border-radius: 5px;
    font-size: 2rem;
    font-weight: 600;
    padding: 2.5rem 2.5rem 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(-100%,-50%);
        width: 10rem;
        height: 0.1rem;
        background: #b7bdca;
    }
    &:after {
        content: 'And';
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(-450%,-50%);
        color: #b7bdca;
        font-size: 1.8rem;
    }
`;
const ListTitle = styled(Title)`
    position: relative;
    width: 85%;
    text-align: left;
    font-size: 2rem;
    font-weight: 600;
    box-shadow: none;
    text-shadow: none;
    background: transparent;
    border: 1px solid #b7bdca;
    border-radius: 5px;
    outline: none;
    padding: 1.2rem;
    color: #000;
    display: flex;
    align-items: center;
`;
const ListContent = styled(Content)`
    padding: 1rem 0 1.5rem 0;
`;
const ListElement = styled(Single)`
    width: calc(100% - 4rem);
    background: transparent;
    box-shadow: none;
    border: 1px solid #b7bdca;
    margin: 1.5rem 0 1.5rem 4rem;
    padding: 1.2rem;
    &:before { width: 4rem; }
    &:after {
        content: 'Or';
        font-size: 1.4rem;
    }
`;

const ButtonRemoveList = styled(ButtonRemove)`
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translate(50%,-50%);
`;

export const App = () => {
    return(
        <>
            <GlobalStyle />
            <CardWrapper>
                <Title>People</Title>
                <Content>
                    <ButtonAdd></ButtonAdd>
                    <Single>
                        <Border></Border>
                        Age 40+
                        <ButtonRemove></ButtonRemove>
                    </Single>

                    <ListWrapper>
                        <Border></Border>
                        <ListTitle>
                            Ethnicity
                            <ButtonRemoveList></ButtonRemoveList>
                        </ListTitle>
                        <ListContent>
                            <ButtonAdd sublist></ButtonAdd>
                            <ListElement>
                                Black
                                <ButtonRemove></ButtonRemove>
                            </ListElement>
                            <ListElement>
                                Hispanic
                                <ButtonRemove></ButtonRemove>
                            </ListElement>
                        </ListContent>
                    </ListWrapper>
                </Content>
            </CardWrapper>
        </>
    )
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <Counter />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <span>
//           <span>Learn </span>
//           <a
//             className="App-link"
//             href="https://reactjs.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             React
//           </a>
//           <span>, </span>
//           <a
//             className="App-link"
//             href="https://redux.js.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Redux
//           </a>
//           <span>, </span>
//           <a
//             className="App-link"
//             href="https://redux-toolkit.js.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Redux Toolkit
//           </a>
//           ,<span> and </span>
//           <a
//             className="App-link"
//             href="https://react-redux.js.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             React Redux
//           </a>
//         </span>
//       </header>
//     </div>
//   );
// }
// 
// export default App;
