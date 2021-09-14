<?php
if($_POST){
	
	if(empty($_POST['name']) || empty($_POST['email']) || empty($_POST['telefono']) || empty($_POST['subject']) ||empty($_POST['message'])){
		echo '<script>
			$(document).ready(function(){
				swal("Ops...","Completa todos los campos obligatorios!","warning");
			});
			</script>';
	}else{
		$name 		= utf8_decode($_POST['name']);
		$email 		= utf8_decode($_POST['email']);
		$telefono 	= utf8_decode($_POST['telefono']);
		$subject 	= utf8_decode($_POST['subject']);
		$mensaje 	= utf8_decode($_POST['message']);
        $host       = $_SERVER["HTTP_HOST"];
        $contacto   = '<a href="https://'.$host.'" target="_blank">https://'.$host.'';
        $respuesta  = utf8_decode("¡Gracias $name por comunicarte conmigo! En breve me pondre en contacto con usted para tratar sobre: $subject ($mensaje) de mi sitio web $host");       
        $whatsapp   = '<a href="https://api.whatsapp.com/send?phone=+'.$_POST['telefono'].'&text='.$respuesta.'" target="_blank">'. $telefono.'</a>';
		$assunto 	= 'Te han contactado desde tu sitio web personal Fabrizio Ferroni';
		$imagen = '<img src="http://'.$host.'/v5/img/faviconff2.png" witdh="150px"/>';
		$imagen2 = '<img src="https://i.postimg.cc/15GBG4BL/faviconff2.png" witdh="">';
        $imagen3 = '<img src="http://fferroni.eshost.com.ar/v5/img/faviconff2.png" witdh="">';
		$imagen4 = '<img src="http://fabrizioferroni.com.ar/img/faviconff2.png">';
		
		require_once('PHPMailer/PHPMailerAutoload.php');

		$Email = new PHPMailer();
		$Email->SetLanguage("ar");
		$Email->IsSMTP(); 
		$Email->SMTPAuth = true; 
		$Email->Host = 'mail.fabrizioferroni.com.ar'; 
		$Email->Port = '465'; 
		$Email->SMTPSecure = 'ssl';
		$Email->Username = 'info@fabrizioferroni.com.ar'; 
		$Email->Password = 'Fa39967592Fe#';
		$Email->IsHTML(true); 
		$Email->setFrom($email, $name);
		$Email->AddReplyTo($email, $name);
		$Email->AddAddress('info@fabrizioferroni.com.ar', 'Fabrizio Ferroni');
		$Email->addCC('fabrizioferroni@outlook.com', 'Fabrizio Ferroni');
		$Email->Subject = utf8_decode($assunto);
		$Email->Body .= "<br />
                                 $imagen4 <br /><br />
						 <strong>Nombre:</strong> $name<br />									
						 <strong>E-mail:</strong> $email<br />
						 <strong>Whatsapp:</strong> $whatsapp<br />
						 <strong>Asunto de consulta:</strong> $subject<br />
						 <strong>Mensaje:</strong> $mensaje<br />
						 <strong>Te contactaron desde:</strong> $contacto<br />								
						 ";	
		if(!$Email->Send()){				
			 echo'
			<script>
				$(document).ready(function(){
					swal("Ups '.utf8_encode($name).'...","Algo salió mal, pruebe volver a intentarlo nuevamente. Gracias!", "error");
				});
               
			</script>';

		}else{
			 echo'
		<script>
			$(document).ready(function(){
				swal("Gracias '.utf8_encode($name).' por contactarse con nosotros....", "  \n A la brevedad nos estaremos comunicando con usted!", "success");
                });
                limpiarFormulario();
		</script>';

		}		
	}
}
