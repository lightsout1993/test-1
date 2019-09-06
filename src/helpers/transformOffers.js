function formatSegments({ segments = [] } = {}) {
  console.log(segments);
  return segments
    .map(
      ({
        price,
        duration_minutes: duration,
        arrival_airport: arrivalAirport,
        arrival_timestamp: arrivalTimestamp,
        departure_airport: departureAirport,
        departure_timestamp: departureTimestamp,
      }) => ({
        price,
        duration,
        arrivalAirport,
        departureAirport,
        arrivalTimestamp,
        departureTimestamp,
      }),
    );
}

export default function formatAirlines(airlines = []) {
  return airlines.map(({
    offers,
    carrier_logo: logo,
    carrier_code: carrierCode,
    carrier_name: carrierName,
  }) => ({
    logo,
    carrierCode,
    title: `${carrierName} (${carrierCode})`,
    offers: formatSegments(offers[0]),
  }));
}
