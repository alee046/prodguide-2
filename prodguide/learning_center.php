<?php $CURRENT_PAGE = "learning_center"; require_once("inc/header.php"); ?>

<style>
	 html { height:100%;}
	.learning_center .section_data { padding: 10px 0px 10px 0px; }
	.learning_center p { padding-top: 10px; }
	.learning_center .nav-tabs > li { background-color: white !important; border: 1px solid #CCC; border-radius: 3px; border-bottom:none; }
	.learning_center .active {	border-bottom:none; }
	.learning_center .nav-tabs > li > a { border-bottom: 1px solid #CCC; }
	.learning_center .section_data { border-left:none; }
	.learning_center #subtabs { margin-top:10px; }
	.learning_center .nav-tabs > li > a { margin-right:0px !important; border:none !important; }
	.learning_center .tab-pane .row { border: 1px solid #CCC; border-top:none;  }
	.learning_center .tabcontainer {	margin:0px;	padding:0px; border:1px dotted #FFF; border-top:none;	}
	.learning_center .affix { top: 0;}
	.learning_center .bs-docs-sidebar { margin-top: 15px; margin-bottom: 20px; line-height:15px; min-width:343px;}
	.learning_center .bs-docs-sidebar li a { padding: 6px 0px; }	
	.learning_center .bs-docs-sidebar .nav > li > a { padding: 4px 8px; font-size: 13px; font-weight: 400; border-bottom: 1px solid #fff; }	
	.learning_center .bs-docs-sidebar .nav { display: none; }
	.learning_center .bs-docs-sidebar .nav > .active > a,
	  .learning_center .bs-docs-sidebar .active > a,
	  .learning_center .bs-docs-sidebar .active .nav .active > a {  color: #ff3385;border-bottom: 1px solid #ff3385;}	
	.learning_center .bs-docs-sidebar .active .nav .active,
	  .learning_center .bs-docs-sidebar .active .nav,
	  .learning_center .bs-docs-sidebar .active { display: block; }	
	.learning_center ul.chapter { list-style-type: none;}	
	.learning_center .section_title { color:#134fb8; font-size: 28px; padding-left:-15px; /*cursor:pointer;*/ padding-top:5px; }
	.learning_center .section_data { padding-left:5px; margin-left:5px; border-left:1px dotted #CCC; text-align:justify; }
	.footer { position:static; }
</style>	
<p>&nbsp;</p>
<div class="learning_center">
   <div class="container">
      <div class="row">
         <div class="col-sm-10">         
            <h1>Learning Center</h1> 
            <?php require("learning_center/chapter_1.html"); ?>
            <?php require("learning_center/chapter_2.html"); ?>
            <?php require("learning_center/chapter_3.html"); ?>
         </div>
        <div class="col-sm-2">
        		<div class="scrollspy" style="min-height:300px;">
               <ul id="sidemenu" class="bs-docs-sidebar nav" data-spy="affix" data-offset-top="122">
               </ul> 
            </div>          
        </div>
      </div>
  </div>
</div>

<script>


jQuery("li#ch_1").find('li:first-child').addClass('active');
var chapters = jQuery("ul.chapter");
var chapter_number = 1;
var section_number = 1;
chapters.each(function() {
	jQuery(this).prev("h2").attr('id', "chapter_"+chapter_number);
	var this_scrollspy_li = "";
	this_scrollspy_li += "<li id=\"ch_"+chapter_number+"\"";
	this_scrollspy_li += ((chapter_number==1)?(' class="active"'):(''));
	this_scrollspy_li += "><a href=\"#chapter_"+chapter_number+"\">"+jQuery(this).prev("h2").text()+"</a>";
	this_scrollspy_li += "<ul class=\"nav nav-stacked\">";
	jQuery(this).children().each(function() {
		jQuery(this).attr('id', "ch_"+chapter_number+"_section_"+section_number+"");
		var title = jQuery(this).find("div.section_title").text();
		this_scrollspy_li += '<li '+((chapter_number==1 && section_number==1)?(' class="active"'):(''))+'>';
		this_scrollspy_li += '<a href="#ch_'+chapter_number+'_section_'+section_number+'">'+title+'</a></li>';
		section_number++;
   });
	this_scrollspy_li += "</ul>";
	this_scrollspy_li += "</li>";
	jQuery("div.scrollspy ul.bs-docs-sidebar").append(this_scrollspy_li);
	section_number = 1;
	chapter_number++;
});

jQuery(".learning_center .col-sm-10 h2").first().css({'padding-top':'230px', 'margin-top':'-210px'});
jQuery(".learning_center .col-sm-10 ul").first().find("li").first().css({'padding-top':'280px', 'margin-top':'-260px'});


</script>












<?php require_once("inc/footer.php"); ?>