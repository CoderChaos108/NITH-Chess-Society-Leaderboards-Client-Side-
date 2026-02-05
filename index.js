const express=require('express');
const app=express();
app.set('view engine','ejs');
app.use(express.static('public'));
const users = [
    {rank:"rank",id:"username",rating:"rating",batch:"batch"},
    {rank:1,id:"aryan01",rating:2410,batch:2026},
    {rank:2,id:"chaos02",rating:2335,batch:2027},
    {rank:3,id:"drunkenMaster04",rating:2290,batch:2026},
    {rank:4,id:"lakshaya04",rating:2215,batch:2028},
    {rank:5,id:"nishant05",rating:2150,batch:2029},
    {rank:6,id:"vivek06",rating:2095,batch:2027},
    {rank:7,id:"rahul07",rating:2050,batch:2028},
    {rank:8,id:"aditya08",rating:1980,batch:2026},
    {rank:9,id:"yash09",rating:1935,batch:2029},
    {rank:10,id:"krish10",rating:1890,batch:2027},
    {rank:11,id:"siddharth11",rating:1845,batch:2028},
    {rank:12,id:"manan12",rating:1800,batch:2026},
    {rank:13,id:"harsh13",rating:1760,batch:2029},
    {rank:14,id:"dev14",rating:1725,batch:2027},
    {rank:15,id:"arjun15",rating:1690,batch:2028},
    {rank:16,id:"om16",rating:1655,batch:2026},
    {rank:17,id:"tanish17",rating:1620,batch:2029},
    {rank:18,id:"ishaan18",rating:1585,batch:2027},
    {rank:19,id:"pranav19",rating:1550,batch:2028},
    {rank:20,id:"rohan20",rating:1515,batch:2026},
    {rank:21,id:"karthik21",rating:1480,batch:2029},
    {rank:22,id:"mohit22",rating:1445,batch:2027},
    {rank:23,id:"ankit23",rating:1410,batch:2028},
    {rank:24,id:"ritik24",rating:1375,batch:2026},
    {rank:25,id:"samar25",rating:1340,batch:2029},
    {rank:26,id:"varun26",rating:1305,batch:2027},
    {rank:27,id:"akash27",rating:1270,batch:2028},
    {rank:28,id:"pratham28",rating:1235,batch:2026},
    {rank:29,id:"neel29",rating:1200,batch:2029},
    {rank:30,id:"shiv30",rating:1150,batch:2027}
];

 app.get('/',(req,res)=>{
    res.render('index',{users:users});
 });
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});