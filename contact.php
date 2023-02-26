<?php
// Purpose: 
$full_name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$servername = "mysql.hostinger.ph";
$username = "u710095918_raiyan";
$password = "RaiyanTech0101#";
$dbname = "u710095918_contact";
try {
  $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $sql = "INSERT INTO contact (Name, Email, Message)
  VALUES ('$full_name', '$email', '$message')";
  // use exec() because no results are returned
  $conn->exec($sql);
} catch(PDOException $e) {
  echo $sql . "<br>" . $e->getMessage();
}

$conn = null;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Privacy Policy</title>
    <link rel="icon" type="image/x-icon" href="gearfavicon.bmp">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"> 
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js" ></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="contact.css">
</head>
<body>
  	<div id="body"></div>
  	<div id="body2"></div>
  	<div id="body3"></div>
  	<div id="body4"></div>
    <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid">
          <a class="navbar-brand" href="">RaiyanTech</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="Articles.html">Articles</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="authors.html">Writers</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="about.html">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="techTools.html">Tech Tools</a>
              </li>
                <li class="nav-item">
                    <a class="nav-link" href="privacy.html">Privacy Policy</a>
                </li>
            </ul>
          </div>
        </div>
    </nav>
      <div>
        <div class="contact-form-wrapper d-flex justify-content-center">
          <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post" class="contact-form">
            <h5 id="title" class="title">Contact us</h5>
            <p class="description">Feel free to contact us if you need any assistance, any help or another question.
            </p>
            <div>
              <input name="name" type="text" class="form-control rounded border-white mb-3 form-input" id="name" placeholder="Name" required>
            </div>
            <div>
              <input name="email" type="email" class="form-control rounded border-white mb-3 form-input" placeholder="Email" required>
            </div>
            <div>
              <textarea name="message" id="message" class="form-control rounded border-white mb-3 form-text-area" rows="5" cols="30" placeholder="Message" required></textarea>
            </div>
            <div class="submit-button-wrapper">
              <input type="submit" value="Send">
            </div>
          </form>
        </div>
      </div>
      <div class="mt-5 pt-5 pb-5 footer">
        <div class="container">
          <div class="row">
            <div class="col-lg-5 col-xs-12 about-company">
              <h2>RaiyanTech</h2>
              <p class="pr-5 text-white-50">RaiyanTech is innovating towards the future. Join us today in our journey towards the future.</p>
              <!-- <p><a href="#"><i class="fa fa-facebook-square mr-1"></i></a><a href="#"><i class="fa fa-linkedin-square"></i></a></p> -->
            </div>
            <div class="col-lg-3 col-xs-12 links">
              <h4 class="mt-lg-0 mt-sm-3">Socials</h4>
                <ul class="m-0 p-0">
                  <li>- <a target="_blank" href="https://www.instagram.com/raiyantechofficial/" class="fa fa-instagram">raiyantechofficial</a></li>
                  <li>- <a target="_blank" href="https://www.reddit.com/r/raiyantech" class="fa fa-reddit">raiyantechofficial</a></li>
                  <li>- <a target="_blank" href="https://www.tiktok.com/@raiyantecharticles">Tiktok: RaiyanTech</a></li>
                  <li>- <a target="_blank" href="https://discord.gg/6FjSjhFjpS" class="fa fa-discord">Discord: RaiyanTech</a></li>
                </ul>
            </div>
            <div class="col-lg-4 col-xs-12 location">
              <h4 class="mt-lg-0 mt-sm-4">Location</h4>
              <p>Maryland, United States</p>
              <!-- <p class="mb-0"><i class="fa fa-phone mr-3"></i>(541) 754-3010</p> -->
              <p><i class="fa fa-envelope-o mr-3"></i>raiyanrzaman@gmail.com</p>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col copyright">
              <p class=""><small class="text-white-50">©RaiyanTech 2022. All Rights Reserved.</small></p>
            </div>
          </div>
        </div>
      </div>
</body>
</html>