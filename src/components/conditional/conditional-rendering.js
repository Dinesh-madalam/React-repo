// const ConditionalRendering = () => {
//     const islogin = true;
//     const isAdmin = false;
//     return (
//     <>
//         {islogin ? (
//         <>
//             {
//                 isAdmin ? (
//                 <>
//                     <h2>Welcome Admin</h2>
//                 </>
//                 ) : (
//                 <>
//                     <h2>Welcome User </h2>                       
//                 </>)
//             }
//         </>
//         ) : (
//             <>
//                 <h2>Please Login</h2>
//             </>)}
//     </>)
     
// }
// export default ConditionalRendering;


// const ConditionalRendering = () => {
//     const islogin = true;
//     const isAdmin = false;
//     if(islogin){
//         if(isAdmin){
//             return <>
//         <h2>Welcome Admin</h2>
//         </>
//         } else {
//             return <>
//             <h2>Welcome User</h2>
//             </>
//         }   
//     } else {
//         return <>
//         <h2>Please Login</h2>
//         </>
//     } 
// }
// export default ConditionalRendering;



const Conditionalrendering = (props) => {
    const { array } = props;
  
    return (
      <>
        {array.length === 0 ? (
          <h2>Array length is 0</h2>
        ) : (
          <h2>Array length is {array.length}</h2>
        )}
      </>
    );
  };
  
  export default Conditionalrendering;
