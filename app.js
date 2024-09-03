// Firebase configuration
const firebaseConfig = {
    // Your Firebase config goes here
};
firebase.initializeApp(firebaseConfig);

// Reference to the database
const db = firebase.database();
const chatRef = db.ref('chats');

// Sending a message
document.getElementById('send').addEventListener('click', () => {
    const message = document.getElementById('message').value;
    chatRef.push().set({
        user: 'User1', // Replace with dynamic user data
        message: message
    });
    document.getElementById('message').value = ''; // Clear the input field
});

// Receiving messages
chatRef.on('child_added', snapshot => {
    const output = document.getElementById('output');
    const data = snapshot.val();
    output.innerHTML += `<p><strong>${data.user}:</strong> ${data.message}</p>`;
});
