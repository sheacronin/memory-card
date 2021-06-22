async function animateElement(el, animation) {
    return new Promise((resolve) => {
        function handleAnimEnd() {
            el.classList.remove(animation);
            el.removeEventListener('animationend', handleAnimEnd);
            resolve();
        }

        el.addEventListener('animationend', handleAnimEnd);

        el.classList.add(animation);
    });
}

export default animateElement;
