var click_cnt = 0;

$( ".main .thmb_list .thmb_cell:nth-child(n+7) ").css("display", "none");

$( ".more_btn" ).click(function() {
  
  if(click_cnt%2 ==0)  {
  		$( ".thmb_list .thmb_cell:nth-child(-n+12)").css("display","block");
  		$( ".main .more_btn .more_txt").css("display", "none");
  		$( ".main .more_btn .fold_txt").css("display", "block");
  }
  if(click_cnt%2 ==1) {
  		$( ".thmb_list .thmb_cell:gt(5)" ).css("display", "none");
  		$( ".main .more_btn .more_txt").css("display","block");
  		$( ".main .more_btn .fold_txt").css("display", "none");
  }
  click_cnt++;
});

$( ".icon_exit").click(function() {
  window.history.back();  
});
