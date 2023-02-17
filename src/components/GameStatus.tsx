import React from 'react';

type stateType = {
    player1Score:number,
    player2Score:number,
    togglePlayer:boolean,
    playerActions:string[],
    status:string,
    toggleStatus:boolean
}

type prop = {
    state:stateType;
    setState: React.Dispatch<React.SetStateAction<stateType>>;
}

const GameStatus = (props:prop) => {

    const restartGame = () =>{
        const actions = ["","","","","","","","",""];
        const status = "";
        const togglePlayer = false;
        props.setState({...props.state, playerActions:actions, status:status, togglePlayer:togglePlayer, toggleStatus:!props.state.toggleStatus});
    }

    const viewBoard = () =>{
        props.setState({...props.state, toggleStatus:!props.state.toggleStatus})
    }

    return (
        <div className="grow flex justify-center items-center flex-col">
            <div className="text-[50px] py-5">{props.state.status}</div>
            <div className="actions flex items-center justify-center">
                <button className="p-3 border-2 border-black text-black text-xl rounded-lg mr-10" onClick={()=>viewBoard()}>View Board</button>
                <button className="p-3 bg-black text-white text-xl rounded-lg" onClick={()=>restartGame()}>Restart</button>
            </div>
        </div>
    )
}

export default GameStatus