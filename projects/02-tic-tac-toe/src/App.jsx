import { useState } from 'react';
import './App.css';
import confetti from "canvas-confetti"
import { Square } from './components/Square';
import { TURNS } from './constants';
import { checkWinner } from './logic/board';
import { WinnerModal } from './components/WinnerModa';
function App() {
  const [board, setBoard] = useState(
    Array(9).fill(null)
  )
  const [turn, setTurn] = useState(TURNS.X)
  //null significa que no hay ganador, true ganador y false un empate
  const [winner, setWinner] = useState(null)


  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const checkEndGame = (newBoard) => {
    { winner === false ? 'Empate' : 'Ganó' }
  }

  const updateBoard = (index) => {
    //dont update position if it is not null
    if (board[index] || winner) return
    //update board
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    //change turn
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    //revisar si hay ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false) //empate
    }

  }
  return (
    <main className='board'>
      <h1>TIC TAC TOE</h1>
      <button onClick={resetGame}>Reset Game</button>
      <section className='game'>
        {
          board.map((element, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {element}
              </Square>
            );
          })
        }
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  );
}

export default App;
