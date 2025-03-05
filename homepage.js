function saveProfile() {
    const fullName = document.getElementById('fullName').value;
    const dob = document.getElementById('dob').value;
    const contact = document.getElementById('contact').value;
    const address = document.getElementById('address').value;
    const messageElement = document.getElementById('profile-message');

    if (!fullName || !dob || !contact || !address) {
        messageElement.textContent = "Please fill in all fields.";
        return;
    }

    // Simulate saving the profile
    messageElement.textContent = "Profile saved successfully!";
    console.log(`Profile Data: 
    Name: ${fullName}, 
    Date of Birth: ${dob}, 
    Contact: ${contact}, 
    Address: ${address}`);
        setTimeout(() => {
        window.location.href = "https://scaswebsite.jimdofree.com/?fbclid=IwY2xjawIK5EZleHRuA2FlbQIxMAABHWjt_VTiaK3XOY29d3nRyEvahERNEIOdWoT2VJAfJMcIujH6U2K3yEiLDQ_aem_wA50vynwYooJxXTE08Rp8w"; // Redirect to a specific website
    }, 2000);
    // Optionally, redirect or do something else after saving
}



