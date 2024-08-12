import { useState } from 'react';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Replace with your Zoho Campaigns URL
    const url = 'https://your-zoho-campaigns-url';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({ EMAIL: email }),
      });

      if (response.ok) {
      
        alert('Thank you for subscribing!');
        setEmail('');
      } else {
      
        alert('There was an issue with your subscription.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an issue with your subscription.');
    }
  };

  return (
    <div className="relative flex">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="w-[100%] bg-white py-2 px-4 rounded-2xl"
        required
      />
      <button
        type="submit"
        onClick={handleSubmit}
        className="bg-red-900 p-4 absolute right-0 top-0 rounded-2xl"
      >
        Subscribe
      </button>
    </div>
  );
};

export default NewsletterForm;
