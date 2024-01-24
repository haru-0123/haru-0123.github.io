<script>
// スクロールイベントを検知する関数
function checkScroll() {
    document.querySelectorAll('.inner').forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;

        // 要素が表示領域に入ったかを判断
        if (elementTop < viewportHeight - 100) {
            el.classList.add('visible');
        } else {
            el.classList.remove('visible');
        }
    });
}

// スクロール時に関数を実行
window.addEventListener('scroll', checkScroll);
</script>
