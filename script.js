function fazerPedido() {
    const nome = document.getElementById("nome").value;
    const pet = document.getElementById("pet").value;
    const racao = document.getElementById("racao").value;

    if (nome === "" || pet === "" || racao === "") {
        document.getElementById("mensagem").innerText = "⚠️ Preencha todos os campos!";
        return;
    }

    document.getElementById("mensagem").innerText =
        `Pedido enviado com sucesso, ${nome}! A ração ${racao} para ${pet} chegará em breve 🐾`;
}
