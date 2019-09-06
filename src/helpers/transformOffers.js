function formatSegments({ segments = [] } = {}, classSelected) {
  console.log(segments);
  return segments
    .filter(({ class: classOffer }) => classOffer === classSelected)
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

export default function formatAirlines(airlines = [], classSelected) {
  return airlines.map(({
    offers,
    carrier_logo: logo,
    carrier_code: carrierCode,
    carrier_name: carrierName,
  }) => ({
    logo,
    carrierCode,
    title: `${carrierName} (${carrierCode})`,
    offers: formatSegments(offers[0], classSelected),
  }));
}
