import { useEffect, useState } from 'react';

declare global {
  interface Window {
    Paddle: any;
  }
}

export const usePaddle = () => {
  const [paddleReady, setPaddleReady] = useState(false);

  useEffect(() => {
    if (window.Paddle) {
      try {
        window.Paddle.Initialize({
          token: 'live_7d279f61a3499fed520f7cd8c08',
          pwCustomer: {
            id: 'ctm_01gt25aq4b2zcfw12szwtjrbdt'
          }
        });
        setPaddleReady(true);
        console.log('Paddle v2 initialized successfully with live token and customer ID');
        if (typeof window !== 'undefined' && window.Paddle) {
          console.log('✅ Paddle is ready to process payments');
        }
      } catch (error) {
        console.error('Paddle initialization failed:', error);
        setPaddleReady(false);
      }
    }
  }, []);

  const handleCheckout = (paddleProductId: string | null) => {
    if (window.Paddle && paddleReady && paddleProductId) {
      try {
        window.Paddle.Checkout.open({
          items: [{ priceId: paddleProductId, quantity: 1 }],
          settings: {
            displayMode: 'overlay',
            theme: 'light',
            locale: 'en',
            variant: 'one-page'
          },
          successCallback: (data: any) => {
            console.log('Payment successful:', data);
          },
          errorCallback: (error: any) => {
            console.error('Payment error:', error);
          }
        });
      } catch (error) {
        console.error('Checkout failed:', error);
      }
    } else if (paddleProductId === null) {
      window.location.href = 'mailto:sales@groceryreminders.com?subject=Enterprise Inquiry';
    } else {
      console.log('Paddle not ready - showing fallback message');
      alert('Payment system is loading. Please try again in a moment.');
    }
  };

  return { paddleReady, handleCheckout };
};