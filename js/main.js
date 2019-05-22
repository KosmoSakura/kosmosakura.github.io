function mainBtnClick(num) {
    // var content = document.getElementsByClassName('content3'); // getElementsByClassName得到的是数组形式
    // content = content[num]; // 得到数组的其中一成员，返回一个对象（p标签元素）
    // // 如果对象中的diplay状态为none
    // if (content.style.display == "none") {
    //     // 将该对象的diplay属性修改为block进行显示
    //     content.style.display = "block";
    // } else {
    //     // 否则修改为none进行隐藏
    //     content.style.display = "none";
    // }

    // confirm("点击：" + num)//弹出2个按钮消息框
    // alert("点击：" + num)//弹出1个按钮消息框
    // promt("点击：" + num)//弹出消息框
    switch (num) {
        case 1://影子发生器
            window.location.href = '../android_9/android_9.html';
            break;
        case 2://盲水印
            window.location.href = '../watermark/watermark.html';
            break;
        case 3://博客模板
            window.location.href = '../blog/blog.html';
            break;
        case 4://Facebook密钥散列打印
            var click = confirm("密钥散列打印还没有实现,跳转教程吗？");
            if (click) {
                window.location.href = 'https://blog.csdn.net/zull_kos_mos/article/details/88746626';
            }
            console.log("Kosmos", "Facebook密钥散列打印");
            break;
        case 5://小伙伴们
            window.location.href = '../friend/friend.html';
            console.log("Kosmos", "小伙伴们");
            break;
    }
}

function openlogin(show) {
    if (show) {
        document.getElementById('pwd_input').style.visibility = "visible";
    } else {
        document.getElementById('pwd_input').style.visibility = "hidden";
    }
}

function login(type) {
    if (type === 2) {
        var acc = document.getElementById('inputAccount').value;
        var pwd = document.getElementById('inputPwd').value;
        $.get("/login?acc=" + acc + "&pwd=" + pwd, function (data) {
            if (data.success) {
                window.location.href = '../mgr/mgr.html';
            } else {
                document.getElementById('login_notice').innerText = data.message;
            }
        });
    } else {
        openlogin(false);
    }
}