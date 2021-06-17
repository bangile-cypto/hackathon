function openChat(){
    document.getelementById('chatbox').style.display='block';
    $('.btn-chat').hide();
}
function closeChat(){
    document.grtElementById('chatbox').style.display='none';
    $('.btn-chat').show();
}
$('form').submit(function(){
    var text=$(this).find("textarea[name='msg']").val();
    alert(text);
});


