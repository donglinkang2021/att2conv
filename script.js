document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.patch-image');
    const image_container = document.querySelector('.image-container');
    images.forEach(image => {
        image.addEventListener('mouseover', function() {
            // 获取对应的image_x并设置为背景图片
            const imageId = image.id.replace('image_', '');
            image_container.style.backgroundImage = `url('sim/image_${imageId}.jpg')`;
        });

        image.addEventListener('mouseout', function() {
            // 恢复透明图片
            image_container.style.backgroundImage = "url('images/sails_480.png')";
        });
    });
});

