//https://drive.google.com/file/d/1AFZe05dVoyuZ6HPpWtIPhm5RF1_1Km1k/view?usp=sharing
prediction1=""
prediction2=""
Webcam.set({
height: 400,
width: 360,
image_format: "png",
png_quality: 90
})
Webcam.attach("#cam")
function Capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("snap").innerHTML="<img id= 'snapshot'src='"+data_uri+"'>"
    })

}
classiffier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/o8cYkgrRJ/model.json", Model_Loaded)
function Model_Loaded(){
    console.log("Model Loaded Successfully!")
}