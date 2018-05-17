function sendmessage(title,content,userId)
{
	var now = Date.now();
	var appKey = $.sha1("A6912917682786" + "UZ" + "FCF3B79D-848C-CA30-2AC2-7878160E63F6" + "UZ" + now) + "." + now;

	function push() 
	{
		api.ajax({
			url : 'https://p.apicloud.com/api/push/message',
            method : "post",
            headers : {
                "X-APICloud-AppId" : "A6912917682786",
                "X-APICloud-AppKey" : appKey
            },
            dataType : "json",
            data : {
                "values" : {
                    "title" : title,
                    "content" : content,
                    "type" : 2, //– 消息类型，1:消息 2:通知
                    "platform" : 0, //0:全部平台，1：ios, 2：android
                //    "groupName" : "department", //推送组名，多个组用英文逗号隔开.默认:全部组。eg.group1,group2 .
                    "userIds" : userId //推送用户id, 多个用户用英文逗号分隔，eg. user1,user2。
                }
            }
        }, function(ret, err) 
        {
            //coding...
            alert(JSON.stringify(ret))
            alert(JSON.stringify(err))
        });
	}
}