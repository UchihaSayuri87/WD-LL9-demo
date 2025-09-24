// ----------------------------
// Beginner JS Examples & Tips
// ----------------------------

// 1️⃣ Select a random item from a list
// This picks a random item from the array 'items'
const items = ["A", "B", "C"];
const randomItem = items[Math.floor(Math.random() * items.length)];
// randomItem is one of the items in the array

// 2️⃣ Update part of a webpage with JavaScript
// document.getElementById("myDiv").innerHTML = "New content here!";

// 3️⃣ Toggle visibility of a section using a button click
// document.getElementById("myButton").addEventListener("click", () => {
//   const section = document.getElementById("mySection");
//   section.style.display = section.style.display === "none" ? "block" : "none";
// });

// 4️⃣ Fade-in animation for a list of items
// Add the 'fade-in' class to each list item
// const listItems = document.querySelectorAll("#myList li");
// listItems.forEach(item => item.classList.add("fade-in"));

// 5️⃣ Animate countdown timer with color changes
// This function adds a color animation to the countdown timer
function updateCountdown() {
  // ...existing countdown logic...
  countdown.classList.add("color-animate");
  setTimeout(() => countdown.classList.remove("color-animate"), 1000);
}

// 6️⃣ Zoom-in effect for an image
// document.getElementById("myImg").classList.add("zoom-in");

// ----------------------------
// Debugging Tips
// ----------------------------
// - Button click not working? Make sure your script runs after the HTML loads, and the id matches.
// - Null error when accessing a DOM element? Double-check the id and that the element exists in the HTML.
// - innerHTML not displaying anything? Make sure the target element exists and the id matches.

// ----------------------------
// 🎵 Setlist Generator
// ----------------------------

// This array holds the song names for the setlist
const songs = [
  "No Body European Tour Intro",
  "A Marrow Escape",
  "The Final Pulse",
  "Shadow Over the Stage",
  "Encore: Lights Out",
];

// This function shuffles the songs and displays them as a list
function generateSetlist() {
  // Shuffle the songs array using Fisher-Yates
  const shuffledSongs = [...songs];
  for (let i = shuffledSongs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledSongs[i], shuffledSongs[j]] = [shuffledSongs[j], shuffledSongs[i]];
  }

  // Build HTML for the setlist
  let setlistHTML = "";
  for (const song of shuffledSongs) {
    setlistHTML += `<li>${song}</li>`;
  }
  document.getElementById("setlist").innerHTML = setlistHTML;

  // Show the countdown timer section
  document.getElementById("timer-section").classList.remove("hidden");

  // Add fade-in animation to each setlist item
  document
    .querySelectorAll("#setlist li")
    .forEach((li) => li.classList.add("fade-in"));
}

// When the button is clicked, generate the setlist
document
  .getElementById("generateSetlist")
  .addEventListener("click", generateSetlist);

// ----------------------------
// ⏳ Countdown Timer
// ----------------------------

// Set the tour start date and get the countdown element
const tourStart = new Date("2025-08-01T20:00:00");
const countdown = document.getElementById("countdown");

// This function updates the countdown timer every second
function updateCountdown() {
  // Calculate time difference
  const now = new Date();
  const diff = tourStart - now;

  if (diff <= 0) {
    countdown.textContent = "Tour has started!";
    clearInterval(timer);
    return;
  }

  // Calculate days, hours, minutes, seconds
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdown.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  // Add pulse animation to countdown
  countdown.classList.add("pulse");
  setTimeout(() => {
    countdown.classList.remove("pulse");
  }, 500);
}

// Update the countdown every second
const timer = setInterval(updateCountdown, 1000);

// ----------------------------
// 🛠️ Feature Scaffolds
// ----------------------------

// 1️⃣ VIP Ticket Winner Generator
// This sets up the VIP winner feature in the HTML
document.getElementById("vipWinner").innerHTML = `
    <h3>VIP Ticket Winner</h3>
    <button id="pickWinner">Pick Winner</button>
    <div id="winnerOutput"></div>
  `;

// When the button is clicked, pick a random winner from the list
document.getElementById("pickWinner").addEventListener("click", () => {
  // Beginner-friendly random winner logic
  const vipNames = ["Alex", "Jamie", "Morgan", "Taylor", "Jordan"];
  const winner = vipNames[Math.floor(Math.random() * vipNames.length)];
  document.getElementById("winnerOutput").textContent = `🎉 Winner: ${winner}!`;
});

// 2️⃣ Fan Favorite Showdown
// This sets up the voting feature in the HTML
document.getElementById("fanFavorite").innerHTML = `
    <h3>Fan Favorite Showdown</h3>
    <button id="vote">Vote</button>
    <div id="voteCount">Votes: 0</div>
  `;

// When the vote button is clicked, increase the vote count and disable the button
document.getElementById("vote").addEventListener("click", () => {
  // Beginner-friendly voting button logic
  // Start with 0 votes
  let votes = Number(
    document.getElementById("voteCount").textContent.replace(/[^0-9]/g, "")
  );
  votes++;
  document.getElementById("voteCount").textContent = `Votes: ${votes}`;

  // Disable the vote button after one click
  document.getElementById("vote").disabled = true;
  // Optionally, change button text to show it's disabled
  document.getElementById("vote").textContent = "Voted!";
});

// 3️⃣ Tour Date Spotlight
// This sets up the tour highlight feature in the HTML
document.getElementById("tourHighlight").innerHTML = `
    <h3>Tour Date Spotlight</h3>
    <ul>
    <li id="cityOslo">Oslo</li>
    <li id="cityBerlin">Berlin</li>
    <li id="cityLondon">London</li>
    </ul>
  `;

// When a city is clicked, show info about that tour date
// Oslo spotlight
document.getElementById("cityOslo").addEventListener("click", () => {
  alert("Oslo: August 1st, 2025 - Opening night at Oslo Arena!");
});

// Berlin spotlight
document.getElementById("cityBerlin").addEventListener("click", () => {
  alert("Berlin: August 5th, 2025 - Rocking the Berlin Stadium!");
});

// London spotlight
document.getElementById("cityLondon").addEventListener("click", () => {
  alert("London: August 10th, 2025 - Final show at Wembley!");
});

// 4️⃣ On the Road Again
// This sets up the next tour stop feature in the HTML
document.getElementById("nextTourStop").innerHTML = `
    <h3>On the Road Again</h3>
    <div id="nextStop"></div>
  `;

// This function displays the next tour stop based on today's date
function displayNextTourStop() {
  // Simple logic to show next stop based on today's date
  const stops = [
    { city: "Oslo", date: new Date("2025-08-01") },
    { city: "Berlin", date: new Date("2025-08-05") },
    { city: "London", date: new Date("2025-08-10") },
  ];
  const now = new Date();
  let next = "Tour complete!";
  for (const stop of stops) {
    if (now < stop.date) {
      next = `Next stop: ${stop.city} on ${stop.date.toDateString()}`;
      break;
    }
  }
  document.getElementById("nextStop").textContent = next;
}
displayNextTourStop();

// 5️⃣ Entry Checkpoint
// This sets up the email checkpoint feature in the HTML
document.getElementById("emailCheck").innerHTML = `
    <h3>Entry Checkpoint</h3>
    <input type="email" id="emailInput" placeholder="Enter email">
    <button id="checkEmail">Check</button>
    <div id="emailResult"></div>
  `;

// When the button is clicked, check if the email looks valid
document.getElementById("checkEmail").addEventListener("click", () => {
  // Simple email validation
  const email = document.getElementById("emailInput").value;
  const result = document.getElementById("emailResult");
  if (email.includes("@") && email.includes(".")) {
    result.textContent = "✅ Email looks good!";
  } else {
    result.textContent = "❌ Please enter a valid email address.";
  }
});

// 6️⃣ Band Bio Toggle
// This sets up the band bio toggle feature in the HTML
document.getElementById("bioToggle").innerHTML = `
    <h3>Band Bio Toggle</h3>
    <button id="toggleBio">Show/Hide Bio</button>
    <p id="bio" style="display:none;">Skullcapz is a heavy metal band from Norway, known for their dark, intense sound and high-energy shows.</p>
  `;

// Toggle the band bio visibility when the button is clicked
document.getElementById("toggleBio").addEventListener("click", () => {
  const bio = document.getElementById("bio");
  bio.style.display = bio.style.display === "none" ? "block" : "none";
});

// ----------------------------
// 🧠 OpenAI API Example (Beginner-friendly)
// ----------------------------

// This function sends a prompt to OpenAI and shows the response
async function askOpenAI() {
  // Get the user's question from the input box
  const prompt = document.getElementById("openaiInput").value;
  const resultDiv = document.getElementById("openaiResult");

  // Show loading message
  resultDiv.textContent = "Thinking...";

  // NOTE: You need to add your OpenAI API key below for this to work
  const apiKey = "YOUR_OPENAI_API_KEY"; // <-- Replace with your key

  // Prepare the request data for OpenAI
  const data = {
    model: "gpt-4o",
    messages: [{ role: "user", content: prompt }],
    max_tokens: 100,
  };

  try {
    // Make the POST request to OpenAI API using fetch and async/await
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(data),
    });

    // Parse the JSON response
    const json = await response.json();

    // Show the answer from OpenAI
    resultDiv.textContent =
      json.choices && json.choices[0]
        ? json.choices[0].message.content
        : "No response from OpenAI.";
  } catch (error) {
    // Show error message if something goes wrong
    resultDiv.textContent = "Error: " + error.message;
  }
}

// When the button is clicked, call askOpenAI()
document.getElementById("askOpenAI").addEventListener("click", askOpenAI);
