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

const Score = (props:prop) => {
    return (
        <div 
            className="w-full flex p-5 px-10 justify-between text-4xl"
        >
            <div
                className={
                    (props.state.togglePlayer===false && props.state.status==="")?
                    "text-green-600":"text-black"
                }
            >Player 1 (<strong>X</strong>) - {props.state.player1Score}</div>
            <div
                className={
                    (props.state.togglePlayer===true && props.state.status==="")?
                    "text-green-600":"text-black"
                }
            >Player 2 (<strong>O</strong>) - {props.state.player2Score}</div>
        </div>
    )
}

export default Score