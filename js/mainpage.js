
//mainpage button
/*function mainPageIncoPress(){
	document.getElementById('mainPageIcon').src = "images/main/file_tital_meicon_press.png";
}
*/



addEventListener('load',function(){
	setTimeout(function(){window.scrollTo(0,1); },100);
});


function loadMainPage()
{
	self.location.href="mainpage.html";
}


//mynt button
function myNtIncoPress(){
	document.getElementById('myNtIcon').src = "images/main/file_tital_meicon_press.png";
}

function myNtIconMouseOut(){
	document.getElementById('myNtIcon').src = "images/main/file_tital_meicon.png";
}

function loadMyNtPage()
{
	if(window.localStorage)
	{	
		if(window.localStorage.getItem('NT_user_name') && window.localStorage.getItem('NT_user_id')){
			
			self.location.href="myntpage.html";
			
		}else{
			window.localStorage.setItem("current_action","loadMyNtPage");
			self.location.href="login.html";
			
		}
	}else{
	}
	
}


//moreinfo button
function moreInfoIncoPress(){
	document.getElementById('moreInfoIcon').src = "images/main/file_tital_moreicon_press.png";
}

function moreInfoIncoMouseOut(){
	document.getElementById('moreInfoIcon').src = "images/main/file_tital_moreicon.png";
}

function loadMoreInfoPage()
{

	if(window.localStorage)
	{	
		if(window.localStorage.getItem('NT_user_name') && window.localStorage.getItem('NT_user_id')){
			
			self.location.href="moreinfopage.html";
			
		}else{
			window.localStorage.setItem("current_action","loadMoreInfoPage");
			self.location.href="login.html";
			
		}
	}else{
	}
	

}


//get activity list form database
var postData = {
	'method': 'getActivityList',
};
$.ajax({
	url : 'server/server.php', 
	data : postData,
	type : 'POST', 
	dataType : 'json',
	cache : false
	}).done(function(data) {
  		activityList = data.activityList;  // activity name list
		activityIdList = data.activityIdList;
		flagList = data.flagList;          // falg list
		activityAddressList = data.activityAddressList;  //activity address list
		activityTimeList = data.activityTimeList;        //activity time list
		currentPersonList = data.currentPersonList;
		mainBannerList = data.mainBannerList;
		myntBannerList = data.myntBannerList;
		mainNewBannerList = data.mainNewBanner;
		
		for( i=0; i< activityList.length ; i++){
						
			var newTr = document.getElementById('activityList').insertRow();
			var newTd1 = newTr.insertCell();
			if( flagList[i] == 0){
				newTd1.innerHTML='<img src="'+ mainNewBannerList[i]  +'"  onClick="loadActivityInfo(\''+activityList[i]+'\',\''+ activityIdList[i]+'\')"/>';
			}else{
				newTd1.innerHTML='<img src="'+ mainBannerList[i]  +'"  onClick="loadActivityInfo(\''+activityList[i]+'\',\''+ activityIdList[i]+'\')"/>';
			}
		}
						
			if(activityList.length == 1)
			{
				var newTr = document.getElementById('activityList').insertRow();
				var newTd1 = newTr.insertCell();
				newTd1.innerHTML='<img src="images/main/ntbanner.png" />';	
								
			}
			
	})
	.fail(function(data, txt) {
		
	})
	.always(function(data) {

	});

//load activity infomation page	
function loadActivityInfo(activity_name,activity_id){
	if(window.localStorage)
	{
		window.localStorage.setItem('current_activity_name',activity_name);
		window.localStorage.setItem('current_activity_id',activity_id);
	}
	self.location.href="activityinfo.html";
}

function loadLBS(activityAddress){	
	self.location.href="BaiduLBS.html";
}