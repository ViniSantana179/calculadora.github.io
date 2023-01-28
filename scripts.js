function mudaCor(id){
    document.getElementById(`${id}`).style.backgroundColor = 'white';
    document.getElementById(`${id}`).style.color = 'rgb(243, 50, 50)';
}

function voltaCor(id){
    document.getElementById(`${id}`).style.backgroundColor = 'rgb(243, 50, 50)';
    document.getElementById(`${id}`).style.color = 'white';
}

function limpar(){
    document.getElementById('entrada').value = '0';
}

function apagar(){
    let valor = document.getElementById('entrada').value.split('');

    if(valor.length > 1){
        valor.pop();
        valor = valor.join('')
        document.getElementById('entrada').value = valor;
    }
    else{
        if(parseFloat(valor[0]) != 0){
            document.getElementById('entrada').value = '0';
        }
    }

}


function digitar(id){
    let op = ['/', '+', '-', '*']
    let valor =  document.getElementById(`${id}`).value;
    if (document.getElementById('entrada').value == '0' || (op.includes(document.getElementById('entrada').value) && document.getElementById('entrada').value.length == 1)){
        document.getElementById('entrada').value = '';
    }
    
    document.getElementById('entrada').value += valor;
    let x1 = document.getElementById('entrada');
    x1 = x1.value;
}

function calcular(acao){
    
    let op = ['/', '+', '-', '*']

    if(acao == '='){
        let problema = document.getElementById('entrada').value;
        document.getElementById('entrada').value = '';

        let opera = '';
        let result = 0;

        // Definindo a operação a ser realizada 
        for (c of problema.split('')){
            
            if(op.includes(c)){
                opera = c;
            }
        }

        problema = problema.split(opera);

        let x1 = parseFloat(problema[0]);
        let x2 = parseFloat(problema[1]);

        switch(opera){
        case '/':
            result = x1 / x2;
            break;

        case '*':
            result = x1 * x2;
            break;

        case '+':
            result = x1 + x2;
            break;

        case '-':
            result = x1 - x2;
            break;

        }
        document.getElementById('entrada').value = result;

    }else{

        let valor =  document.getElementById(`${acao}`).value;

        if (document.getElementById('entrada').value == '0' || (op.includes(document.getElementById('entrada').value) && document.getElementById('entrada').value.length == 1)){
            document.getElementById('entrada').value = '';
        }

        document.getElementById('entrada').value += valor;
    }
}