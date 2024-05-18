const elipse = document.querySelector("ellipse");

document.body.addEventListener('mousemove', (event) => {
    const updatePupilPosition = (eyeSelector, pupilSelector) => {
        const eye = document.querySelector(eyeSelector);
        const pupil = document.querySelector(pupilSelector);
        const { clientX: mouseX, clientY: mouseY } = event;
        const { left: eyeX, top: eyeY, width: eyeWidth, height: eyeHeight } = eye.getBoundingClientRect();

        const angle = Math.atan2(mouseY - (eyeY + eyeHeight / 2), mouseX - (eyeX + eyeWidth / 2));
        const radius = Math.min(eyeWidth, eyeHeight) / 2;

        const posX = Math.cos(angle) * radius;
        const posY = Math.sin(angle) * radius;
        if (eyeSelector.includes(".rightEye")) {
            pupil.style.transform = `translate(-50%, -50%) translate(${posX - 8}px, ${posY - 2}px)`;
        } else {
            pupil.style.transform = `translate(-50%, -50%) translate(${posX - 8}px, ${posY - 7}px)`;
        }
    };

    updatePupilPosition(".svgBox .leftEye .bib", ".svgBox .leftEye .bib div");
    updatePupilPosition(".svgBox .rightEye .bib", ".svgBox .rightEye .bib div");
});
let initialState = 10
// setInterval(() => {
//     // initialState = (initialState - 1 + 10) % 10 ;
//     // console.log(initialState);
//     // elipse.style.opacity = initialState / 10
//     // elipse.style.opacity =
// }, 500)