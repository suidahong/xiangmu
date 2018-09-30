var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('wbmenu');
});

// //添加功能
// var $addBtn = $('.r_button_add');
// var $addText = $('#addText');
// $addBtn.on('touchstart',function(){
//     $.ajax({
//         url : '/wbmenu',
//         data : { addText : $addText.val() },
//         type : 'POST',
//         dataType : 'json',
//         success : function(data){
//             if(data.code === 0){
//                 alert('添加成功');
//                 window.location.reload();  //刷新
//             }
//         }
//     });
//
// });
//
//
// //删除功能
// // var $removeSelect = $('.r_li_del');
// var $removeBtn = $('.r_li_del');
//
// $removeBtn.on('touchstart',function(){
//
//     $.ajax({
//         url : '/wbmenu',
//         data : '',
//         type : 'POST',
//         dataType : 'json',
//         success : function(data){
//             if(data.code === 0){
//                 alert('删除成功');
//                 window.location.reload();  //刷新
//             }
//         }
//     });
//
// });

module.exports = router;