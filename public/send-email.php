<?php
    //Import PHPMailer classes into the global namespace
    //These must be at the top of your script, not inside a function
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
	header('Access-Control-Allow-Headers: token, Content-Type');

	
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    //Load Composer's autoloader
    require 'vendor/autoload.php';

    //Create an instance; passing `true` enables exceptions
    $mail = new PHPMailer(true);

    $name = $_POST['name'];
	$phone = $_POST['phone'];
	$company = $_POST['company'];
	$email = $_POST['email'];
	$text = $_POST['message'];
	
    //Create an instance; passing `true` enables exceptions
    $mail = new PHPMailer(true);

    $message = '
		<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
		<html>
		<body>
			<div style="padding: 20px; border-radius: 20px; background: #003558">
				<table border="1" style="border-collapse: collapse; width: 250px;" cellpadding="10">
					<tr style="color:white;">
						<th>Name</th>
						<th>Phone number</th>
						<th>Company</th>
						<th>E-mail</th>
					</tr>
					<tr style="color:white;">
						<td>'. $name .'</td>
						<td>'. $phone .'</td>
						<td style="white-space: nowrap;">'. $company .'</td>
						<td>
							<a href="mailto:'. $email .'" target = "_blank" style="color: white">'. $email .'</a>
						</td>
					</tr>
				</table>
				<p style="color:white;">'. nl2br($text) .'</p>
			</div>
		</body>
		</html>
	';


    try {
        //Server settings
        $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
        $mail->isSMTP();                                            //Send using SMTP
        $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
		$mail->CharSet    = 'UTF-8';
        $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
        $mail->Username   = 'dmitriyvas21@gmail.com';                     //SMTP username
        $mail->Password   = '************';                               //SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
        $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
    
        //Recipients
        $mail->setFrom('dmitriyvas21@gmail.com');
        $mail->addAddress('dmitriyvas21@gmail.com');
        
        //Content
		foreach($_FILES as $file) {
			$mail->addAttachment($file['tmp_name'], $file['name']);
		}

        $mail->isHTML(true);                                  //Set email format to HTML
        // $mail->Subject = $subject;
        $mail->Subject = "WBS contact form from {$email}";
        $mail->Body    = $message;
        $mail->AltBody = "name: {$name};\n phone: {$phone} \n company: {$company};\n email: {$email};\n message: {$text}";
		
		if ($_POST) {
			$mail->send();
		};
		

        file_put_contents('error.txt', 'mail is sended');

    } catch (Exception $e) {
        file_put_contents('error.txt', "Message could not be sent. Mailer Error: {$mail->ErrorInfo}");
    }
