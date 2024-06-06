import countries from 'world-countries';

export const formattedCountries = countries.map((item) => ({
  code: item.cca2,
  name: item.name.common,
  flag: item.flag,
  location: item.latlng,
  region: item.region,
}));

export const findCountryByCode = (code: string) =>
  formattedCountries.find((item) => item.code === code);


// cca2 likely represents the ISO 3166-1 alpha-2 country code.
// name.common likely refers to the common name of the country.
// flag probably represents the flag of the country.
// latlng could be the latitude and longitude coordinates of the country.
// region may indicate the region to which the country belongs.