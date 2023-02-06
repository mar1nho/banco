class ContaBancaria{
    constructor(){
        this.saldo = 0;
        this.poupanca = 0;
        this.depositos = [];
        this.saques = [];
        this.transferencias = [];
        this.id = null;
        this.sucesso = document.getElementById("sucesso");
    }

    verSaldo(){
        let contaCorrente = document.getElementById('contaCorrente');
        contaCorrente.innerText = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(this.saldo); 
        let contaPoupanca = document.getElementById('contaPoupanca');
        contaPoupanca.innerText = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(this.poupanca); 
            sucesso.innerText = "Realize uma operação"
        }

    deposito(){
        let valor = Number(document.getElementById("valor").value);
            if(valor == '' || valor <= 0){
                sucesso.innerText = 'Coloque um valor válido!'
                alert("Valor inválido")
            } else {
                sucesso.innerText = "Valor depositado, verifique seu saldo!"
                let randomLetters = []
                const letters = "ABCDEGFHIJKLMNOPQRSTUVWXYZ"
                for (let i = 0; i < 5; i++){
                    const randomIndex = Math.floor(Math.random() * letters.length);
                    randomLetters.push(letters[randomIndex])
                    this.string = randomLetters.join("")
                }
                this.saldo += valor;
                document.getElementById("valor").value = ""
                this.id++;
                this.depositos.push({ id: this.string + this.id+"_ID", operacao: 'Deposito', valor });
                contaCorrente.innerText = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(this.saldo); 
                contaPoupanca.innerText = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(this.poupanca); 
            }
            this.criarTabela()
        }

    sacar(){
        let valor = Number(document.getElementById("valor").value);
            if(valor == ''){
                sucesso.innerText = 'Coloque um valor válido'
                alert("Valor inválido");
            } else if (valor > this.saldo){
                sucesso.innerText = "Saldo insuficiente!";
                alert("Saldo insuficiente");
            } else {
                sucesso.innerText = "Valor sacado, verifique seu saldo!";
                this.saldo -= valor;
                document.getElementById("valor").value = "";
                contaCorrente.innerText = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(this.saldo); 
                contaPoupanca.innerText = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(this.poupanca); 
            }
        }

    transferirPoup(){
        let valor = Number(document.getElementById("valor").value);
        if(valor == '' || valor > this.saldo){
            sucesso.innerText = 'Coloque um valor válido ou verifique seu saldo'
        } else {
            sucesso.innerText = "Valor transferido, verifique seu saldo!"
            this.saldo -= valor;
            this.poupanca += valor
            contaCorrente.innerText = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(this.saldo); 
            contaPoupanca.innerText = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(this.poupanca); 
            document.getElementById("valor").value = ""
        }
    }
    criarTabela(){
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';
        for(let i = 0; i < this.depositos.length || i < this.saques.length || i < this.transferencias.length; i++){
            let deposito = this.depositos[i];
            let saque = this.saques[i];
            let transferencia = this.transferencias[i];
            let tr = tbody.insertRow();
            let td_id = tr.insertCell();
            let td_operacao = tr.insertCell();
            let td_valor = tr.insertCell();
            if(deposito){
                td_id.innerText = deposito.id;
                td_operacao.innerText = deposito.operacao;
                td_valor.innerText = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(deposito.valor);
            } 
        }
    }
}

let conta = new ContaBancaria();
