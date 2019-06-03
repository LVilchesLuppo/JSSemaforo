const cambiarColorLuzSemaforo = (id, prender) => {
    
    let color='';
    if(prender) color = id
    document.querySelector(`#${id}`).style.backgroundColor = color;
    //document.getElementById(id)
};

cambiarColorLuzSemaforo('red', true);
cambiarColorLuzSemaforo('yellow', true);
cambiarColorLuzSemaforo('green', true);




let status = 0;
const onClickCambiar = () => {
    
    //console.log(`Evento boton cambiar color ${status++}`);
    console.log(status);    
    //status&3;                          
    status >= 3 ? status = 0: status++;
    switch(status) {

        case 0:
            cambiarColorLuzSemaforo('red',true);
            cambiarColorLuzSemaforo('yellow',!true);
            cambiarColorLuzSemaforo('green',!true);
            break;
        case 1:
            cambiarColorLuzSemaforo('red',true);
            cambiarColorLuzSemaforo('yellow',true);
            cambiarColorLuzSemaforo('green',!true);
            break;
        case 2:
            cambiarColorLuzSemaforo('red',!true);
            cambiarColorLuzSemaforo('yellow',!true);
            cambiarColorLuzSemaforo('green',true);
            break;
        case 3:
            cambiarColorLuzSemaforo('red',!true);
            cambiarColorLuzSemaforo('yellow',true);
            cambiarColorLuzSemaforo('green',!true);
            break;    
        default:
            cambiarColorLuzSemaforo('red',!true);
            cambiarColorLuzSemaforo('yellow',!true);
            cambiarColorLuzSemaforo('green',!true);
            break;   
             
    }
};

status++;

let modeAuto = false;
let refInterval;
const onClickBotonAuto = () => {            
    
    modeAuto =! modeAuto;
    console.log(modeAuto);

    if(modeAuto) {

        refInterval = setInterval(onClickCambiar, 2000);
        ocultarBoton(true);
        

    } else {
        
       clearInterval(refInterval); 
       ocultarBoton(false);              
       
          
    }
    
};

const ocultarBoton = (ocultar) => {

    document.querySelector('#boton-cambiar').style.display = ocultar? 'none': 'inline';
    cambiarTextoBoton(ocultar? 'Modo Manual' : 'Modo Automatico');
    
};

const cambiarTextoBoton = (texto) => {

    document.querySelector('#boton-auto').innerHTML = texto;
    
};

cambiarTextoBoton('Modo automatico');

