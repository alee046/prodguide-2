<?php $CURRENT_PAGE = "quiz"; require_once("inc/header.php"); ?>

<style>
.review_right_col 						{ padding-left:10px; } 

.review_left_col							{ border-right:1px solid #999; padding-right:20px; width:380px; }

.review_left_col, 
.review_right_col 						{ width:360px; display:inline-block; vertical-align:top; }
</style>

<div style="width:800px; margin:0px auto;"><a href="?chapter=1">chapter 1</a> &mdash; <a href="?chapter=2">chapter 2</a> &mdash; <a href="?chapter=3">chapter 3</a> &mdash; <a href="?chapter=4">chapter 4</a>&mdash; <a href="?chapter=5">chapter 5</a>&mdash; <a href="?chapter=6">chapter 6</a>&mdash; <a href="?chapter=7">chapter 7</a>&mdash; <a href="?chapter=8">chapter 8</a>&mdash; <a href="?chapter=9">chapter 9</a>&mdash; <a href="?chapter=10">chapter 10</a></div>
</div>

<div id="slickQuiz1" class="slickQuiz">
   <h1 class="quizName"><!-- where the quiz name goes --></h1>
   <div class="timer">
      <span class="minute">00</span>:<span class="second">00</span>
   </div>
   <div class="quizArea">
      <div class="quizHeader">
      <form>
      	<input type="text" name="name" id="namefield" placeholder="Enter your name">
      </form>

         <a class="button startQuiz" href="#">Get Started!</a>
      </div>
      <!-- where the quiz gets built -->
   </div>
   <div class="quizResults">
      <h3 class="quizScore">You Scored: <span><!-- where the quiz score goes --></span></h3>
      <h3 class="quizLevel"><strong>Ranking:</strong> <span><!-- where the quiz ranking level goes --></span></h3>
      <div class="quizResultsCopy">
      	<div class="review">
            <div class="review_left_col">
            </div>
            <div class="review_right_col">
            </div>
         </div>
         <!--<div class="quizRecord">
         <ol>
         </ol>
         </div>
         <div class="rightAnswers">
         <ol>
         </ol>
         </div>-->
      </div>
   </div>
</div>


<?php

$chapter = $_GET['chapter'] ?: 1 ;

?>

<script>
$(document).ready(function() {
  var slick_quiz_1 = $('#slickQuiz1').slickQuiz({
     preventUnanswered : true,
     preventUnansweredText: "You must answer this question",
     randomSortQuestions: false,
     timerLength: 300,
     warningTimer: 55,
	  quizChapter:<?=$chapter;?>
     });
});
</script>

<?php require_once("inc/footer.php"); ?>