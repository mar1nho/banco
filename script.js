class ContaBancaria{
    constructor(){
    this.saldo = 0;
    this.poupanca = 0;
    this.depositar = []
    this.sucesso = document.getElementById("sucesso");
    }
    verSaldo(){
        let contaCorrente = document.getElementById('contaCorrente');
        contaCorrente.innerText = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(this.saldo); 
            console.log(`----> Seu saldo atual é de R$${this.saldo} reais`)
        let contaPoupanca = document.getElementById('contaPoupanca');
        contaPoupanca.innerText = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(this.poupanca); 
            console.log(`--> Seu saldo na poupança é de R$${this.poupanca} reais`)
            sucesso.innerText = "Realize uma operação"
        }
          
    criarTabela(){
        let tbody = document.getElementById('tbody');
            tbody.innerText = '';
        for(let i = 0; i < this.depositar; i++){
            let tr = tbody.insertRow();
                let td_operacao = tr.insertCell();
                let td_valor = tr.insertCell();
                    td_operacao.innerText = this.depositar[i];
                    td_valor.innerText = value;
            }
        }

    deposito(){
        let valor = Number(document.getElementById("valor").value);
        if(valor == ''){
            sucesso.innerText = 'Coloque um valor válido!'
            alert("Valor inválido")
        } else {
                sucesso.innerText = "Valor depositado, verifique seu saldo!"
                this.saldo += valor;
                document.getElementById("valor").value = ""
        }
            this.criarTabela()
    }



    sacar(){
        let valor = Number(document.getElementById("valor").value);
            if(valor == ''){
                sucesso.innerText = 'Coloque um valor válido'
            } else {
                sucesso.innerText = "Valor sacado, verifique seu saldo!"
                this.saldo -= valor;
                document.getElementById("valor").value = ""
            }
    }



    transferirPoup(){
        let valor = Number(document.getElementById("valor").value);
        let contaCorrente = document.getElementById('contaCorrente');
        let contaPoupanca = document.getElementById('contaPoupanca');
        if(valor == ''){
            sucesso.innerText = 'Coloque um valor válido'
        } else {
            sucesso.innerText = "Valor transferido para a poupança"
            this.saldo -= valor;
            this.poupanca += valor;
            contaCorrente.innerText = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(this.saldo);
            contaPoupanca.innerText = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(this.poupanca);
        }
    }

}

let conta = new ContaBancaria();

