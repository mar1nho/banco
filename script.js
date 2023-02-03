class ContaBancaria{
    constructor(){
        this.saldo = 0;
        this.poupanca = 0;
        this.depositos = [];
        this.saques = [];
        this.transferencias = [];
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
            for(let i = 0; i < this.depositos.length || i < this.saques.length || i < this.transferencias.length; i++){
                let deposito = this.depositos[i];
                let saque = this.saques[i];
                let transferencia = this.transferencias[i];
                let tr = tbody.insertRow();
                let td_operacao = tr.insertCell();
                let td_valor = tr.insertCell();
                if(deposito){
                    td_operacao.innerText = deposito.operacao;
                    td_valor.innerText = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(deposito.valor);
                } else if(saque){
                    td_operacao.innerText = saque.operacao;
                    td_valor.innerText = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(saque.valor);
                } else if(transferencia){
                    td_operacao.innerText = transferencia.operacao;
                    td_valor.innerText = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(transferencia.valor);
                }
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
                this.depositos.push({ operacao: 'Deposito', valor });
                document.getElementById("valor").value = ""
            }
            this.criarTabela();
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
                this.saques.push({ operacao: 'Saque', valor });
                document.getElementById("valor").value = "";
            }
            this.criarTabela();
        }

    transferir(){
        let valor = Number(document.getElementById("valor").value);
        if(valor == '' || valor > this.saldo){
            sucesso.innerText = 'Coloque um valor válido ou verifique seu saldo'
        } else {
            sucesso.innerText = "Valor transferido, verifique seu saldo!"
            this.saldo -= valor;
            this.transferencias.push({ operacao: 'Transferência', valor });
            document.getElementById("valor").value = ""
            this.criarTabela();
        }
}

}

let conta = new ContaBancaria();
