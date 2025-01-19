<?php
// Verifica si se enviaron los datos del formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener datos del formulario
    $nombre = htmlspecialchars($_POST["nombre"]);
    $correo = filter_var($_POST["correo"], FILTER_SANITIZE_EMAIL);
    $telefono = htmlspecialchars($_POST["telefono"]);
    $mensaje = htmlspecialchars($_POST["mensaje"]);

    // Configuración del correo
    $destinatario = "tu_correo@ejemplo.com"; // Cambia esto por tu dirección de correo
    $asunto = "Nuevo mensaje de contacto";

    $contenido = "Has recibido un mensaje desde tu formulario de contacto:\n\n";
    $contenido .= "Nombre: $nombre\n";
    $contenido .= "Correo: $correo
    \n";
    $contenido .= "Teléfono: $telefono\n";
    $contenido .= "Mensaje:\n$mensaje\n";

    $cabeceras = "From: $correo\r\n";
    $cabeceras .= "Reply-To: $correo\r\n";

    // Enviar el correo
    if (mail($destinatario, $asunto, $contenido, $cabeceras)) {
        echo "<h2>¡Mensaje enviado exitosamente!</h2>";
    } else {
        echo "<h2>Lo sentimos, no se pudo enviar el mensaje. Intenta nuevamente más tarde.</h2>";
    }
} else {
    echo "<h2>Acceso no autorizado.</h2>";
}
?>
