const vids = document.getElementsByClassName("video-container");

for (const v of vids) {
    const video = v.children[1];

    v.addEventListener("mouseover", () => {
        video.currentTime = 0;
        video.play();
    });

    v.addEventListener("mouseout", () => {
        video.pause();
    });
}

document.body.style.visibility = "visible";
