export const initAnimation = (elementRef, className) => {
    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            entry.target.classList.add(className || 'animate');
            } else {
            entry.target.classList.remove(className || 'animate');
            }
        });
    });

    if (elementRef.current) {
        observer.observe(elementRef.current);
    }

    return () => {
        if (elementRef.current) {
            observer.unobserve(elementRef.current);
        }
    };
}