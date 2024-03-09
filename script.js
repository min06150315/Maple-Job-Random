var items = getMapleJob();
var images = getMapleImage();
var resultDiv = document.getElementById('result');

function animateMapleImages() {
    var rotationInterval = setInterval(function () {
        var randomIndex = Math.floor(Math.random() * images.length);
        var imageURL = images[randomIndex];
        resultDiv.innerHTML = `<img src="${imageURL}" alt="Rotating Image">`;
    }, 50);

    setTimeout(function () {
        clearInterval(rotationInterval);

        var finalRandomIndex = Math.floor(Math.random() * items.length);
        var selected = items[finalRandomIndex];
        var finalImageURL = images[finalRandomIndex];

        resultDiv.innerHTML = `<h2>당신의 직업: ${selected}</h2><img src="${finalImageURL}" alt="${selected} 이미지">`;
    }, 5000);
}

function getMapleJob() {
    var MapleJob = ["히어로", "팔라딘", "다크나이트", "아크메이지(불,독)", "아크메이지(썬,콜)", "비숍", "보우마스터", "신궁", "패스파인더", "나이트로드", 
    "섀도어", "듀얼블레이드", "바이퍼", "캡틴", "캐논슈터", "소울마스터", "미하일", "플레임위자드", "윈드브레이커", "나이트워커", "스트라이커",
    "데몬슬레이어", "데몬어벤져", "블래스터", "배틀메이지", "와일드헌터", "제논", "메카닉", "아란", "에반", "루미너스", "메르세데스", "팬텀", "은월", 
    "카이저", "카인", "카데나", "엔젤릭버스터", "아델", "일리움", "칼리", "아크", "라라", "호영", "제로", "키네시스"];
    return MapleJob;
}
function getMapleImage() {
    var MapleImage = [
        "images/a0.webp", "images/a1.webp", "images/a2.webp", "images/a3.webp", "images/a4.webp", "images/a5.webp", "images/a6.webp", "images/a7.webp",
        "images/a8.webp", "images/a9.webp", "images/a10.webp", "images/a11.webp", "images/a12.webp", "images/a13.webp", "images/a14.webp", 
        "images/b0.webp", "images/b1.webp", "images/b2.webp", "images/b3.webp", "images/b4.webp", "images/b5.webp", 
        "images/c0.webp", "images/c1.webp", "images/c2.webp", "images/c3.webp", "images/c4.webp", "images/c5.webp", "images/c6.webp", 
        "images/d0.webp", "images/d1.webp", "images/d2.webp", "images/d3.webp", "images/d4.webp", "images/d5.webp", 
        "images/e0.webp", "images/e1.webp", "images/e2.webp", "images/e3.webp", "images/f0.webp", "images/f1.webp", "images/f2.webp", "images/f3.webp", 
        "images/g0.webp", "images/g1.webp", "images/h0.webp", "images/i0.webp"];
    return MapleImage;
}