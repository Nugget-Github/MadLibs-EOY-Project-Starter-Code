let storiesCreated; 
$(".submit").click(function(){
	let username = $(".name-input").val();
	let transport = $(".transport-input").val();
    let adjective = $(".adjective-input").val();
    let number = $(".number-imput").val();
    $(".story").append("One day my friend "+username+" and I decided to take a trip to the beach, so we packed our bags and took the "+transport+" over.It was a "+adjective+" day at the beach! We ended up staying for "+number+" hours!" );
});