
window.revelar = ScrollReveal({reset:true});


// TOPO DO SITE ========================================================


revelar.reveal('.efeito-txt-topo',{
    duration: 2000,
    distance: '90px'
});


revelar.reveal('.efeito-img-topo',{
    duration: 2000,
    distance: '90px',
    delay: 500
});

// TITULO DAS SEÇÕES ========================================================

revelar.reveal('.titulo',{
    duration: 2000,
    distance: '90px',
    scale: 2
});

// ESPECIALIDADES ========================================================


revelar.reveal('.efeito-especialidades1',{
    duration: 2000,
    distance: '90px',
    delay: 500
});

revelar.reveal('.efeito-especialidades2',{
    duration: 2000,
    distance: '90px',
    delay: 1000
});

revelar.reveal('.efeito-especialidades3',{
    duration: 2000,
    distance: '90px',
    delay: 1500,
    origin: 'rigth'
});


// SOBRE ========================================================


revelar.reveal('.img-sobre', { 
    duration: 2000,
    distance: '90px',
    origin: 'rigth',
    delay: 500
});

revelar.reveal('.txt-sobre', { 
    duration: 2000,
    distance: '90px',
    origin: 'left',
    delay: 1000
});


// PROJETOS ========================================================


revelar.reveal('.projeto1',{
    duration: 2000,
    distance: '90px',
    origin: 'left',
    delay: 500
});

revelar.reveal('.projeto2',{
    duration: 2000,
    distance: '90px',
    origin: 'top',
    delay: 1000
});

revelar.reveal('.projeto3',{
    duration: 2000,
    distance: '90px',
    origin: 'rigth',
    delay: 500
});


// FORMULÁRIO ========================================================


revelar.reveal('.input-nome',{
    duration: 2000,
    distance: '90px',
    delay: 500
});

revelar.reveal('.input-email',{
    duration: 2000,
    distance: '90px',
    delay: 1000
});

revelar.reveal('.input-celular',{
    duration: 2000,
    distance: '90px',
    delay: 1500,
});

revelar.reveal('.text-area',{
    duration: 2000,
    distance: '90px',
    delay: 2000,
    rotate: {
        x: 0,
        z:180
    }
});

revelar.reveal('.btn-enviar',{
    duration: 2000,
    distance: '90px',
    delay: 2500,
    rotate: {
        x: 0,
        y:180
    },
    easing: 'ease-in'
});

