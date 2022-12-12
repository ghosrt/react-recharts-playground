import { Faker as faker } from '@faker-js/faker';

const fakeData = () => {
  const labels = [
    '2021.12',
    '2022.1',
    '2022.2',
    '2022.3',
    '2022.4',
    '2022.5',
    '2022.6',
    '2022.7',
    '2022.8',
    '2022.9',
    '2022.10',
    '2022.11',
  ];

  const dataSets = [
    labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  ];

  return dataSets;
};

export default fakeData;
