// function primeiro(){
//     return <h1>Primeiro Componente!</h1>
//     }
//     export default primeiro;


// export default function (){
//     return <h1>Primeiro Componente!</h1>
//         }

// export default () => <h1>Primeiro Componente!</h1>


// function primeiro(props){
//     return <h1>Primeiro Componente! {props.valor}</h1>
//     }
//     export default primeiro;


// function primeiro(props){
//     return <h1>Primeiro Componente! {props.valor} - {props.valor2} </h1>
//     }
//     export default primeiro;


function SegundoComponente(props) {
    return <p>{props.children}</p>;
    }
    export default SegundoComponente;
    