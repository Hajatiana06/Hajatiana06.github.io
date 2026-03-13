<?php
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit('Méthode non autorisée.');
}

$nom     = htmlspecialchars(strip_tags(trim($_POST['nom']     ?? '')));
$email   = filter_var(trim($_POST['email']   ?? ''), FILTER_SANITIZE_EMAIL);
$message = htmlspecialchars(strip_tags(trim($_POST['message'] ?? '')));

if (empty($nom) || empty($email) || empty($message)) {
    http_response_code(400);
    exit('Erreur : tous les champs sont requis.');
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    exit('Erreur : adresse email invalide.');
}
if (strlen($message) > 5000) {
    http_response_code(400);
    exit('Erreur : message trop long (max 5000 caractères).');
}

$to      = 'tianahaja11@gmail.com';
$subject = '=?UTF-8?B?' . base64_encode("Message Portfolio — $nom") . '?=';
$body    = "Nouveau message reçu depuis votre portfolio.\n\n"
         . "Nom   : $nom\n"
         . "Email : $email\n"
         . "Date  : " . date('d/m/Y à H:i') . "\n"
         . str_repeat('-', 40) . "\n\n"
         . $message;

$headers = implode("\r\n", [
    "From: noreply@portfolio-hajatiana.mg",
    "Reply-To: $email",
    "Content-Type: text/plain; charset=UTF-8",
    "X-Mailer: PHP/" . PHP_VERSION,
]);

echo mail($to, $subject, $body, $headers)
    ? 'Message envoyé avec succès !'
    : (http_response_code(500) ?: 'Erreur lors de l\'envoi.');
?>
