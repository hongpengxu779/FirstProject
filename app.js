let express = require("express")
let student=require("./controller/student")//引入控制器
let app = express(); // 创建一台服务器

//托管静态资源
app.use(express.static("public"));
//配置模板引擎
app.set("view engine","ejs")
app.get("/stu",student.showIndex)
// 监听一个端口
app.listen(3000,()=>{
    console.log("服务器启动了~")
})
