// 初始化 Swiper
const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        slideChange: function () {
            updateSlideNumber(this.realIndex + 1);
        }
    }
});

// 更新幻灯片编号
function updateSlideNumber(current) {
    const total = document.querySelectorAll('.swiper-slide').length;
    document.querySelector('.slide-number').textContent = 
        `${String(current).padStart(2, '0')}/${String(total).padStart(2, '0')}`;
}

// 控制台彩蛋
console.log(
    '%c Welcome to my portfolio! ',
    'background: #2A2D34; color: #C5B08D; padding: 10px; font-size: 20px; border-radius: 5px;'
);

// Contact 点击事件处理
document.getElementById('contact-link').addEventListener('click', function(e) {
    e.preventDefault();
    const modal = document.getElementById('wechat-modal');
    modal.style.display = 'flex';
});

// 关闭弹出框
document.querySelector('.close-modal').addEventListener('click', function() {
    document.getElementById('wechat-modal').style.display = 'none';
});

// 点击弹出框外部关闭
document.getElementById('wechat-modal').addEventListener('click', function(e) {
    if (e.target === this) {
        this.style.display = 'none';
    }
}); 