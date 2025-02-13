export function generateRandomData() {
    const randomName = Math.random().toString(36).substring(2, 10);
    const randomPostalCode = Math.random().toString(36).substring(2, 6).toUpperCase();
    return { randomName, randomPostalCode };
  }
  