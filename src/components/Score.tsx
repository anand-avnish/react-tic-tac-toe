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
            <p
                className={
                    (props.state.togglePlayer===false && props.state.status==="")?
                    "text-green-600 flex items-center":"text-black flex items-center"
                }
            >Player 1 (<strong>X</strong>) - {props.state.player1Score} {(props.state.status!==""&&props.state.togglePlayer===false)?<span className="text-red-600 text-[60px]">&#127894;</span>:""}</p>
            <p
                className={
                    (props.state.togglePlayer===true && props.state.status==="")?
                    "text-green-600 flex items-center":"text-black flex items-center"
                }
            >Player 2 (<strong>O</strong>) - {props.state.player2Score} {(props.state.status!==""&&props.state.togglePlayer===true)?<span className="text-red-600 text-[60px]">&#127894;</span>:""}</p>
        </div>
    )
}

export default Score