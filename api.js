
// js ovject notation 
const user ={name:"kuddus ali",id:123,work:"job"}
const stringify=JSON.stringify(user);
console.log(stringify);
const shop ={
               name:'trisha',
               profit :2000,
               address :"mohammadpur ",
               owner:{
                              name:"tanisha"
               },
               products :['laptop',"pen","pencil","books"],
               isExpansive: false 

}
// stringify 
const shopStrinfy=JSON.stringify(shop);
// console.log(shop);
console.log(shopStrinfy);
// parse 
const converted =JSON.parse(shopStrinfy);
console.log(converted.owner);