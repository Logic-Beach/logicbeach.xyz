document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('noiseCanvas');
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function generateNoise() {
        const imageData = ctx.createImageData(canvas.width, canvas.height);
        const buffer32 = new Uint32Array(imageData.data.buffer);
        const len = buffer32.length;

        for (let i = 0; i < len; i++) {
            const randomColor = Math.random() * 0xFFFFFF | 0xe; // Random color
            buffer32[i] = (Math.random() < 0.5 ? 0xff000000 : 0xff000000 | randomColor); // Random black or color
        }

        ctx.putImageData(imageData, 0, 0);
    }

    function animate() {
        generateNoise();
        setTimeout(animate, 50); // Adjust the interval to slow down the animation
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();
});
