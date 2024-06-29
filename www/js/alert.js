document.addEventListener("DOMContentLoaded", () => {
  function showAlert(alertType, location) {
    const alertContent = {
      cyclone: {
        topic: "Cyclone Alert",
        priority: "High severity",
        location: location,
      },
      flood: {
        topic: "Flood Alert",
        priority: "High severity",
        location: location,
      },
      drought: {
        topic: "Severe Drought",
        priority: "High severity",
        location: location,
      },
    };

    if (alertContent[alertType]) {
      const { topic, priority, location } = alertContent[alertType];

      const alertCard = document.createElement("div");
      alertCard.classList.add("card");
      alertCard.setAttribute("data-alert-type", alertType); // Add a data attribute for identification
      alertCard.innerHTML = `
                <div class="top"><span class="topic">${topic}</span><span class="priority">${priority}</span></div>
                <div class="middle">Location: ${location}</div>
                <div class="bottom"><button class="precaution"><a href="prvt_msr.html">Precautions</a></button></div>
            `;

      document.querySelector(".notifications").appendChild(alertCard);
    } else {
      console.error("Unknown alert type:", alertType);
    }
  }

  // Specific Alert
  function removeAlert(alertType) {
    const alertCard = document.querySelector(
      `.card[data-alert-type="${alertType}"]`
    );
    if (alertCard) {
      alertCard.remove();
    }
  }

  // All clear
  function clearAlerts() {
    const notifications = document.querySelector(".notifications");
    while (notifications.firstChild) {
      notifications.removeChild(notifications.firstChild);
    }
  }

  function showNoAlertsMessage() {
    const noAlertsMessage = document.createElement("p");
    noAlertsMessage.classList.add("no-alerts-message");
    noAlertsMessage.textContent = "You are Safe";
    document.querySelector(".notifications").appendChild(noAlertsMessage);
  }

  // Function to update alerts based on data
  function updateAlerts(data) {
    clearAlerts(); // Clear all existing alerts

    let hasActiveAlerts = false;

    data.forEach((alert) => {
      if (alert.active) {
        showAlert(alert.type, alert.location);
        hasActiveAlerts = true;
      }
    });

    if (!hasActiveAlerts) {
      showNoAlertsMessage();
    }
  }

  const dataSet = [
    { type: "cyclone", location: "Mumbai, India", active: false },
    { type: "cyclone", location: "Chennai, India", active: true },
    { type: "flood", location: "Uttrakhand, India", active: true },
    { type: "drought", location: "Uttrakhand, India", active: true },
  ];

  // for updatation
  updateAlerts(dataSet);
});
