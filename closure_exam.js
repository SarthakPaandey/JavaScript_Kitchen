// var add_the_handlers= function(nodes){
//     var i;
//     for(i=0;i<nodes.length;i++){
//         nodes[i].onclick=(function(nodeIndex){
//             return function(e){
//                 alert(nodeIndex);
//             }
//         })(i);
//     }
// }
 
var add_the_handlers=function(nodes){
    let i;
    for(i=0;i<nodes.length;i++){
        nodes[i].onclick=(function(e)
    {
        alert(i);
    })
    }
}         