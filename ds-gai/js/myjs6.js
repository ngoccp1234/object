var student1 = {
    rollNumber : 'A0001',
    avatar: '../img/1.jpg',
    name : 'Phan Hoài Nam',
    address : 'Số 8 Tôn Thất Thuyết',
    phone: '092131234'
};
var student2 = {
    rollNumber : 'A0002',
    avatar: '../img/2.jpg',
    name : 'Tiểu Bình',
    address : 'Số 8 Tôn Thất Thuyết',
    phone: '092131234'
};
var student3 = {
    rollNumber : 'A0003',
    avatar: '../img/3.jpg',
    name : 'Thanh Hoa',
    address : 'Số 10 Tôn Thất Thuyết',
    phone: '+84 x9 x075 23x'
};
var student4 = {
    rollNumber : 'A0004',
    avatar: '../img/4.jpg',
    name : 'Doanh Quảng',
    address : 'Số 10 Tôn Thất Thuyết',
    phone: '+8432781221'
};
var listStudent = new Array();
listStudent.push(student1);
listStudent.push(student2);
listStudent.push(student3);
listStudent.push(student4);
var Content = document.getElementsByClassName('main-content');
if (Content != null && Content.length > 0) {
    var mainContent = Content[0];
    for (var i = 0; i < listStudent.length; i++) {
        var listGirl = '<div class="personal-infor">\n' +
            '        <div class="avatar" style="background-image: url(\'' + listStudent[i].avatar + '\'); background-size: cover">\n' +
            '        </div>\n' +
            '        <div class="line-infor">\n' +
            '            <label>Rollnumber</label>\n' +
            '            <div>' + listStudent[i].rollNumber + '</div>\n' +
            '        </div>\n' +
            '        <div class="line-infor">\n' +
            '            <label>Name</label>\n' +
            '            <div>' + listStudent[i].name + '</div>\n' +
            '        </div>\n' +
            '        <div class="line-infor">\n' +
            '            <label>Phone</label>\n' +
            '            <div>' + listStudent[i].phone + '</div>\n' +
            '        </div>\n' +
            '        <div class="line-infor">\n' +
            '            <label>Address</label>\n' +
            '            <div>' + listStudent[i].address + '</div>\n' +
            '        </div>\n' +
            '    </div>';
        mainContent.innerHTML += listGirl;
    }
}