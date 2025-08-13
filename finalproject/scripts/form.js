// On thanks.html
const formTimestamp = document.querySelector("#timestamp");
if (formTimestamp) {
  formTimestamp.value = new Date().toLocaleString();
}

const getSubmission = document.querySelector('#results');

if (getSubmission) {
  const supportTicket = new URLSearchParams(window.location.search);

  function safeText(param) {
    return supportTicket.get(param) || '';
  }

  getSubmission.innerHTML = `
  <div class="submission-response">
    <p>Hi ${safeText('first')} ${safeText('last')},</p>
    <p>Thank you for contacting us! Your support ticket has been received and our team will respond as soon as possible.</p>

    <br>

    <h3>Your submitted message:</h3>
    <p><strong>Message:</strong> ${safeText('message')}</p>
    <p><strong>Submitted at:</strong> ${safeText('timestamp')}</p>

    <br>
    <p><strong>Your Details:</strong></p>
    <p><strong>Name:</strong> ${safeText('first')} ${safeText('last')}</p>
    <p><strong>Email:</strong> ${safeText('email')}</p>
    <p><strong>Phone:</strong> ${safeText('phone')}</p>
  </div>
  `;
}

// Visitor message using localStorage
const messageElement = document.getElementById('visit-message');

if (messageElement) {
  const now = Date.now();
  const msToDays = 1000 * 60 * 60 * 24;
  const lastSubmission = localStorage.getItem('lastSubmission');
  let message = '';

  if (!lastSubmission) {
    message = "Thanks for submitting your first support ticket!";
  } else {
    const daysSince = Math.floor((now - Number(lastSubmission)) / msToDays);
    if (daysSince < 1) {
      message = "You submitted a support ticket less than a day ago. We appreciate your continued feedback!";
    } else if (daysSince === 1) {
      message = "You last submitted a support ticket 1 day ago.";
    } else {
      message = `You last submitted a support ticket ${daysSince} days ago.`;
    }
  }

  messageElement.textContent = message;
  localStorage.setItem('lastSubmission', now);
}





