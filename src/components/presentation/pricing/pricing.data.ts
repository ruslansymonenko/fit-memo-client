export enum EnumPaymentPeridod {
  PER_MONTH = 'per month',
  PER_YEAR = 'per year',
}

export interface ISubscriptionFeatures {
  feature: string;
}

export interface IPricingData {
  type: string;
  price: number;
  currency: string;
  paymentPeriod: EnumPaymentPeridod;
  description: string;
  features: ISubscriptionFeatures[];
}

export const pricingData: IPricingData[] = [
  {
    type: 'Basic',
    price: 0,
    currency: '$',
    paymentPeriod: EnumPaymentPeridod.PER_MONTH,
    description: 'Suitable if you want to organize your training in a basic way',
    features: [{ feature: 'Full access' }],
  },
  {
    type: 'Personal',
    price: 0,
    currency: '$',
    paymentPeriod: EnumPaymentPeridod.PER_MONTH,
    description: 'If you want to get more extensive functionality',
    features: [{ feature: 'Full access' }],
  },
  {
    type: 'Pro',
    price: 0,
    currency: '$',
    paymentPeriod: EnumPaymentPeridod.PER_MONTH,
    description: 'If you want to use the maximum capabilities of the application.',
    features: [{ feature: 'Full access' }],
  },
];
