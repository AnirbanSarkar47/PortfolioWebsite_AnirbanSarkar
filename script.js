var tl = gsap.timeline()
tl.from("#nav_logo>img,#name h3, #nav_option li",{
    y:-100,
    duration:1,
    opacity: 0,
    stagger:0.3

})
tl.from(".container, .animation, #description p, #svg_prop svg",{
    y:100,
    duration:0.6,
    // delay:0.6,
    opacity:0,
    stagger:0.3

})
tl.from("#pic_page1",{
    
   
    opacity:0,
    duration:2,
    
    // delay: 0.6

})













// page 2


gsap.from("#page2 #left_p2 #about_pic",{
    x:250,
    opacity:0,
    duration:1.5,
    scrollTrigger:{
        trigger:"#page2 #left_p2 #about_pic",
        start:"50% 50%",
        end: "70% 50%",
        // scrub:2,
        
        // markers:true
    }


})
gsap.from("#page2 #left_p2 #about_pic img",{
    x:-200,
    duration:1.5,
    opacity:0,
    delay:1.3,
    scrollTrigger:{
        trigger:"#page2 #left_p2 #about_pic img",
        start:"50% 50%",
        end: "70% 50%",
        //  scrub:2,
         
        // markers:true
    }
   



})

gsap.from("#page2 #right_p2 h1",{
    x:250,
    stragger:0.5,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:"#page2 #right_p2 h1",
        scroller:"body",
        start:"50% 50%",
        end: "100% 50%",
        // scrub:2,
        
        // markers:true
        
    }
    

})

gsap.from("#page2 #right_p2 #para p",{
    y:100,
    opacity:0,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#page2 #right_p2 #para p",
        scroller:"body",
        start:"60% 80%",
        end: "100% 50%",
        // scrub:2,
         
        // markers:true
        

    }

})
gsap.from("#page2 #right_p2 #form_button button",{

    x:300,
    opacity:0,
    duration:3,
    scrollTrigger:{
        trigger:"#page2 #right_p2 #para p",
        scroller:"body",
        start:"60% 80%",
        end: "100% 50%",
        // scrub:2,
         
        

    }

})
gsap.from("#exparties_p2",{

    y:300,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#page2 #right_p2 #para p",
        scroller:"body",
        start:"60% 80%",
        end: "100% 50%",
        // scrub:2,
         
        

    }

})
gsap.from("#icon1,#icon2,#icon3,#icon4,#icon5,#icon6",{
    x:100,
    delay:1.5,   
    opacity:0,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#page2 #left_p2 #about_pic img",
        start:"50% 50%",
        end: "80% 50%",

        // end:"50%",
        //  scrub:2,
        // markers:true
    }
})
















// page3

gsap.from("#Blank_div_p3",{
    x:-200,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#Blank_div_p3",
        start:"top 45%",
        // end:"50%",
        //  scrub:1,
        // markers:true
    }

})
gsap.from("#Blank_div_p3 p, #Blank_div_p3 span",{
    x:200,
    opacity:0,
    delay:0.5,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#Blank_div_p3 p, #Blank_div_p3 span",
        start:"top 45%",
        // end:"50%",
        //  scrub:1,
        // markers:true
    }
    
    

})

gsap.from("#div_part1_section1,#div_part2_section1,#div_part3_section1",{
    y:50,
    delay:.5,
    opacity:0,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#div_part1_section1,#div_part2_section1,#div_part3_section1",
        start:"top 85%",
        // end:"50%",
        //  scrub:1,
        // markers:true
    }
    
    


})
gsap.from("#div_part1_section2,#div_part2_section2,#div_part3_section2",{
    y:50,
    delay:.5,
    opacity:0,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#Blank_div_p3 p, #Blank_div_p3 span",
        start:"top 45%",
        // end:"50%",
        //  scrub:1,
        // markers:true
    }
    
    
    


})



// image to source at page 3


const pic1 = document.getElementById("div_part1_section1");
pic1.addEventListener('click',()=>{
    window.location.href="https://anirbansarkar47.github.io/H2O_WEB/"
})

const pic2 = document.getElementById("div_part2_section1");
pic2.addEventListener('click',()=>{
    window.location.href="https://anirbansarkar47.github.io/Bike_ktmLandingPage/"
})


const pic3 = document.getElementById("div_part3_section1");
pic3.addEventListener('click',()=>{
    window.location.href="https://qrcodegenerator00001.netlify.app/"
})



const pic4 = document.getElementById("div_part1_section2");
pic4.addEventListener('click',()=>{
    window.location.href="https://todolistanonymous.netlify.app/"
})

const pic5 = document.getElementById("div_part2_section2");
pic5.addEventListener('click',()=>{
    window.location.href="https://talk-zone.onrender.com/"
})


const pic6 = document.getElementById("div_part3_section2");
pic6.addEventListener('click',()=>{})












// Page 4
gsap.from("#page4>#text, #form>button",{
    y:30,
    opacity:0,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#page4>#text, #form>button",
        start:"top 45%",
        // end:"50%",
        //  scrub:1,
        // markers:true
    }



})


gsap.from("#form>label,#form>input,#form>textarea",{
    // x:100,
    opacity:0,
    duration:2,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#form>label,#form>input,#form>textarea",
        start:"top 45%",
        // end:"50%",
        //  scrub:1,
        // markers:true
    }

})


gsap.from("#lower_part> h2,#social_logo1_link, #social_logo2_link,#social_logo3_link,#social_logo4_link,#social_logo5_link",{
    x:200,
    opacity:0,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#lower_part> h2,#social_logo1_link, #social_logo2_link,#social_logo3_link,#social_logo4_link, #social_logo5_link",
        start:"top 115%",
        // end:"50%",
        //  scrub:1,
        // markers:true
    }
    
})

gsap.from("#content> h3",{
    x:-200,
    delay:2,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#content> h3",
        start:"top 110%",
        // end:"50%",
        //  scrub:1,
        // markers:true
    }
   
    
})







   



















