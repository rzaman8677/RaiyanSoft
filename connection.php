<?php
$servername = "mysql.hostinger.ph";
$username = "u710095918_raiyan";
$password = "RaiyanTech0101#";

try {
  $conn = new PDO("mysql:host=$servername;dbname=u710095918_contact", $username, $password);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  echo "Connected successfully";
} catch(PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}
?>