// import { Component } from "react";
// import CustomProgressBar from "../bootstrap/progress-bar";


// export default class IplTeams extends Component {
//     state={
//         iplTeams:[
//             {
//                 id:1,
//                 name:"SRH",
//                 totalWinCount:2,
//             },
//             {
//                 id:2,
//                 name:"CSK",
//                 totalWinCount:5,
//             },
//             {
//                 id:3,
//                 name:" MI",
//                 totalWinCount:3,
//             },
//         ]
//     };
//     calculatePercentage= (input) =>{
//         const base=7;
//         let percentage = (input/base)*100;
//         return percentage
//     };

//     handleClick =(targetId) =>{
//         const newState =this.iplHandler(this.state.IplTeams,targetId);
//         this.setState({
//             IplTeams:newState,
//         })
//     }

//     iplHandler=(IplTeams,targetTeamId)=>{
//         const updatedIplTeam=iplTeams.map((each)=>{
//             if(each.id===targetTeamId ){
//                 return{...each,totalWinCount:each.totalWinCount + 1}
//             }else {
//                 return each
//             }
//         })

//     };
//     render(){
//         return(
//             <div>
//                 {
//                     this.state.iplTeams.map((each) =>{
//                         return(
//                             <>
//                                 <h2>Team Name : {each.name}</h2>
//                                 <CustomProgressBar scale={this.calculatePercentage(each.totalWinCount)}/>
//                             </>
//                         )
//                     })
//                 }
//             </div>
//         )       
//     }
// }