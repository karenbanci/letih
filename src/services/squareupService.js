// Configuração do Square API
const BASE_URL = "https://connect.squareup.com/v2";
const SQUARE_ACCESS_TOKEN = process.env.REACT_APP_SQUARE_ACCESS_TOKEN;

console.log("Square Access Token:", SQUARE_ACCESS_TOKEN);

// Função para adicionar um agendamento (Booking) no Square
export const addBookingToSquare = async (bookingData) => {
  console.log("Data being sent to Square:", bookingData);

  try {
    const response = await fetch(`${BASE_URL}/bookings`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${SQUARE_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });

    if (!response.ok) {
      const errorDetails = await response.json();
      throw new Error(
        `Error adding booking to Square: ${response.statusText} - ${errorDetails.message}`
      );
    }

    const createdBooking = await response.json();
    console.log("Booking created successfully:", createdBooking);
    return createdBooking;
  } catch (error) {
    console.error("Error adding booking to Square:", error);
    throw error;
  }
};

// Função para buscar horários disponíveis (Available Slots)
export const fetchAvailableSlotsFromSquare = async (locationId) => {
  if (!locationId) {
    throw new Error("Location ID is required to fetch available slots.");
  }

  console.log("Fetching available slots from Square...");

  try {
    const response = await fetch(`${BASE_URL}/bookings/availability/search`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${SQUARE_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: {
          filter: {
            location_id: locationId,
            start_at_range: {
              start_at: new Date().toISOString(),
              end_at: new Date(
                new Date().setDate(new Date().getDate() + 30)
              ).toISOString(),
            },
          },
        },
      }),
    });

    if (!response.ok) {
      const errorDetails = await response.json();
      throw new Error(
        `Error fetching available slots: ${response.statusText} - ${errorDetails.message}`
      );
    }

    const availableSlots = await response.json();
    console.log("Available slots:", availableSlots);
    return availableSlots;
  } catch (error) {
    console.error("Error fetching available slots from Square:", error);
    throw error;
  }
};

// Função para salvar um agendamento
export const saveBookingToSquare = async (bookingData) => {
  console.log("Saving booking data to Square:", bookingData);

  try {
    const createdBooking = await addBookingToSquare(bookingData);
    console.log("Booking saved successfully:", createdBooking);
    return createdBooking;
  } catch (error) {
    console.error("Error saving booking to Square:", error);
    throw error;
  }
};
