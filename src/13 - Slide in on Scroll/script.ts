function debounce(
    func: (...args: any[]) => any,
    wait: number = 20,
    immediate: boolean = true
): (...args: any[]) => void {
    let timeout: ReturnType<typeof setTimeout> | null;

    return function (this: any, ...args: any[]) {
        const context = this;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout!);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

const sliderImages: NodeListOf<HTMLImageElement> = document.querySelectorAll('.slide-in');

function checkSlide(): void {
    sliderImages.forEach((sliderImage: HTMLImageElement) => {
        // halfway down the image
        const slideInAt: number = window.scrollY + window.innerHeight - sliderImage.height / 2;
        // bottom of the image
        const imageBottom: number = sliderImage.offsetTop + sliderImage.height;
        const isHalfShown: boolean = slideInAt > sliderImage.offsetTop;
        const isNotScrolledPast: boolean = window.scrollY < imageBottom;
        if (isHalfShown && isNotScrolledPast) {
            sliderImage.classList.add('active');
        } else {
            sliderImage.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', debounce(checkSlide));
