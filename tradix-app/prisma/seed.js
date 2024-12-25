import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedStocks() {
  const stocks = [
    { symbol: 'AAPL', name: 'Apple' },
    { symbol: 'NVDA', name: 'Nvidia' },
    { symbol: 'MSFT', name: 'Microsoft' },
    { symbol: 'GOOGL', name: 'Alphabet' },
    { symbol: 'AMZN', name: 'Amazon' },
    { symbol: 'META', name: 'Meta' },
    { symbol: 'TSLA', name: 'Tesla' },
    { symbol: 'AVGO', name: 'Broadcom' },
    { symbol: 'TSM', name: 'Taiwan Semiconductor' },
    { symbol: 'BRK-A', name: 'Berkshire Hathaway' },
    { symbol: 'LLY', name: 'Eli Lilly' },
    { symbol: 'WMT', name: 'Walmart' },
    { symbol: 'JPM', name: 'JPMorgan Chase' },
    { symbol: 'V', name: 'Visa' },
    { symbol: 'MA', name: 'Mastercard' },
    { symbol: 'ORCL', name: 'Oracle' },
    { symbol: 'XOM', name: 'ExxonMobil' },
    { symbol: 'UNH', name: 'UnitedHealth' },
    { symbol: 'COST', name: 'Costco' },
    { symbol: 'NFLX', name: 'Netflix' },
    { symbol: 'PG', name: 'Procter & Gamble' },
    { symbol: 'HD', name: 'Home Depot' },
    { symbol: 'JNJ', name: 'Johnson & Johnson' },
    { symbol: 'BAC', name: 'Bank of America' },
    { symbol: 'CRM', name: 'Salesforce' },
    { symbol: 'ABBV', name: 'AbbVie' },
    { symbol: 'SAP', name: 'SAP' },
    { symbol: 'NVO', name: 'Novo Nordisk' },
    { symbol: 'ASML', name: 'ASML' },
    { symbol: 'KO', name: 'Coca-Cola' },
    { symbol: 'TMUS', name: 'T-Mobile' },
    { symbol: 'CVX', name: 'Chevron' },
    { symbol: 'MRK', name: 'Merck' },
    { symbol: 'ACN', name: 'Accenture' },
    { symbol: 'WFC', name: 'Wells Fargo' },
    { symbol: 'CSCO', name: 'Cisco' },
    { symbol: 'TM', name: 'Toyota' },
    { symbol: 'NOW', name: 'ServiceNow' },
    { symbol: 'AXP', name: 'American Express' },
    { symbol: 'BX', name: 'Blackstone' },
    { symbol: 'MCD', name: 'McDonalds' },
    { symbol: 'PEP', name: 'Pepsi' },
    { symbol: 'IBM', name: 'IBM' },
    { symbol: 'AZN', name: 'AstraZeneca' },
    { symbol: 'AMD', name: 'AMD' },
    { symbol: 'MS', name: 'Morgan Stanley' },
    { symbol: 'DIS', name: 'Disney' },
    { symbol: 'BABA', name: 'Nvidia' },
    { symbol: 'LIN', name: 'Linde' },
    { symbol: 'TMO', name: 'Thermo Fisher' },
  ];

  console.log('Seeding stocks...');
  for (const stock of stocks) {
    const existingStock = await prisma.stock.findUnique({
      where: { symbol: stock.symbol },
    });

    if (!existingStock) {
      await prisma.stock.create({
        data: stock,
      });
    }
  }
  console.log('Seeding completed.');
}

seedStocks()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
