const express=require('express')
const router=express.Router();

const post=require('../../models/post')

//Router
/*
->GET/
-->HOME

*/
router.get('',async(req,res)=>{
    const local={
        title:"CollegeKart",
        description:" buy and sell something "
    }
    try {
        const data=await post.find();
        console.log(data)
        res.render("index.ejs",{local,data});
    } catch (error) {
        console.log(error)
    }
    
});


/*
->GET/
-->post:id

*/
router.get('/post/:id',async(req,res)=>{
    try {
    
   
    let slug=req.params.id;
     const data=await post.findById({_id:slug});
     const local={
        title:data.title,
        desrcription:" buy and sell something "
    }
       
        res.render("post",{local,data});
    } catch (error) {
        console.log(error)
    }
    
});


// function insertPostData() {
//     post.insertMany([
//         {
//             title:"cycle",
//             // image:"https://rukminim2.flixcart.com/image/850/1000/xif0q/cycle/n/x/l/old-skool-26t-cycle-26-23-east-coast-115-single-speed-original-imagmzejgzzyd2ga.jpeg?q=90&crop=false/400x200" width="400px" height="200px",
//             price:394,
//             PhoneNumber:"93492020339",
//             upiId:"nsfd@paytm",
//             description:"it my first post in my website please look after htis is done very hardworking profession that work day and nigth to fullfilled the need of the website"

//         },
//         {
//             title:"cycle",
//             // image:"https://rukminim2.flixcart.com/image/850/1000/xif0q/cycle/n/x/l/old-skool-26t-cycle-26-23-east-coast-115-single-speed-original-imagmzejgzzyd2ga.jpeg?q=90&crop=false/400x200" width="400px" height="200px",
//             price:394,
//             PhoneNumber:"93492020339",
//             upiId:"nsfd@paytm",
//             description:"it my first post in my website please look after htis is done very hardworking profession that work day and nigth to fullfilled the need of the website"

//         },
//         {
//             title:"cycle",
//             // image:"https://rukminim2.flixcart.com/image/850/1000/xif0q/cycle/n/x/l/old-skool-26t-cycle-26-23-east-coast-115-single-speed-original-imagmzejgzzyd2ga.jpeg?q=90&crop=false/400x200" width="400px" height="200px",
//             price:394,
//             PhoneNumber:"93492020339",
//             upiId:"nsfd@paytm",
//             description:"it my first post in my website please look after htis is done very hardworking profession that work day and nigth to fullfilled the need of the website"

//         },
//         {
//             title:"cycle",
//             // image:"https://rukminim2.flixcart.com/image/850/1000/xif0q/cycle/n/x/l/old-skool-26t-cycle-26-23-east-coast-115-single-speed-original-imagmzejgzzyd2ga.jpeg?q=90&crop=false/400x200" width="400px" height="200px",
//             price:394,
//             PhoneNumber:"93492020339",
//             upiId:"nsfd@paytm",
//             description:"it my first post in my website please look after htis is done very hardworking profession that work day and nigth to fullfilled the need of the website"

//         },
//         {
//             title:"cycle",
//             // image:"https://rukminim2.flixcart.com/image/850/1000/xif0q/cycle/n/x/l/old-skool-26t-cycle-26-23-east-coast-115-single-speed-original-imagmzejgzzyd2ga.jpeg?q=90&crop=false/400x200" width="400px" height="200px",
//             price:394,
//             PhoneNumber:"93492020339",
//             upiId:"nsfd@paytm",
//             description:"it my first post in my website please look after htis is done very hardworking profession that work day and nigth to fullfilled the need of the website"

//         },
//         {
//             title:"cycle",
//             // image:"https://rukminim2.flixcart.com/image/850/1000/xif0q/cycle/n/x/l/old-skool-26t-cycle-26-23-east-coast-115-single-speed-original-imagmzejgzzyd2ga.jpeg?q=90&crop=false/400x200" width="400px" height="200px",
//             price:394,
//             PhoneNumber:"93492020339",
//             upiId:"nsfd@paytm",
//             description:"it my first post in my website please look after htis is done very hardworking profession that work day and nigth to fullfilled the need of the website"

//         }


//     ])
// }
// insertPostData();





router.get('/about',(req,res)=>{
    const local={
        title:"/about"
    }
    res.render("about",{
       local
    });
});


module.exports=router;