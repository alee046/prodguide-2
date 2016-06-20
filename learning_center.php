<?php 
$CURRENT_PAGE = "learning_center"; require_once("inc/header.php"); 
$model = Mage::getResourceModel('catalog/product');
$base_url = Mage::getBaseUrl(Mage_Core_Model_Store::URL_TYPE_MEDIA);
$green_check = "http://www.vapornation.com/skin/frontend/vapornation/default/images/product_page/in_stock_check.JPG";
$red_x = "http://www.vapornation.com/skin/frontend/vapornation/default/images/product_page/out_of_stock_x.JPG";
$gold_star = "http://www.vapornation.com/skin/frontend/vapornation/default/images/product_page/star.png";
$arizer_air 		 = $model->getAttributeRawValue(1134, 'image', 5);
$arizer_solo		 = $model->getAttributeRawValue(154, 'image', 5);
$ascent 				 = $model->getAttributeRawValue(676, 'image', 5);
$atmos_kiln 		 = $model->getAttributeRawValue(1666, 'image', 5);
$atmos_vicod 		 = $model->getAttributeRawValue(1561, 'image', 5);
$atmos_vicod_g5 	 = $model->getAttributeRawValue(1655, 'image', 5);
$cloud_chloris 	 = $model->getAttributeRawValue(1313, 'image', 5);
$cloud_galaxy 		 = $model->getAttributeRawValue(1675, 'image', 5);
$cloud_pen_2 		 = $model->getAttributeRawValue(1294, 'image', 5);
$cloud_pen_3 		 = $model->getAttributeRawValue(1296, 'image', 5);
$crafty 				 = $model->getAttributeRawValue(1071, 'image', 5);	
$da_buddha			 = $model->getAttributeRawValue(71, 'image', 0);
$davinci				 = $model->getAttributeRawValue(325, 'image', 5);
$dr_dabber_aura 	 = $model->getAttributeRawValue(1608, 'image', 5);
$dr_dabber_boost 	 = $model->getAttributeRawValue(1550, 'image', 5);
$dr_dabber_ghost 	 = $model->getAttributeRawValue(957, 'image', 5);
$executive 			 = $model->getAttributeRawValue(1587, 'image', 5);
$extreme_q 			 = $model->getAttributeRawValue(404, 'image', 0);
$g_pro 				 = $model->getAttributeRawValue(1074, 'image', 5);
$grenco_g_pen 		 = $model->getAttributeRawValue(402, 'image', 5);
$haze_dual			 = $model->getAttributeRawValue(1072, 'image', 5);
$k_vape 				 = $model->getAttributeRawValue(1190, 'image', 5);
$k_vape_micro 		 = $model->getAttributeRawValue(1318, 'image', 5);
$kpens_donuts 		 = $model->getAttributeRawValue(1509, 'image', 5);			
$kpens_galaxy 		 = $model->getAttributeRawValue(1527, 'image', 5);
$kpens_gravity 	 = $model->getAttributeRawValue(1670, 'image', 5);
$lux 					 = $model->getAttributeRawValue(1048, 'image', 5);
$micro_g 			 = $model->getAttributeRawValue(1018, 'image', 5);
$mighty 				 = $model->getAttributeRawValue(1081, 'image', 5);
$ninja_v_4 			 = $model->getAttributeRawValue(605, 'image', 5);				
$og_four_2 			 = $model->getAttributeRawValue(1624, 'image', 5);
$pax_2 				 = $model->getAttributeRawValue(1544, 'image', 5);
$prima 				 = $model->getAttributeRawValue(1495, 'image', 5);
$pulsar_buzz 		 = $model->getAttributeRawValue(1657, 'image', 5);
$pulsar_hand_enail = $model->getAttributeRawValue(1673, 'image', 5);
$pulsar_sirius 	 = $model->getAttributeRawValue(1665, 'image', 5);
$sidekick 			 = $model->getAttributeRawValue(1668, 'image', 5);
$silver_surfer 	 = $model->getAttributeRawValue(650, 'image', 0);
$titan 				 = $model->getAttributeRawValue(998, 'image', 5);
$v_tower 			 = $model->getAttributeRawValue(518, 'image', 0);
$vapir_rise 		 = $model->getAttributeRawValue(619, 'image', 0);
$vapor_brothers 	 = $model->getAttributeRawValue(123, 'image', 0);
$vaporite_solo 	 = $model->getAttributeRawValue(152, 'image', 0);
$volc_classic 		 = $model->getAttributeRawValue(165, 'image', 5);
$volc_digital 		 = $model->getAttributeRawValue(164, 'image', 0);
$wulf 				 = $model->getAttributeRawValue(1257, 'image', 5);		
$wulf_sx				 = $model->getAttributeRawValue(1257, 'image', 5);	

$data = array(
					"sprite_section_size" => 54,
					"warranty_num_font_size" => 21,
					"warranty_num_line_height" => 23,
					"warranty_num_top" => 7,
					"warranty_time_top" => 28,
					"warranty_time_font_size" => 10,
					"heat_speed_num_top" => 14,
					"heat_speed_num_font_size" => 12,
					"heat_speed_time_top" => 26,
					"heat_speed_time_font_size" => 9,
					"label_font_size" => 11,
					"rating_num_font_size" =>11,
					"rating_num_top" => 18,
					"rating_num_line_height" => 15,
				);	
?>      
<style>/*see unminified_css file in the same folder for production version*/
.hide,
.learning_center .bs-docs-sidebar .nav { display: none; }
.loading, html { height: 100%; }
#expand-all { cursor: pointer; }
[id^=expand-all-]:hover { cursor: pointer; color: #ff3385; }
#subtabs { margin-top: 10px; }
#tabs_11 li a,
#tabs_2 li a,
#tabs_3 li a,
#tabs_5 li a,
#tabs_6 li a,
#tabs_7 li a,
#tabs_8 li a,
#tabs_9 li a {
    font-size: 18px!important;
    font-weight: 700; }
.footer { position: static; }
.learning_center p { padding-top: 10px; }
.learning_center .active { border-bottom: none; }
.learning_center .affix { top: 0; }
.learning_center .bottom-line { font-size: 14px; padding: 0 0 25px 8px;  }
.learning_center .bottom-line-header { font-size: 16px; padding: 18px 0 6px 8px; font-weight: 700; }
.learning_center .bs-docs-sidebar { margin-top: 15px; margin-bottom: 20px; line-height: 15px; min-width: 343px; }
.learning_center .bs-docs-sidebar li a { padding: 6px 0; }
.learning_center .bs-docs-sidebar .nav>li>a { padding: 4px 8px; font-size: 13px; font-weight: 400; border-bottom: 1px solid #fff; }
.learning_center .bs-docs-sidebar .active .nav .active>a,
.learning_center .bs-docs-sidebar .active>a,
.learning_center .bs-docs-sidebar .nav>.active>a { color: #ff3385; border-bottom: 1px solid #ff3385; }
.learning_center .bs-docs-sidebar .active,
.learning_center .bs-docs-sidebar .active .nav,
.learning_center .bs-docs-sidebar .active .nav .active { display: block; }
.learning_center .col-sm-10 ul { list-style-type: none; }
.learning_center .column { width: 33%; display: inline-block; vertical-align: top; text-align: center; }
.learning_center .comparison-content { display: none; }
.learning_center .comparison-open {  border-top: 1px solid #ccc; }
.learning_center .comparison-section { font-size: 13px; }
.learning_center .comparison-section h3 { font-size: 20px; text-align: center; vertical-align: top; }
.learning_center .comparison-section:first-child h3 { margin-top: 0; }
.learning_center .comparison-section li { font-size: 14px; text-align: left; }
.learning_center .comparison-section ul { padding-left: 12px!important; width: 90%; margin: auto; list-style: disc; }
.learning_center .comparison-section:first-child .bottom-line-header { margin-bottom: -18px; }
.learning_center .comparison-section:first-child .comparison-title { border-top: 1px solid #ccc; padding-top: 20px; }
.learning_center .comparison-section:last-child .bottom-line { border-bottom: 1px solid #ccc; }
.learning_center .comparison-title { font-size: 18px!important; text-align: left!important; cursor: pointer; border-bottom: 1px solid #ccc; padding-bottom: 14px; }
.learning_center .expand-text { padding-left: 20px; font-size: 16px; }
.learning_center .header-icons { margin: 14px 0; }
.learning_center .header_image .hi_label { font-family: Arial, Helvetica, sans-serif; }
.learning_center .hi_warranty_num span { font-size: 28px!important; }
.learning_center .image { text-align: center; width: 50%; }
.learning_center .info li { margin-left: 20px; line-height: 20px; font-size: 15px; }
.learning_center .info ul { list-style: disc!important; padding: 0!important; }
.learning_center .info { padding: 30px 0 0; text-align: left; vertical-align: middle; min-width: 200px; }
.learning_center .inner { display: inline-block; float: left; min-width: 300px; }
.learning_center .loading { padding: 50px; font-size: 24px; color: #134FB8; }
.learning_center .nav-tabs>li { background-color: #fff!important; border: 1px solid #CCC; border-top-left-radius: 6px; border-top-right-radius: 6px; border-bottom: none; }
.learning_center .nav-tabs>li>a { margin-right: 0!important; border: none!important; }
.learning_center .outer { display: block; clear: both; min-height: 300px; }
.learning_center .outer .inner h2 { margin: 10px 0; }
.learning_center .outer .inner h3 { margin: 10px 0 6px; font-size: 17px; }
.learning_center .price { font-weight: 700; font-size: 16px; padding: 10px 0 0; }
.learning_center .quiz-link { color: #00b359; cursor: pointer; }
.learning_center .quiz-link:hover { color: #ff3385; }
.learning_center .quiz-link-outer { padding-top: 10px; }
.learning_center .rebrand { width: 19%; display: inline-block; text-align: center; }
.learning_center .rebrand-name { text-align: center; width: 168px; }
.learning_center .rebrands-section { text-align: center; margin-bottom: 50px; }
.learning_center .row { margin-left: -11px!important; border-radius: 8px; }
.learning_center .section_data { padding: 10px 0 10px 5px; margin-left: 5px; border-left: 1px dotted #CCC; text-align: justify; }
.learning_center .section_title { color: #134fb8; font-size: 16px; cursor: pointer; padding-top: 5px; }
.learning_center .short-description { padding:10px;}
.learning_center .show { display: block!important; }
.learning_center .show-product-description { display:inline-block; float:left; line-height:200%; color: #4582ec; }
.learning_center .show-product-description:hover { text-decoration: underline; cursor:pointer; color:#134fb8; }
.learning_center .similarities { vertical-align: top; padding-top: 100px; }
.learning_center .similarities li { text-align: center!important; }
.learning_center .similarities ul { padding-top: 20px; list-style: none; padding-left: 0!important; }
.learning_center .tab-pane .row { border: 1px solid #CCC; border-top: none; }
.learning_center .tabcontainer { margin: 0; padding: 0; border: 1px dotted #FFF; border-top: none; }
.learning_center .tabcontainer .nav>li>a { padding: 6px 7px!important; font-size: 14px!important; }
.learning_center .view-pdf { text-align: right; line-height: 200%; display: inline-block; float: right; }
.load-text { text-align: center; font-size: 96px!important; color: #fff; vertical-align: middle!important; font-weight: 700; margin-top: 160px; font-family: 'Century Gothic', Arial, Helvetica, sans-serif!important; }
.loading { top: 0; left: 0; right: 0; position: fixed; width: 100%; z-index: 10;  background: rgba(0, 0, 0, .75); }
.no-border { border: none!important; }
.no-border-bottom { border-bottom: none!important; }
</style>
 <p>&nbsp;</p>
<p>&nbsp;</p>
<div class="learning_center">
   <div class="container">
      <div class="row">
      <div id="expand-all"  title="Click Here To Expand All Sections" ><img src="images/learning_center/learning_center_header.jpg"> </div>
      <div class="loading"><div class="load-text">Loading...</div><div id="text-reveal" class="load-text hide">Please wait...</div></div>
      <script>
				setTimeout(function() {			  		 
					 jQuery("#text-reveal").removeClass("hide");
		  		}, 4000);
      </script>
         <div class="col-sm-10">
         <?php 
				ob_start();				 
			?>        
            <?php require("learning_center/chapter_01.php"); ?>
            <?php require("learning_center/chapter_02.php"); ?>
            <?php require("learning_center/chapter_03.phtml"); ?>
            <?php require("learning_center/chapter_04.html"); ?>
            <?php require("learning_center/chapter_05.phtml"); ?>
            <?php require("learning_center/chapter_06.phtml"); ?>
            <?php require("learning_center/chapter_07.phtml"); ?>
            <?php require("learning_center/chapter_08.phtml"); ?>
            <?php require("learning_center/chapter_09.phtml"); ?>
            <?php require("learning_center/chapter_10.phtml"); ?>
            <?php require("learning_center/chapter_11.phtml"); ?>
            <?php require("learning_center/chapter_12.phtml"); ?>
            <?php require("learning_center/chapter_13.phtml"); ?>
            <?php require("learning_center/chapter_14.phtml"); ?>
            <?php require("learning_center/chapter_15.phtml"); ?>
            <?php require("learning_center/chapter_16.phtml"); ?>
       <?php		 	
		   $buffer = ob_get_contents();
			ob_end_clean();
			$buffer = preg_replace("/\s+/", " ", $buffer);
			$lines = explode("\n", $buffer);
			$new_lines = array();
			
			foreach ($lines as $i => $line) {
				 if(!empty($line))
					  $new_lines[] = trim($line);
			}
			echo implode($new_lines);
      ?>
         </div>
     <!-- scrollspy nav, disabled 5/26/2016 -->
     <!-- <div class="col-sm-2">
               <div class="scrollspy" style="min-height:300px;">
                  <ul class="bs-docs-sidebar nav" data-spy="affix" data-offset-top="122">
                  </ul> 
               </div>          
           </div> -->
      </div>
  </div>
</div>
<script>
// remove border next to tab section
jQuery(".tabcontainer").parent().addClass('no-border');

jQuery('.tabcontainer >.nav-tabs').addClass('no-border-bottom');
// first child tab active
jQuery('.tab-content').find('.tab-pane:nth-child(1)').addClass('active in');



// for loading product description in the tabbed container
function loadProductAttribute(productId, attribute, element) {
	jQuery.ajax({
		type: 'POST',
		dataType: "html",
		url: '<?=Mage::getBaseUrl();?>vnprodcheck/dev/getProductAttribute',
		data: {'product_id': productId, 'attribute':attribute},
		success: function (data) {
			jQuery(element).html(data);		
			}
		});
	}
// for loading product description in the tabbed container
jQuery('.show-product-description').click ( function() {
	var attribute = jQuery(this).data("product-attribute");
	var productId = jQuery(this).data("product-id");	
	var element = jQuery(this).parent().next();
	loadProductAttribute(productId, attribute, element);
	element.slideToggle(300);	
});

jQuery(document).ready(function(){
	 // remove loading page overlay
	 jQuery(".loading").slideUp(300);
	  setTimeout(function() {
		  // removes "display:none" to display the footer (hiding the footer prevents it from jumping around during page load)
			 jQuery(".footer-outer").removeClass("hide");
	  }, 1200);
	
	// collapsing comparison section
	jQuery('.comparison-title').click ( function() {
		var comparison = jQuery(this).next();
		var nextSectionTitle = jQuery(this).parent().next().first();
		jQuery(this).find('.arrow').html(comparison.css('display')=='none' ? "&#x25ba;":"&#x25Bc;");
		comparison.slideToggle( "slow", function() {
			nextSectionTitle.toggleClass('comparison-open');
		});	
	});
	
	// toggle individual hidden sections 
	jQuery('.section_title').click(function() {
		var hiddenSections = jQuery(this).next();
		var theTitle = jQuery(this);			
		if ( hiddenSections.css('display') == "none") {
			theTitle.find('.arrow').html("&#x25ba;");				
			hiddenSections.slideDown( "slow", function() {						
			});
		} else {
			theTitle.find('.arrow').html("&#x25Bc;");
			hiddenSections.slideUp( "slow", function() {						
			});
		}		
	});
	
	// toggle all sections in all chapters on the page	
	jQuery('#expand-all').click(function() {
		var hiddenSections = jQuery('.section_data');			
		var sectionTitlesExpand = jQuery("[id*='expand-all-']");
		var titles = jQuery('.section_title');
		if ( hiddenSections.css('display') == "none") {
			titles.find('.arrow').html("&#x25ba;");
			sectionTitlesExpand.text("Collapse");
			hiddenSections.slideDown( "slow", function() {						
			});
		} else {
			titles.find('.arrow').html("&#x25bc;");
			sectionTitlesExpand.text("Expand");
			hiddenSections.slideUp( "slow", function() {						
			});
		}	
	});
	
	// toggle all sections in each chapter 
	jQuery('.expand-all').click(function() {
		var titles = jQuery(this).parent().next().find('.section_title');
		var hiddenSection = jQuery(this).parent().next().find('.section_data');
		if (hiddenSection.css('display') == "none") {
			titles.find('.arrow').html("&#x25ba;");
			jQuery(this).text("Collapse");
			hiddenSection.slideDown( "slow", function() {
			});	
		} else {
			titles.find('.arrow').html("&#x25bc;");
			jQuery(this).text("Expand");
			hiddenSection.slideUp( "slow", function() {
			});	
		}
	});	
});

	
//for scrollspy list expanded on page load, disabled 5/26/2016 
/* 
jQuery(".learning_center .col-sm-10 h2").first().css({'padding-top':'230px', 'margin-top':'-210px'});
jQuery(".learning_center .col-sm-10 ul").first().find("li").first().css({'padding-top':'262px', 'margin-top':'-260px'});	
jQuery("li#ch_1").find('li:first-child').addClass('active');
*/

// scrollspy navigation menu, disabled 5/26/2016
/*
var chapters = jQuery("ul.chapter");
var chapter_number = 1;
var section_number = 1;
chapters.each(function() {
	var the_chapter = jQuery(this);
	var chapter_heading = the_chapter.prev("h2");
	var title = chapter_heading.text();	
	var clean_title = title.replace("Expand", "");			
	var expand_all = jQuery("[id^='expand-all-']");
	var sections = the_chapter.children().not(expand_all);
	var nav_menu = jQuery("div.scrollspy ul.bs-docs-sidebar");
	var this_scrollspy_li = "";
	chapter_heading.attr('id', "chapter_"+chapter_number);		
	this_scrollspy_li += "<li id=\"ch_"+chapter_number+"\"";
	this_scrollspy_li += ((chapter_number==1)?(' class="active"'):(''));
	this_scrollspy_li += "><a href=\"#chapter_"+chapter_number+"\">"+clean_title+"</a>";
	this_scrollspy_li += "<ul class=\"nav nav-stacked\">";		
	sections.each(function() {
		var the_section = jQuery(this);
		var title = the_section.find("div.section_title").text();			
		the_section.attr('id', "ch_"+chapter_number+"_section_"+section_number+"");			
		this_scrollspy_li += '<li '+((chapter_number==1 && section_number==1)?(' class="active"'):(''))+'>';
		this_scrollspy_li += '<a href="#ch_'+chapter_number+'_section_'+section_number+'">'+title+'</a></li>';
		section_number++;
	});
	this_scrollspy_li += "</ul>";
	this_scrollspy_li += "</li>";		
	nav_menu.append(this_scrollspy_li);
	section_number = 1;
	chapter_number++;
}); 
*/

</script>

<div class="footer-outer hide"><?php require_once("inc/footer.php"); ?></div>