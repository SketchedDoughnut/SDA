


function submit_form_data(form) {
    var username = form.elements["inputbox"][0].value;
    var feedback = form.elements["inputbox"][1].value;
    
    // Do something with the data (for example, log it to console)
    const username_link = document.createElement("a");
    const feedback_link = document.createElement("a");

    const username_blob  = new Blob([username], { type: 'text/plain' });
    const feedback_blob = new Blob([feedback], { type: 'text/plain' });
    
    username_link.href = URL.createObjectURL(username_blob);
    feedback_link.href = URL.createObjectURL(feedback_blob);

    username_link.download = "t1.txt";
    feedback_link.download = "t2.txt";

    username_link.click();
    URL.revokeObjectURL(username_link.href);
    feedback_link.click();
    URL.revokeObjectURL(feedback_link.href);
}