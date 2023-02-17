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

const Game = (props:prop) => {
    const {player1Score, player2Score, togglePlayer, playerActions, status, toggleStatus} = props.state;

    const handleUserAction =(index:number)=>{
        if(playerActions[index]===""&&status===""){
            if(togglePlayer){
                playerActions[index] = "O";
            }else{
                playerActions[index] = "X";
            }
            let player = !togglePlayer;
            props.setState({...props.state,playerActions,togglePlayer:player});
            checkStatus();
        }
    }

    const restartGame = () =>{
        const actions = ["","","","","","","","",""];
        const status = "";
        const togglePlayer = false;
        props.setState({...props.state, playerActions:actions, status:status, togglePlayer:togglePlayer});
    }

    const checkStatus = () =>{
        let actions = playerActions;
        if(
            (actions[0]===actions[1]&&actions[1]===actions[2]&&actions[0]!=="")||
            (actions[3]===actions[4]&&actions[4]===actions[5]&&actions[3]!=="")||
            (actions[6]===actions[7]&&actions[7]===actions[8]&&actions[6]!=="")||
            (actions[0]===actions[3]&&actions[3]===actions[6]&&actions[0]!=="")||
            (actions[1]===actions[4]&&actions[4]===actions[7]&&actions[1]!=="")||
            (actions[2]===actions[5]&&actions[5]===actions[8]&&actions[2]!=="")||
            (actions[0]===actions[4]&&actions[4]===actions[8]&&actions[0]!=="")||
            (actions[2]===actions[4]&&actions[4]===actions[6]&&actions[2]!=="")
        ){
            if(togglePlayer){
                let score2=player2Score;
                props.setState({...props.state,player2Score:score2+1, status:"🎉 Player 2 (O) Wins 🎉", toggleStatus:!toggleStatus})
            }else{
                let score1=player1Score;
                props.setState({...props.state,player1Score:score1+1, status:"🎉 Player 1 (X) Wins 🎉", toggleStatus:!toggleStatus})
            }
        }else if(
            !actions.includes("")
        ){
            props.setState({...props.state,status:"No Result"})
        }
    }

    return (
        <div className="w-full grow flex flex-col justify-center items-center">
            <div className="board h-[450px] w-[450px] flex flex-wrap">
                {playerActions.map((action:string, index:number)=>
                    <button className="w-[150px] h-[150px] text-5xl border-2 border-black flex justify-center items-center" onClick = {()=>handleUserAction(index)}>
                        {action}
                    </button>
                )}
            </div>
            {status===""?
                "":
                <div className="actions flex justify-center items-center mt-5">
                    <button className="p-3 bg-black text-white text-xl rounded-lg" onClick={()=>restartGame()}>Restart</button>
                </div>
            }
        </div>
    )
}

export default Game