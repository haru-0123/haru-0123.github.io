<script>
function checkScroll() {
    document.querySelectorAll('.inner').forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;

        // 要素が表示領域に入ったかを判断
        if (elementTop < viewportHeight - 100) {
            el.classList.add('visible');
        }
    });
}

// 初回表示時にも機能するように関数を実行
checkScroll();

// スクロール時に関数を実行
window.addEventListener('scroll', checkScroll);
</script>
