let photo1 = document.getElementById('imgPhoto1');
let photo2 = document.getElementById('imgPhoto2');
let photo3 = document.getElementById('imgPhoto3');
let photo4 = document.getElementById('imgPhoto4');
let photo5 = document.getElementById('imgPhoto5');
let photo6 = document.getElementById('imgPhoto6');
let photo7 = document.getElementById('imgPhoto7');
let photo8 = document.getElementById('imgPhoto8');
let file1 = document.getElementById('flImage1');
let file2 = document.getElementById('flImage2');
let file3 = document.getElementById('flImage3');
let file4 = document.getElementById('flImage4');
let file5 = document.getElementById('flImage5');
let file6 = document.getElementById('flImage6');
let file7 = document.getElementById('flImage7');
let file8 = document.getElementById('flImage8');

photo1.addEventListener('click', () => { file1.click(); });
file1.addEventListener('change', () => {
    if (file1.files.length <= 0) {
        return;
    }
    let reader = new FileReader();
    reader.onload = () => {
        photo1.src = reader.result;
    }
    reader.readAsDataURL(file1.files[0]);
    document.getElementById('imgPhoto1').style.border = 'none';
    document.getElementById('imgPhoto2').style.display = 'inline';
    document.getElementById("ButtonX1").style.display = 'inline';
    let Paragrafo1 = document.getElementById('fotodacapa');
    Paragrafo1.parentNode.removeChild(Paragrafo1);
});

photo2.addEventListener('click', () => { file2.click(); });
file2.addEventListener('change', () => {
    if (file2.files.length <= 0) {
        return;
    }
    let reader = new FileReader();
    reader.onload = () => {
        photo2.src = reader.result;
    }
    reader.readAsDataURL(file2.files[0]);
    document.getElementById('imgPhoto2').style.border = 'none';
    document.getElementById('imgPhoto3').style.display = 'inline';
    document.getElementById("ButtonX2").style.display = 'inline';
});

photo3.addEventListener('click', () => { file3.click(); });
file3.addEventListener('change', () => {
    if (file3.files.length <= 0) {
        return;
    }
    let reader = new FileReader();
    reader.onload = () => {
        photo3.src = reader.result;
    }
    reader.readAsDataURL(file3.files[0]);
    document.getElementById('imgPhoto3').style.border = 'none';
    document.getElementById('imgPhoto4').style.display = 'inline';
    document.getElementById("ButtonX3").style.display = 'inline';            
});

photo4.addEventListener('click', () => { file4.click(); });
file4.addEventListener('change', () => {
    if (file4.files.length <= 0) {
        return;
    }
    let reader = new FileReader();
    reader.onload = () => {
        photo4.src = reader.result;
    }
    reader.readAsDataURL(file4.files[0]);
    document.getElementById('imgPhoto4').style.border = 'none';
    document.getElementById('imgPhoto5').style.display = 'inline';
    document.getElementById("ButtonX4").style.display = 'inline';
});

photo5.addEventListener('click', () => { file5.click(); });
file5.addEventListener('change', () => {
    if (file5.files.length <= 0) {
        return;
    }
    let reader = new FileReader();
    reader.onload = () => {
        photo5.src = reader.result;
    }
    reader.readAsDataURL(file5.files[0]);
    document.getElementById('imgPhoto5').style.border = 'none';
    document.getElementById('imgPhoto6').style.display = 'inline';
    document.getElementById("ButtonX5").style.display = 'inline';
});

photo6.addEventListener('click', () => { file6.click(); });
file6.addEventListener('change', () => {
    if (file6.files.length <= 0) {
        return;
    }
    let reader = new FileReader();
    reader.onload = () => {
        photo6.src = reader.result;
    }
    reader.readAsDataURL(file6.files[0]);
    document.getElementById('imgPhoto6').style.border = 'none';
    document.getElementById('imgPhoto7').style.display = 'inline';
    document.getElementById("ButtonX6").style.display = 'inline';            
});

photo7.addEventListener('click', () => { file7.click(); });
file7.addEventListener('change', () => {
    if (file7.files.length <= 0) {
        return;
    }
    let reader = new FileReader();
    reader.onload = () => {
        photo7.src = reader.result;
    }
    reader.readAsDataURL(file7.files[0]);
    document.getElementById('imgPhoto7').style.border = 'none';
    document.getElementById('imgPhoto8').style.display = 'inline';
    document.getElementById("ButtonX7").style.display = 'inline';            
});

photo8.addEventListener('click', () => { file8.click(); });
file8.addEventListener('change', () => {
    if (file8.files.length <= 0) {
        return;
    }
    let reader = new FileReader();
    reader.onload = () => {
        photo8.src = reader.result;
    }
    reader.readAsDataURL(file8.files[0]);
    document.getElementById('imgPhoto8').style.border = 'none';
    document.getElementById("ButtonX8").style.display = 'inline';            
});


//Botão de Excluir Foto
var btn1 = document.getElementById("ButtonX1").addEventListener("click", buttonX1);        
function buttonX1(){
    var btn1 = document.getElementById("ButtonX1")
    let photo1 = document.getElementById('imgPhoto1');
    let file1 = document.getElementById('flImage1');
    btn1.parentNode.removeChild(btn1);
    file1.parentNode.removeChild(file1);
    photo1.parentNode.removeChild(photo1);
} 

var btn2 = document.getElementById("ButtonX2").addEventListener("click", buttonX2);        
function buttonX2(){
    var btn2 = document.getElementById("ButtonX2")
    let photo2 = document.getElementById('imgPhoto2');
    let file2 = document.getElementById('flImage2');
    btn2.parentNode.removeChild(btn2);
    file2.parentNode.removeChild(file2);
    photo2.parentNode.removeChild(photo2);
} 

var btn3 = document.getElementById("ButtonX3").addEventListener("click", buttonX3);        
function buttonX3(){
    var btn3 = document.getElementById("ButtonX3")
    let photo3 = document.getElementById('imgPhoto3');
    let file3 = document.getElementById('flImage3');
    btn3.parentNode.removeChild(btn3);
    file3.parentNode.removeChild(file3);
    photo3.parentNode.removeChild(photo3);
} 

var btn4 = document.getElementById("ButtonX4").addEventListener("click", buttonX4);        
function buttonX4(){
    var btn4 = document.getElementById("ButtonX4")
    let photo4 = document.getElementById('imgPhoto4');
    let file4 = document.getElementById('flImage4');
    btn4.parentNode.removeChild(btn4);
    file4.parentNode.removeChild(file4);
    photo4.parentNode.removeChild(photo4);
} 

var btn5 = document.getElementById("ButtonX5").addEventListener("click", buttonX5);        
function buttonX5(){
    var btn5 = document.getElementById("ButtonX5")
    let photo5 = document.getElementById('imgPhoto5');
    let file5 = document.getElementById('flImage5');
    btn5.parentNode.removeChild(btn5);
    file5.parentNode.removeChild(file5);
    photo5.parentNode.removeChild(photo5);
} 

var btn6 = document.getElementById("ButtonX6").addEventListener("click", buttonX6);        
function buttonX6(){
    var btn6 = document.getElementById("ButtonX6")
    let photo6 = document.getElementById('imgPhoto6');
    let file6 = document.getElementById('flImage6');
    btn6.parentNode.removeChild(btn6);
    file6.parentNode.removeChild(file6);
    photo6.parentNode.removeChild(photo6);
} 

var btn7 = document.getElementById("ButtonX7").addEventListener("click", buttonX7);        
function buttonX7(){
    var btn7 = document.getElementById("ButtonX7")
    let photo7 = document.getElementById('imgPhoto7');
    let file7 = document.getElementById('flImage7');
    btn7.parentNode.removeChild(btn7);
    file7.parentNode.removeChild(file7);
    photo7.parentNode.removeChild(photo7);
} 

var btn8 = document.getElementById("ButtonX8").addEventListener("click", buttonX8);        
function buttonX8(){
    var btn8 = document.getElementById("ButtonX8")
    let photo8 = document.getElementById('imgPhoto8');
    let file8 = document.getElementById('flImage8');
    btn8.parentNode.removeChild(btn8);
    file8.parentNode.removeChild(file8);
    photo8.parentNode.removeChild(photo8);
} 
