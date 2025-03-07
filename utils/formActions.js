export const handlereportBugForm = (formData) => {
  e.preventDefault();
  const email = formData.get("email");
  console.log("email", email);

  return {
    status: "OK",
  };
};

export async function sendSupportRequest(formData) {

  const data = {
    "Application": "Apilandscape",
    "Email": formData.email.trim(),
    "Subject": formData.subject.trim(),
    "Description": formData.message.trim(),
  };

  try {
    const sendData = await fetch('/api/support', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    
    const response = await sendData.json();
    console.log("response del formAction", response);
    
    if (!response.Id) {
      return { message: "Something went wrong, try again", success: false };
    }

    return { message: "Thank you for completing the survey!", success: true };

  } catch (error) {
    console.log("support request error", error);
    return {
      message: "Something went wrong, try again",
      error: true,
    };
  }

}
