var colors =[ 'red ', 'blue' , 'green', 'maroon', 'crimson', 'teal', 'sienna']
i = 0;

$("#change-color").click(function(){
    $("div").css('backgroundColor', colors[i]);
    i= (i==colors.length-1) ? 0 : (i+1);
});