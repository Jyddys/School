// Haetaan Rajapinta boredBotille
export const getActivity = () => {
  fetch("https://www.boredapi.com/api/activity")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById('activity').style.display = "none"
      document.body.classList.add("feature")
      document.getElementById('title').textContent = "HappyBot"
      
      document.getElementById('activity-result').textContent = data.activity
    })
  }

