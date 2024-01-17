document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.image');

    images.forEach(image => {
        image.addEventListener('mouseover', function() {
            // 获取对应的image_x并设置为背景图片
            const imageId = image.id.replace('image_', '');
            image.style.backgroundImage = `url('learn/gen/image_${imageId}.jpg')`;
        });

        image.addEventListener('mouseout', function() {
            // 恢复透明图片
            image.style.backgroundImage = "url('learn/gen/transparent_image.png')";
        });
    });
});

