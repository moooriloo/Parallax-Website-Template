<?php

if (isset($_POST['enviar'])) {
    $nome = $_POST['nome'];
    $assunto = $_POST['assunto'];
    $mailFrom = $_POST['mail'];
    $mensagem = $_POST['mensagem'];

    $mailTo = "moooriloo@outlook.com";
    $headers = "De: ".$mailFrom;
    $txt = "E-mail recebido de ".$name.".\n\n".$mensagem;

    mail($mailTo, $assunto, $txt, $headers);
    header("Location: index.php?mailsend");
}