async function animateElement(el, animation) {
    el.classList.add(animation);
    await Promise.all(el.getAnimations().map((anim) => anim.finished));
    el.classList.remove(animation);
    return new Promise((resolve, reject) => {
        if (!el.classList.contains(animation)) {
            resolve('The animation worked!');
        } else {
            reject('Something went wrong.');
        }
    });
}

export default animateElement;
