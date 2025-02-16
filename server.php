<?php
header("Access-Control-Allow-Origin: *"); 
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Обрабатываем предварительный (preflight) OPTIONS-запрос
if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit;
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $data = json_decode(file_get_contents("php://input"), true);
    
    if (!empty($data)) {
        echo json_encode(["status" => "success", "message" => "Данные получены!", "data" => $data]);
    } else {
        echo json_encode(["status" => "error", "message" => "Нет данных"]);
    }
} else {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Метод не разрешен"]);
}
?>
