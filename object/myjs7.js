var arrayTubes = new Array(
    {
        id: 'sVzkp_bPm2E',
        title: 'JayKii | VÀI THÁNG SAU (Official MV)',
        author: 'JayKii'
    },
    {
        id: '1tigZHyxUdc',
        title: 'SAO EM NỠ - JAYKII [Official Music Video]',
        author: 'JayKii'
    },
    {
        id: 'SA35ldy92s0',
        title: 'JayKii | CHIỀU HÔM ẤY (Official MV)',
        author: 'JayKii'
    },
    {
        id: 'oQloICZUz20',
        title: 'Giá Như Anh - JayKii | MV - Lyric HD',
        author: 'JayKii'
    }
);
var myTube = document.getElementById('myTubes');


for (var i = 0; i < arrayTubes.length; i++) {
    var lisTube = '<div style="float: left; margin: 10px" class="tube-item">\n' +
        '        <iframe width="600" height="355" src="https://www.youtube.com/embed/' + arrayTubes[i].id + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>\n' +
        '        <h3>' + arrayTubes[i].title + '</h3>\n' +
        '    </div>'
    myTube.innerHTML += lisTube;
}