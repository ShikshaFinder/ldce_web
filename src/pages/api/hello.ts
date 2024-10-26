// /pages/api/events.js
export default async function handler() {
  try {
    const response = await fetch("https://stag-api.ldce.ac.in/api/events", {
      headers: {
        Authorization: "Bearer PMAT-01JA56ABRBF4HP439YQRKVCF2C",
      },
    });
    const data = await response.json();
    console.log(data);  
    // res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching events:", error);
    // res.status(500).json({ error: "Failed to fetch events" });
  }
}
