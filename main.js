function preload()
{
}
function setup()
{
    canvas=createCanvas(650,490);
     canvas.position(110,300);
     video=createCapture(VIDEO);
     video.hide();
     tint_color="";
}
function draw()
{
    image(video,0,0,650,490);
    tint(tint_color);
}
function take_snapshot()
{
    save('student_name.png');
}
function apply_filter()
{
    tint_color=document.getElementById("color_name").value;
}