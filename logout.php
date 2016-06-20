<?php $CURRENT_PAGE = "logout"; require_once("inc/header.php"); ?>
<div class="container">
<div style="font-family:'Century Gothic';">Redirecting you to the login page in 3 seconds...</div>
</div>
<script>
setTimeout(function() {
    window.location.replace("http://www.vapornation.com/prodguide/login");
}, 3000);
</script>
<?php require_once("inc/footer.php"); ?>
