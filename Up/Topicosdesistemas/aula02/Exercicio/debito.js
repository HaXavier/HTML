    
     function criarParagrafo() {
        let para = document.createElement('p');
        para.textContent = 'Resumidamente, o technical debt (débito técnico, em tradução livre) acontece todas as vezes que um código de baixa qualidade ou com erros é lançado para atender apenas às demandas do momento. Apesar de agilizar o processo de lançamento do software, por exemplo, os problemas começam a surgir no futuro';
        document.body.appendChild(para);
       }
       const botoes = document.querySelectorAll('button');
       for(var i = 0; i < botoes.length ; i++) {
        botoes[i].addEventListener('click', criarParagrafo);
       }
   