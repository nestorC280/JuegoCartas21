
export const valorCarta = (carta)=>{
    //console.log(carta);
    return (!(isNaN(carta.substring(0, carta.length - 1))))?carta.substring(0, carta.length - 1)*1:
            (carta.substring(0, carta.length - 1) === 'A')? 11: 10 ;

}