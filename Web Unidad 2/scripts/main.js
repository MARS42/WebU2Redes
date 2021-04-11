let visible = false;
const contenedor = document.getElementById('contenedor');
contenedor.onscroll = function () { scrollContenedor() };

function scrollContenedor()
{

  const encabezado = document.getElementById('header');
  const indice = document.getElementById('indice');

  let posContenedor = indice.getBoundingClientRect().top;
  if(window.innerHeight - posContenedor >= 0)
  {
    if(!visible)
    {
      encabezado.style.animation = 'cabeceraShow 0.75s cubic-bezier(0.86, 0, 0.07, 1) 0s 1 normal forwards';
      visible = true;
    }
  }
  else
  {
    if(visible)
    {
      encabezado.style.animation = 'cabeceraHide 0.75s cubic-bezier(0.86, 0, 0.07, 1) 0s 1 reverse forwards';
      visible = false;
    }
  }
};

const capasOSI = document.getElementById('capasOSI');
const capaOSI = document.getElementsByClassName('capa');
const btn1I = document.getElementById('boton1I');
const btn1D = document.getElementById('boton1D');

btn1D.onclick = function () {
  capasOSI.scrollBy({left:capasOSI.clientWidth,behavior:'smooth'});
};
btn1I.onclick = function () {
  capasOSI.scrollBy({left:-capasOSI.clientWidth,behavior:'smooth'});
};

capasOSI.onscroll = function(){
  console.log("c:" + capasOSI.scrollLeft + ':' + capasOSI.scrollWidth + '/' + capasOSI.clientWidth);
  if(capasOSI.scrollLeft < capasOSI.clientWidth)
  {
    btn1I.parentElement.style.visibility = 'hidden';
  }
  else
  {
    btn1I.parentElement.style.visibility = 'visible';
  }
  if(capasOSI.scrollLeft >= capasOSI.clientWidth * 6)
  {
    btn1D.parentElement.style.visibility = 'hidden';
  }
  else
  {
    btn1D.parentElement.style.visibility = 'visible';
  }
};


