function scrollNfill(){
    const form = document.getElementById("form")
    form.scrollIntoView({ behavior: 'smooth' });

    setTimeout(function () {
        const subjectField = document.getElementById('subject');
        const messageField = document.getElementById('message');
        subjectField.value = 'Basic Plan';
        messageField.value = 'Hello Timmy, im interested in the Basic plan $65'
        inputField.focus(); // Optional: Focus on the input field
    }, 500);
}

function scrollNfill2(){
    const form = document.getElementById("form")
    form.scrollIntoView({ behavior: 'smooth' });

    setTimeout(function () {
        const subjectField = document.getElementById('subject');
        const messageField = document.getElementById('message');
        subjectField.value = 'Pro Plan';
        messageField.value = 'Hello Timmy, im interested in the Pro plan $135'
        inputField.focus(); // Optional: Focus on the input field
    }, 500);
}

function downloadResume(){
    const resumeUrl = 'resume.pdf'; // Update this path

    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'resume.pdf'; // The name of the downloaded file

    // Append the anchor to the body (required for Firefox)
    document.body.appendChild(link);

    // Trigger the download
    link.click();

    // Remove the anchor from the document
    document.body.removeChild(link);

  }