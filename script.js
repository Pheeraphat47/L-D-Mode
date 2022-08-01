// อ้างอิง checkbox
const switchToggle = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById('toggle-icon');
// อ้างอิง navbar
const nav = document.getElementById('nav');
// อ้างอิง รูปภาพ
const image1=document.getElementById('image1');
const image2=document.getElementById('image2');
const image3=document.getElementById('image3');

// สร้าง ฟังก์ชัน เปลี่ยนโหมด

function switchMode(e){
    if(e.target.checked){
        document.documentElement.setAttribute('data-theme','dark');
        darkmode();
        imageSwitchMode('dark');
    }else{
        document.documentElement.setAttribute('data-theme','light');
        lightmode();
        imageSwitchMode('light');
    }
}



// สร้าง function darkmode

function darkmode(){
    toggleIcon.children[0].textContent="DarkMode";
    toggleIcon.children[1].classList.replace('fa-sun','fa-moon');
   
}

function lightmode(){
    toggleIcon.children[0].textContent="LightMode";
    toggleIcon.children[1].classList.replace('fa-moon','fa-sun');
    
}

function imageSwitchMode(mode){
    image1.src=`programming_${mode}.svg`;
    image2.src=`html.css_${mode}.svg`;
    image3.src=`database_${mode}.svg`;
}
switchToggle.addEventListener('change',switchMode);