let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let questionText = document.getElementById("question");
let mainImage = document.getElementById("mainImage");

let clickCount = 0;  // 记录点击 No 的次数

// No 按钮的文字变化
const noTexts = [
    "？你认真的吗…",
    "要不再想想？",
    "不许选这个！ ",
    "我会很伤心…",
    "不行:("
];

// No 按钮点击事件
noButton.addEventListener("click", function () {
    clickCount++;

    // 让 Yes 变大，每次放大 2 倍
    let yesSize = 1 + (clickCount * 1.2);
    yesButton.style.transform = `scale(${yesSize})`;

    // 挤压 No 按钮，每次右移 100px
    let noOffset = clickCount * 50;
    noButton.style.transform = `translateX(${noOffset}px)`;

    // **新增：让图片和文字往上移动**
    let moveUp = clickCount * 25; // 每次上移 20px
    mainImage.style.transform = `translateY(-${moveUp}px)`;
    questionText.style.transform = `translateY(-${moveUp}px)`;

    // No 文案变化（前 5 次变化）
    if (clickCount <= 5) {
        noButton.innerText = noTexts[clickCount - 1];
    }

    // 图片变化（前 5 次变化）
    // 震惊 修改为绝对路径
    if (clickCount === 1) mainImage.src = "https://wx3.sinaimg.cn/orj360/005L0HLIgy1gqdiafl1rgg304q036q3d.gif";  
    // 思考 修改为绝对路径  
    if (clickCount === 2) mainImage.src = "https://wx2.sinaimg.cn/orj360/0088mgqDgy1h0gi27qu9qg3035035761.gif";  
    // 生气 修改为绝对路径  
    if (clickCount === 3) mainImage.src = "https://wx1.sinaimg.cn/orj360/0088mgqDgy1h0gi28kxymg3035035mym.gif"; 
    // 哭 修改为绝对路径    
    if (clickCount === 4) mainImage.src = "https://wx1.sinaimg.cn/orj360/0088mgqDgy1h0gi22yq44g3035035wf5.gif";   
    // 之后一直是哭
    if (clickCount >= 5) mainImage.src = "https://wx1.sinaimg.cn/orj360/0088mgqDgy1h0gi22yq44g3035035wf5.gif";
    // if (clickCount === 1) mainImage.src = "https://pic.rmb.bdstatic.com/bjh/3ed189b421bd/250216/8e2317bb70ec0beeb30f4522cac1e915.png"; // 震惊
    // if (clickCount === 2) mainImage.src = "https://pic.rmb.bdstatic.com/bjh/3ed189b421bd/250216/85e54dee5f519ff1a2b8aa7e370db816.png";// 思考   
    // if (clickCount === 3) mainImage.src = "https://pic.rmb.bdstatic.com/bjh/3ed189b421bd/250216/74c1e4c813a3fc129c9bea588d00c4d7.png";   // 生气
    // if (clickCount === 4) mainImage.src = "https://pic.rmb.bdstatic.com/bjh/3ed189b421bd/250216/61cff1367160c5009001e06a0d0e089e.png";  // 哭
    // if (clickCount >= 5) mainImage.src = "https://pic.rmb.bdstatic.com/bjh/3ed189b421bd/250216/61cff1367160c5009001e06a0d0e089e.png";  // 之后一直是哭

});

// Yes 按钮点击后，进入表白成功页面
yesButton.addEventListener("click", function () {
    document.body.innerHTML = `
        <div class="yes-screen">
            <h1 class="yes-text">!!!喜欢你!! ( >᎑<)♡︎ᐝ</h1>
            <img src="https://wx4.sinaimg.cn/orj360/0088mgqDgy1h0gi24qy9sg3035035abh.gif" alt="拥抱" class="yes-image">   
        </div>
    `;

    document.body.style.overflow = "hidden";
});
