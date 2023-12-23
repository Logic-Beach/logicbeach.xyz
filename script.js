
//Show/hide sections
function showSection(sectionId) {
    // Get all the sections
    var sections = document.querySelectorAll('div[id^="section"]');
    // Hide all the sections
    for (var i = 0; i < sections.length; i++) {
        if (sections[i].id !== sectionId) {
            sections[i].style.display = 'none';
        }
    }
    // Show the selected section
    document.getElementById("section-" + sectionId).style.display = 'block';
}

/* Art */////////////////////////////////////////////////////////
//videoList
const videoData = [
    { videoId: '9SaEnpY5NwU', thumbnailSrc: 'images/sl.webp' },
    { videoId: 'gvEY9e1Qt6c', thumbnailSrc: 'images/bits.webp' },
    { videoId: 'iM9WWEoYNf0', thumbnailSrc: 'images/lb.eth.webp' },
    { videoId: 'T2YtHBubtHg', thumbnailSrc: 'images/bif.jpg' },
];
const videoList = document.getElementById('videoList');

videoData.forEach(({ videoId, thumbnailSrc }) => {
    const videoElement = createVideoElement(videoId, thumbnailSrc);
    videoList.appendChild(videoElement);
});

function createVideoElement(videoId, thumbnailSrc) {
    const videoContainer = document.createElement('div');
    videoContainer.classList.add('video-container');

    const videoThumbnail = document.createElement('img');
    videoThumbnail.src = thumbnailSrc;
    videoThumbnail.alt = 'Video Thumbnail';
    videoThumbnail.classList.add('video-thumbnail');
    videoContainer.appendChild(videoThumbnail);

    const videoWrapper = document.createElement('div');
    videoWrapper.classList.add('video-wrapper');
    videoContainer.appendChild(videoWrapper);

    videoContainer.addEventListener('click', () => {
        const videoEmbedCode = `
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${videoId}?autoplay=1" frameborder="0" allow="autoplay;" allowfullscreen></iframe>
      `;
        videoWrapper.innerHTML = videoEmbedCode;
        videoWrapper.style.display = 'block';
        videoThumbnail.style.display = 'none';
    });

    return videoContainer;
}

