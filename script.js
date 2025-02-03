let feedCount = 0;
const maxFeed = Math.floor(Math.random() * 6) + 5; // Random number between 5 and 10

document.getElementById("feed-btn").addEventListener("click", function () {
  feedCount++;
  const bear = document.getElementById("bear");
  const bearText = document.getElementById("bear-text");

  bear.src = "dudu.gif"; // Show eating bear
  bear.classList.add("eating");

  setTimeout(() => {
    bear.classList.remove("eating");
    bear.src = "bear-normal.gif"; // Back to normal bear
  }, 500);

  if (feedCount < maxFeed) {
    const messages = [
      "Yum! More please!💕",
      "Tasty! Keep going!😋",
      "Mmm...yummy🍯",
      "Getting full...😍",
      "Almost there!🐻",
    ];
    bearText.innerText = messages[Math.min(feedCount - 1, messages.length - 1)];
  } else {
    bearText.innerText = "Uh oh...I need to tell you something!😁";
    document.getElementById("proposal").classList.remove("hidden");
    document.getElementById("feed-btn").style.display = "none";
  }
});

document.getElementById("yes-btn").addEventListener("click", function () {
  const bear = document.getElementById("bear");
  bear.src = "dudu-dance.gif"; // Show happy bear
  bear.classList.add("happy");
  document.getElementById("proposal").innerHTML =
    "<h1>Yess!! Puru said YES!🥰</h1>";
});

document.getElementById("no-btn").addEventListener("click", function () {
  const bear = document.getElementById("bear");
  bear.src = "bear-sad.gif"; // Show sad bear
  bear.classList.add("sad");

  setTimeout(() => {
    alert("No isn't an option! 😜 Try again!");
    bear.classList.remove("sad");
    bear.src = "bear-normal.gif"; // Back to normal
  }, 2000);
});
