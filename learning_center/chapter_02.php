<?php	
// desktop, bag							
$collection_of_products_bag = Mage::getModel('catalog/product')->getCollection()
				->addAttributeToSelect('additional_info')
				->addAttributeToSelect('category_id')
				->addAttributeToSelect('heatup_time')
				->addAttributeToSelect('image')
				->addAttributeToSelect('learning_center_featured')
				->addAttributeToSelect('learning_center_sort_order')
				->addAttributeToSelect('name')
				->addAttributeToSelect('product_features')
				->addAttributeToSelect('status')				
				->addAttributeToSelect('vbg_desktop_delivery_method')
				->addAttributeToSelect('vbg_vape_material')
				->addAttributeToSelect('vbg_vape_type')
				->joinField('category_id', 'catalog/category_product', 'category_id', 'product_id = entity_id', null, 'left')
				->addAttributeToFilter('status',array('eq' => Mage_Catalog_Model_Product_Status::STATUS_ENABLED))
				->addAttributeToFilter('category_id', array(array('in' => array('3')))) // vaporizer
				->addFieldToFilter('vbg_vape_type', 31) // desktop
				->addFieldToFilter('vbg_desktop_delivery_method', 34) // forced-air / bag
				->addAttributeToSort('learning_center_sort_order', 'ASC')
				->setPageSize(30)->setCurPage(1);
				
$collection_of_products_whip = Mage::getModel('catalog/product')->getCollection()
				->addAttributeToSelect('additional_info')
				->addAttributeToSelect('category_id')
				->addAttributeToSelect('heatup_time')
				->addAttributeToSelect('image')
				->addAttributeToSelect('learning_center_featured')
				->addAttributeToSelect('learning_center_sort_order')				
				->addAttributeToSelect('name')
				->addAttributeToSelect('product_features')
				->addAttributeToSelect('status')
				->addAttributeToSelect('vbg_desktop_delivery_method')
				->addAttributeToSelect('vbg_vape_material')
				->addAttributeToSelect('vbg_vape_type')
				->joinField('category_id', 'catalog/category_product', 'category_id', 'product_id = entity_id', null, 'left')
				->addAttributeToFilter('status',array('eq' => Mage_Catalog_Model_Product_Status::STATUS_ENABLED))
				->addAttributeToFilter('category_id', array(array('in' => array('3'))))	// vaporizer		
				->addFieldToFilter('vbg_vape_type', 31) // desktop
				->addFieldToFilter('vbg_desktop_delivery_method', 33) // whip
				->addAttributeToSort('learning_center_sort_order', 'ASC')
				->setPageSize(30)->setCurPage(1);
						
$collection_of_products_dual = Mage::getModel('catalog/product')->getCollection()
				->addAttributeToSelect('additional_info')
				->addAttributeToSelect('category_id')
				->addAttributeToSelect('heatup_time')
				->addAttributeToSelect('image')	
				->addAttributeToSelect('learning_center_featured')			
				->addAttributeToSelect('learning_center_sort_order')
				->addAttributeToSelect('name')
				->addAttributeToSelect('product_features')				
				->addAttributeToSelect('status')
				->addAttributeToSelect('vbg_desktop_delivery_method')
				->addAttributeToSelect('vbg_vape_material')
				->addAttributeToSelect('vbg_vape_type')
				->joinField('category_id', 'catalog/category_product', 'category_id', 'product_id = entity_id', null, 'left')
				->addAttributeToFilter('status',array('eq' => Mage_Catalog_Model_Product_Status::STATUS_ENABLED))
				->addAttributeToFilter('category_id', array(array('in' => array('3')))) // vaporizer
				->addFieldToFilter('vbg_vape_type', 31) // desktop
				->addFieldToFilter('vbg_desktop_delivery_method', 35) // dual
				->addAttributeToSort('learning_center_sort_order', 'ASC')
				->setPageSize(30)->setCurPage(1);
				
$collection_of_products_other = Mage::getModel('catalog/product')->getCollection()
				->addAttributeToSelect('additional_info')
				->addAttributeToSelect('category_id')
				->addAttributeToSelect('heatup_time')
				->addAttributeToSelect('image')
				->addAttributeToSelect('learning_center_featured')
				->addAttributeToSelect('learning_center_sort_order')
				->addAttributeToSelect('name')
				->addAttributeToSelect('product_features')
				->addAttributeToSelect('status')				
				->addAttributeToSelect('vbg_desktop_delivery_method')
				->addAttributeToSelect('vbg_vape_material')
				->addAttributeToSelect('vbg_vape_type')
				->joinField('category_id', 'catalog/category_product', 'category_id', 'product_id = entity_id', null, 'left')
				->addAttributeToFilter('status',array('eq' => Mage_Catalog_Model_Product_Status::STATUS_ENABLED))
				->addAttributeToFilter('category_id', array(array('in' => array('3')))) // vaporizer
				->addFieldToFilter('vbg_vape_type', 31) // desktop
				->addFieldToFilter('vbg_desktop_delivery_method', 139) // other
				->addAttributeToSort('learning_center_sort_order', 'ASC')
				->setPageSize(60)->setCurPage(1);				
		
	?>
   
<h2>Chapter 2: Desktop Vaporizers <span id="expand-all-02" class="expand-text expand-all">Expand</span></h2>
<ul class="chapter">
   <li>
      <div class="section_title"><span class="arrow" style="padding-right:20px;">&#x25BC;</span>What is a Desktop Vaporizer?</div>
      <div style="display:none" class="section_data">
      	<p>Desktop vaporizers are designed for home use and plugin to any wall outlet. Since they first appeared on the market over fifteen years ago, desktops have evolved from simple, no-frills box-style devices that utilize whips to draw vapor, to versatile digital units that can include powerful internal fans and allow users to choose between standard whip draw and advanced balloon bag inhalation methods.</p>
      	<p>Most people would agree that desktop units provide the greatest amount of vapor production, as well as the most efficient vaporization experience. Desktop units are perfect for those who will mainly be vaporizing at home. While portable vapes may be more versatile than desktops, they can’t compare when it comes to performance and efficiency.</p>
      </div>
   </li>
   <li>
      <div class="section_title"><span class="arrow" style="padding-right:20px;">&#x25BC;</span>How do Desktop Vaporizers Work?</div>
      <div style="display:none" class="section_data">
      	<p>All desktop vaporizers heat material though convection, making them the preferred units of people who use vaporizers primarily for the health benefits. Depending on the type of desktop, heated air is either drawn manually or propelled automatically from the heating element through the material being vaporized. </p>
      </div>
   </li>
   <li>
      <div class="section_title"><span class="arrow" style="padding-right:20px;">&#x25BC;</span>Different Types of Desktop Vaporizers</div>
      <div style="display:none" class="section_data">
         <p>Desktop vaporizers come in two different styles: <b>whip-style</b> or <b>forced-air</b>. Whip-style vaporizers utilize a piece of medical grade tubing called a "whip" to inhale vapor as it’s drawn from the heating element. Forced air vaporizers are a bit more advanced, and utilize a fan that propels the heat over your herbs and fills a balloon bag or whip attachment with vapor. Some desktop vaporizers are referred to as "dual-function," and are capable of both a forced air and whip-style delivery.</p>
         <h3>Whip Style</h3>
         <p>Whip-style vaporizers utilize a "whip" attachment as their means of drawing vapor. A whip is comprised of three main parts - the wand (glass piece where herb is packed), the tubing (typically medical-grade silicon) and the mouthpiece (which is usually glass). When using a whip-style unit, the user is able to pull hot air over the herbs and create a steady stream of vapor as they inhale. Whip-style devices are very popular, as they’re extremely easy to use and one of the most affordable types of vaporizers.</p>
         <p>Most of these vaporizers utilize a hands free connection, which allows for seamless vapor consumption without having to hold the whip attachment in place. These vapes use a ground glass wand to achieve the hands free connection, and provide a more enjoyable vaporizing experience. In addition to being hands free, ground glass wands also provide airtight seals, which increases overall vapor production and efficiency. </p>
         <p>Although all units come with their own whip attachment, they can be swapped out for others that are compatible. All whips function in pretty much the same way, but tend to vary in things like size, glass thickness, design and color.</p>
         <p>While whip-style units are sometimes viewed as an "old-school" means of vaporization, newer models boast features such as precise temperature control, LCD displays as well as cutting-edge designs. These vapes are ideal for those looking for a simple, less technical way to vaporize.</p>
         <h3>Forced-Air/ Balloon Bag</h3>
         <p>Forced-air vaporizers represent the newest and most effective wave of vaporizers. These advanced devices utilize a forced-air system, meaning an internal fan propels hot air over your herbs, heating them by way of convection heating. This process creates a perfect vapor stream that can be drawn through a whip attachment, or filled into a balloon bag - depending on the type of vaporizer. Many of these units also feature varying fan settings, allowing the user to control the speed of the hot air flow. </p>
         <p>Desktops that utilize forced-air technology are viewed as the most effective and healthy means of vaporization. Forced-air units are able to pump out vapor on their own, whereas standard whip-style vaporizers require the user to inhale (draw) for vapor to be produced. Once herbs are warmed through convection, the units’ internal fan continues to propel the vapor either into a balloon bag or through a whip attachment, allowing for the most seamless vaporization experience possible.</p>
         <p>While all forced-air vaporizers function somewhat similarly, things like size, heat-up time, temperature range, vapor delivery system and overall quality vary from unit to unit. Vapes that use forced-air technology tend to perform better than standard whip-style vaporizers, and are typically considered to be higher quality. While standard whip-style units offer a quick and simple means of dry herb vaporization, they can’t compete with the type of vapor production associated with forced-air units.</p>
         <h3>Dual-Function</h3>
         <p>Desktop vaporizers that feature both whip-draw and forced-air/balloon bag inhalation methods are referred to as Dual-Function units, and are the most versatile types of vaporizers. In addition to offering both whip and balloon bag functionality, many dual-function desktops are equipped with multiple fan speed options, and allow users to use the unit in whip-draw mode with or without the use of the internal fan.</p>
         <h3>Other</h3>
         <p>There are a small number of desktop vaporizers that are a little more difficult to classify. These units can essentially be classified as whip-style units, as they do not have internal fans, they do not utilize traditional silicone whips. Instead, these units come equipped with extended glass draw-stems or stainless steel heating coils which act as whips, since they draw vapor from the heating chamber to the mouthpiece.</p>
      </div>
   </li> 
   <li>
      <div class="section_title"><span class="arrow" style="padding-right:20px;">&#x25BC;</span>Temperature Control</div>
      <div style="display:none" class="section_data">
         <p>Desktop vaporizers feature one of two temperature control methods: <b>Digital</b> or <b>Analog.</b></p>
         <p>Regardless of the type of temperature control a desktop vaporizer employs, monitoring the temperature throughout the process of vaporization is important, as it will help prevent the material from being overheated, which leads to combustion and smoke. The remaining herb should be crispy and a brownish color, NOT ash. If the leftover product is black, burnt or charred, a lower temperature should be used.</p>
         <h3>Digital</h3>
         <p>Desktop units that utilize digital temperature control feature a digital display and +/- buttons which allow you to easily adjust the temperature. Digital desktops are typically more expensive that analog units, and also tend to be more popular among consumers.</p>
         <p>Because digital units are able to be precisely adjusted in single degree increments, they offer more accurate temperature control. Another nice feature of units with digital displays is they usually display two temperatures: the current temp and the set temp. This gives you a better idea of how close the unit is to reaching the set heat level, and when it will be ready to use.</p>
         <h3>Analog</h3>
         <p>Units with analog temperature control either utilize a dial which can be rotated to the preferred heat setting, or a simple on/off switch. Desktop units equipped with analog temperature control typically cost less than those that are digital, as they don’t offer as precise control.</p>
         <p>Some units, like the Volcano Classic, have temperature markings around the dial, which make it easy to find and set to the optimal setting. </p>
         <p>However, most analog desktops, like Da Buddha, Silver Surfer and Vapor Brothers, do not bear any markings, which make it more difficult to control. It’s common for people to refer to settings on a unit that utilizes a dial with no markings like they would to time on a lock. For example, if the maximum temperature is 400°F, and you turn the dial 375°F, you would refer to that setting as 9 O‘clock.</p>
      </div>    
   </li>
   <li>
   <div class="section_title"><span class="arrow" style="padding-right:20px;">&#x25BC;</span><b>Desktop Vaporizers</b></div>
   <div style="display:none" class="section_data">
      <div class="tabcontainer">
         <ul class="nav nav-tabs" id="tabs_2">         
            <li class="active"><a href="#whip" data-toggle="tab">Whip</a></li>
            <li><a href="#bag" data-toggle="tab">Forced Air</a></li>
            <li><a href="#dual" data-toggle="tab">Dual</a></li>   
            <li><a href="#other" data-toggle="tab">Other</a></li>        
         </ul>
         <div class="tab-content">
            <div class="tab-pane active" id="whip">
               <ul class="nav nav-tabs" id="subtabs_2">
              <?php foreach($collection_of_products_whip as $product) {					
                  		if ($product->getLearningCenterFeatured() == 1) { ?>
                  			<li><a href="#<?=$product->getId(); ?>_2" data-toggle="tab"><img src="http://www.vapornation.com/skin/frontend/vapornation/default/images/product_page/star.png" style="display:inline; margin-top:-3px;"><?=str_replace("Vaporizer","",$product->getName()); ?></a></li>
                   	<?php } else { ?>
                     		<li><a href="#<?=$product->getId(); ?>_2" data-toggle="tab"><?=str_replace("Vaporizer","",$product->getName()); ?></a></li>
              		 	<?php } ?>
              <?php } ?>
               </ul>
               <div class="tab-content">
					<?php foreach($collection_of_products_whip as $product) {  
						$product_features = [];
						foreach(explode("\n", trim($product->getProductFeatures())) as $product_feature) {
							$product_features[] = $product_feature;
						}
					?>
                  <div class="tab-pane fade" id="<?=$product->getId();?>_2">
                      <div class="row">
                      <?php if ($product->getLearningCenterFeatured() == 1) { ?>
                      	<img src="http://www.vapornation.com/skin/frontend/vapornation/default/images/product_page/star2.png" style="display:inline-block; float:right; margin: 10px 13px -60px 0px;">
                       <?php } ?>
                        <div class="outer">
                           <div class="inner image"><img src="<?=$product->getImageUrl();?>" style="width:75%;"></div>
                           <div class="inner info">
                              <h3><?=$product->getName();?></h3>
                              <?php
											Mage::register('product', $product);
											$icons = Mage::getSingleton('core/layout')->createBlock('core/template')
																									->setTemplate('vn_productpage/view/header_icons.phtml')
																									->setData($data)
																									->toHtml();
											echo '<div class="header-icons">'.$icons.'</div>';
											Mage::unregister('product');	
										?>        
                              <ul>
                              <?php foreach($product_features as $feature){?>
                                 <li><?=$feature?></li>
                              <?php } ?>
                              </ul>
                              <div class="price">Retail Price: $<?=number_format($product->getSpecialPrice(), 2);?></div>  
                              <div class="view-pdf"><a href="http://www.vapornation.com/prodguide/inc/pdf_generator.php?inline_or_download=I&product_ids=<?=$product->getId();?>">View PDF</a></div>
                              <div class="show-product-description" data-product-id="<?=$product->getId();?>" data-product-attribute="description">Show Product Description</div>
                           </div>
                           <div class="short-description" style="display:none; clear:both;"></div>
                        </div>  
                      </div>
                  </div> 
                  <?php } ?>
               </div>
            </div>
            <div class="tab-pane" id="bag">
               <ul class="nav nav-tabs" id="subtabs_2">
                   <?php foreach($collection_of_products_bag as $product) { 
						 			if ($product->getLearningCenterFeatured() == 1) { ?>
                  			<li><a href="#<?=$product->getId(); ?>_2" data-toggle="tab"><img src="http://www.vapornation.com/skin/frontend/vapornation/default/images/product_page/star.png" style="display:inline; margin-top:-3px;"><?=str_replace("Vaporizer","",$product->getName()); ?></a></li>
                   	<?php } else { ?>
                     		<li><a href="#<?=$product->getId(); ?>_2" data-toggle="tab"><?=str_replace("Vaporizer","",$product->getName()); ?></a></li>
              		 	<?php } ?>
                   <?php } ?>
               </ul>
               <div class="tab-content">
              		<?php foreach($collection_of_products_bag as $product) {  
							$product_features = [];
							foreach(explode("\n", trim($product->getProductFeatures())) as $product_feature) {
								$product_features[] = $product_feature;
							}
						?>
                  <div class="tab-pane fade" id="<?=$product->getId();?>_2">
                      <div class="row">
                      <?php if ($product->getLearningCenterFeatured() == 1) { ?>
                      	<img src="http://www.vapornation.com/skin/frontend/vapornation/default/images/product_page/star2.png" style="display:inline-block; float:right; margin: 10px 13px -60px 0px;">
                       <?php } ?>
                        <div class="outer">
                           <div class="inner image"><img src="<?=$product->getImageUrl();?>" style="width:75%;"></div>
                           <div class="inner info">
                              <h3><?=$product->getName();?></h3>
                              <?php
											Mage::register('product', $product);
											$icons = Mage::getSingleton('core/layout')->createBlock('core/template')
																									->setTemplate('vn_productpage/view/header_icons.phtml')
																									->setData($data)
																									->toHtml();
											echo '<div class="header-icons">'.$icons.'</div>';
											Mage::unregister('product');	
										?>             
                              <ul>
                              <?php foreach($product_features as $feature){?>
                                 <li><?=$feature?></li>
                              <?php } ?>
                              </ul>
                              <div class="price">Retail Price: $<?=number_format($product->getSpecialPrice(), 2);?></div>
                              <div class="view-pdf"><a href="http://www.vapornation.com/prodguide/inc/pdf_generator.php?inline_or_download=I&product_ids=<?=$product->getId();?>">View PDF</a></div>  
                              <div class="show-product-description" data-product-id="<?=$product->getId();?>" data-product-attribute="description">Show Product Description</div>
                           </div>
                           <div class="short-description" style="display:none; clear:both;"></div>
                        </div>  
                      </div>
                  </div> 
                  <?php } ?>       
               </div>
            </div>
            <div class="tab-pane" id="dual">
               <ul class="nav nav-tabs" id="subtabs_2">
                   <?php foreach($collection_of_products_dual as $product) {
                  			if ($product->getLearningCenterFeatured() == 1) { ?>
                  			<li><a href="#<?=$product->getId(); ?>_2" data-toggle="tab"><img src="http://www.vapornation.com/skin/frontend/vapornation/default/images/product_page/star.png" style="display:inline; margin-top:-3px;"><?=str_replace("Vaporizer","",$product->getName()); ?></a></li>
                   	<?php } else { ?>
                     		<li><a href="#<?=$product->getId(); ?>_2" data-toggle="tab"><?=str_replace("Vaporizer","",$product->getName()); ?></a></li>
              		 	<?php } ?>
              		 <?php } ?>
               </ul>
               <div class="tab-content">
                  <?php foreach($collection_of_products_dual as $product) {  
							$product_features = [];
							foreach(explode("\n", trim($product->getProductFeatures())) as $product_feature) {
								$product_features[] = $product_feature;
							}
						?>
                  <div class="tab-pane fade" id="<?=$product->getId();?>_2">
                      <div class="row">
                      <?php if ($product->getLearningCenterFeatured() == 1) { ?>
                      	<img src="http://www.vapornation.com/skin/frontend/vapornation/default/images/product_page/star2.png" style="display:inline-block; float:right; margin: 10px 13px -60px 0px;">
                       <?php } ?>
                        <div class="outer">
                           <div class="inner image"><img src="<?=$product->getImageUrl();?>" style="width:75%;"></div>
                           <div class="inner info">
                              <h3><?=$product->getName();?></h3>
                              <?php
											Mage::register('product', $product);
											$icons = Mage::getSingleton('core/layout')->createBlock('core/template')
																									->setTemplate('vn_productpage/view/header_icons.phtml')
																									->setData($data)
																									->toHtml();
											echo '<div class="header-icons">'.$icons.'</div>';
											Mage::unregister('product');	
										?>             
                              <ul>
                              <?php foreach($product_features as $feature){?>
                                 <li><?=$feature?></li>
                              <?php } ?>
                              </ul>
                              <div class="price">Retail Price: $<?=number_format($product->getSpecialPrice(), 2);?></div>
                              <div class="view-pdf"><a href="http://www.vapornation.com/prodguide/inc/pdf_generator.php?inline_or_download=I&product_ids=<?=$product->getId();?>">View PDF</a></div>  
                              <div class="show-product-description" data-product-id="<?=$product->getId();?>" data-product-attribute="description">Show Product Description</div>
                           </div>
                           <div class="short-description" style="display:none; clear:both;"></div>
                        </div>
                          
                      </div>
                  </div> 
                  
                  <?php } ?>  
               </div>
            </div>
            <div class="tab-pane" id="other">
               <ul class="nav nav-tabs" id="subtabs_2">
                   <?php foreach($collection_of_products_other as $product) { 
						 			if ($product->getLearningCenterFeatured() == 1) { ?>
                  			<li><a href="#<?=$product->getId(); ?>_2" data-toggle="tab"><img src="http://www.vapornation.com/skin/frontend/vapornation/default/images/product_page/star.png" style="display:inline; margin-top:-3px;"><?=str_replace("Vaporizer","",$product->getName()); ?></a></li>
                   	<?php } else { ?>
                     		<li><a href="#<?=$product->getId(); ?>_2" data-toggle="tab"><?=str_replace("Vaporizer","",$product->getName()); ?></a></li>
              		 	<?php } ?>
              		 <?php } ?>
               </ul>
               <div class="tab-content">
                  <?php foreach($collection_of_products_other as $product) {  
							$product_features = [];
							foreach(explode("\n", trim($product->getProductFeatures())) as $product_feature) {
								$product_features[] = $product_feature;
							}
						?>
                  <div class="tab-pane fade" id="<?=$product->getId();?>_2">
                      <div class="row">
                      <?php if ($product->getLearningCenterFeatured() == 1) { ?>
                      	<img src="http://www.vapornation.com/skin/frontend/vapornation/default/images/product_page/star2.png" style="display:inline-block; float:right; margin: 10px 13px -60px 0px;">
                       <?php } ?>
                        <div class="outer">
                           <div class="inner image"><img src="<?=$product->getImageUrl();?>" style="width:75%;"></div>
                           <div class="inner info">
                              <h3><?=$product->getName();?></h3>
                              <?php
											Mage::register('product', $product);
											$icons = Mage::getSingleton('core/layout')->createBlock('core/template')
																									->setTemplate('vn_productpage/view/header_icons.phtml')
																									->setData($data)
																									->toHtml();
											echo '<div class="header-icons">'.$icons.'</div>';
											Mage::unregister('product');	
										?>             
                              <ul>
                              <?php foreach($product_features as $feature){?>
                                 <li><?=$feature?></li>
                              <?php } ?>
                              </ul>
                              <div class="price">Retail Price: $<?=number_format($product->getSpecialPrice(), 2);?></div>
                              <div class="view-pdf"><a href="http://www.vapornation.com/prodguide/inc/pdf_generator.php?inline_or_download=I&product_ids=<?=$product->getId();?>">View PDF</a></div>  
                              <div class="show-product-description" data-product-id="<?=$product->getId();?>" data-product-attribute="description">Show Product Description</div>
                           </div>
                           <div class="short-description" style="display:none; clear:both;"></div>
                        </div>  
                      </div>
                  </div> 
                  <?php } ?>  
               </div>
            </div>
         </div>
      </div>
   </div>
   <div id="back-to-tabs" onclick="showTabs()" style="display:none;">Click here to go back to tabs</div>
   <div id="product-data" style="display:none;"></div>
	</li>    
   <li>
    <div class="section_title"><span class="arrow" style="padding-right:20px;">&#x25BC;</span><b>Comparison of Desktop Vaporizers</b></div>
      <div style="display:none" class="section_data comparison-wrapper">
      <div><img src="<?=$green_check;?>" style="width:25px; padding:0px 4px 4px 0px;"> = Recommended</div>
      <div><img src="<?=$red_x;?>" style="width:25px; padding:0px 4px 4px 0px;"> = Discouraged</div>
         <div class="comparison-section">
            <h3 class="comparison-title"><span class="arrow" style="padding-right:20px;">&#x25BC;</span>Volcano Classic vs Volcano Digital</h3>
            <div class="comparison-content">
                 <div class="column">
                 
                     <h3 class="header"><img src="<?=$green_check;?>" style="width:25px; padding:0px 4px 4px 0px;">Volcano Classic</h3>
                     <img src="<?=$base_url;?>catalog/product<?=$volc_classic;?>" style="margin-bottom:6px; width:259px;">
                     
                     <ul>
                        <li>Analog Dial Temperature Control</li>
                        <li>Temperature Range: 266°- 446°F</li>
                        <li>More Affordable</li>
                     </ul>           
                 </div>
                 <div class="column similarities">
                     <h3>Similarities</h3>
                     <ul>
                        <li>Forced-Air</li>
                        <li>Manufactured by Storz & Bickel</li>
                        <li> Size & Design</li>
                     </ul>
                 </div>
                 <div class="column">
                     <h3><img src="<?=$green_check;?>" style="width:25px; padding:0px 4px 4px 0px;">Volcano Digital</h3>
                     <img src="<?=$base_url;?>catalog/product<?=$volc_digital;?>" style="width:265px;">
                     <ul>
                        <li>Precise Digital Temperature Control</li>
                        <li>Temperature Range 104°- 446°F</li>
                        <li>More Expensive</li>
                     </ul>
                 </div>
                 <div>
                 		<div class="bottom-line-header">The Bottom Line:</div><br>
							<div class="bottom-line">Both the Classic and Digital Volcano are considered top-tier vaporizers - so it really comes down to the customers temperature control preference.</div>
                 </div>
             </div>
          </div>
          
          <div class="comparison-section">
             <h3 class="comparison-title"><span class="arrow" style="padding-right:20px;">&#x25BC;</span>Da Buddha vs Silver Surfer</h3>
             <div class="comparison-content">
                 <div class="column">
                     <h3><img src="<?=$green_check;?>" style="width:25px; padding:0px 4px 4px 0px;">Da Buddha</h3>
                     <img src="<?=$base_url;?>catalog/product<?=$da_buddha;?>" style="margin-bottom:11px; width:265px;">
                     <ul>
                        <li>Ground Glass Connection</li>
                        <li>Whip Connection (Straight)</li>
                        <li>Standard Glass Components</li>
                        <li>Limited Color Options (Black, Silver)</li>
                        <li>More Affordable</li>
                     </ul>           
                 </div>
                 <div class="column similarities">
                     <h3>Similarities</h3>
                     <ul>
                        <li>Whip-Style</li>
                        <li>Analog Dial Temperature Control</li>
                        <li>Hands-Free Ground Glass Connection</li>
                        <li>Manufactured by 7th Floor</li>
                        <li>Size & Design</li>
                     </ul>
                 </div>
                 <div class="column">
                     <h3><img src="<?=$green_check;?>" style="width:25px; padding:0px 4px 4px 0px;">Silver Surfer</h3>
                     <img src="<?=$base_url;?>catalog/product<?=$silver_surfer;?>" style="margin-top:9px; width:265px;">
                     <ul>
                        <li>Standard or Ground Glass Connection Options</li>
                        <li>Whip Connection (90°)</li>
                        <li>Custom Colored Glass Components</li>
                        <li>Multiple Color Options</li>
                        <li>More Expensive</li>
                     </ul>
                 </div>
                 <div>
                    <div class="bottom-line-header">The Bottom Line:</div>
                    <div class="bottom-line">While similar in design, the Silver Surfer is a higher-end unit which features better build quality as well as custom glass components. Da Buddha is a more affordable option.</div>
                 </div>
             </div>
          </div>
          
          <div class="comparison-section">
             <h3 class="comparison-title"><span class="arrow" style="padding-right:20px;">&#x25BC;</span>Arizer Extreme Q vs Arizer V-Tower</h3>
             <div class="comparison-content">
                 <div class="column">
                     <h3><img src="<?=$green_check;?>" style="width:25px; padding:0px 4px 4px 0px;">Arizer V-Tower</h3>
                     <img src="<?=$base_url;?>catalog/product<?=$v_tower;?>" style="width:265px;">
                     <ul>
                        <li>Whip-Style Only</li>
                        <li>No Internal Fan</li>
                        <li>No Remote Control Capability</li>
                        <li>More Affordable</li>
                     </ul>           
                 </div>
                 <div class="column similarities">
                     <h3>Similarities</h3>
                     <ul>
                        <li>Whip Capability</li>
                        <li>Precise Digital Temperature Control</li>
                        <li>Manufactured by Arizer</li>
                        <li>Size & Design</li>
                        <li>Lifetimw Warranty</li>
                     </ul>
                 </div>
                 <div class="column">
                     <h3><img src="<?=$green_check;?>" style="width:25px; padding:0px 4px 4px 0px;">Arizer Extreme Q</h3>
                     <img src="http://www.vapornation.com/media/catalog/product/cache/5/image/500x500/9df78eab33525d08d6e5fb8d27136e95/a/r/arizer-extreme-q-vaporizer.jpg" style="width:234px; margin:5px; margin-bottom:25px;">
                    <ul>
                        <li>Dual-Function (Balloon/Whip)</li>
                        <li>Internal Fan w/ Multiple Speed Settings (Forced-Air)</li>
                        <li>Remote Control Capability</li>
                        <li>More Expensive</li>
                     </ul>
                 </div>
                 <div>
                 		<div class="bottom-line-header">The Bottom Line:</div>
                     <div class="bottom-line">While almost identical in appearance, the Extreme Q is a forced-air dual-function unit (balloon bags/whip), and is more versatile than the V-Tower, which only offers whip-draw capability.</div>
                 </div>
             </div>
          </div>
          
          <div class="comparison-section">
             <h3 class="comparison-title"><span class="arrow" style="padding-right:20px;">&#x25BC;</span>Arizer Extreme Q vs Vapir Rise</h3>
             <div class="comparison-content">
                 <div class="column">
                     <h3><img src="<?=$red_x;?>" style="width:25px; padding:0px 4px 4px 0px;">Arizer Extreme Q</h3>
                     <img src="http://www.vapornation.com/media/catalog/product/cache/5/image/500x500/9df78eab33525d08d6e5fb8d27136e95/a/r/arizer-extreme-q-vaporizer.jpg" style="width:244px; margin:11px 5px 22px 5px;">
                     <ul>
                        <li>Fan Always On</li>
                        <li>No Multi-User Adapter</li>
                        <li>Manufactured by Arizer</li>
                     </ul>           
                 </div>
                 <div class="column similarities">
                     <h3>Similarities</h3>
                     <ul>
                        <li>Dual-Function Forced-Air (Balloon/Whip)</li>
                        <li>Precise Digital Temperature Control</li>
                        <li>Multiple Fan Speed Settings</li>
                        <li>Size</li>
                     </ul>
                 </div>
                 <div class="column">
                     <h3><img src="<?=$green_check;?>" style="width:25px; padding:0px 4px 4px 0px;">Vapir Rise</h3>
                     <img src="<?=$base_url;?>catalog/product<?=$vapir_rise;?>" style="margin-bottom:12px; width:265px;">
                     <ul>
                        <li>'No Fan' Mode Option</li>
                        <li>Includes Multi-User Adapter (Hookah Experience)</li>
                        <li>Manufactured by Vapir</li>
                     </ul>
                 </div>
                 <div>
                 		<div class="bottom-line-header">The Bottom Line:</div>
                     <div class="bottom-line">The Extreme Q and Vapir Rise are both forced-air dual-function units, but the Vapir Rise features a more modern design, better overall functionality and a more user-friendly interface.</div>
                 </div>   
             </div>
          </div>
          
          <div class="comparison-section">
             <h3 class="comparison-title"><span class="arrow" style="padding-right:20px;">&#x25BC;</span>Vaporite Solo vs Vapor Brothers</h3>
             <div class="comparison-content">
                 <div class="column">
                     <h3><img src="<?=$green_check;?>" style="width:25px; padding:0px 4px 4px 0px;">Vaporite Solo</h3>
                     <img src="http://www.vapornation.com/media/catalog/product/cache/5/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/v/a/vaporite-solo-digital-vaporizer.jpg" style="width:265px;">
                     <ul>
                        <li>Precise Digital Temperature Control</li>
                        <li>Remote Control Capability</li>
                        <li>Manufactured by Vaporite</li>
                     </ul>           
                 </div>
                 <div class="column similarities">
                     <h3>Similarities</h3>
                     <ul>
                        <li>Whip-Style</li>
                        <li>Hands-Free Ground Glass Connection</li>
                        <li>Size & Design</li>
                     </ul>
                 </div>
                 <div class="column">
                     <h3><img src="<?=$red_x;?>" style="width:25px; padding:0px 4px 4px 0px;">Vapor Brothers</h3>
                     <img src="http://www.vapornation.com/media/catalog/product/cache/5/image/9df78eab33525d08d6e5fb8d27136e95/v/a/vapor-brothers-natural-watermarked_1.jpg" style="width:265px;">
                     <ul>
                        <li>Analog Dial Temperature Control</li>
                        <li>No Remote Control Capability</li>
                        <li>Manufactured by Vapor Brothers</li>
                     </ul>
                 </div>
                 <div>
                 		<div class="bottom-line-header">The Bottom Line:</div>
                     <div class="bottom-line">At  a fraction of the cost of the Vapor Brothers unit, the Vaporite Solo offers more precise temperature control as well as remote control capability.</div>
                 </div>
             </div>
          </div>
      </div>    
   </li>
   <li>
   	<div class="quiz-link-outer"><a href="http://www.vapornation.com/prodguide/learning-center/quiz?chapter=2" class="quiz-link">Click Here to Take the Chapter Two Quiz</a></div>

   </li>
</ul>

