export default function Home() {
  return (
    <div className="text-gray-900 dark:text-gray-100">
      {/* Hero */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-orange-50 to-transparent dark:from-orange-950/20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
              Buffalo Blaze Wings
              <span className="block text-orange-600">Heat meets flavor.</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Crispy, juicy, and tossed to perfection in our signature sauces. Dine-in, takeout, and catering available daily.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="tel:+15551234567" className="inline-flex items-center justify-center rounded-full bg-orange-600 px-6 py-3 font-semibold text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500">
                Call to Order
              </a>
              <a href="#menu" className="inline-flex items-center justify-center rounded-full border border-orange-600 px-6 py-3 font-semibold text-orange-600 hover:bg-orange-50 dark:hover:bg-orange-950/30">
                View Menu
              </a>
            </div>
            <div className="mt-4 text-sm text-gray-600 dark:text-gray-300">
              ⭐️⭐️⭐️⭐️⭐️ Rated local favorite for flavor and crunch
            </div>
          </div>
        </div>
      </section>

      {/* Specials */}
      <section className="py-10">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold">Today’s Firestarters</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border p-5 hover:shadow-sm">
              <div className="text-2xl">🍗 Classic Buffalo</div>
              <p className="mt-2 text-gray-600 dark:text-gray-300">Our signature tangy heat. Choice of mild, medium, or hot.</p>
              <div className="mt-3 font-semibold">$12 · 8 pc</div>
            </div>
            <div className="rounded-xl border p-5 hover:shadow-sm">
              <div className="text-2xl">🍯 Honey Garlic</div>
              <p className="mt-2 text-gray-600 dark:text-gray-300">Sweet, sticky, and garlicky goodness.</p>
              <div className="mt-3 font-semibold">$12 · 8 pc</div>
            </div>
            <div className="rounded-xl border p-5 hover:shadow-sm">
              <div className="text-2xl">🔥 Atomic 911</div>
              <p className="mt-2 text-gray-600 dark:text-gray-300">For heat seekers only. We warned you.</p>
              <div className="mt-3 font-semibold">$13 · 8 pc</div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-12 scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-extrabold">Menu</h2>
          <div className="mt-6 grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-xl font-bold">Wings</h3>
              <ul className="mt-3 space-y-2 text-gray-700 dark:text-gray-200">
                <li className="flex justify-between"><span>6 pc</span><span className="font-semibold">$9</span></li>
                <li className="flex justify-between"><span>12 pc</span><span className="font-semibold">$16</span></li>
                <li className="flex justify-between"><span>24 pc</span><span className="font-semibold">$30</span></li>
              </ul>
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">Includes ranch or blue cheese and celery.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Sauces</h3>
              <p className="mt-3 text-gray-700 dark:text-gray-200">
                Mild Buffalo, Medium Buffalo, Hot Buffalo, Atomic 911, Garlic Parmesan, Lemon Pepper (dry rub), Honey Garlic, Sweet Chili, Teriyaki, BBQ
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Sides</h3>
              <ul className="mt-3 space-y-2 text-gray-700 dark:text-gray-200">
                <li className="flex justify-between"><span>Fries</span><span className="font-semibold">$4</span></li>
                <li className="flex justify-between"><span>Loaded Fries</span><span className="font-semibold">$7</span></li>
                <li className="flex justify-between"><span>Onion Rings</span><span className="font-semibold">$5</span></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold">Drinks</h3>
              <ul className="mt-3 space-y-2 text-gray-700 dark:text-gray-200">
                <li className="flex justify-between"><span>Soda</span><span className="font-semibold">$2</span></li>
                <li className="flex justify-between"><span>Fresh Lemonade</span><span className="font-semibold">$3</span></li>
                <li className="flex justify-between"><span>Beer (21+)</span><span className="font-semibold">Market</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-12 scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-extrabold">Our Story</h2>
          <p className="mt-4 max-w-3xl text-gray-700 dark:text-gray-200">
            We started Buffalo Blaze Wings with one mission: make wings that are crispy on the outside, juicy inside, and drenched in bold, memorable sauces. From game nights to family dinners, our wings bring people together.
          </p>
        </div>
      </section>

      {/* Hours */}
      <section id="hours" className="py-12 scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-extrabold">Hours</h2>
          <ul className="mt-4 grid gap-2 text-gray-700 dark:text-gray-200 max-w-md">
            <li className="flex justify-between"><span>Mon–Thu</span><span>11:00 AM – 9:00 PM</span></li>
            <li className="flex justify-between"><span>Fri–Sat</span><span>11:00 AM – 10:00 PM</span></li>
            <li className="flex justify-between"><span>Sun</span><span>12:00 PM – 8:00 PM</span></li>
          </ul>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="py-12 scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-extrabold">Find Us</h2>
          <p className="mt-4 text-gray-700 dark:text-gray-200">123 Spice Ave, Flavor Town, FT 00000</p>
          <a
            className="mt-3 inline-flex items-center rounded-full border px-4 py-2 text-sm font-semibold hover:bg-orange-50 dark:hover:bg-orange-950/30"
            href="https://maps.google.com/?q=123+Spice+Ave,+Flavor+Town"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open in Maps
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-12 scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-extrabold">Contact</h2>
          <div className="mt-4 grid gap-3 text-gray-700 dark:text-gray-200 max-w-md">
            <a className="hover:text-orange-600" href="tel:+15551234567">☎ (555) 123-4567</a>
            <a className="hover:text-orange-600" href="mailto:hello@buffaloblaze.com">✉ hello@buffaloblaze.com</a>
            <p>For catering inquiries, email us with your date, headcount, and preferred sauces.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
