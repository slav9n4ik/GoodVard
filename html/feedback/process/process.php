<?php
ini_set('display_errors',1);
ini_set('display_startup_errors',1);
error_reporting(E_ALL);
/*
 * Форма обратной связи (https://itchief.ru/lessons/php/feedback-form-for-website)
 * Copyright 2016-2018 Alexander Maltsev
 * Licensed under MIT (https://github.com/itchief/feedback-form/blob/master/LICENSE)
 */

// подключаем файл настроек
require_once dirname(__FILE__) . '/process_settings.php';

// открываем сессию
session_start();

// переменная, хранящая основной статус обработки формы
$data['result'] = 'success';

// функция для проверки количество символов в тексте
function checkTextLength($text, $minLength, $maxLength)
{
    $result = false;
    $textLength = mb_strlen($text, 'UTF-8');
    if (($textLength >= $minLength) && ($textLength <= $maxLength)) {
        $result = true;
    }
    return $result;
}

// обрабатывать будем только ajax запросы
if (empty($_SERVER['HTTP_X_REQUESTED_WITH']) || $_SERVER['HTTP_X_REQUESTED_WITH'] != 'XMLHttpRequest') {
    exit();
}
// обрабатывать данные будет только если они посланы методом POST
if ($_SERVER['REQUEST_METHOD'] != 'POST') {
    exit();
}


// валидация поля name
if (isset($_POST['name'])) {
    $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING); // защита от XSS
    if (!checkTextLength($name, 2, 30)) { // проверка на количество символов в тексте
        $data['name'] = 'Поле <b>Имя</b> содержит недопустимое количество символов';
        $data['result'] = 'error';

    }
} else {
    $data['name'] = 'Поле <b>Имя</b> не заполнено';
    $data['result'] = 'error';
}

//валидация поля phone
if (!empty($_POST['phone'])) {
    $phone = preg_replace('/\D/', '', $_POST['phone']); //получить номер телефона (цифры) из строки
    if (!preg_match('/^(8|7)(\d{10})$/', $phone)) {
      $data['phone'] = 'Поле Телефон содержит не корректный номер!';
      $data['result'] = 'error';
    }
}

//валидация поля email
if (isset($_POST['email'])) {
    if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) { // защита от XSS
        $data['email'] = 'Поле <b>Email</b> имеет не корректный адрес';
        $data['result'] = 'error';
    } else {
        $email = $_POST['email'];
    }
} else {
    $data['email'] = 'Поле <b>Email</b> не заполнено';
    $data['result'] = 'error';
}

//валидация поля message
if (isset($_POST['message'])) {
    $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING); // защита от XSS
    if (!checkTextLength($message, 20, 500)) { // проверка на количество символов в тексте
        $data['message'] = 'Поле <b>Сообщение</b> содержит недопустимое количество символов';
        $data['result'] = 'error';
    }
} else {
    $data['message'] = 'Поле <b>Сообщение</b> не заполнено';
    $data['result'] = 'error';
}

//валидация капчи
// if (isset($_POST['captcha']) && isset($_SESSION['captcha'])) {
//     $captcha = filter_var($_POST['captcha'], FILTER_SANITIZE_STRING); // защита от XSS
//     if ($_SESSION['captcha'] != $captcha) { // проверка капчи
//         $data['captcha'] = 'Вы неправильно ввели код с картинки';
//         $data['result'] = 'error';
//     }
// } else {
//     $data['captcha'] = 'Произошла ошибка при проверке проверочного кода';
//     $data['result'] = 'error';
// }

// валидация файлов
// if (isset($_FILES['attachment'])) {
//     // перебор массива $_FILES['attachment']
//     foreach ($_FILES['attachment']['error'] as $key => $error) {
//         // если файл был успешно загружен на сервер (ошибок не возникло), то...
//         if ($error == UPLOAD_ERR_OK) {
//             // получаем имя файла
//             $fileName = $_FILES['attachment']['name'][$key];
//             // получаем расширение файла в нижнем регистре
//             $fileExtension = mb_strtolower(pathinfo($fileName, PATHINFO_EXTENSION));
//             // получаем размер файла
//             $fileSize = $_FILES['attachment']['size'][$key];
//             // результат проверки расширения файла
//             $resultCheckExtension = true;
//             // проверяем расширение загруженного файла
//             if (!in_array($fileExtension, $allowedExtensions)) {
//                 $resultCheckExtension = false;
//                 $data['info'][] = 'Тип файла ' . $fileName . ' не соответствует разрешенному';
//                 $data['result'] = 'error';
//             }
//             // проверяем размер файла
//             if ($resultCheckExtension && ($fileSize > MAX_FILE_SIZE)) {
//                 $data['info'][] = 'Размер файла ' . $fileName . ' превышает 512 Кбайт';
//                 $data['result'] = 'error';
//             }
//         }
//     }
//     // если ошибок валидации не возникло, то...
//     if ($data['result'] == 'success') {
//         // переменная для хранения имён файлов
//         $attachments = array();
//         // перемещение файлов в директорию UPLOAD_PATH
//         foreach ($_FILES['attachment']['name'] as $key => $attachment) {
//             // получаем имя файла
//             $fileName = basename($_FILES['attachment']['name'][$key]);
//             // получаем расширение файла в нижнем регистре
//             $fileExtension = mb_strtolower(pathinfo($fileName, PATHINFO_EXTENSION));
//             // временное имя файла на сервере
//             $fileTmp = $_FILES['attachment']['tmp_name'][$key];
//             // создаём уникальное имя
//             $fileNewName = uniqid('upload_', true) . '.' . $fileExtension;
//             // перемещаем файл в директорию
//             if (!move_uploaded_file($fileTmp, $uploadPath . $fileNewName)) {
//                 // ошибка при перемещении файла
//                 $data['info'][] = 'Ошибка при загрузке файлов';
//                 $data['result'] = 'error';
//             } else {
//                 $attachments[] = $uploadPath . $fileNewName;
//             }
//         }
//     }
// }


// отправка формы (данных на почту)
if ($data['result'] == 'success') {
    // включить файл PHPMailerAutoload.php
    require_once('../phpmailer/PHPMailerAutoload.php');
    //require_once dirname(__FILE__) . '/phpmailer/PHPMailerAutoload.php';

    //формируем тело письма
    $bodyMail = file_get_contents('email.tpl'); // получаем содержимое email шаблона

    // // добавление файлов в виде ссылок
    // if (isset($attachments)) {
    //     $listFiles = '<ul>';
    //     foreach ($attachments as $attachment) {
    //         $fileHref = substr($attachment, strpos($attachment, '/uploads/'));
    //         $fileName = basename($fileHref);
    //         $listFiles .= '<li><a href="' . $startPath . $fileHref . '">' . $fileName . '</a></li>';
    //     }
    //     $listFiles .= '</ul>';
    //     $bodyMail = str_replace('%email.attachments%', $listFiles, $bodyMail);
    // } else {
    //     $bodyMail = str_replace('%email.attachments%', '-', $bodyMail);
    // }

    // выполняем замену плейсхолдеров реальными значениями
    $bodyMail = str_replace('%email.title%', MAIL_SUBJECT, $bodyMail);
    $bodyMail = str_replace('%email.nameuser%', isset($name) ? $name : '-', $bodyMail);
    $bodyMail = str_replace('%email.phone%', isset($phone) ? $phone : 'не указан', $bodyMail);
    $bodyMail = str_replace('%email.message%', isset($message) ? $message : '-', $bodyMail);
    $bodyMail = str_replace('%email.emailuser%', isset($email) ? $email : '-', $bodyMail);
    $bodyMail = str_replace('%email.date%', date('d.m.Y H:i'), $bodyMail);
    

    // отправляем письмо с помощью PHPMailer
    $mail = new PHPMailer;
    $mail->IsSMTP(); // использовать SMTP
    $mail->Host = 'smtp.yandex.ru'; // SMTP хост
    $mail->Port = 465; // SMTP порт
    $mail->SMTPAuth = true; // SMTP аутентификация
    $mail->Username = 'goodvardschool@yandex.ru'; // SMTP пользователь
    $mail->Password = 'nadoelo123'; // SMTP пароль
    $mail->SMTPSecure = 'ssl'; // Тип шифрования

    $mail->CharSet = 'UTF-8';
    $mail->IsHTML(true); 
    $mail->setFrom(MAIL_FROM, MAIL_FROM_NAME);
    $mail->Subject = MAIL_SUBJECT;
    $mail->Body = $bodyMail;
    $mail->addAddress(MAIL_ADDRESS);
    $mail->Sender = 'goodvardschool@yandex.ru';

    // // прикрепление файлов к письму
    // if (isset($attachments)) {
    //     foreach ($attachments as $attachment) {
    //         $mail->addAttachment($attachment);
    //     }
    // }

    // отправляем письмо
    if (!$mail->send()) {
        $data['result'] = 'error';
    }

    // информируем пользователя по email о доставке
    if (isset($email)) {
        // очистка всех адресов и прикреплёных файлов
        $mail->clearAllRecipients();
        $mail->clearAttachments();
        //формируем тело письма
        $bodyMail = file_get_contents('email_client.tpl'); // получаем содержимое email шаблона
        // выполняем замену плейсхолдеров реальными значениями
        $bodyMail = str_replace('%email.title%', MAIL_SUBJECT, $bodyMail);
        $bodyMail = str_replace('%email.nameuser%', isset($name) ? $name : '-', $bodyMail);
        $bodyMail = str_replace('%email.date%', date('d.m.Y H:i'), $bodyMail);
        $mail->Subject = MAIL_SUBJECT_CLIENT;
        $mail->Body = $bodyMail;
        $mail->addAddress($email);
        $mail->send();
    }
}

// отправка данных формы в файл
if ($data['result'] == 'success') {
    $name = isset($name) ? $name : '-';
    $email = isset($email) ? $email : '-';
    $message = isset($message) ? $message : '-';
    $output = "---------------------------------" . "\n";
    $output .= date("d-m-Y H:i:s") . "\n";
    $output .= "Имя пользователя: " . $name . "\n";
    $output .= "Адрес email: " . $email . "\n";
    $output .= "Сообщение: " . $message . "\n";
    // if (isset($attachments)) {
    //     $output .= "Файлы: " . "\n";
    //     foreach ($attachments as $attachment) {
    //         $output .= $attachment . "\n";
    //     }
    // }
    if (!file_put_contents(dirname(dirname(__FILE__)) . '/info/message.txt', $output, FILE_APPEND | LOCK_EX)) {
        $data['result'] = 'error';
    }
}

// сообщаем результат клиенту
echo json_encode($data);
