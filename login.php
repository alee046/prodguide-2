<?php $CURRENT_PAGE = "login"; require_once("inc/header.php"); ?>
<?php 

$message = "";
if(!empty($_GET['attempt']) && ($_GET['attempt'] == "failed")) {
    $message = $_GET['attempt'];
}
?>
<style>
.form-signin {
  max-width: 380px;
  padding: 15px 35px 45px;
  margin: 15px auto;
  background-color: #fff;
  border: 1px solid rgba(0,0,0,0.1);  
  border-radius:5px;
}
h2{
	font-size:18px;
	padding-bottom:5px;
	font-family: "Century Gothic";
	}
button.btn.btn-lg.btn-primary.btn-block {
    line-height: 12px;
}
</style>

<div class="container">
   <form class="form-signin" action="login" method="post">
    <h2 class="form-signin-heading">Please enter your password.</h2>
   <input type="hidden" name="function" value="pg_login">
   <input type="password" class="form-control" name="password" placeholder="Password" required=""/>
	<?php if($message != "") { ?>
   <div style="color:#FF0000; font-family:'Century Gothic';">Incorrect password.</div>
   <?php } ?>
   <button class="btn btn-lg btn-primary btn-block" type="submit" style="margin-top:20px;">Log in</button> 
   </form>
</div>

<?php require_once("inc/footer.php"); ?>


