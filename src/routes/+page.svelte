
<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';

  let services = [
    { name: 'Oil Change', description: 'Regular maintenance for your vehicle', price: '$39.99' },
    { name: 'Brake Service', description: 'Ensure your safety with our brake inspection and repair', price: '$89.99' },
    { name: 'Tire Rotation', description: 'Extend the life of your tires', price: '$29.99' },
    { name: 'Engine Diagnostics', description: 'Identify and fix engine issues', price: '$59.99' }
  ];

  let testimonials = [
    { name: 'John D.', text: 'Great service! My car runs like new.' },
    { name: 'Sarah M.', text: 'Friendly staff and fair prices. Highly recommended!' },
    { name: 'Mike R.', text: 'They fixed my brakes quickly and efficiently.' }
  ];

  let visible = false;

  onMount(() => {
    visible = true;
  });
</script>

<main in:fade="{{ duration: 1000 }}">
  <header>
    <h1>Welcome to AutoFix Pro</h1>
    <p>Your trusted partner for all your auto repair needs</p>
  </header>

  <section class="services">
    <h2>Our Services</h2>
    <div class="service-grid">
      {#each services as service}
        <div class="service-card">
          <h3>{service.name}</h3>
          <p>{service.description}</p>
          <span class="price">{service.price}</span>
        </div>
      {/each}
    </div>
  </section>

  <section class="about">
    <h2>About Us</h2>
    <p>At AutoFix Pro, we've been serving our community for over 20 years. Our team of certified mechanics is dedicated to providing top-notch service for all makes and models.</p>
  </section>

  <section class="testimonials">
    <h2>What Our Customers Say</h2>
    <div class="testimonial-grid">
      {#each testimonials as testimonial}
        <div class="testimonial-card">
          <p>"{testimonial.text}"</p>
          <span>- {testimonial.name}</span>
        </div>
      {/each}
    </div>
  </section>

  <section class="cta">
    <h2>Book Your Appointment Today</h2>
    <p>Experience the AutoFix Pro difference!</p>
    <button>Schedule Now</button>
  </section>
</main>

<style>
  main {
    font-family: Arial, sans-serif;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }

  header {
    text-align: center;
    margin-bottom: 2rem;
  }

  h1 {
    font-size: 2.5rem;
    color: #333;
  }

  h2 {
    font-size: 2rem;
    color: #444;
    margin-bottom: 1rem;
  }

  .service-grid, .testimonial-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
  }

  .service-card, .testimonial-card {
    background-color: #f5f5f5;
    padding: 1rem;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .price {
    font-weight: bold;
    color: #007bff;
  }

  .about, .cta {
    text-align: center;
    margin: 2rem 0;
  }

  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #0056b3;
  }
</style>
