var activity_name;
var activity_id;
var member_id;
var comment;
var member_user_name;

if(window.localStorage)
{
	activity_name = window.localStorage.getItem("current_activity_name");
	activity_id = window.localStorage.getItem("current_activity_id");
}

function backToActivityInfo(){
	self.location.href="activityinfo.html";
}


	
	var postData = {
		'method': 'getMemberStatus',
	};
	$.ajax({
		url : '/server/server.php', 
		data : postData,
		type : 'GET', 
		dataType : 'json',
		cache : false
		}).done(function(data) {
						
			user_name_list = data.member_name_list;
			company_list = data.company_list;
			position_list = data.position_list;
			sex_list = data.sex_list;
			
			for(i=0; i<user_name_list.length; i++){
				var newTr = document.getElementById('commentList').insertRow();
				var newTd = newTr.insertCell();
				if(sex_list[i] == "male"){
					newTd.innerHTML = '<div><img src="images/comment/comment_article02_610-320.png" width="365" id="big_background" /><img src="images/comment/comment_avatarkuang98-98.png" width="107" height="75" id="icon_border" /><img src="images/more/fillin_avatar126-126.png" width="77" height="75" id="person_icon" /><div id="comment_info"><p id="username" name="username">'+user_name_list[i]+'</p><p id="comment">'+company_list[i]+'</p></div></div>';
					
				}else{					
					newTd.innerHTML = '<div><img src="images/comment/comment_article02_610-320.png" width="365" id="big_background" /><img src="images/comment/comment_avatarkuang98-98.png" width="107" height="75" id="icon_border" /><img src="images/more/fillin_avatar_woman126-126.png" width="77" height="75" id="person_icon" /><div id="comment_info"><p id="username" name="username">'+user_name_list[i]+'</p><p id="comment">'+company_list[i]+'</p></div></div>';
				}
				
			}
			
		})
		.fail(function(data, txt) {
		})
		.always(function(data) {
			
		});


setTimeout('window.location.reload()',1000); //1s refresh 