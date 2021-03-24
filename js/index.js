
const cartas = document.querySelectorAll('.carta')
let informacion = document.querySelectorAll('.informacion-carta')
let siguientepantalla = document.querySelector('.contenedor-pantalla2')
let cartavolteada = false
let bloqueartabla = false
let primera_carta,
    segunda_carta


    //cartas.sort(() => 0.5 - Math.random())

//iterador de inicio muestra por 5 segundos y voltea
cartas.forEach(carta =>{
    ordencartas()
    setTimeout(()=>{
        carta.classList.remove('voltear-inicio')
    }, 5000)
})

// funcion que permite girar las cartas
function voltearcarta(){
    if (bloqueartabla) return
    if(this === primera_carta) return
    this.classList.add('voltear') 
    if(!cartavolteada){
        cartavolteada = true
        primera_carta = this
        
    }
    else{
        cartavolteada = false
        segunda_carta = this

        igualdad()
        
    }
   
}

function igualdad(){
    if (primera_carta.dataset.id === segunda_carta.dataset.id){
        primera_carta.removeEventListener('click', voltearcarta)
        segunda_carta.removeEventListener('click', voltearcarta)

        informacion.forEach(informacion => {
            if (informacion.dataset.id === primera_carta.dataset.id || informacion.dataset.id === 
                segunda_carta.dataset.id){
                informacion.style.display='block'
            }
            
            
        })
        
    }
    else {
        bloqueartabla = true
        setTimeout(()=> {
            primera_carta.classList.remove('voltear')
            segunda_carta.classList.remove('voltear')
            bloqueartabla = false
            reiniciar()
        }, 1500)  
    } 
    
    
}

function reiniciar(){
    [primera_carta, bloqueartabla] = [false, false]
    [primera_carta, segunda_carta] = [null, null]
    
}

function ordencartas(){
    cartas.forEach(carta =>{
        let ordenrandom = Math.floor(Math.random() * 10)
        carta.style.order = ordenrandom
    })
}



cartas.forEach(carta => carta.addEventListener('click', voltearcarta))
 


    
    

