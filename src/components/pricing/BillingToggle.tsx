interface BillingToggleProps {
  billingPeriod: 'month' | 'year';
  onBillingPeriodChange: (period: 'month' | 'year') => void;
}

export const BillingToggle = ({ billingPeriod, onBillingPeriodChange }: BillingToggleProps) => {
  return (
    <div className="flex items-center justify-center space-x-4 mb-8">
      <label className="flex items-center cursor-pointer">
        <input
          type="radio"
          name="billing"
          value="month"
          checked={billingPeriod === 'month'}
          onChange={(e) => onBillingPeriodChange(e.target.value as 'month' | 'year')}
          className="sr-only"
        />
        <span className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
          billingPeriod === 'month' 
            ? 'bg-primary text-white' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}>
          Monthly
        </span>
      </label>
      <label className="flex items-center cursor-pointer">
        <input
          type="radio"
          name="billing"
          value="year"
          checked={billingPeriod === 'year'}
          onChange={(e) => onBillingPeriodChange(e.target.value as 'month' | 'year')}
          className="sr-only"
        />
        <span className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
          billingPeriod === 'year' 
            ? 'bg-primary text-white' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}>
          Yearly <sup className="text-xs">save 20%</sup>
        </span>
      </label>
    </div>
  );
};