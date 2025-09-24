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
// 🎤 Fan Input: Add Band/Song
// ----------------------------

// Holds all songs, including fan submissions
const allSongs = [
  "No Body European Tour Intro",
  "A Marrow Escape",
  "The Final Pulse",
  "Shadow Over the Stage",
  "Encore: Lights Out",
];

// Add a new song from fan input
document.getElementById("addFanSong").addEventListener("click", () => {
  const bandInput = document.getElementById("fanBandInput").value.trim();
  const songInput = document.getElementById("fanSongInput").value.trim();
  const resultDiv = document.getElementById("fanInputResult");

  if (bandInput && songInput) {
    allSongs.push(`${bandInput} - ${songInput}`);
    resultDiv.textContent = `Added: ${bandInput} - ${songInput}`;
    document.getElementById("fanBandInput").value = "";
    document.getElementById("fanSongInput").value = "";
  } else {
    resultDiv.textContent = "Please enter both a band name and a song title.";
  }
});

// ----------------------------
// 🎵 Setlist Generator
// ----------------------------

// Shuffle and display the setlist
function generateSetlist() {
  const shuffled = [...allSongs];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  let setlistHTML = "";
  for (const song of shuffled) {
    setlistHTML += `<li>${song}</li>`;
  }
  document.getElementById("setlist").innerHTML = setlistHTML;

  document.getElementById("timer-section").classList.remove("hidden");

  document.querySelectorAll("#setlist li").forEach(li => li.classList.add("fade-in"));
}

document.getElementById("generateSetlist").addEventListener("click", generateSetlist);

// ----------------------------
// ⏳ Countdown Timer
// ----------------------------

const tourStart = new Date("2025-08-01T20:00:00");
const countdown = document.getElementById("countdown");

function updateCountdown() {
  const now = new Date();
  const diff = tourStart - now;

  if (diff <= 0) {
    countdown.textContent = "Tour has started!";
    clearInterval(timer);
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdown.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  countdown.classList.add("pulse");
  setTimeout(() => {
    countdown.classList.remove("pulse");
  }, 500);
}

const timer = setInterval(updateCountdown, 1000);

// ----------------------------
// 🛠️ Team Features
// ----------------------------

// 1️⃣ VIP Ticket Winner Generator
document.getElementById("vipWinner").innerHTML = `
  <h3>VIP Ticket Winner</h3>
  <button id="pickWinner">Pick Winner</button>
  <div id="winnerOutput"></div>
`;

document.getElementById("pickWinner").addEventListener("click", () => {
  const vipNames = ["Alex", "Jamie", "Morgan", "Taylor", "Jordan"];
  const winner = vipNames[Math.floor(Math.random() * vipNames.length)];
  document.getElementById("winnerOutput").textContent = `🎉 Winner: ${winner}!`;
});

// 2️⃣ Fan Favorite Showdown
document.getElementById("fanFavorite").innerHTML = `
  <h3>Fan Favorite Showdown</h3>
  <button id="vote">Vote</button>
  <button id="resetVote">Reset</button>
  <div id="voteCount">Votes: 0</div>
`;

document.getElementById("vote").addEventListener("click", () => {
  let votes = Number(document.getElementById("voteCount").textContent.replace(/[^0-9]/g, ""));
  votes++;
  document.getElementById("voteCount").textContent = `Votes: ${votes}`;
  document.getElementById("vote").disabled = true;
  document.getElementById("vote").textContent = "Voted!";
});

document.getElementById("resetVote").addEventListener("click", () => {
  document.getElementById("vote").disabled = false;
  document.getElementById("vote").textContent = "Vote";
});

// 3️⃣ Tour Date Spotlight
document.getElementById("tourHighlight").innerHTML = `
  <h3>Tour Date Spotlight</h3>
  <ul>
    <li id="cityOslo">Oslo</li>
    <li id="cityBerlin">Berlin</li>
    <li id="cityLondon">London</li>
  </ul>
`;

document.getElementById("cityOslo").addEventListener("click", () => {
  alert("Oslo: August 1st, 2025 - Opening night at Oslo Arena!");
});
document.getElementById("cityBerlin").addEventListener("click", () => {
  alert("Berlin: August 5th, 2025 - Rocking the Berlin Stadium!");
});
document.getElementById("cityLondon").addEventListener("click", () => {
  alert("London: August 10th, 2025 - Final show at Wembley!");
});

// 4️⃣ On the Road Again
document.getElementById("nextTourStop").innerHTML = `
  <h3>On the Road Again</h3>
  <div id="nextStop"></div>
`;

function displayNextTourStop() {
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
document.getElementById("emailCheck").innerHTML = `
  <h3>Entry Checkpoint</h3>
  <input type="email" id="emailInput" placeholder="Enter email">
  <button id="checkEmail">Check</button>
  <div id="emailResult"></div>
`;

document.getElementById("checkEmail").addEventListener("click", () => {
  const email = document.getElementById("emailInput").value;
  const result = document.getElementById("emailResult");
  if (email.includes("@") && email.includes(".")) {
    result.textContent = "✅ Email looks good!";
  } else {
    result.textContent = "❌ Please enter a valid email address.";
  }
});

// 6️⃣ Band Bio Toggle
document.getElementById("bioToggle").innerHTML = `
  <h3>Band Bio Toggle</h3>
  <button id="toggleBio">Show/Hide Bio</button>
  <p id="bio" style="display:none;">Skullcapz is a heavy metal band from Norway, known for their dark, intense sound and high-energy shows.</p>
`;

document.getElementById("toggleBio").addEventListener("click", () => {
  const bio = document.getElementById("bio");
  bio.style.display = bio.style.display === "none" ? "block" : "none";
});

// ----------------------------
// 🎸 Band Lore: Meet the Band
// ----------------------------

// Array of band member bios using Skullcapz lore
const bandBios = [
  "🧑‍🎤 Astrid (Lead Vocals): Astrid commands the stage with raw power and emotion, leading Skullcapz's gritty monochrome performances.",
  "🎸 Rune (Guitar): Rune's riffs are legendary in Norway's heavy metal scene, blending alt rock with dark, smoky vibes.",
  "🥁 Lars (Drums): Lars drives the energy with thunderous beats and relentless stamina, never missing a show.",
  "🎹 Ingrid (Synths): Ingrid adds haunting synth layers, giving Skullcapz their signature atmospheric sound.",
  "🎸 Bjorn (Bass): Bjorn is the fan favorite, known for wild solos and connecting with the band's loyal fanbase."
];

// Add a button and output area for random band member bio
document.getElementById("team-features").insertAdjacentHTML(
  "beforeend",
  `
  <div id="bandLoreFeature">
    <h3>🎤 Meet the Band</h3>
    <button id="showBandBio">Show Random Band Member</button>
    <div id="bandBioOutput"></div>
  </div>
  `
);

// When the button is clicked, show a random band member bio
document.getElementById("showBandBio").addEventListener("click", () => {
  // Pick a random bio from the bandBios array
  const randomBio = bandBios[Math.floor(Math.random() * bandBios.length)];
  document.getElementById("bandBioOutput").textContent = randomBio;
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

document.getElementById("askOpenAI").addEventListener("click", askOpenAI);
  // Shuffle the allSongs array using Fisher-Yates
  const shuffledSongs = [...allSongs];
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


// When the button is clicked, generate the setlist
document
  .getElementById("generateSetlist")
  .addEventListener("click", generateSetlist);

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
