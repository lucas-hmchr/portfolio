<?php
$allowed_origin = "https://www.portfolio.lucashamacher.de";

switch ($_SERVER['REQUEST_METHOD']) {
    case "OPTIONS":
        header("Access-Control-Allow-Origin: $allowed_origin");
        header("Access-Control-Allow-Methods: POST, OPTIONS");
        header("Access-Control-Allow-Headers: Content-Type");
        exit(0);

    case "POST":
        header("Access-Control-Allow-Origin: $allowed_origin");
        header("Content-Type: text/plain; charset=utf-8");

        $json = file_get_contents('php://input');
        $params = json_decode($json);

        $email = $params->email;
        $name = $params->name;
        $message = $params->message;

        $recipient = 'postmaster@lucashamacher.de';
        $subject = "Contact From <$email>";
        $message = "From: " . $name . "<br>" . $message;

        $headers   = [];
        $headers[] = 'MIME-Version: 1.0';
        $headers[] = 'Content-type: text/html; charset=utf-8';
        $headers[] = "From: noreply@lucashamacher.de";

        $ok = @mail($recipient, $subject, $message, implode("\r\n", $headers));

        if ($ok) {
            http_response_code(200);
            echo "OK";
        } else {
            http_response_code(500);
            echo "ERROR";
        }
        break;

    default:
        header("Allow: POST", true, 405);
        exit;
}