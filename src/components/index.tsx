import React, { useState } from 'react'
import Game from './Game'
import GameStatus from './GameStatus'
import Score from './Score'

const TicTacToe = () => {
    const [state, setState] = useState<any>({
        player1Score:0,
        player2Score:0,
        togglePlayer:false,
        playerActions:["","","","","","","","",""],
        status:"",
        toggleStatus:false
    })

    return (
        <div className="h-screen bg-[#d4b389] flex flex-col font-rubik">
            <Score state={state} setState={setState}/>
            {state.toggleStatus===true?
                <GameStatus state={state} setState={setState}/>:
                <Game state={state} setState={setState}/>
            }
        </div>
    )
}

export default TicTacToe