// Funzione per scaricare entrambi i documenti
document.getElementById("downloadCVBtn").addEventListener("click", function(event) {
    event.preventDefault();

    const cv1Link = document.createElement('a');
    cv1Link.href = 'assets/cvs/Federico Dassiè - CV_it.pdf';
    cv1Link.download = 'Federico Dassiè - CV_it.pdf';
    cv1Link.click();

    const cv2Link = document.createElement('a');
    cv2Link.href = 'assets/cvs/Federico Dassiè - CV_en.pdf';
    cv2Link.download = 'Federico Dassiè - CV_en.pdf';
    cv2Link.click();
});
